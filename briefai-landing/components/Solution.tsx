"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const stepIcons = [
  <svg key="upload" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  <svg key="identify" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><path d="M16 13H8M16 17H8"/></svg>,
  <svg key="calendar" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  <svg key="summary" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>,
  <svg key="check" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>,
];

interface ScreenshotProps {
  src: string;
  alt: string;
}

function Screenshot({ src, alt }: ScreenshotProps) {
  return (
    <div className="mx-auto w-full">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <Image src={src} alt={alt} width={400} height={800} className="w-full h-auto" />
      </div>
    </div>
  );
}

export default function Solution() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const steps = t("solution.steps", { returnObjects: true }) as Array<{
    number: string;
    title: string;
  }>;

  const screenshots = [
    { de: "/images/app-home.jpeg", ar: "/images/app-home-ar.jpeg" },
    { de: "/images/app-analyse.jpeg", ar: "/images/app-analyse-ar.jpeg" },
    { de: "/images/app-frist.jpeg", ar: "/images/app-frist-ar.jpeg" },
    { de: "/images/app-zusammenfassung.jpeg", ar: "/images/app-zusammenfassung-ar.jpeg" },
  ];

  const screenshotCaptions = isAr
    ? ["1. الشاشة الرئيسية", "2. نتيجة التحليل", "3. الموعد / المهلة", "4. الملخص والخطوة التالية"]
    : ["1. Startseite", "2. Analyse-Ergebnis", "3. Frist / Termin", "4. Zusammenfassung & Nächster Schritt"];

  const screenshotDescs = isAr
    ? [
        "نظرة عامة على جميع الرسائل مع التصنيف والحالة.",
        "التعرف على المرسل، التصنيف، الملخص، الموعد والخطوة التالية.",
        "المواعيد والمهل المهمة بنظرة واحدة. يتم اكتشافها تلقائياً وعرضها بوضوح.",
        "ملخص واضح للرسالة وتوصيات عملية محددة.",
      ]
    : [
        "Übersicht aller Briefe mit Kategorisierung und Status.",
        "Erkennung von Absender, Kategorie, Zusammenfassung, Frist und nächstem Schritt.",
        "Wichtige Termine und Fristen auf einen Blick. Automatisch erkannt und klar dargestellt.",
        "Klare Zusammenfassung des Briefes und konkrete Handlungsempfehlungen.",
      ];

  return (
    <section id="solution" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-dark-900 sm:text-3xl lg:text-4xl">
            {t("solution.title")}
          </h2>
          <p className="text-base text-dark-500 sm:text-lg">{t("solution.subtitle")}</p>
        </div>

        {/* Steps row */}
        <div className="relative mx-auto mb-20 max-w-5xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-sm border border-dark-100">
                  {stepIcons[index]}
                </div>
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                  {step.number}
                </div>
                <p className="max-w-[140px] text-center text-sm font-medium text-dark-700">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute left-[10%] right-[10%] top-8 hidden sm:block">
            <div className="h-0 border-t-2 border-dashed border-primary-200" />
          </div>
        </div>

        {/* Screenshots grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {screenshots.map((shot, index) => (
            <div key={index} className="text-center">
              <Screenshot
                src={isAr ? shot.ar : shot.de}
                alt={screenshotCaptions[index]}
              />
              <h3 className="mt-4 text-lg font-bold text-dark-900">
                {screenshotCaptions[index]}
              </h3>
              <p className="mt-1 text-sm text-dark-500">
                {screenshotDescs[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
