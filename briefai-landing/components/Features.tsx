interface FeaturesProps {
  translations: {
    title: string
    subtitle: string
    items: Array<{
      icon: string
      title: string
      description: string
    }>
  }
}

export default function Features({ translations }: FeaturesProps) {
  return (
    <section id="features" className="section-padding bg-soft-gray">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            {translations.title}
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.items.map((item, index) => (
            <div
              key={index}
              className="card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-lg font-semibold text-primary-dark mb-2">
                {item.title}
              </h3>
              <p className="text-text-gray text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
