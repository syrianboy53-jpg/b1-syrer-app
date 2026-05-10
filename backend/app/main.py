import datetime
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.database import Base, engine, get_db
from app.models import User, Consultation, ChatMessage, Notification, AppVersion
from app.schemas import (
    UserRegister, UserLogin, Token, UserOut, UserUpdate,
    SubscribeRequest, SubscriptionStatus,
    ConsultationCreate, ConsultationOut, ChatMessageCreate, ChatMessageOut,
    NotificationOut, NotificationCreate,
    AppVersionOut, AppVersionCheck,
)
from app.auth import hash_password, verify_password, create_access_token, get_current_user

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Family Lawyer API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ─── Health ───
@app.get("/")
def root():
    return {"status": "ok", "app": "Family Lawyer API", "version": "1.0.0"}


@app.get("/health")
def health():
    return {"status": "healthy"}


# ─── Auth ───
@app.post("/api/auth/register", response_model=Token)
def register(data: UserRegister, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        email=data.email,
        hashed_password=hash_password(data.password),
        first_name=data.first_name,
        last_name=data.last_name,
        phone=data.phone,
        language=data.language,
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    welcome = Notification(
        user_id=user.id,
        title_ar="مرحباً بك!",
        title_de="Willkommen!",
        body_ar="مرحباً بك في تطبيق مستشارك الأسري. نتمنى لك تجربة مفيدة.",
        body_de="Willkommen bei Familienberater. Wir wünschen Ihnen eine hilfreiche Erfahrung.",
        notification_type="general",
    )
    db.add(welcome)
    db.commit()

    token = create_access_token(user.id)
    return Token(access_token=token, user=UserOut.model_validate(user))


@app.post("/api/auth/login", response_model=Token)
def login(data: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    if not user or not verify_password(data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token(user.id)
    return Token(access_token=token, user=UserOut.model_validate(user))


# ─── User Profile ───
@app.get("/api/user/me", response_model=UserOut)
def get_profile(user: User = Depends(get_current_user)):
    return UserOut.model_validate(user)


@app.put("/api/user/me", response_model=UserOut)
def update_profile(data: UserUpdate, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    if data.first_name is not None:
        user.first_name = data.first_name
    if data.last_name is not None:
        user.last_name = data.last_name
    if data.phone is not None:
        user.phone = data.phone
    if data.language is not None:
        user.language = data.language
    if data.push_token is not None:
        user.push_token = data.push_token
    db.commit()
    db.refresh(user)
    return UserOut.model_validate(user)


# ─── Subscription ───
@app.get("/api/subscription", response_model=SubscriptionStatus)
def get_subscription(user: User = Depends(get_current_user)):
    now = datetime.datetime.utcnow()
    is_active = user.is_premium and user.subscription_expires and user.subscription_expires > now
    return SubscriptionStatus(
        is_premium=is_active,
        expires=user.subscription_expires if is_active else None,
        plan="premium" if is_active else "free",
    )


@app.post("/api/subscription/subscribe", response_model=SubscriptionStatus)
def subscribe(data: SubscribeRequest, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    now = datetime.datetime.utcnow()
    if user.is_premium and user.subscription_expires and user.subscription_expires > now:
        new_expires = user.subscription_expires + datetime.timedelta(days=30 * data.months)
    else:
        new_expires = now + datetime.timedelta(days=30 * data.months)

    user.is_premium = True
    user.subscription_expires = new_expires
    db.commit()
    db.refresh(user)

    notif = Notification(
        user_id=user.id,
        title_ar="تم تفعيل الاشتراك المميز!",
        title_de="Premium-Abonnement aktiviert!",
        body_ar=f"تم تفعيل اشتراكك المميز. ينتهي في {new_expires.strftime('%Y-%m-%d')}",
        body_de=f"Ihr Premium-Abonnement wurde aktiviert. Gültig bis {new_expires.strftime('%d.%m.%Y')}",
        notification_type="subscription",
    )
    db.add(notif)
    db.commit()

    return SubscriptionStatus(is_premium=True, expires=new_expires, plan="premium")


@app.post("/api/subscription/cancel", response_model=SubscriptionStatus)
def cancel_subscription(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    user.is_premium = False
    user.subscription_expires = None
    db.commit()
    db.refresh(user)
    return SubscriptionStatus(is_premium=False, expires=None, plan="free")


# ─── Consultations ───
@app.post("/api/consultations", response_model=ConsultationOut)
def create_consultation(data: ConsultationCreate, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    consultation = Consultation(
        user_id=user.id,
        topic=data.topic,
        description=data.description,
        consultation_type=data.consultation_type,
    )
    db.add(consultation)
    db.commit()
    db.refresh(consultation)
    return ConsultationOut.model_validate(consultation)


@app.get("/api/consultations", response_model=list[ConsultationOut])
def list_consultations(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    consultations = db.query(Consultation).filter(Consultation.user_id == user.id).order_by(Consultation.created_at.desc()).all()
    return [ConsultationOut.model_validate(c) for c in consultations]


@app.get("/api/consultations/{consultation_id}", response_model=ConsultationOut)
def get_consultation(consultation_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    c = db.query(Consultation).filter(Consultation.id == consultation_id, Consultation.user_id == user.id).first()
    if not c:
        raise HTTPException(status_code=404, detail="Consultation not found")
    return ConsultationOut.model_validate(c)


# ─── Chat Messages ───
@app.post("/api/consultations/{consultation_id}/messages", response_model=ChatMessageOut)
def send_message(consultation_id: int, data: ChatMessageCreate, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    c = db.query(Consultation).filter(Consultation.id == consultation_id, Consultation.user_id == user.id).first()
    if not c:
        raise HTTPException(status_code=404, detail="Consultation not found")

    msg = ChatMessage(
        consultation_id=consultation_id,
        sender="user",
        content=data.content,
        message_type=data.message_type,
    )
    db.add(msg)

    auto_reply = ChatMessage(
        consultation_id=consultation_id,
        sender="advisor",
        content="شكراً لرسالتك. سيتم الرد عليك قريباً من قبل مستشارنا القانوني. | Danke für Ihre Nachricht. Unser Rechtsberater wird sich in Kürze bei Ihnen melden.",
        message_type="text",
    )
    db.add(auto_reply)

    if c.status == "pending":
        c.status = "active"
        c.started_at = datetime.datetime.utcnow()

    db.commit()
    db.refresh(msg)
    return ChatMessageOut.model_validate(msg)


@app.get("/api/consultations/{consultation_id}/messages", response_model=list[ChatMessageOut])
def get_messages(consultation_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    c = db.query(Consultation).filter(Consultation.id == consultation_id, Consultation.user_id == user.id).first()
    if not c:
        raise HTTPException(status_code=404, detail="Consultation not found")
    messages = db.query(ChatMessage).filter(ChatMessage.consultation_id == consultation_id).order_by(ChatMessage.created_at).all()
    return [ChatMessageOut.model_validate(m) for m in messages]


# ─── Notifications ───
@app.get("/api/notifications", response_model=list[NotificationOut])
def list_notifications(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    notifs = db.query(Notification).filter(Notification.user_id == user.id).order_by(Notification.created_at.desc()).limit(50).all()
    return [NotificationOut.model_validate(n) for n in notifs]


@app.put("/api/notifications/{notification_id}/read")
def mark_read(notification_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    n = db.query(Notification).filter(Notification.id == notification_id, Notification.user_id == user.id).first()
    if not n:
        raise HTTPException(status_code=404, detail="Notification not found")
    n.is_read = True
    db.commit()
    return {"status": "ok"}


@app.get("/api/notifications/unread-count")
def unread_count(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    count = db.query(Notification).filter(Notification.user_id == user.id, Notification.is_read == False).count()
    return {"count": count}


# ─── App Version Check ───
@app.post("/api/app/check-update", response_model=AppVersionOut | None)
def check_update(data: AppVersionCheck, db: Session = Depends(get_db)):
    latest = db.query(AppVersion).order_by(AppVersion.version_code.desc()).first()
    if not latest or latest.version_code <= data.current_version_code:
        return None
    return AppVersionOut.model_validate(latest)


# ─── Admin: Send notification to all users ───
@app.post("/api/admin/notify-all")
def notify_all(data: NotificationCreate, db: Session = Depends(get_db)):
    users = db.query(User).all()
    for user in users:
        notif = Notification(
            user_id=user.id,
            title_ar=data.title_ar,
            title_de=data.title_de,
            body_ar=data.body_ar,
            body_de=data.body_de,
            notification_type=data.notification_type,
        )
        db.add(notif)
    db.commit()
    return {"status": "ok", "notified": len(users)}


# ─── Admin: Create app version ───
@app.post("/api/admin/app-version", response_model=AppVersionOut)
def create_app_version(
    version: str,
    version_code: int,
    release_notes_ar: str = "",
    release_notes_de: str = "",
    is_mandatory: bool = False,
    download_url: str = "",
    db: Session = Depends(get_db),
):
    av = AppVersion(
        version=version,
        version_code=version_code,
        release_notes_ar=release_notes_ar,
        release_notes_de=release_notes_de,
        is_mandatory=is_mandatory,
        download_url=download_url,
    )
    db.add(av)
    db.commit()
    db.refresh(av)
    return AppVersionOut.model_validate(av)
