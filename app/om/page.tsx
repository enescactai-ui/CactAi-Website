import { Footer } from "@/components/site/Footer";
import { FounderPhoto } from "@/components/site/FounderPhoto";
import { Navbar } from "@/components/site/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om CactAi",
  description:
    "Hvem driver CactAi, hvorfor PPSA-modellen, og hvad du kan forvente når du arbejder med os.",
};

export default function OmPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <article className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
            Om // 2026
          </div>
          <h1 className="mt-6 font-display text-6xl font-medium leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Jeg sælger ikke{" "}
            <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
              løfter
            </span>
            . Jeg sælger{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              fremmøder
            </span>
            .
          </h1>

          {/* Editorial portrait */}
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/40" />
                <div className="relative aspect-[4/5] overflow-hidden border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-mid)]">
                  <FounderPhoto size="large" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/50">
                  <span>Fig. 01 — Enes T.</span>
                  <span>Greve, 22.05.2026</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-display text-2xl font-light italic leading-[1.3] tracking-[-0.01em] text-[color:var(--color-cactus-cream)]/75 sm:text-3xl">
                "Den eneste måde at vide om noget virker er at lade nogen
                betale for det først. Hvis de ikke vil betale, så virker det
                ikke."
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/75">
              <p>
                Mit navn er <strong className="text-[color:var(--color-cactus-cream)]">Enes Tokmak</strong>. Jeg er 19 år, dansker, og jeg
                driver CactAi solo fra Greve.
              </p>
              <p>
                Jeg startede med at lære marketing fra YouTube, mentorships
                og bøger fra folk som Alex Hormozi. De fleste danske bureauer
                kører gamle leveringsmodeller (faste retainere, vagt
                månedsabonnement, "vi kan ikke garantere noget"). Det
                irriterede mig.
              </p>
              <p>
                Så jeg byggede CactAi omkring{" "}
                <strong className="text-[color:var(--color-cactus-green)]">
                  pay-per-show appointment
                </strong>{" "}
                — en model der ikke fandtes i Danmark da jeg startede.
                Konceptet er enkelt: du betaler kun når en kunde faktisk møder
                op til dit besøg. No-show? Du betaler 0 kr. Hvis jeg ikke
                leverer 5 fremmødte på 14 dage? Du får dine setup-penge
                tilbage.
              </p>
              <p>
                Det er ikke en revolution. Det er bare ærligt arbejde med rigtig{" "}
                <em>skin in the game</em>. Hvis jeg ikke kan finde dig kunder,
                tjener jeg ikke en krone — og det er nøjagtigt sådan det burde
                være.
              </p>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-sm border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-dark)]/60 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                  CactAi // Snapshot
                </div>
                <dl className="mt-6 space-y-4 text-sm">
                  <Fact label="Grundlagt" value="Januar 2026" />
                  <Fact label="Lokation" value="Greve, Sjælland" />
                  <Fact label="CVR" value="46210689" />
                  <Fact label="Struktur" value="Enkeltmandsvirksomhed" />
                  <Fact label="Team" value="1 (Enes) + dansk-talende setter" />
                  <Fact label="Brancher" value="Håndværkere DK-wide" />
                  <Fact label="Sprog" value="Dansk + engelsk" />
                </dl>
              </div>
            </aside>
          </div>

          {/* Big pull quote */}
          <div className="mt-24 border-y border-[color:var(--color-cactus-green)]/15 py-16 lg:py-24">
            <blockquote className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
              "De bureauer der kræver retainer
              <br />
              er bureauer der ikke{" "}
              <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
                stoler
              </span>{" "}
              på deres
              <br />
              eget arbejde."
            </blockquote>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/50">
              — Enes, founder
            </div>
          </div>

          {/* Why now */}
          <section className="mt-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
              Hvorfor nu
            </div>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-[-0.02em] sm:text-5xl">
              Du kan slå mund-til-mund med matematik.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/75">
              <p>
                Hvis du har drevet håndværker-virksomhed i 10+ år har du
                sikkert aldrig brugt penge på marketing. Mund-til-mund har
                været nok. Men det er begrænset til folk der allerede kender
                dig — og dine konkurrenter har nu hver eneste lokal-søgning på
                Google.
              </p>
              <p>
                Meta og Google er ikke for "tech-virksomheder". De er for
                håndværkere der vil have flere kunder uden at bruge timer på
                at jagte dem. Du gør det du er bedst til. Jeg gør resten.
              </p>
            </div>
          </section>

          <div className="mt-24 border-t border-[color:var(--color-cactus-green)]/15 pt-12 text-center">
            <a
              href="/#book"
              className="group inline-flex items-center gap-3 border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)] px-8 py-5 font-display text-lg font-medium text-[color:var(--color-cactus-deep)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_var(--color-cactus-green)]"
            >
              Lad os snakke 20 minutter
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-[color:var(--color-cactus-green)]/10 pb-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--color-cactus-cream)]/45">
        {label}
      </dt>
      <dd className="font-display text-sm font-medium text-[color:var(--color-cactus-cream)]">
        {value}
      </dd>
    </div>
  );
}
