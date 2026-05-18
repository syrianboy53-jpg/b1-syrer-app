"use client";

interface PilotRegistration {
  id: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  createdAt: string;
  status: "pending" | "contacted" | "accepted" | "rejected";
}

interface PilotListProps {
  registrations: PilotRegistration[];
}

const statusConfig = {
  pending: { label: "Ausstehend", color: "bg-yellow-100 text-yellow-700" },
  contacted: { label: "Kontaktiert", color: "bg-blue-100 text-blue-700" },
  accepted: { label: "Akzeptiert", color: "bg-green-100 text-green-700" },
  rejected: { label: "Abgelehnt", color: "bg-red-100 text-red-700" },
};

export default function PilotList({ registrations }: PilotListProps) {
  if (registrations.length === 0) {
    return (
      <div className="py-12 text-center text-dark-400">
        Keine Pilot-Anmeldungen vorhanden.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-dark-100">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">
              E-Mail
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">
              Telefon
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">
              Grund
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">
              Datum
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dark-50">
          {registrations.map((reg) => {
            const status = statusConfig[reg.status];
            return (
              <tr key={reg.id} className="transition-colors hover:bg-dark-50">
                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-dark-900">
                  {reg.name}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-dark-600">
                  {reg.email}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-dark-600">
                  {reg.phone || "–"}
                </td>
                <td className="max-w-xs truncate px-4 py-4 text-sm text-dark-600">
                  {reg.reason || "–"}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${status.color}`}
                  >
                    {status.label}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-dark-400">
                  {new Date(reg.createdAt).toLocaleDateString("de-DE")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
