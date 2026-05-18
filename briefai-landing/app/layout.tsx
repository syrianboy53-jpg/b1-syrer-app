import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "@/lib/I18nProvider";

export const metadata: Metadata = {
  title: "BriefAI – Amtliche Briefe verstehen mit KI",
  description:
    "BriefAI analysiert deutsche Behördenbriefe mit KI – erklärt den Inhalt, erkennt Fristen und schlägt nächste Schritte vor.",
  keywords:
    "BriefAI, Behördenbriefe, KI, Künstliche Intelligenz, Brief analysieren, Amtsbriefe, Deutschland",
  openGraph: {
    title: "BriefAI – Amtliche Briefe verstehen mit KI",
    description:
      "BriefAI analysiert deutsche Behördenbriefe mit KI – erklärt den Inhalt, erkennt Fristen und schlägt nächste Schritte vor.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" dir="ltr">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
