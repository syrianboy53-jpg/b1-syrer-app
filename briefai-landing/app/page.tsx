import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import Trust from '@/components/Trust'
import Pilot from '@/components/Pilot'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { de } from '@/locales/de'

export default function HomePage() {
  return (
    <main className="font-inter" dir="ltr">
      <Navigation locale="de" translations={de.nav} />
      <Hero translations={de.hero} />
      <Problem translations={de.problem} />
      <Solution translations={de.solution} />
      <Features translations={de.features} />
      <Trust translations={de.trust} />
      <Pilot translations={de.pilot} />
      <FAQ translations={de.faq} />
      <Footer translations={de.footer} />
    </main>
  )
}
