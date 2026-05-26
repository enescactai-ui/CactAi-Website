import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Footer } from "@/components/site/Footer";
import { FounderPhoto } from "@/components/site/FounderPhoto";
import { Navbar } from "@/components/site/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om CactAi · Enes Tokmak, 19-årig founder",
  description:
    "Mød Enes Tokmak — 19-årig dansker der bygger CactAi. Læs hvorfor PPSA-modellen findes, og hvad det betyder for danske håndværkere der vil have flere kunder uden risiko.",
};

/* Person schema — gives Google explicit founder data (knowledge panel candidate) */
const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://cactaihq.com/om#person",
  name: "Enes Tokmak",
  givenName: "Enes",
  familyName: "Tokmak",
  jobTitle: "Founder",
  nationality: "Danish",
  url: "https://cactaihq.com/om",
  image: "https://cactaihq.com/enes.webp",
  worksFor: { "@id": "https://cactaihq.com/#org" },
  knowsAbout: [
    "Pay-per-show appointment marketing",
    "Meta Ads for danske håndværkere",
    "Lead generation for service-virksomheder",
    "AI-receptionist og automatisering",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greve",
    addressCountry: "DK",
  },
};

export default function OmPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        items={[
          { name: "Hjem", url: "https://cactaihq.com" },
          { name: "Om CactAi", url: "https://cactaihq.com/om" },
        ]}
      />
      <script type="application/ld+json">{JSON.stringify(PERSON_SCHEMA)}</script>
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

          {/* Editorial portrait + opening quote */}
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
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
            <div className="flex flex-col justify-between gap-10 lg:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Princip // 01
              </div>
              <blockquote className="relative">
                <span
                  aria-hidden
                  className="absolute -left-1 -top-10 font-display text-[120px] leading-none text-[color:var(--color-cactus-green)]/15 lg:-top-14 lg:text-[160px]"
                >
                  &ldquo;
                </span>
                <p className="relative font-display text-2xl font-light italic leading-[1.25] tracking-[-0.01em] text-[color:var(--color-cactus-cream)]/85 sm:text-3xl lg:text-[34px]">
                  Den eneste måde at vide om noget virker, er at lade nogen
                  betale for det først.{" "}
                  <span className="not-italic font-medium text-[color:var(--color-cactus-cream)]">
                    Hvis de ikke vil betale,
                  </span>{" "}
                  så virker det ikke.
                </p>
              </blockquote>
              <div className="flex items-center gap-3 border-t border-[color:var(--color-cactus-green)]/15 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/50">
                <span className="h-[2px] w-8 bg-[color:var(--color-cactus-green)]" />
                <span>Enes Tokmak · Founder</span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/75">
              <p>
                Mit navn er <strong className="text-[color:var(--color-cactus-cream)]">Enes Tokmak</strong>. Jeg er 19 år, dansker, og jeg
                driver CactAi solo fra Greve.
              </p>
              <p>
                Jeg læser <strong className="text-[color:var(--color-cactus-cream)]">HHX</strong> sideløbende — formel
                business-uddannelse giver mig fundamentet. Det praktiske lærer
                jeg fra YouTube, mentorships og bøger fra folk som Alex Hormozi.
              </p>
              <p>
                Skolen giver dig teorien. Marketing i 2026 lærer du ved at gøre
                — og ved at have rigtig <em>skin in the game</em>. Det er derfor
                CactAi virker som det virker. De fleste danske bureauer kører
                gamle leveringsmodeller (faste retainere, vagt månedsabonnement,
                "vi kan ikke garantere noget"). Det irriterede mig.
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
              <div className="lg:sticky lg:top-32 rounded-sm border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-dark)]/60 p-7">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                    CactAi // Snapshot
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-cactus-green)] shadow-[0_0_12px_var(--color-cactus-green)]" />
                </div>
                <dl className="mt-7 space-y-5">
                  <Fact label="Grundlagt" value="Januar 2026" />
                  <Fact label="Lokation" value="Greve, Sjælland" />
                  <Fact label="CVR" value="46210689" />
                  <Fact label="Struktur" value="Enkeltmandsvirksomhed" />
                  <Fact label="Team" value="1 founder + dansk setter" />
                  <Fact label="Brancher" value="Håndværkere · DK-wide" />
                  <Fact label="Sprog" value="Dansk + engelsk" />
                </dl>
                <div className="mt-7 border-t border-[color:var(--color-cactus-green)]/15 pt-5">
                  <a
                    href="/#book"
                    className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)] transition-colors hover:text-[color:var(--color-cactus-cream)]"
                  >
                    Book mig
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Big pull quote — editorial magazine style */}
          <figure className="relative mt-24 py-16 lg:py-24">
            {/* Soft gradient-fade dividers — replace the harsh edge-to-edge border */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-cactus-green)]/25 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-cactus-green)]/25 to-transparent"
            />

            {/* Decorative quote mark — anchored top-left, large + faded */}
            <span
              aria-hidden
              className="absolute left-0 top-6 font-display text-[90px] leading-none text-[color:var(--color-cactus-green)]/20 sm:text-[120px] lg:text-[160px]"
            >
              &ldquo;
            </span>

            <blockquote className="relative mx-auto max-w-3xl pl-6 sm:pl-10 lg:pl-14">
              <p className="font-display text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-balance text-[color:var(--color-cactus-cream)] sm:text-4xl lg:text-5xl">
                De bureauer der kræver retainer er bureauer der ikke{" "}
                <span className="italic font-light text-[color:var(--color-cactus-green)]">
                  stoler
                </span>{" "}
                på deres eget arbejde.
              </p>
              <figcaption className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/55">
                <span className="h-[2px] w-8 bg-[color:var(--color-cactus-green)]" />
                <span>Enes Tokmak · Founder</span>
              </figcaption>
            </blockquote>
          </figure>

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

          <div className="relative mt-24 pt-12 text-center before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[color:var(--color-cactus-green)]/25 before:to-transparent">
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
    <div className="border-b border-[color:var(--color-cactus-green)]/10 pb-4 last:border-b-0 last:pb-0">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/40">
        {label}
      </dt>
      <dd className="mt-1.5 font-display text-[15px] font-medium leading-tight text-[color:var(--color-cactus-cream)]">
        {value}
      </dd>
    </div>
  );
}
