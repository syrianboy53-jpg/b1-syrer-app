interface SolutionProps {
  translations: {
    title: string
    subtitle: string
    steps: Array<{
      number: string
      title: string
      description: string
    }>
  }
}

export default function Solution({ translations }: SolutionProps) {
  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            {translations.title}
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {translations.steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                {step.title}
              </h3>
              <p className="text-text-gray max-w-xs mx-auto">
                {step.description}
              </p>
              {index < translations.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-1/3 h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
