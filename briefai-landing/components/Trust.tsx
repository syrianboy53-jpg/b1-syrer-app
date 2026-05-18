interface TrustProps {
  translations: {
    title: string
    subtitle: string
    points: string[]
    badge: string
  }
}

export default function Trust({ translations }: TrustProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            {translations.title}
          </h2>
          <p className="text-text-gray text-lg mb-8">
            {translations.subtitle}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8 text-start">
            {translations.points.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-soft-gray"
              >
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-text-dark font-medium text-sm">{point}</span>
              </div>
            ))}
          </div>

          <div className="inline-block px-6 py-3 bg-primary-light rounded-full">
            <span className="text-primary font-semibold">{translations.badge}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
