"use client";

import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";

interface FeedbackData {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string[];
  q7: string;
  q8: string;
  name: string;
  email: string;
}

export default function Feedback() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FeedbackData>({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: [],
    q7: "",
    q8: "",
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleRadioChange = (question: keyof FeedbackData, value: string) => {
    setFormData({ ...formData, [question]: value });
  };

  const handleCheckboxChange = (value: string) => {
    const current = formData.q6;
    if (current.includes(value)) {
      setFormData({ ...formData, q6: current.filter((v) => v !== value) });
    } else {
      setFormData({ ...formData, q6: [...current, value] });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const apiUrl = `${window.location.origin}/api/feedback`;
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          q1: "",
          q2: "",
          q3: "",
          q4: "",
          q5: "",
          q6: [],
          q7: "",
          q8: "",
          name: "",
          email: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const getOptions = (key: string): string[] => {
    return t(`feedback.questions.${key}.options`, { returnObjects: true }) as string[];
  };

  const renderRadioGroup = (questionKey: string, fieldName: keyof FeedbackData) => {
    const options = getOptions(questionKey);
    return (
      <div className="space-y-2">
        <p className="mb-3 text-sm font-medium text-dark-700">
          {t(`feedback.questions.${questionKey}.label`)}
        </p>
        <div className="flex flex-wrap gap-3">
          {options.map((option) => (
            <label
              key={option}
              className={`cursor-pointer rounded-lg border px-4 py-2 text-sm transition-all ${
                formData[fieldName] === option
                  ? "border-primary-500 bg-primary-50 text-primary-700"
                  : "border-dark-200 text-dark-600 hover:border-primary-300"
              }`}
            >
              <input
                type="radio"
                name={fieldName}
                value={option}
                checked={formData[fieldName] === option}
                onChange={() => handleRadioChange(fieldName, option)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  };

  const renderCheckboxGroup = () => {
    const options = getOptions("q6");
    return (
      <div className="space-y-2">
        <p className="mb-3 text-sm font-medium text-dark-700">
          {t("feedback.questions.q6.label")}
        </p>
        <div className="flex flex-wrap gap-3">
          {options.map((option) => (
            <label
              key={option}
              className={`cursor-pointer rounded-lg border px-4 py-2 text-sm transition-all ${
                formData.q6.includes(option)
                  ? "border-primary-500 bg-primary-50 text-primary-700"
                  : "border-dark-200 text-dark-600 hover:border-primary-300"
              }`}
            >
              <input
                type="checkbox"
                value={option}
                checked={formData.q6.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="feedback" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark-900 sm:text-4xl">
            {t("feedback.title")}
          </h2>
          <p className="mb-12 text-lg text-dark-500">
            {t("feedback.subtitle")}
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          {status === "success" ? (
            <div className="card py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                🎉
              </div>
              <p className="text-lg font-semibold text-green-700">
                {t("feedback.form.success")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card !p-8 space-y-8">
              {renderRadioGroup("q1", "q1")}
              {renderRadioGroup("q2", "q2")}
              {renderRadioGroup("q3", "q3")}
              {renderRadioGroup("q4", "q4")}
              {renderRadioGroup("q5", "q5")}
              {renderCheckboxGroup()}

              <div>
                <label
                  htmlFor="q7"
                  className="mb-2 block text-sm font-medium text-dark-700"
                >
                  {t("feedback.questions.q7.label")}
                </label>
                <textarea
                  id="q7"
                  rows={3}
                  value={formData.q7}
                  onChange={(e) =>
                    setFormData({ ...formData, q7: e.target.value })
                  }
                  placeholder={t("feedback.questions.q7.placeholder")}
                  className="w-full rounded-lg border border-dark-200 px-4 py-3 text-dark-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
              </div>

              {renderRadioGroup("q8", "q8")}

              <div className="border-t border-dark-100 pt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="feedback-name"
                      className="mb-1 block text-sm font-medium text-dark-700"
                    >
                      {t("feedback.form.name")}
                    </label>
                    <input
                      id="feedback-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-dark-200 px-4 py-3 text-dark-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="feedback-email"
                      className="mb-1 block text-sm font-medium text-dark-700"
                    >
                      {t("feedback.form.email")}
                    </label>
                    <input
                      id="feedback-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-dark-200 px-4 py-3 text-dark-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    />
                  </div>
                </div>
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">{t("feedback.form.error")}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full disabled:opacity-50"
              >
                {status === "loading" ? "..." : t("feedback.form.submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
