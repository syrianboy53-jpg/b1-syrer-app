"use client";

import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().then(() => {
        video.muted = false;
        setIsMuted(false);
      }).catch(() => {
        setIsMuted(true);
      });
    }
  }, [isAr]);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
      setIsMuted(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pb-12 pt-24 sm:pb-16 sm:pt-28">
      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-start">
            <div className="mb-6 flex justify-center lg:justify-start animate-fade-in">
              <Image
                src="/images/logo.jpeg"
                alt="BriefAI"
                width={120}
                height={120}
                className="rounded-xl"
              />
            </div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-dark-600 animate-fade-in">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
              {t("hero.badge")}
            </div>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-dark-900 sm:text-4xl lg:text-5xl animate-fade-in-up">
              {t("hero.title")}
              <br />
              <span className="text-primary-600">{t("hero.titleHighlight")}</span>
            </h1>

            <p className="mb-8 max-w-lg text-base text-dark-500 sm:text-lg animate-fade-in-up">
              {t("hero.subtitle")}
            </p>

            <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start animate-fade-in-up">
              <a href="#pilot" className="rounded-full bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg">
                {t("hero.cta_primary")}
              </a>
              <a href="#video-section" className="flex items-center gap-2 rounded-full border border-dark-200 bg-white px-6 py-3 text-base font-semibold text-dark-700 transition-all hover:border-primary-300 hover:shadow-md">
                {t("hero.cta_secondary")}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M10 8l6 4-6 4V8z"/></svg>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-dark-500 lg:justify-start animate-fade-in-up">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-dark-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <div>
                  <div className="font-medium text-dark-700">{t("hero.trust_offline")}</div>
                  <div className="text-xs text-dark-400">{t("hero.trust_offline_desc")}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-dark-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                <div>
                  <div className="font-medium text-dark-700">{t("hero.trust_privacy")}</div>
                  <div className="text-xs text-dark-400">{t("hero.trust_privacy_desc")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshot */}
          <div className="flex flex-1 justify-center animate-fade-in-up">
            <div className="relative mx-auto w-[300px] sm:w-[340px] lg:w-[380px]">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={isAr ? "/images/app-home-ar.jpeg" : "/images/app-home.jpeg"}
                  alt={t("hero.mockup_alt")}
                  width={380}
                  height={760}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div id="video-section" className="mx-auto mt-16 max-w-4xl animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl border border-dark-100 bg-white shadow-xl">
            <video
              ref={videoRef}
              key={isAr ? "ar" : "de"}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full"
              poster={isAr ? "/images/app-home-ar.jpeg" : "/images/app-home.jpeg"}
            >
              <source
                src={isAr ? "/videos/briefai-intro-ar.mp4" : "/videos/briefai-intro.mp4"}
                type="video/mp4"
              />
            </video>
            {isMuted && (
              <button
                onClick={handleUnmute}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 transition-all hover:bg-black/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 shadow-lg">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                </div>
                <span className="mt-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-dark-800 shadow">
                  {isAr ? "اضغط لتشغيل الصوت" : "Tippen für Ton"}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
