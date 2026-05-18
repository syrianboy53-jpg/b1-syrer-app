import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BriefAI – Behördenbriefe verstehen mit KI',
  description: 'BriefAI hilft Ihnen, offizielle Briefe auf Deutsch zu verstehen – einfach fotografieren, sofort übersetzen und eine klare Zusammenfassung erhalten.',
  keywords: 'BriefAI, Behördenbriefe, Übersetzung, KI, Deutsch, Arabisch, Integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" dir="ltr">
      <body className="font-inter bg-white text-text-dark">
        {children}
      </body>
    </html>
  )
}
