import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vækstmotoren",
  description:
    "Ét samlet system der henter kunderne, svarer hvert lead på sekunder, og booker dem direkte i din kalender. Du møder bare op til arbejdet.",
};

type Part = {
  n: string;
  tag: string;
  title: string;
  body: string;
};

const PARTS: Part[] = [
  {
    n: "01",
    tag: "Lead-motoren",
    title: "Vi henter kunderne",
    body: "Meta-annoncer målrettet præcis de kunder der leder efter dig i dit område. Det er brændstoffet der driver hele motoren.",
  },
  {
    n: "02",
    tag: "Lynsvar",
    title: "Svar på under 60 sekunder",
    body: "Hvert nyt lead får svar på under et minut, døgnet rundt, før konkurrenten overhovedet når at ringe tilbage.",
  },
  {
    n: "03",
    tag: "Notifikationen",
    title: "Du ved det med det samme",
    body: "Navn, opgave og telefonnummer lander på din telefon i samme sekund, leadet kommer ind. Så du kan ringe, mens de stadig sidder med mobilen i hånden.",
  },
  {
    n: "04",
    tag: "Opfølgning",
    title: "Ingen lead falder mellem to stole",
    body: "De leads der ikke svarede første gang bliver automatisk fulgt op og genbooket. Ingen kunde bliver glemt.",
  },
  {
    n: "05",
    tag: "Google & synlighed",
    title: "Du bliver den de vælger",
    body: "Din Google-profil optimeres og anmeldelser samles ind automatisk, så du står stærkest når kunderne søger.",
  },
  {
    n: "06",
    tag: "Resultat-garantien",
    title: "Du betaler kun for fremmøde",
    body: "Du betaler kun når en kunde rent faktisk møder op. Møder de ikke op, koster det ikke en krone.",
  },
];

export default function YdelserPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        items={[
          { name: "Hjem", url: "https://cactaihq.com" },
          { name: "Vækstmotoren", url: "https://cactaihq.com/ydelser" },
        ]}
      />
      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* Hero */}
          <header className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
              Ét system
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Alt du skal bruge for at få flere kunder.{" "}
              <span className="text-[color:var(--color-cactus-green)]">
                Samlet i én motor.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              De fleste bureauer sælger dig fem løsdele du selv skal binde
              sammen. Vi bygger én samlet vækstmotor der henter kunderne, svarer
              dem på sekunder og booker dem i din kalender. Du møder bare op til
              arbejdet.
            </p>
          </header>

          {/* The 6 parts */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
            {PARTS.map((p) => (
              <article
                key={p.n}
                className="group relative flex flex-col rounded-2xl border border-[color:var(--color-cactus-green)]/15 bg-[color:var(--color-cactus-dark)] p-7 transition-all hover:-translate-y-1 hover:border-[color:var(--color-cactus-green)]/40 hover:shadow-[0_20px_50px_-24px_rgba(42,157,111,0.4)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-green)]">
                    {p.tag}
                  </span>
                  <span className="font-mono text-xs text-[color:var(--color-cactus-cream)]/30">
                    {p.n}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-bold leading-snug text-[color:var(--color-cactus-cream)]">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-cactus-cream)]/60">
                  {p.body}
                </p>
              </article>
            ))}
          </div>

          {/* How it fits together */}
          <section className="mt-20 grid gap-10 rounded-3xl border border-[color:var(--color-cactus-green)]/15 bg-[color:var(--color-cactus-dark)] p-8 sm:p-12 lg:mt-28 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Sådan hænger det sammen
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Én motor, ikke fem værktøjer.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                Delene virker kun fordi de sidder i samme motor. Annoncen
                henter leadet, lynsvaret fanger det på sekunder, AI&apos;en
                booker mødet, opfølgningen redder dem der tøver, og garantien
                sikrer at du kun betaler for det der faktisk virker.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                Du skal ikke lære et eneste værktøj. Du skal bare møde op til
                de kunder vi sender.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              {[
                { k: "24/7", v: "hvert lead besvaret" },
                { k: "60 sek.", v: "svartid på nye leads" },
                { k: "14 dage", v: "resultat-garanti" },
                { k: "0 kr", v: "ved no-show" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="flex items-baseline justify-between gap-6 border-b border-[color:var(--color-cactus-green)]/12 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="font-display text-3xl font-bold tracking-tight text-[color:var(--color-cactus-green)] sm:text-4xl">
                    {s.k}
                  </span>
                  <span className="text-right text-sm text-[color:var(--color-cactus-cream)]/60">
                    {s.v}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Price + CTA */}
          <section className="mt-20 text-center lg:mt-28">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
              Pris
            </div>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Din pris, skræddersyet til din forretning.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              Ingen pakker der ikke passer. Vi ser på din forretning, dit
              område og dine mål, og bygger en pris der matcher. Og du betaler
              kun når kunder rent faktisk møder op.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#book"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-cream)] px-7 py-4 text-base font-semibold text-[color:var(--color-cactus-dark)] shadow-[0_4px_24px_-6px_rgba(13,31,22,0.35)] transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                Book gratis møde
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="tel:+4591309560"
                className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/55 transition-colors hover:text-[color:var(--color-cactus-cream)]"
              >
                Eller ring +45 91 30 95 60
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
