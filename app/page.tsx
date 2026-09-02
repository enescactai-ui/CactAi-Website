import { CaseStudy } from "@/components/site/CaseStudy";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Pricing } from "@/components/site/Pricing";
import { TrustMarquee } from "@/components/site/TrustMarquee";
import { VaekstMotorV8 } from "@/components/site/VaekstMotorV8";

/*
 *  Forsiden er en lead-capture-side, ikke en broche.
 *
 *  Den typiske besoegende har ALLEREDE talt med Enes i telefonen og slaar
 *  firmaet op bagefter. Siden skal derfor ikke saelge forfra, den skal
 *  bekraefte at det er et rigtigt firma og goere vejen til en booking kort.
 *
 *  Raekkefoelgen er: hvem er I → bevis (3D-motor + cases) → hvad koster
 *  det → book. FAQ ligger EFTER CTA'en, til dem der stadig tvivler efter
 *  at have set knappen.
 *
 *  Garantien har IKKE sin egen sektion laengere (2. sep 2026). Den ligger
 *  inde i CTA'en, lige ved booking-widgeten, fordi en risiko-fjerner
 *  virker i det oejeblik nogen skal forpligte sig, ikke midt paa siden.
 *  Guarantee.tsx findes stadig i kodebasen, ubrugt.
 *
 *  VaekstMotorV8 er tilbage, bevidst, efter Enes' eget valg 1. sep 2026.
 *  Koster reelt: 1,9 MB 3D-model + hele three/R3F i bundlen. Overvej
 *  dynamic import med ssr:false hvis LCP bliver et problem paa mobil.
 *
 *  Founder er bevidst IKKE paa forsiden, efter Enes' eget valg 2. sep 2026.
 *  "Om os" skal vaere noget folk selv klikker sig hen til, ikke noget
 *  der praesenteres uopfordret paa forsiden. Findes stadig paa /om, linket
 *  fra hovedmenuen.
 *
 *  Taget AF forsiden, stadig i kodebasen:
 *    Manifesto       gentager pitchet fra opkaldet.
 *    HowItWorks      samme.
 *    BeforeAfter     samme.
 *    Comparison      samme.
 *  Slet dem ikke. De kan bruges paa /ydelser eller i en kold kampagne.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustMarquee />
        <VaekstMotorV8 />
        <CaseStudy />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
