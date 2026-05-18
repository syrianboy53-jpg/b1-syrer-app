interface ProblemProps {
  translations: {
    title: string
    subtitle: string
    cards: Array<{
      icon: string
      title: string
      description: string
    }>
  }
}

export default function Problem({ translations }: ProblemProps) {
  return (
    <section id="problem" className="section-padding bg-soft-gray">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            {translations.title}
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {translations.cards.map((card, index) => (
            <div
              key={index}
              className="card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-4xl mb-4 block">{card.icon}</span>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                {card.title}
              </h3>
              <p className="text-text-gray">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
