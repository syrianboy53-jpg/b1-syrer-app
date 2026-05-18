import AdminLayout from '@/components/admin/AdminLayout'
import Stats from '@/components/admin/Stats'
import { getMessages, getPilotRegistrations } from '@/lib/storage'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const messages = await getMessages()
  const pilotRegistrations = await getPilotRegistrations()

  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

  const stats = {
    totalMessages: messages.length,
    unreadMessages: messages.filter(m => !m.replied).length,
    totalPilot: pilotRegistrations.length,
    recentPilot: pilotRegistrations.filter(
      r => new Date(r.createdAt) > sevenDaysAgo
    ).length,
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-primary-dark">Dashboard</h1>
          <p className="text-text-gray mt-1">Übersicht über alle Aktivitäten</p>
        </div>

        <Stats stats={stats} />

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-primary-dark mb-3">Letzte Nachrichten</h3>
            {messages.slice(0, 5).length === 0 ? (
              <p className="text-text-gray text-sm">Keine Nachrichten</p>
            ) : (
              <div className="space-y-3">
                {messages.slice(0, 5).map((msg) => (
                  <div key={msg.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-text-dark">{msg.name}</p>
                      <p className="text-xs text-text-gray truncate max-w-[200px]">{msg.message}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      msg.replied ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {msg.replied ? '✓' : 'Neu'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-primary-dark mb-3">Letzte Pilot-Anmeldungen</h3>
            {pilotRegistrations.slice(0, 5).length === 0 ? (
              <p className="text-text-gray text-sm">Keine Anmeldungen</p>
            ) : (
              <div className="space-y-3">
                {pilotRegistrations.slice(0, 5).map((reg) => (
                  <div key={reg.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-text-dark">{reg.name}</p>
                      <p className="text-xs text-text-gray">{reg.email}</p>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs">
                      {reg.language}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
