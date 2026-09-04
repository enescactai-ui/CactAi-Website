import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { LIVE_CASES, getCase } from "@/lib/cases";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LIVE_CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return { title: "Case ikke fundet" };
  const title = c.status === "eget" ? c.title : `${c.client}, ${c.region} · Case`;
  return {
    title,
    description: c.teaser,
    ...pageMeta(`/cases/${c.slug}`, title, c.teaser),
  };
}

function Block({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div>
      {/* h2, ikke div. Foer havde "Udfordringen", "Hvad jeg gjorde" og
          "Leveret" ingen overskrift overhovedet, saa siden havde ingen
          disposition mellem h1 og "Naeste case". */}
      <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
        {label}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((t) => (
          <li
            key={t}
            className="relative pl-5 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/72"
          >
            <span className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-[color:var(--color-cactus-green)]" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const idx = LIVE_CASES.findIndex((x) => x.slug === c.slug);
  const other = LIVE_CASES[(idx + 1) % LIVE_CASES.length];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={[
          { name: "Hjem", url: "https://www.cactaihq.com" },
          { name: "Cases", url: "https://www.cactaihq.com/cases" },
          { name: c.title, url: `https://www.cactaihq.com/cases/${c.slug}` },
        ]}
      />
      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="border-b border-[color:var(--color-cactus-green)]/12 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <Link
              href="/cases"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-green)] hover:underline"
            >
              ← Alle cases
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/65">
              <span>
                {c.client} · {c.region} · {c.year}
              </span>
              {c.status !== "afsluttet" && (
                <span className="rounded-full bg-[color:var(--color-cactus-green)]/12 px-2.5 py-0.5 text-[color:var(--color-cactus-green)]">
                  {c.status === "eget" ? "Eget projekt, ikke en kundecase" : "Løbende samarbejde"}
                </span>
              )}
            </div>

            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {c.title}
            </h1>

            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-5 border-t border-[color:var(--color-cactus-green)]/12 pt-8">
              {c.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-3xl font-bold tracking-tight text-[color:var(--color-cactus-green)] sm:text-4xl">
                    {m.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--color-cactus-cream)]/65">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Udfordring og løsning */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto grid max-w-4xl gap-12 px-6 sm:grid-cols-2 lg:px-12">
            <Block label="Udfordringen" items={c.challenge} />
            <Block label="Hvad jeg gjorde" items={c.solution} />
          </div>
        </section>

        {/* Billeder */}
        <section className="pb-16 lg:pb-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {c.images.map((img) => (
                <figure
                  key={img.src}
                  className="overflow-hidden rounded-xl border border-[color:var(--color-cactus-green)]/12 bg-[color:var(--color-cactus-green)]/5"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--color-cactus-cream)]/65">
                    {img.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Leverancer */}
        <section className="border-t border-[color:var(--color-cactus-green)]/12 py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <Block label="Leveret" items={c.delivered} />

            {c.note && (
              <div className="mt-10 rounded-xl border-l-[3px] border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/[0.06] px-6 py-5">
                <p className="text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/75">
                  {c.note}
                </p>
              </div>
            )}

            {c.liveUrl && (
              <a
                href={c.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-green)] hover:underline"
              >
                Se siden live →
              </a>
            )}
          </div>
        </section>

        {/* Næste case */}
        {other && (
          <section className="border-t border-[color:var(--color-cactus-green)]/12 py-16">
            <div className="mx-auto max-w-4xl px-6 lg:px-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
                Næste case
              </div>
              <Link
                href={`/cases/${other.slug}`}
                className="group mt-4 block"
              >
                <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-[color:var(--color-cactus-green)] sm:text-3xl">
                  {other.title}
                </h2>
                <span className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-green)]">
                  Læs forløbet →
                </span>
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
