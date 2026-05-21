import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Guarantee } from "@/components/site/Guarantee";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Navbar } from "@/components/site/Navbar";
import { Pricing } from "@/components/site/Pricing";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Pricing />
        <Guarantee />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
