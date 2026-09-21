import { BookingEmbed } from "@/components/site/BookingEmbed";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import type { Metadata } from "next";

/*
 *  Landingsside for brevkampagnen (fysiske breve til haandvaerkere,
 *  startet 22. sep 2026). QR-koden og det korte link i brevet peger
 *  herhen, og KUN herhen. Ingen andre steder paa sitet linker til siden.
 *
 *  Derfor er antallet af visninger paa /brev i Vercel Analytics lig med
 *  antallet af folk der har aabnet brevet og scannet eller tastet linket.
 *  Bookinger maales som altid paa /tak. Det er hele maalingen af
 *  kampagnen, og den virker kun saa laenge siden holdes ude af Google
 *  (noindex) og ude af navigationen.
 *
 *  Samme regler som resten af sitet: ingen kanalnavne, ingen pris, ingen
 *  loefter om antal kunder.
 */
export const metadata: Metadata = {
  title: "Du har fået et brev fra mig",
  description: "Book de 20 minutter hvor du får tallene for dit område.",
  robots: { index: false, follow: false },
};

export default function BrevPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-green)]/[0.07] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
            Fra brevet
          </div>

          <h1 className="mt-7 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Tak fordi du åbnede det. Her er resten af tallene.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
            I brevet fik du én søgning og tre navne. På 20 minutter viser jeg
            dig hele billedet for dit område: hvor mange der leder efter din
            ydelse, hvem der får opgaverne i dag, og hvad en ny fast kunde
            realistisk koster dig at få ind. Tallene er dine, uanset om vi
            arbejder sammen bagefter.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Vælg en tid", "Kalenderen herunder. Det tager et halvt minut."],
              ["02", "Jeg laver analysen", "Inden vi taler, ikke imens. Så bruger vi tiden på tallene."],
              ["03", "20 minutter online", "Du får tallene med dig som PDF bagefter."],
            ].map(([n, h, p]) => (
              <div
                key={n}
                className="rounded-2xl border border-[color:var(--color-cactus-green)]/15 bg-white p-5 shadow-[0_4px_24px_-8px_rgba(13,31,22,0.08)]"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
                  {n}
                </div>
                <div className="mt-2 font-display text-lg font-semibold text-[color:var(--color-cactus-cream)]">
                  {h}
                </div>
                <p className="mt-1.5 text-[14px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                  {p}
                </p>
              </div>
            ))}
          </div>

          <section id="book" className="mt-14">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
              Book din lokale kundeanalyse
            </div>
            <div className="mt-5">
              <BookingEmbed />
            </div>
          </section>

          <p className="mt-10 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
            Vil du hellere ringe? Det er mig der tager den:{" "}
            <a
              href="tel:+4591309560"
              className="font-medium text-[color:var(--color-cactus-cream)] underline underline-offset-4 hover:text-[color:var(--color-cactus-green)]"
            >
              +45 91 30 95 60
            </a>
            . Vil du ikke høre mere fra mig, så skriv det i en sms eller mail,
            så slettes du fra listen samme dag.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
