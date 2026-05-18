"use client";

import { useTranslation } from "react-i18next";

export default function Solution() {
  const { t } = useTranslation();

  const steps = t("solution.steps", { returnObjects: true }) as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="solution" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark-900 sm:text-4xl">
            {t("solution.title")}
          </h2>
          <p className="text-lg text-dark-500">{t("solution.subtitle")}</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-primary-200 md:left-1/2 md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="card">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold text-dark-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-dark-500">{step.description}</p>
                  </div>
                </div>

                <div className="hidden h-4 w-4 flex-shrink-0 rounded-full border-4 border-primary-600 bg-white md:block" />

                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
