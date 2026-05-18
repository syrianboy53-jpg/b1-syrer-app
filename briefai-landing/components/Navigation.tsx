'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavigationProps {
  locale: 'de' | 'ar'
  translations: {
    features: string
    howItWorks: string
    faq: string
    pilot: string
    contact: string
    switchLang: string
  }
}

export default function Navigation({ locale, translations }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const switchPath = locale === 'de' ? '/ar' : '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-primary-dark">BriefAI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-text-gray hover:text-primary transition-colors text-sm font-medium">
              {translations.features}
            </a>
            <a href="#solution" className="text-text-gray hover:text-primary transition-colors text-sm font-medium">
              {translations.howItWorks}
            </a>
            <a href="#faq" className="text-text-gray hover:text-primary transition-colors text-sm font-medium">
              {translations.faq}
            </a>
            <a href="#pilot" className="text-text-gray hover:text-primary transition-colors text-sm font-medium">
              {translations.pilot}
            </a>
            <Link
              href={switchPath}
              className="px-3 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-text-gray hover:border-primary hover:text-primary transition-all"
            >
              {translations.switchLang}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              <a href="#features" className="text-text-gray hover:text-primary transition-colors text-sm font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                {translations.features}
              </a>
              <a href="#solution" className="text-text-gray hover:text-primary transition-colors text-sm font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                {translations.howItWorks}
              </a>
              <a href="#faq" className="text-text-gray hover:text-primary transition-colors text-sm font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                {translations.faq}
              </a>
              <a href="#pilot" className="text-text-gray hover:text-primary transition-colors text-sm font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                {translations.pilot}
              </a>
              <Link
                href={switchPath}
                className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-text-gray hover:border-primary hover:text-primary transition-all w-fit"
              >
                {translations.switchLang}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
