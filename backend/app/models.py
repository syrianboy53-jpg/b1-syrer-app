import datetime
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float, Text, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, default="")
    phone = Column(String, default="")
    is_premium = Column(Boolean, default=False)
    subscription_expires = Column(DateTime, nullable=True)
    push_token = Column(String, nullable=True)
    language = Column(String, default="ar")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    consultations = relationship("Consultation", back_populates="user")
    notifications = relationship("Notification", back_populates="user")


class Consultation(Base):
    __tablename__ = "consultations"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    topic = Column(String, nullable=False)
    description = Column(Text, default="")
    status = Column(String, default="pending")  # pending, active, completed, cancelled
    consultation_type = Column(String, default="chat")  # chat, voice
    duration_minutes = Column(Integer, default=30)
    price = Column(Float, default=5.0)
    is_paid = Column(Boolean, default=False)
    started_at = Column(DateTime, nullable=True)
    ended_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="consultations")
    messages = relationship("ChatMessage", back_populates="consultation")


class ChatMessage(Base):
    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, index=True)
    consultation_id = Column(Integer, ForeignKey("consultations.id"), nullable=False)
    sender = Column(String, nullable=False)  # user, advisor
    content = Column(Text, nullable=False)
    message_type = Column(String, default="text")  # text, voice
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    consultation = relationship("Consultation", back_populates="messages")


class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    title_ar = Column(String, nullable=False)
    title_de = Column(String, nullable=False)
    body_ar = Column(Text, nullable=False)
    body_de = Column(Text, nullable=False)
    notification_type = Column(String, default="update")  # update, consultation, subscription, general
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="notifications")


class AppVersion(Base):
    __tablename__ = "app_versions"

    id = Column(Integer, primary_key=True, index=True)
    version = Column(String, nullable=False)
    version_code = Column(Integer, nullable=False)
    release_notes_ar = Column(Text, default="")
    release_notes_de = Column(Text, default="")
    is_mandatory = Column(Boolean, default=False)
    download_url = Column(String, default="")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
