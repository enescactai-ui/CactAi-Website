import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Pricing } from "@/components/site/Pricing";
import { Problem } from "@/components/site/Problem";
import { VaekstMotorV8 } from "@/components/site/VaekstMotorV8";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

/*
 *  Forsiden arver titel og beskrivelse fra rod-layoutet, men den skal have
 *  sin EGEN canonical. Uden den findes der ingen <link rel="canonical"> paa
 *  sitet overhovedet, og saa afgoer Google selv hvilken adresse der er den
 *  rigtige. Det er et problem her, fordi apex og www begge svarer.
 */
export const metadata: Metadata = {
  ...pageMeta(
    "/",
    "Bliv den de ringer til først i dit område · CactAi",
    "Vi henter opgaverne ind i dit område, svarer på hver eneste inden for et minut, og lægger dem direkte i din kalender. Fast månedspris, ingen binding.",
  ),
};

/*
 *  Forsiden er en lead-capture-side, ikke en broche.
 *
 *  Raekkefoelgen er bevidst og foelger den samme struktur som virker for
 *  bureauer generelt: genkendelse foer loesning, loesning foer pris, pris
 *  foer kalender. Kalenderen ligger NEDERST, saa folk har set hele
 *  argumentet inden de booker. Flytter man den op, faar man flere
 *  bookinger af folk der ikke ved hvad de booker.
 *
 *    Hero        hvem er I, og hvad faar jeg
 *    Problem     genkendelse. "Det er praecis min hverdag"
 *    System      Vaekstmotoren, den navngivne mekanisme
 *    Pricing     pris + hvem det IKKE er for
 *    CTA         kalenderen
 *    FAQ         de sidste indvendinger
 *
 *  ── To ting er fjernet 3. sep 2026, laes foer du saetter dem tilbage ──
 *
 *  CaseStudy er TAGET AF. Vi har ét igangvaerende forloeb og ingen
 *  faerdig case med tal en fremmed kan efterproeve. En tynd bevis-sektion
 *  er svagere end ingen, fordi den inviterer til at grave. Naar der ER en
 *  faerdig case med dokumenterede tal, saetter du <CaseStudy /> ind
 *  mellem VaekstMotorV8 og Pricing. /cases-siden lever videre og er
 *  stadig linket fra menuen.
 *
 *  TrustMarquee er TAGET AF. Den koerte stadig "Pay-per-show" og "0 kr
 *  ved no-show" rundt over skaermen, altsaa den forretningsmodel vi
 *  forlod. Skal den tilbage, skal teksterne opdateres foerst.
 *
 *  Founder er bevidst ikke paa forsiden, efter Enes' eget valg
 *  2. sep 2026. "Om os" skal vaere noget folk selv klikker sig hen til.
 *  Findes paa /om, linket fra hovedmenuen.
 *
 *  Garantien har ikke sin egen sektion. Risiko-fjerneren ligger inde i
 *  CTA'en ved kalenderen. Guarantee.tsx findes stadig, ubrugt.
 *
 *  VaekstMotorV8 koster reelt: 1,9 MB 3D-model + hele three/R3F i
 *  bundlen. Overvej dynamic import med ssr:false hvis LCP bliver et
 *  problem paa mobil.
 *
 *  Taget af tidligere, stadig i kodebasen: Manifesto, HowItWorks,
 *  BeforeAfter, Comparison. Slet dem ikke, de kan bruges paa /ydelser.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Problem />
        <VaekstMotorV8 />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
