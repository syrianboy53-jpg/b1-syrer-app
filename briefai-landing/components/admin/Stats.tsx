interface StatsProps {
  stats: {
    totalMessages: number
    unreadMessages: number
    totalPilot: number
    recentPilot: number
  }
}

export default function Stats({ stats }: StatsProps) {
  const cards = [
    {
      label: 'Nachrichten gesamt',
      value: stats.totalMessages,
      icon: '💬',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Unbeantwortet',
      value: stats.unreadMessages,
      icon: '📩',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      label: 'Pilot-Anmeldungen',
      value: stats.totalPilot,
      icon: '🚀',
      color: 'bg-green-50 text-green-600',
    },
    {
      label: 'Neue (7 Tage)',
      value: stats.recentPilot,
      icon: '📈',
      color: 'bg-purple-50 text-purple-600',
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${card.color}`}>
              {card.icon}
            </span>
          </div>
          <p className="text-2xl font-bold text-primary-dark">{card.value}</p>
          <p className="text-sm text-text-gray mt-1">{card.label}</p>
        </div>
      ))}
    </div>
  )
}
