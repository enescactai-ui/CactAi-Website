import { CaseStudy } from "@/components/site/CaseStudy";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Founder } from "@/components/site/Founder";
import { Guarantee } from "@/components/site/Guarantee";
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
 *  det → hvad risikerer jeg → book. FAQ og Founder ligger EFTER CTA'en,
 *  til dem der stadig tvivler efter at have set knappen.
 *
 *  VaekstMotorV8 er tilbage, bevidst, efter Enes' eget valg 1. sep 2026.
 *  Koster reelt: 1,9 MB 3D-model + hele three/R3F i bundlen. Overvej
 *  dynamic import med ssr:false hvis LCP bliver et problem paa mobil.
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
        <Guarantee />
        <CTA />
        <FAQ />
        <Founder />
      </main>
      <Footer />
    </>
  );
}
