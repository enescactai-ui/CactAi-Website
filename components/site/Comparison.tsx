"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Row = {
  feature: string;
  traditional: string;
  cactai: string;
  highlight?: boolean;
};

const ROWS: Row[] = [
  {
    feature: "Pris-model",
    traditional: "Fast retainer 5.000–15.000 kr/md uanset resultater",
    cactai: "Du betaler kun per fremmødt møde",
    highlight: true,
  },
  {
    feature: "Bindingsperiode",
    traditional: "6–12 måneders binding fra dag ét",
    cactai: "Nul binding — 30 dages opsigelsesvarsel",
    highlight: true,
  },
  {
    feature: "Hvis intet virker",
    traditional: "Du har betalt for ingenting. Værsgo.",
    cactai: "Setup refunderes (14-dages garanti)",
    highlight: true,
  },
  {
    feature: "Hvem du taler med",
    traditional: "Account manager #3 du aldrig har mødt",
    cactai: "Enes — direkte. Ringer du, tager jeg den.",
  },
  {
    feature: "Sproget i annoncerne",
    traditional: "Generisk dansk eller engelsk-oversat template",
    cactai: "Skrevet TIL håndværkere AF håndværker-energi",
  },
  {
    feature: "Tracking & rapportering",
    traditional: "PDF-rapport hver måned du ikke læser",
    cactai: "Du ser bookinger live i din kalender",
  },
  {
    feature: "Ad-budget håndtering",
    traditional: "Kører gennem bureauet (10–20% skjult markup)",
    cactai: "Du betaler Meta direkte. 0% markup.",
    highlight: true,
  },
  {
    feature: "Beslutnings-tid",
    traditional: "3 møder + 2 forslag + tilbud → 4 uger",
    cactai: "Ét 20-min kald → du ved samme dag",
  },
];

export function Comparison() {
  return (
    <section
      id="vs"
      className="relative isolate overflow-hidden py-24 lg:py-32"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(82,183,136,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(82,183,136,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
            Sammenligning // 07
          </div>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Hvorfor{" "}
            <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
              95% af bureauer
            </span>{" "}
            ikke kan matche det her.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
            Vi har gjort sammenligningen for dig. Hvis dit nuværende bureau
            scorer bedre end os i en eller flere af rækkerne — bliv hos dem.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mt-16 lg:mt-20"
        >
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_1fr] gap-4 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-0">
            {/* Empty cell for alignment on desktop */}
            <div className="hidden sm:block" />

            <div className="border-b-2 border-[color:var(--color-cactus-cream)]/15 pb-4 text-center sm:pb-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/40">
                Option A
              </div>
              <div className="mt-2 font-display text-lg font-medium text-[color:var(--color-cactus-cream)]/55 sm:text-xl">
                Traditionelt bureau
              </div>
            </div>

            <div className="relative border-b-2 border-[color:var(--color-cactus-green)] pb-4 text-center sm:pb-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Option B
              </div>
              <div className="mt-2 font-display text-lg font-medium text-[color:var(--color-cactus-cream)] sm:text-xl">
                CactAi
              </div>
              {/* Top accent */}
              <div
                aria-hidden
                className="absolute -top-[2px] left-1/2 h-[2px] w-12 -translate-x-1/2 bg-[color:var(--color-cactus-green)]"
              />
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[color:var(--color-cactus-cream)]/8">
            {ROWS.map((row, i) => (
              <Row key={row.feature} row={row} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-start gap-4 border-t border-[color:var(--color-cactus-green)]/15 pt-8 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/45 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>
            Baseret på offentlige prismodeller hos 12 danske markedsføringsbureauer · 2026
          </span>
          <a
            href="/#book"
            className="group inline-flex items-center gap-2 text-[color:var(--color-cactus-green)] transition-colors hover:text-[color:var(--color-cactus-cream)]"
          >
            Vælg Option B
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ row, index }: { row: Row; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
      className={`group grid grid-cols-[1fr_1fr] gap-4 py-6 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-0 ${
        row.highlight
          ? "relative bg-[color:var(--color-cactus-green)]/[0.025]"
          : ""
      }`}
    >
      {/* Feature label */}
      <div className="col-span-2 mb-2 sm:col-span-1 sm:mb-0 sm:py-2 sm:pr-8">
        <div className="font-display text-base font-medium text-[color:var(--color-cactus-cream)] sm:text-lg">
          {row.feature}
        </div>
      </div>

      {/* Traditional column */}
      <div className="flex items-start gap-3 px-2 py-2 sm:px-6">
        <span
          aria-hidden
          className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[color:var(--color-cactus-cream)]/20 text-[color:var(--color-cactus-cream)]/40"
        >
          <X className="h-3 w-3" />
        </span>
        <span className="text-sm leading-relaxed text-[color:var(--color-cactus-cream)]/55 sm:text-base">
          {row.traditional}
        </span>
      </div>

      {/* CactAi column */}
      <div className="flex items-start gap-3 border-l border-[color:var(--color-cactus-green)]/15 px-2 py-2 sm:px-6">
        <span
          aria-hidden
          className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-cactus-green)] text-[color:var(--color-cactus-deep)]"
        >
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
        <span
          className={`text-sm leading-relaxed sm:text-base ${
            row.highlight
              ? "font-medium text-[color:var(--color-cactus-cream)]"
              : "text-[color:var(--color-cactus-cream)]/85"
          }`}
        >
          {row.cactai}
        </span>
      </div>
    </motion.div>
  );
}
