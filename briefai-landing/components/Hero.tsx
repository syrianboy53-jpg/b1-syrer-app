"use client";

import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="gradient-bg relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary-100 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-200 opacity-30 blur-3xl" />
      </div>

      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 animate-fade-in">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-500" />
            {t("hero.badge")}
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-dark-900 sm:text-5xl lg:text-6xl animate-fade-in-up">
            {t("hero.title")}
            <br />
            <span className="gradient-text">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-dark-500 sm:text-xl animate-fade-in-up">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up">
            <a href="#pilot" className="btn-primary text-lg">
              {t("hero.cta_primary")}
            </a>
            <a href="#solution" className="btn-secondary text-lg">
              {t("hero.cta_secondary")}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl animate-fade-in-up">
          <div className="relative rounded-2xl border border-dark-100 bg-white p-4 shadow-2xl sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-xl">
                  📄
                </div>
                <div className="flex-1">
                  <div className="mb-2 h-4 w-3/4 rounded bg-dark-100" />
                  <div className="mb-2 h-3 w-full rounded bg-dark-50" />
                  <div className="h-3 w-2/3 rounded bg-dark-50" />
                </div>
              </div>
              <div className="border-t border-dark-100 pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    KI-Analyse
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                    Frist: 14 Tage
                  </span>
                </div>
                <div className="rounded-lg bg-primary-50 p-3">
                  <div className="mb-1 h-3 w-1/2 rounded bg-primary-200" />
                  <div className="h-3 w-3/4 rounded bg-primary-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
