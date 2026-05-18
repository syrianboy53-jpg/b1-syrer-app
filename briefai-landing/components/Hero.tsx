"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

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
          <div className="mb-8 flex justify-center animate-fade-in">
            <Image
              src="/images/logo.jpeg"
              alt="BriefAI Logo"
              width={120}
              height={120}
              className="rounded-2xl"
              priority
            />
          </div>

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

        <div className="mx-auto mt-16 max-w-4xl animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl border border-dark-100 bg-white shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              poster="/images/app-home.jpeg"
            >
              <source src="/videos/briefai-intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-sm animate-fade-in-up">
          <Image
            src="/images/app-home.jpeg"
            alt={t("hero.mockup_alt")}
            width={400}
            height={800}
            className="mx-auto rounded-[2rem] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
