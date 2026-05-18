"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "@/locales/de.json";
import ar from "@/locales/ar.json";

const resources = {
  de: { translation: de },
  ar: { translation: ar },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "de",
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
