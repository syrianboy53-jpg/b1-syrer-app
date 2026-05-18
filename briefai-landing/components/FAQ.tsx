'use client'

import { useState } from 'react'

interface FAQProps {
  translations: {
    title: string
    items: Array<{
      question: string
      answer: string
    }>
  }
}

export default function FAQ({ translations }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 text-center">
            {translations.title}
          </h2>

          <div className="space-y-3">
            {translations.items.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-start hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary-dark pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-text-gray flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-text-gray leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
