"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-dark-900 sm:text-3xl lg:text-4xl">
            {t("faq.title")}
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-dark-100 bg-white transition-all duration-300 hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-dark-900 ltr:pr-3 rtl:pl-3">
                  {item.question}
                </span>
                <svg
                  className={`h-4 w-4 flex-shrink-0 text-dark-400 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-dark-500 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
