"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import Pilot from "@/components/Pilot";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Trust />
      <Pilot />
      <FAQ />
      <Feedback />
      <Footer />
    </main>
  );
}
