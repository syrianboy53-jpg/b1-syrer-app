"use client";

import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";

export default function Pilot() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    language: "",
    role: "",
    participation: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");

  const benefits = t("pilot.benefits", { returnObjects: true }) as string[];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/pilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", city: "", language: "", role: "", participation: "", message: "" });
      } else {
        const data = await res.json().catch(() => null);
        if (res.status === 409) {
          setStatus("duplicate");
        } else {
          setStatus("error");
          console.error("Pilot API error:", data);
        }
      }
    } catch (err) {
      setStatus("error");
      console.error("Pilot fetch error:", err);
    }
  };

  const inputClasses = "w-full rounded-lg border border-dark-200 bg-gray-50 px-4 py-2.5 text-sm text-dark-900 transition-colors focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200";
  const labelClasses = "mb-1 block text-sm font-medium text-dark-700";

  return (
    <section id="pilot" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Info */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-dark-900 sm:text-3xl">
              {t("pilot.title")}
            </h2>
            <p className="mb-8 text-base text-dark-500 leading-relaxed">{t("pilot.description")}</p>

            <ul className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-dark-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <a href="#pilot" className="inline-block rounded-full bg-primary-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg">
              {t("pilot.form.cta")}
            </a>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-dark-100 bg-white p-6 shadow-sm sm:p-8">
            {status === "success" ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-green-700">{t("pilot.form.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>{t("pilot.form.name")}</label>
                    <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={t("pilot.form.name_placeholder")} className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>{t("pilot.form.email")}</label>
                    <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={t("pilot.form.email_placeholder")} className={inputClasses} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className={labelClasses}>{t("pilot.form.city")}</label>
                    <input id="city" type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} placeholder={t("pilot.form.city_placeholder")} className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="language" className={labelClasses}>{t("pilot.form.language")}</label>
                    <select id="language" value={formData.language} onChange={(e) => setFormData({ ...formData, language: e.target.value })} className={inputClasses}>
                      <option value="">{t("pilot.form.language_placeholder")}</option>
                      <option value="Deutsch">Deutsch</option>
                      <option value="العربية">العربية</option>
                      <option value="Türkçe">Türkçe</option>
                      <option value="English">English</option>
                      <option value="Українська">Українська</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="role" className={labelClasses}>{t("pilot.form.role")}</label>
                    <select id="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className={inputClasses}>
                      <option value="">{t("pilot.form.role_placeholder")}</option>
                      <option value="individual">Einzelperson / فرد</option>
                      <option value="organization">Organisation / منظمة</option>
                      <option value="advisor">Berater / مستشار</option>
                      <option value="student">Student / طالب</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="participation" className={labelClasses}>{t("pilot.form.participation")}</label>
                    <select id="participation" value={formData.participation} onChange={(e) => setFormData({ ...formData, participation: e.target.value })} className={inputClasses}>
                      <option value="">{t("pilot.form.participation_placeholder")}</option>
                      <option value="yes">Ja / نعم</option>
                      <option value="maybe">Vielleicht / ربما</option>
                      <option value="feedback_only">Nur Feedback / ملاحظات فقط</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>{t("pilot.form.message")}</label>
                  <textarea id="message" rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t("pilot.form.message_placeholder")} className={inputClasses} />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">{t("pilot.form.error")}</p>
                )}
                {status === "duplicate" && (
                  <p className="text-sm text-orange-600">{i18n.language === "ar" ? "هذا البريد الإلكتروني مسجل مسبقاً." : "Diese E-Mail ist bereits registriert."}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-primary-700 disabled:opacity-50"
                >
                  {status === "loading" ? "..." : t("pilot.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
