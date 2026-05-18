"use client";

import { useEffect, useState, useCallback } from "react";
import MessageList from "@/components/admin/MessageList";

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

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();
      setMessages(data);
    } catch {
      /* messages remain empty */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleReply = async (messageId: string, reply: string) => {
    try {
      const res = await fetch("/api/admin/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageId, reply }),
      });

      if (res.ok) {
        await fetchMessages();
      }
    } catch {
      /* reply failed silently */
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark-900">Nachrichten</h1>
        <p className="text-dark-500">
          Alle eingehenden Nachrichten und Anfragen
        </p>
      </div>

      {loading ? (
        <div className="py-12 text-center text-dark-400">Laden...</div>
      ) : (
        <MessageList messages={messages} onReply={handleReply} />
      )}
    </div>
  );
}
