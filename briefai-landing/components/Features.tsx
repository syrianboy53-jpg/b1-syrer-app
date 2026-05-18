"use client";

import { useTranslation } from "react-i18next";

const featureIcons = [
  { bg: "bg-blue-50", color: "text-primary-600", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg> },
  { bg: "bg-green-50", color: "text-green-600", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { bg: "bg-red-50", color: "text-red-500", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { bg: "bg-purple-50", color: "text-purple-600", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9,11 12,14 22,4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> },
  { bg: "bg-cyan-50", color: "text-cyan-600", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { bg: "bg-orange-50", color: "text-orange-500", icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><path d="M12 18v-6"/><path d="M9 15l3 3 3-3"/></svg> },
];

export default function Features() {
  const { t } = useTranslation();

  const cards = t("features.cards", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-dark-900 sm:text-3xl lg:text-4xl">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-dark-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${featureIcons[index]?.bg} ${featureIcons[index]?.color}`}>
                {featureIcons[index]?.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-dark-900">
                {card.title}
              </h3>
              <p className="text-sm text-dark-500 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
