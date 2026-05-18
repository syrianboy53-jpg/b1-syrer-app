interface HeroProps {
  translations: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    cta: string
    ctaSecondary: string
    mockupAlt: string
  }
}

export default function Hero({ translations }: HeroProps) {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary-light to-white">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              {translations.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight mb-6">
              {translations.title}
              <br />
              <span className="gradient-text">{translations.titleHighlight}</span>
            </h1>
            <p className="text-lg text-text-gray max-w-lg mb-8 leading-relaxed">
              {translations.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pilot" className="btn-primary text-center">
                {translations.cta}
              </a>
              <a href="#solution" className="btn-secondary text-center">
                {translations.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="animate-fade-in animate-delay-300 flex justify-center">
            <div className="relative w-72 h-[500px] bg-primary-dark rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📄</span>
                  </div>
                  <h3 className="font-bold text-primary-dark text-lg mb-2">BriefAI</h3>
                  <p className="text-text-gray text-sm">
                    {translations.mockupAlt}
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-3 bg-gray-100 rounded-full w-4/5"></div>
                    <div className="h-3 bg-gray-100 rounded-full w-3/5"></div>
                    <div className="mt-4 h-10 bg-primary/10 rounded-lg w-full flex items-center justify-center">
                      <span className="text-primary text-xs font-medium">📷 Scan</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-5 bg-primary-dark rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
