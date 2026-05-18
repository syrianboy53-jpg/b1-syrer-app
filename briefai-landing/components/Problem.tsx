"use client";

import { useTranslation } from "react-i18next";

const icons = [
  <svg key="doc" className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg key="cal" className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01"/></svg>,
  <svg key="help" className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
];

export default function Problem() {
  const { t } = useTranslation();

  const cards = t("problem.cards", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="problem" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-2 text-2xl font-bold text-dark-900 sm:text-3xl lg:text-4xl">
            {t("problem.title")}
          </h2>
          <h2 className="mb-6 text-2xl font-bold text-dark-900 sm:text-3xl lg:text-4xl">
            {t("problem.titleLine2")}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-dark-500 sm:text-lg">
            {t("problem.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-dark-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
                {icons[index]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-dark-900">
                {card.title}
              </h3>
              <p className="text-sm text-dark-500">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
