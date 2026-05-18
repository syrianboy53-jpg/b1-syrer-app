"use client";

import { useTranslation } from "react-i18next";

export default function Trust() {
  const { t } = useTranslation();

  return (
    <section id="trust" className="section-padding bg-white">
      <div className="container-custom">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 sm:px-12 sm:py-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
            {/* Icon */}
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                {t("trust.title")}
              </h2>
              <p className="mb-6 text-base text-blue-100 leading-relaxed">
                {t("trust.description")}
              </p>
              <div className="rounded-xl bg-white/10 border border-white/20 px-5 py-4">
                <p className="text-sm text-blue-100 leading-relaxed">
                  <span className="font-semibold text-white">{t("trust.disclaimer").split(':')[0]}:</span>
                  {t("trust.disclaimer").split(':').slice(1).join(':')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
