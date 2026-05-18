"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const stepImages = {
  de: [null, "/images/analyse-ergebnis.jpeg", "/images/zusammenfassung.jpeg"],
  ar: [null, "/images/analyse-ergebnis-ar.jpeg", "/images/zusammenfassung-ar.jpeg"],
};

export default function Solution() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const images = isAr ? stepImages.ar : stepImages.de;

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

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-primary-200 md:left-1/2 md:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-8 md:flex-row md:items-center ${
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

                <div className="flex flex-1 justify-center">
                  {images[index] ? (
                    <div className="relative mx-auto w-[240px] sm:w-[280px]">
                      <div className="overflow-hidden rounded-[2rem] border-[5px] border-dark-800 bg-dark-900 shadow-2xl">
                        <div className="relative bg-dark-900 px-6 py-1.5">
                          <div className="mx-auto h-4 w-20 rounded-b-xl bg-dark-800" />
                        </div>
                        <div className="bg-white">
                          <Image
                            src={images[index]}
                            alt={step.title}
                            width={340}
                            height={680}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
