"use client";

import { useState } from "react";

interface Reply {
  text: string;
  createdAt: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
  replies: Reply[];
}

interface MessageListProps {
  messages: Message[];
  onReply: (messageId: string, reply: string) => Promise<void>;
}

export default function MessageList({ messages, onReply }: MessageListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);

  const handleReply = async (messageId: string) => {
    if (!replyText.trim()) return;
    setSending(true);
    await onReply(messageId, replyText);
    setReplyText("");
    setSending(false);
  };

  if (messages.length === 0) {
    return (
      <div className="py-12 text-center text-dark-400">
        Keine Nachrichten vorhanden.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`rounded-xl border p-5 transition-all ${
            msg.read
              ? "border-dark-100 bg-white"
              : "border-primary-200 bg-primary-50"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-dark-900">{msg.name}</h3>
                {!msg.read && (
                  <span className="rounded-full bg-primary-600 px-2 py-0.5 text-xs text-white">
                    Neu
                  </span>
                )}
              </div>
              <p className="text-sm text-dark-400">{msg.email}</p>
              <p className="mt-2 text-dark-700">{msg.message}</p>
              <p className="mt-2 text-xs text-dark-400">
                {new Date(msg.createdAt).toLocaleString("de-DE")}
              </p>
            </div>
            <button
              onClick={() =>
                setExpandedId(expandedId === msg.id ? null : msg.id)
              }
              className="rounded-lg px-3 py-1 text-sm text-primary-600 transition-colors hover:bg-primary-50"
            >
              {expandedId === msg.id ? "Schließen" : "Antworten"}
            </button>
          </div>

          {msg.replies.length > 0 && (
            <div className="mt-4 space-y-2 border-t border-dark-100 pt-4">
              <p className="text-xs font-medium text-dark-400">Antworten:</p>
              {msg.replies.map((reply, idx) => (
                <div key={idx} className="rounded-lg bg-dark-50 p-3">
                  <p className="text-sm text-dark-700">{reply.text}</p>
                  <p className="mt-1 text-xs text-dark-400">
                    {new Date(reply.createdAt).toLocaleString("de-DE")}
                  </p>
                </div>
              ))}
            </div>
          )}

          {expandedId === msg.id && (
            <div className="mt-4 border-t border-dark-100 pt-4">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Antwort schreiben..."
                rows={3}
                className="w-full rounded-lg border border-dark-200 px-4 py-2 text-sm text-dark-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
              />
              <button
                onClick={() => handleReply(msg.id)}
                disabled={sending || !replyText.trim()}
                className="btn-primary mt-2 !px-4 !py-2 !text-sm disabled:opacity-50"
              >
                {sending ? "Senden..." : "Antwort senden"}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
