import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { CASES } from "@/lib/cases";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cases · Udvalgt arbejde",
  description:
    "Gennemgåede forløb: hjemmeside, Google-tilstedeværelse, annoncer og automatisk opfølgning for danske virksomheder."
};

const PROCESS = [
  {
    n: "01",
    t: "Vi finder ud af hvor kunderne forsvinder",
    d: "Næsten altid er det ikke antallet af henvendelser der er problemet, men hvad der sker med dem bagefter. Vi begynder med at måle det, inden vi bruger en krone på annoncer.",
  },
  {
    n: "02",
    t: "Vi bygger det de bliver fundet på",
    d: "Hjemmeside skrevet til lokal søgning, og Google-profil sat rigtigt op. Det er den del der bliver ved med at virke, også når annoncebudgettet stopper.",
  },
  {
    n: "03",
    t: "Vi sørger for at ingen henvendelse bliver liggende",
    d: "Automatisk svar til kunden og besked til ejeren i samme sekund. Det er den billigste forbedring der findes, og den de fleste springer over.",
  },
  {
    n: "04",
    t: "Først derefter køber vi trafik",
    d: "Annoncer giver kun mening når resten står. Annoncebudgettet betales direkte til platformen med jeres eget kort, aldrig gennem os.",
  },
];

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative border-b border-[color:var(--color-cactus-green)]/12 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
              Cases
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Udvalgt{" "}
              <span className="text-[color:var(--color-cactus-green)]">
                arbejde.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              Forløb gennemgået fra problem til resultat. Klienter står anonymt,
              fordi vi ikke nævner navne uden at spørge først. Virksomhederne og
              tallene er ægte.
            </p>
          </div>
        </section>

        {/* Case-oversigt */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-2">
              {CASES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-cactus-green)]/15 bg-white/50 transition-all hover:border-[color:var(--color-cactus-green)]/40 hover:shadow-[0_20px_50px_-24px_rgba(13,31,22,0.28)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-cactus-green)]/5">
                    <Image
                      src={c.images[0].src}
                      alt={c.images[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/45">
                      <span>
                        {c.client} · {c.region}
                      </span>
                      {c.status !== "afsluttet" && (
                        <span className="rounded-full bg-[color:var(--color-cactus-green)]/12 px-2.5 py-0.5 text-[color:var(--color-cactus-green)]">
                          {c.status === "eget" ? "Eget projekt" : "Løbende"}
                        </span>
                      )}
                    </div>

                    <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight">
                      {c.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                      {c.teaser}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-[color:var(--color-cactus-green)]/10 pt-5">
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-xl font-bold tracking-tight text-[color:var(--color-cactus-green)]">
                            {m.value}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--color-cactus-cream)]/45">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-green)]">
                      Læs hele forløbet →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sådan arbejder jeg */}
        <section className="border-t border-[color:var(--color-cactus-green)]/12 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="max-w-2xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Sådan arbejder jeg
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Rækkefølgen betyder mere end værktøjerne.
              </h2>
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {PROCESS.map((p) => (
                <div key={p.n} className="flex gap-5">
                  <div className="font-mono text-sm font-bold text-[color:var(--color-cactus-green)]">
                    {p.n}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {p.t}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                      {p.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[color:var(--color-cactus-green)]/12 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Har I det samme hul?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[color:var(--color-cactus-cream)]/65">
              De fleste virksomheder mangler ikke henvendelser. De mangler et
              system der fanger dem, de allerede har.
            </p>
            <a
              href="/#book"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-green)] px-8 py-4 font-display text-base font-semibold text-white transition-all hover:brightness-110"
            >
              Book et gratis møde
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
