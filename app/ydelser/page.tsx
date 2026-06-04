import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { SERVICES, type Service } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ydelser",
  description:
    "Alt CactAi laver: PPSA lead-generation, AI-receptionist, system-integration, websites og Google-presence. Komplet AI-firma for danske håndværkere.",
};

export default function YdelserPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        items={[
          { name: "Hjem", url: "https://cactaihq.com" },
          { name: "Ydelser", url: "https://cactaihq.com/ydelser" },
        ]}
      />
      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Hero */}
          <header className="max-w-4xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
              Ydelser // 2026
            </div>
            <h1 className="mt-6 font-display text-6xl font-medium leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Vi gør{" "}
              <span className="text-[color:var(--color-cactus-green)]">
                5 ting
              </span>
              .{" "}
              <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
                Hver især
              </span>{" "}
              skarpt.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70 sm:text-xl">
              De fleste bureauer siger de laver "alt marketing". Det er kode for
              "vi gør intet godt". CactAi har en kort menu — fordi vi hellere vil
              levere fem ting godt end femten halv-dårligt.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 border-t-2 border-[color:var(--color-cactus-green)] pt-4 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/55">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-cactus-green)]" />
              <span>Komplet AI-firma for danske håndværkere</span>
            </div>
          </header>

          {/* Featured service — full width */}
          {SERVICES.filter((s) => s.featured).map((s) => (
            <FeaturedCard key={s.n} service={s} />
          ))}

          {/* Secondary services — 2x2 grid */}
          <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            {SERVICES.filter((s) => !s.featured).map((s) => (
              <ServiceCard key={s.n} service={s} />
            ))}
          </div>

          {/* Closing CTA */}
          <section className="mt-24 border-t border-[color:var(--color-cactus-green)]/15 pt-16 lg:mt-32 lg:pt-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                  Næste skridt // 06
                </div>
                <h2 className="mt-6 font-display text-4xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Ikke sikker på hvad du har brug for?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
                  Book et 20-min strategi-møde. Vi gennemgår dit firma og siger
                  ærligt hvad der giver mening — også hvis svaret er "ingenting
                  af det vi sælger". Det er gratis. Vi tjener kun penge hvis det
                  rent faktisk er det rigtige for dig.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-5 lg:col-span-5 lg:items-end">
                <a
                  href="/#book"
                  className="inline-flex items-center gap-3 rounded-none border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)] px-7 py-5 font-display text-lg font-medium text-[color:var(--color-cactus-deep)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_var(--color-cactus-green)]"
                >
                  Book strategi-møde
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="tel:+4591309560"
                  className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/55 transition-colors hover:text-[color:var(--color-cactus-cream)]"
                >
                  Eller ring +45 91 30 95 60
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────
   Featured card — large, editorial layout
   ───────────────────────────────────────── */
function FeaturedCard({ service: s }: { service: Service }) {
  return (
    <section className="relative mt-16 lg:mt-24">
      {/* Offset shadow block — brutalist signature */}
      <div
        aria-hidden
        className="absolute -bottom-3 -right-3 h-full w-full border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/15"
      />
      <article className="relative border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-dark)] p-8 sm:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-[color:var(--color-cactus-green)]">
                {s.n}
              </span>
              <span className="rounded-full border border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
                {s.badge}
              </span>
            </div>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {s.title}
            </h2>
            <p className="mt-5 font-display text-xl leading-snug text-[color:var(--color-cactus-cream)]/85 sm:text-2xl">
              {s.tagline}
            </p>
            <p className="mt-6 leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              {s.description}
            </p>
            <ul className="mt-8 space-y-3">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="relative pl-6 text-[color:var(--color-cactus-cream)]/80 before:absolute before:left-0 before:top-[0.65em] before:h-[2px] before:w-3.5 before:bg-[color:var(--color-cactus-green)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <aside className="flex flex-col justify-between gap-8 border-t border-[color:var(--color-cactus-green)]/20 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="space-y-6">
              <Meta label="Ideel for" value={s.idealFor} />
              <Meta label="Pris" value={s.price} accent />
            </div>
            <a
              href={s.cta.href}
              className="inline-flex items-center justify-between gap-3 border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)] px-6 py-4 font-display text-base font-medium text-[color:var(--color-cactus-deep)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0_0_var(--color-cactus-green)]"
            >
              {s.cta.label}
              <span aria-hidden>→</span>
            </a>
          </aside>
        </div>
      </article>
    </section>
  );
}

/* ─────────────────────────────────────────
   Secondary card — compact, grid-friendly
   ───────────────────────────────────────── */
function ServiceCard({ service: s }: { service: Service }) {
  return (
    <article className="group relative flex flex-col border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-dark)]/50 p-8 transition-all hover:border-[color:var(--color-cactus-green)] hover:bg-[color:var(--color-cactus-dark)] lg:p-10">
      {/* Top stripe accent on hover */}
      <div
        aria-hidden
        className="absolute left-0 top-0 h-[3px] w-0 bg-[color:var(--color-cactus-green)] transition-all duration-500 group-hover:w-full"
      />

      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-[color:var(--color-cactus-green)]">
          {s.n}
        </span>
        <span className="rounded-full border border-[color:var(--color-cactus-green)]/30 bg-[color:var(--color-cactus-green)]/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
          {s.badge}
        </span>
      </div>

      <h2 className="mt-6 font-display text-3xl font-medium leading-[1.05] tracking-[-0.02em] lg:text-4xl">
        {s.title}
      </h2>
      <p className="mt-4 font-display text-lg leading-snug text-[color:var(--color-cactus-cream)]/85">
        {s.tagline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-cactus-cream)]/60">
        {s.description}
      </p>

      <ul className="mt-6 space-y-2.5">
        {s.bullets.map((b) => (
          <li
            key={b}
            className="relative pl-5 text-sm text-[color:var(--color-cactus-cream)]/75 before:absolute before:left-0 before:top-[0.6em] before:h-[2px] before:w-3 before:bg-[color:var(--color-cactus-green)]/60"
          >
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-4 pt-8">
        <div className="space-y-3 border-t border-[color:var(--color-cactus-green)]/15 pt-5">
          <Meta label="Ideel for" value={s.idealFor} small />
          <Meta label="Pris" value={s.price} small accent />
        </div>
        <a
          href={s.cta.href}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)] underline decoration-2 underline-offset-[6px] transition-colors hover:text-[color:var(--color-cactus-cream)]"
        >
          {s.cta.label}
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────
   Meta label/value pair
   ───────────────────────────────────────── */
function Meta({
  label,
  value,
  accent,
  small,
}: {
  label: string;
  value: string;
  accent?: boolean;
  small?: boolean;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/45">
        {label}
      </div>
      <div
        className={[
          "mt-1.5",
          small ? "text-sm" : "text-base",
          accent
            ? "font-display font-medium text-[color:var(--color-cactus-cream)]"
            : "text-[color:var(--color-cactus-cream)]/80",
        ].join(" ")}
      >
        {value}
      </div>
    </div>
  );
}
