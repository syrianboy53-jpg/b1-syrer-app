"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="gradient-bg relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary-100 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-200 opacity-30 blur-3xl" />
      </div>

      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 animate-fade-in">
              <span className="inline-block h-2 w-2 rounded-full bg-primary-500" />
              {t("hero.badge")}
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-dark-900 sm:text-5xl lg:text-6xl animate-fade-in-up">
              {t("hero.title")}
              <br />
              <span className="gradient-text">{t("hero.titleHighlight")}</span>
            </h1>

            <p className="mb-10 max-w-xl text-lg text-dark-500 sm:text-xl animate-fade-in-up">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up">
              <a href="#pilot" className="btn-primary text-lg">
                {t("hero.cta_primary")}
              </a>
              <a href="#solution" className="btn-secondary text-lg">
                {t("hero.cta_secondary")}
              </a>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex flex-1 justify-center animate-fade-in-up">
            <div className="relative">
              <div className="relative mx-auto w-[280px] sm:w-[320px] lg:w-[360px]">
                {/* Phone Frame */}
                <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-dark-800 bg-dark-900 shadow-2xl">
                  {/* Notch */}
                  <div className="relative bg-dark-900 px-8 py-2">
                    <div className="mx-auto h-5 w-28 rounded-b-2xl bg-dark-800" />
                  </div>
                  {/* Screen Content */}
                  <div className="bg-white">
                    <Image
                      src={isAr ? "/images/app-home-ar.jpeg" : "/images/hero-mockup.jpeg"}
                      alt={t("hero.mockup_alt")}
                      width={360}
                      height={720}
                      className="w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section Below */}
        <div className="mx-auto mt-16 max-w-4xl animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl border border-dark-100 bg-white shadow-2xl">
            <video
              key={isAr ? "ar" : "de"}
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              poster={isAr ? "/images/app-home-ar.jpeg" : "/images/app-home.jpeg"}
            >
              <source
                src={isAr ? "/videos/briefai-intro-ar.mp4" : "/videos/briefai-intro.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
