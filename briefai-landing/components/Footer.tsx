"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white">
              Brief<span className="text-primary-400">AI</span>
            </h3>
            <p className="text-dark-400">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark-300">
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-dark-400 transition-colors hover:text-white"
                >
                  {t("footer.links.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-400 transition-colors hover:text-white"
                >
                  {t("footer.links.imprint")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-400 transition-colors hover:text-white"
                >
                  {t("footer.links.terms")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark-300">
              {t("footer.contact.title")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${t("footer.contact.email")}`}
                  className="text-dark-400 transition-colors hover:text-white"
                >
                  {t("footer.contact.email")}
                </a>
              </li>
              <li className="text-dark-400">{t("footer.contact.location")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-dark-700 pt-8 text-center">
          <p className="text-sm text-dark-500">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
