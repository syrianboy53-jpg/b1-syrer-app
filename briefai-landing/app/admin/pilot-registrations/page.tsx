"use client";

import { useEffect, useState } from "react";
import PilotList from "@/components/admin/PilotList";

interface PilotRegistration {
  id: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  createdAt: string;
  status: "pending" | "contacted" | "accepted" | "rejected";
}

export default function PilotRegistrationsPage() {
  const [registrations, setRegistrations] = useState<PilotRegistration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const res = await fetch("/api/admin/pilot-registrations");
        const data = await res.json();
        setRegistrations(data);
      } catch {
        /* registrations remain empty */
      } finally {
        setLoading(false);
      }
    }

    fetchRegistrations();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark-900">
          Pilot-Anmeldungen
        </h1>
        <p className="text-dark-500">
          Alle Anmeldungen für das Pilot-Programm
        </p>
      </div>

      {loading ? (
        <div className="py-12 text-center text-dark-400">Laden...</div>
      ) : (
        <div className="rounded-xl border border-dark-100 bg-white shadow-sm">
          <PilotList registrations={registrations} />
        </div>
      )}
    </div>
  );
}
