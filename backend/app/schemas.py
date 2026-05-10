from pydantic import BaseModel, EmailStr
from datetime import datetime


# --- Auth ---
class UserRegister(BaseModel):
    email: str
    password: str
    first_name: str
    last_name: str = ""
    phone: str = ""
    language: str = "ar"


class UserLogin(BaseModel):
    email: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: "UserOut"


class UserOut(BaseModel):
    id: int
    email: str
    first_name: str
    last_name: str
    phone: str
    is_premium: bool
    subscription_expires: datetime | None
    language: str
    created_at: datetime

    model_config = {"from_attributes": True}


class UserUpdate(BaseModel):
    first_name: str | None = None
    last_name: str | None = None
    phone: str | None = None
    language: str | None = None
    push_token: str | None = None


# --- Subscription ---
class SubscribeRequest(BaseModel):
    months: int = 1


class SubscriptionStatus(BaseModel):
    is_premium: bool
    expires: datetime | None
    plan: str  # "free" or "premium"


# --- Consultation ---
class ConsultationCreate(BaseModel):
    topic: str
    description: str = ""
    consultation_type: str = "chat"


class ConsultationOut(BaseModel):
    id: int
    topic: str
    description: str
    status: str
    consultation_type: str
    duration_minutes: int
    price: float
    is_paid: bool
    started_at: datetime | None
    ended_at: datetime | None
    created_at: datetime

    model_config = {"from_attributes": True}


class ChatMessageCreate(BaseModel):
    content: str
    message_type: str = "text"


class ChatMessageOut(BaseModel):
    id: int
    sender: str
    content: str
    message_type: str
    created_at: datetime

    model_config = {"from_attributes": True}


# --- Notifications ---
class NotificationOut(BaseModel):
    id: int
    title_ar: str
    title_de: str
    body_ar: str
    body_de: str
    notification_type: str
    is_read: bool
    created_at: datetime

    model_config = {"from_attributes": True}


class NotificationCreate(BaseModel):
    title_ar: str
    title_de: str
    body_ar: str
    body_de: str
    notification_type: str = "general"


# --- App Version ---
class AppVersionOut(BaseModel):
    version: str
    version_code: int
    release_notes_ar: str
    release_notes_de: str
    is_mandatory: bool
    download_url: str

    model_config = {"from_attributes": True}


class AppVersionCheck(BaseModel):
    current_version_code: int
