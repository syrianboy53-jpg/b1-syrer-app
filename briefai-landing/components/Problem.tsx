"use client";

import { useTranslation } from "react-i18next";

export default function Problem() {
  const { t } = useTranslation();

  const cards = t("problem.cards", { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="problem" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark-900 sm:text-4xl">
            {t("problem.title")}
          </h2>
          <p className="text-lg text-dark-500">{t("problem.subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card group text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-dark-900">
                {card.title}
              </h3>
              <p className="text-dark-500">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
