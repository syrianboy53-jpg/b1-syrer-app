"use client";

import { useTranslation } from "react-i18next";

export default function Trust() {
  const { t } = useTranslation();

  const points = t("trust.points", { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="trust" className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {t("trust.title")}
          </h2>
          <p className="text-lg text-dark-300">{t("trust.subtitle")}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-dark-700 bg-dark-800 p-6 text-center transition-all duration-300 hover:border-primary-500"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-dark-700 text-2xl">
                {point.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {point.title}
              </h3>
              <p className="text-sm text-dark-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
