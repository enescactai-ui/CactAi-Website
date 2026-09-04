import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { LIVE_CASES, UPCOMING_CASES } from "@/lib/cases";
import { pageMeta, SITE } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  ...pageMeta("/cases", "Cases · Udvalgt arbejde", "Gennemgåede forløb fra problem til resultat. Hvad der blev bygget, hvad det gjorde, og hvad der stadig er i gang."),
  title: "Cases · Udvalgt arbejde",
  description:
    "Gennemgåede forløb: hjemmeside, Google-tilstedeværelse, annoncer og automatisk opfølgning for danske virksomheder."
};


/* Omfang. Kun tal der kan taelles i mapperne. Ingen skoen, ingen afrunding opad. */
const SCOPE = [
  { v: "3", l: "hjemmesider bygget", d: "19 sider i alt, plus denne" },
  { v: "14", l: "annoncer produceret", d: "flere formater per kampagne" },
  { v: "2", l: "CRM-systemer sat op", d: "med automatiske workflows" },
  { v: "8", l: "sider reddet", d: "fra et hacket domæne" },
];

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
      <Breadcrumb
        items={[
          { name: "Hjem", url: SITE },
          { name: "Cases", url: `${SITE}/cases` },
        ]}
      />
      <main id="main" className="flex-1">
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
              {LIVE_CASES.map((c, i) => (
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
                      /* Foerste kort er over folden og er sidens LCP-element.
                         Uden priority indlaeses det dovent, og Next skriver en
                         advarsel om det. Resten maa gerne vente. */
                      priority={i === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/65">
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
                          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--color-cactus-cream)]/65">
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

        {/* Under opbygning. Laaste kort, ingen tal, ingen detaljeside. */}
        {UPCOMING_CASES.length > 0 && (
          <section className="pb-16 lg:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-cactus-green)] opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-cactus-green)]" />
                </span>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                  Under opbygning
                </h2>
              </div>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/60">
                Forløb der er i gang. Der står ingen tal her, fordi der ikke er
                nogen endnu. De kommer når arbejdet er færdigt.
              </p>

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {UPCOMING_CASES.map((c) => (
                  <div
                    key={c.slug}
                    aria-disabled="true"
                    className="relative overflow-hidden rounded-2xl border border-dashed border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-green)]/[0.03] p-7"
                  >
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/65">
                      <span>
                        {c.client} · {c.region}
                      </span>
                      <span className="rounded-full border border-[color:var(--color-cactus-green)]/25 px-2.5 py-0.5 text-[color:var(--color-cactus-green)]">
                        I gang
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold leading-tight tracking-tight text-[color:var(--color-cactus-cream)]/80 sm:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                      {c.teaser}
                    </p>

                    <div className="mt-6 grid gap-x-8 gap-y-5 border-t border-[color:var(--color-cactus-green)]/10 pt-5 sm:grid-cols-2">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-green)]">
                          Klaret
                        </div>
                        <ul className="mt-3 space-y-2">
                          {c.progress.done.map((t) => (
                            <li
                              key={t}
                              className="relative pl-5 text-[14px] leading-snug text-[color:var(--color-cactus-cream)]/70"
                            >
                              <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-[color:var(--color-cactus-green)]" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-cream)]/65">
                          Mangler
                        </div>
                        <ul className="mt-3 space-y-2">
                          {c.progress.pending.map((t) => (
                            <li
                              key={t}
                              className="relative pl-5 text-[14px] leading-snug text-[color:var(--color-cactus-cream)]/65"
                            >
                              <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full border border-[color:var(--color-cactus-cream)]/30" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-[color:var(--color-cactus-green)]/10">
                      <div className="h-full w-1/3 animate-pulse rounded-full bg-[color:var(--color-cactus-green)]/50 motion-reduce:animate-none" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Omfang */}
        <section className="border-t border-[color:var(--color-cactus-green)]/12 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="max-w-2xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Omfang
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Hvad der er bygget indtil nu.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SCOPE.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-[color:var(--color-cactus-green)]/15 bg-white/40 p-6"
                >
                  <div className="font-display text-4xl font-bold leading-none tracking-tight text-[color:var(--color-cactus-green)]">
                    {s.v}
                  </div>
                  <div className="mt-3 font-display text-[15px] font-semibold tracking-tight">
                    {s.l}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                    {s.d}
                  </div>
                </div>
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
              Få din lokale kundeanalyse
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
