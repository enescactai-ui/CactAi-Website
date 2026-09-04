import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { BRANCHER, getBranche } from "@/lib/brancher";
import { pageMeta, SITE } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/*
 *  Branchesider. Se noten i lib/brancher.ts for hvorfor de findes.
 *
 *  ÉN rute, fire sider, indholdet i en datafil. Alternativet var fire
 *  haandskrevne filer, og de ville vaere ude af trit med hinanden inden
 *  for en maaned. Skal der en femte branche til, er det en post i
 *  BRANCHER og ikke en ny side.
 */

type Props = { params: Promise<{ branche: string }> };

export function generateStaticParams() {
  return BRANCHER.map((b) => ({ branche: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { branche } = await params;
  const b = getBranche(branche);
  if (!b) return { title: "Siden findes ikke" };
  return {
    title: b.metaTitle,
    description: b.metaDesc,
    ...pageMeta(`/flere-kunder/${b.slug}`, b.metaTitle, b.metaDesc),
  };
}

export default async function BranchePage({ params }: Props) {
  const { branche } = await params;
  const b = getBranche(branche);
  if (!b) notFound();

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={[
          { name: "Hjem", url: SITE },
          { name: "Vækstmotoren", url: `${SITE}/ydelser` },
          { name: b.metaTitle, url: `${SITE}/flere-kunder/${b.slug}` },
        ]}
      />

      <main id="main" className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          {/* Hero */}
          <header className="max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
              For lokale {b.navn}er
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
              {b.h1.foer}{" "}
              <span className="text-[color:var(--color-cactus-green)]">
                {b.h1.fremhaevet}
              </span>{" "}
              {b.h1.efter}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65 sm:text-xl">
              {b.lead}
            </p>
            <a
              href="/#book"
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-green)] px-7 py-4 font-display text-base font-semibold text-white transition-all hover:brightness-110"
            >
              Få din lokale kundeanalyse
              <span aria-hidden>→</span>
            </a>
          </header>

          {/* Smerter */}
          <section className="mt-20 lg:mt-28">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
              Genkender du det?
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {b.smerter.map((s, i) => (
                <div
                  key={s.titel}
                  className="rounded-3xl border border-[color:var(--color-cactus-green)]/12 bg-white p-7 shadow-[0_4px_24px_-8px_rgba(13,31,22,0.08)]"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/65">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight">
                    {s.titel}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                    {s.tekst}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Systemet */}
          <section className="mt-20 lg:mt-28">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
              Sådan gør vi det i stedet
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {b.systemet.map((s) => (
                <div
                  key={s.titel}
                  className="rounded-3xl border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/[0.06] p-7"
                >
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-tight">
                    {s.titel}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/70">
                    {s.tekst}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Vaerdi + lokalt */}
          <section className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Hvad er en ny kunde værd for dig?
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                {b.vaerdi}
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Vi arbejder kun i dit område
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                {b.lokalt}
              </p>
              <div className="mt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
                  Det folk søger efter
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {b.soegeord.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[color:var(--color-cactus-green)]/20 bg-white px-3.5 py-1.5 font-mono text-[11px] text-[color:var(--color-cactus-cream)]/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Foerste 30 dage.
              Svarer paa "hvad sker der hvis jeg siger ja", som ellers er
              det stoerste ubesvarede spoergsmaal lige foer en beslutning. */}
          <section className="mt-20 lg:mt-28">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
              Sådan ser de første 30 dage ud
            </h2>
            <ol className="mt-10 space-y-4">
              {b.foerste30.map((t) => (
                <li
                  key={t.naar}
                  className="grid gap-2 rounded-2xl border border-[color:var(--color-cactus-green)]/15 bg-white p-6 sm:grid-cols-[140px_1fr] sm:gap-6 sm:p-7"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
                    {t.naar}
                  </div>
                  <p className="text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/70">
                    {t.hvad}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Ikke for dig */}
          <section className="mt-20 lg:mt-28">
            <div className="rounded-3xl border border-[color:var(--color-cactus-green)]/12 bg-white p-8 shadow-[0_4px_24px_-8px_rgba(13,31,22,0.08)] lg:p-10">
              <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Sig nej hvis
              </h2>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                {b.ikkeForDig.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                Jeg siger hellere nej på et møde end at tage penge for noget
                der ikke kommer til at virke for dig.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 text-center lg:mt-28">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
              Se hvad der er at hente i dit område.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              20 minutter. Du får tallene for hvor mange der søger efter din
              ydelse hvor du bor, hvad dine nærmeste konkurrenter kører med, og
              hvad en ny fast kunde realistisk koster dig at få ind. Du får dem
              med dig, uanset om vi ender med at arbejde sammen.
            </p>
            <a
              href="/#book"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-green)] px-8 py-4 font-display text-base font-semibold text-white transition-all hover:brightness-110"
            >
              Få din lokale kundeanalyse
              <span aria-hidden>→</span>
            </a>
            <div className="mt-8">
              <Link
                href="/ydelser"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/65 underline underline-offset-4 transition-colors hover:text-[color:var(--color-cactus-green)]"
              >
                Se hele systemet
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
