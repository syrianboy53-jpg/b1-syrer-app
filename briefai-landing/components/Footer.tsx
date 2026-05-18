interface FooterProps {
  translations: {
    description: string
    links: {
      title: string
      privacy: string
      imprint: string
      terms: string
    }
    contact: {
      title: string
      email: string
      location: string
    }
    copyright: string
  }
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">BriefAI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {translations.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{translations.links.title}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {translations.links.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {translations.links.imprint}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {translations.links.terms}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{translations.contact.title}</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {translations.contact.email}
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {translations.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm text-center">
            {translations.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
