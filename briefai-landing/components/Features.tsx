"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Features() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const cards = t("features.cards", { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark-900 sm:text-4xl">
            {t("features.title")}
          </h2>
          <p className="text-lg text-dark-500">{t("features.subtitle")}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-2xl transition-all duration-300 group-hover:bg-primary-100 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-dark-900">
                {card.title}
              </h3>
              <p className="text-sm text-dark-500">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex justify-center">
          <Image
            src={isAr ? "/images/frist-termin-ar.jpeg" : "/images/frist-termin.jpeg"}
            alt="Frist / Termin"
            width={320}
            height={600}
            className="rounded-[2rem] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
