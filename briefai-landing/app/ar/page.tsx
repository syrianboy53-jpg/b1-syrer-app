import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import Trust from '@/components/Trust'
import Pilot from '@/components/Pilot'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { ar } from '@/locales/ar'

export const metadata = {
  title: 'BriefAI – افهم رسائل الدوائر الرسمية بالذكاء الاصطناعي',
  description: 'BriefAI يساعدك على فهم الرسائل الرسمية باللغة الألمانية – صوّر الرسالة، احصل على ترجمة فورية وملخص واضح.',
}

export default function ArabicPage() {
  return (
    <main className="font-cairo" dir="rtl">
      <Navigation locale="ar" translations={ar.nav} />
      <Hero translations={ar.hero} />
      <Problem translations={ar.problem} />
      <Solution translations={ar.solution} />
      <Features translations={ar.features} />
      <Trust translations={ar.trust} />
      <Pilot translations={ar.pilot} />
      <FAQ translations={ar.faq} />
      <Footer translations={ar.footer} />
    </main>
  )
}
