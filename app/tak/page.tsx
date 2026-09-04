import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { TakTracker } from "@/components/site/TakTracker";
import Link from "next/link";
import type { Metadata } from "next";

/*
 *  Takke-side efter en gennemfoert booking.
 *
 *  HVORFOR DEN FINDES, og hvorfor det ikke bare er GHL's egen kvittering:
 *
 *  GHL viser sin kvittering INDE i booking-iframen. Den kan vi hverken
 *  maale paa eller styre, fordi den ligger paa et andet domaene. Vil man
 *  vide hvor mange der rent faktisk bookede, skal man enten gaette paa
 *  postMessage fra iframen, hvilket er skroebeligt, eller sende folk til
 *  en rigtig side. Vi goer det sidste.
 *
 *  OPSAETNING I GHL, uden den virker maalingen ikke:
 *    Calendars -> Lokal kundeanalyse -> Form & confirmation
 *    -> saet "Redirect URL" til https://cactaihq.com/tak
 *
 *  Siden er noindex. Den skal ikke i Google, og den maa aldrig blive en
 *  landingsside nogen kan finde uden at have booket.
 */
export const metadata: Metadata = {
  title: "Tak for din booking",
  description: "Din lokale kundeanalyse er booket.",
  robots: { index: false, follow: false },
};

export default function TakPage() {
  return (
    <>
      <Navbar />
      <TakTracker />
      <main id="main" className="flex flex-1 items-center justify-center px-6 py-32 lg:py-40">
        <div className="mx-auto w-full max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-green)]/[0.07] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
            Booket
          </div>

          <h1 className="mt-7 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Tak. Din tid står i kalenderen.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
            Du får en bekræftelse på mail med kalenderinvitation og link til
            mødet. Tjek gerne dit spamfilter hvis den ikke er der om et par
            minutter.
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/[0.06] p-8 text-left">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
              Hvad der sker nu
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/75">
              Jeg går i gang med din analyse. Når vi taler sammen, har jeg
              tallene for hvor mange der søger efter din ydelse i dit område,
              hvad dine nærmeste konkurrenter kører med, og hvad en ny fast
              kunde realistisk koster dig at få ind.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              Du får de tal med dig, uanset om vi ender med at arbejde sammen.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-[color:var(--color-cactus-green)]/12 bg-white p-6 text-left shadow-[0_4px_24px_-8px_rgba(13,31,22,0.08)]">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
              Praktisk
            </div>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              <li>Sid ved en computer, vi kigger på tallene sammen på skærmen.</li>
              <li>Hovedtelefoner hjælper hvis du sidder et åbent sted.</li>
            </ul>
          </div>

          <p className="mt-10 text-[15px] text-[color:var(--color-cactus-cream)]/65">
            Skal tiden flyttes, eller har du et spørgsmål inden da?{" "}
            <a
              href="tel:+4591309560"
              className="font-semibold text-[color:var(--color-cactus-green)] underline underline-offset-4"
            >
              Ring 91 30 95 60
            </a>
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/65 transition-colors hover:text-[color:var(--color-cactus-green)]"
          >
            Tilbage til forsiden
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
