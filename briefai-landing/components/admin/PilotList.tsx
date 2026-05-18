interface PilotRegistration {
  id: string
  name: string
  email: string
  language: string
  message?: string
  createdAt: string
}

interface PilotListProps {
  registrations: PilotRegistration[]
}

export default function PilotList({ registrations }: PilotListProps) {
  if (registrations.length === 0) {
    return (
      <div className="text-center py-12 text-text-gray">
        <span className="text-4xl block mb-3">🚀</span>
        <p>Keine Pilot-Anmeldungen vorhanden</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-start px-5 py-3 text-xs font-semibold text-text-gray uppercase tracking-wider">Name</th>
              <th className="text-start px-5 py-3 text-xs font-semibold text-text-gray uppercase tracking-wider">E-Mail</th>
              <th className="text-start px-5 py-3 text-xs font-semibold text-text-gray uppercase tracking-wider">Sprache</th>
              <th className="text-start px-5 py-3 text-xs font-semibold text-text-gray uppercase tracking-wider">Nachricht</th>
              <th className="text-start px-5 py-3 text-xs font-semibold text-text-gray uppercase tracking-wider">Datum</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {registrations.map((reg) => (
              <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 text-sm font-medium text-primary-dark">{reg.name}</td>
                <td className="px-5 py-4 text-sm text-text-gray">{reg.email}</td>
                <td className="px-5 py-4">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    {reg.language}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-text-gray max-w-xs truncate">
                  {reg.message || '-'}
                </td>
                <td className="px-5 py-4 text-sm text-text-gray">
                  {new Date(reg.createdAt).toLocaleDateString('de-DE')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
