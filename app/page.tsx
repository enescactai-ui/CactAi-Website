import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Comparison } from "@/components/site/Comparison";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Founder } from "@/components/site/Founder";
import { Guarantee } from "@/components/site/Guarantee";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Manifesto } from "@/components/site/Manifesto";
import { Navbar } from "@/components/site/Navbar";
import { Pricing } from "@/components/site/Pricing";
import { TrustMarquee } from "@/components/site/TrustMarquee";
import { VaekstMotorV8 } from "@/components/site/VaekstMotorV8";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustMarquee />
        <VaekstMotorV8 />
        <Manifesto />
        <HowItWorks />
        <BeforeAfter />
        <Pricing />
        <Comparison />
        <Guarantee />
        <FAQ />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
