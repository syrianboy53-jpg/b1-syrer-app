"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "de" ? "ar" : "de";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const navLinks = [
    { href: "#problem", label: t("nav.problem") },
    { href: "#solution", label: t("nav.solution") },
    { href: "#features", label: t("nav.features") },
    { href: "#trust", label: t("nav.trust") },
    { href: "#pilot", label: t("nav.pilot") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#feedback", label: t("nav.feedback") },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpeg"
            alt="BriefAI"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-primary-600">
            Brief<span className="text-dark-900">AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark-600 transition-colors hover:text-primary-600"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/admin"
            className="text-sm font-medium text-dark-400 transition-colors hover:text-primary-600"
          >
            {t("nav.admin")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="rounded-lg border border-dark-200 px-3 py-1.5 text-sm font-medium text-dark-600 transition-all hover:border-primary-300 hover:text-primary-600"
          >
            {t("nav.switchLang")}
          </button>
          <a href="#pilot" className="btn-primary !px-4 !py-2 !text-sm">
            {t("hero.cta_primary")}
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-dark-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-dark-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-dark-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-dark-400 transition-colors hover:bg-primary-50 hover:text-primary-600"
            >
              {t("nav.admin")}
            </Link>
            <div className="flex items-center gap-3 px-3 pt-2">
              <button
                onClick={toggleLanguage}
                className="rounded-lg border border-dark-200 px-3 py-1.5 text-sm font-medium text-dark-600"
              >
                {t("nav.switchLang")}
              </button>
              <a
                href="#pilot"
                onClick={() => setIsOpen(false)}
                className="btn-primary !px-4 !py-2 !text-sm"
              >
                {t("hero.cta_primary")}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
