"use client";

import { useEffect, useState } from "react";

interface Stats {
  totalMessages: number;
  unreadMessages: number;
  totalRegistrations: number;
  pendingRegistrations: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalMessages: 0,
    unreadMessages: 0,
    totalRegistrations: 0,
    pendingRegistrations: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [messagesRes, registrationsRes] = await Promise.all([
          fetch("/api/admin/messages"),
          fetch("/api/admin/pilot-registrations"),
        ]);

        const messages = await messagesRes.json();
        const registrations = await registrationsRes.json();

        setStats({
          totalMessages: messages.length,
          unreadMessages: messages.filter(
            (m: { read: boolean }) => !m.read
          ).length,
          totalRegistrations: registrations.length,
          pendingRegistrations: registrations.filter(
            (r: { status: string }) => r.status === "pending"
          ).length,
        });
      } catch {
        /* stats remain at defaults */
      }
    }

    fetchStats();
  }, []);

  const cards = [
    {
      title: "Nachrichten",
      value: stats.totalMessages,
      subtitle: `${stats.unreadMessages} ungelesen`,
      color: "bg-blue-500",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Ungelesene Nachrichten",
      value: stats.unreadMessages,
      subtitle: "Aktion erforderlich",
      color: "bg-orange-500",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      title: "Pilot-Anmeldungen",
      value: stats.totalRegistrations,
      subtitle: `${stats.pendingRegistrations} ausstehend`,
      color: "bg-green-500",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Ausstehende Anmeldungen",
      value: stats.pendingRegistrations,
      subtitle: "Warten auf Bearbeitung",
      color: "bg-purple-500",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark-900">Dashboard</h1>
        <p className="text-dark-500">Willkommen im BriefAI Admin-Bereich</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl border border-dark-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-dark-400">{card.title}</p>
                <p className="mt-1 text-3xl font-bold text-dark-900">
                  {card.value}
                </p>
                <p className="mt-1 text-xs text-dark-400">{card.subtitle}</p>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
