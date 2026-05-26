"use client";

import { motion } from "framer-motion";
import { FounderPhoto } from "./FounderPhoto";

const EASE = [0.16, 1, 0.3, 1] as const;

const TIMELINE = [
  { date: "Jan 2026", event: "CactAi grundlagt. Enkeltmandsvirksomhed. CVR 46210689." },
  { date: "Mar 2026", event: "Første betalende klient: Solrød Rengøring." },
  { date: "Maj 2026", event: "Skalerer pay-per-show til VVS, EL, maler, tagdækker." },
  { date: "Nu", event: "Bygger CactAi til 5 fast tilbagevendende klienter." },
];

const FACTS = [
  ["Navn", "Enes Tokmak"],
  ["Alder", "19"],
  ["Lokation", "Greve, Sjælland"],
  ["Uddannelse", "HHX"],
  ["Startede CactAi", "Januar 2026"],
  ["Sover på", "Aldrig før tirsdag"],
];

export function Founder() {
  return (
    <section id="founder" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* LEFT: Image, brutalist treatment */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative"
            >
              {/* Offset shadow card */}
              <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/40" />

              {/* Photo container */}
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-mid)]">
                <FounderPhoto />
                {/* Subtle green overlay for brand cohesion */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-cactus-deep)]/40 via-transparent to-transparent"
                />
                {/* Corner label */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-[color:var(--color-cactus-deep)]/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)] backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-cactus-green)]" />
                  Founder · 2026
                </div>
              </div>

              {/* Editorial caption below image */}
              <div className="mt-6 flex items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/50">
                <span>Fig. 01 — Enes T.</span>
                <span>Greve, 22.05.2026</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Story */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Mød // founder
              </div>
              <h2 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Jeg er{" "}
                <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
                  ikke
                </span>{" "}
                et bureau.
                <br />
                Jeg er <span className="text-[color:var(--color-cactus-green)]">én fyr</span>.
              </h2>
            </motion.div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-5 text-base leading-relaxed text-[color:var(--color-cactus-cream)]/75"
              >
                <p>
                  <strong className="text-[color:var(--color-cactus-cream)]">
                    Enes Tokmak, 19 år.
                  </strong>{" "}
                  Født og opvokset i Danmark. Læser HHX sideløbende med at jeg
                  driver CactAi — formel business-uddannelse + det praktiske
                  jeg lærer ved at gøre.
                </p>
                <p>
                  Det praktiske lærer jeg fra YouTube, mentorships og bøger fra
                  folk som Alex Hormozi. Skole giver dig teorien; marketing i
                  2026 lærer du ved at gøre.
                </p>
                <p>
                  Da jeg startede CactAi var der INGEN i Danmark der kørte
                  pay-per-show. Alle bureauer kræver retainer, vagt
                  månedsabonnement, "vi kan ikke garantere noget." Det er
                  business-modellen til de bureauer der ikke stoler på deres eget arbejde.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-5 text-base leading-relaxed text-[color:var(--color-cactus-cream)]/75"
              >
                <p>
                  Jeg ringer dine leads selv. Skriver dine ad-copies selv.
                  Sender din faktura selv. Hvis vi laver fejl, så er det MIG du
                  ringer — ikke en support-bot i Manila.
                </p>
                <p>
                  Når CactAi har 10 håndværkere på fast samarbejde, hyrer jeg
                  en setter. Indtil da er det 1-til-1. Det betyder jeg er
                  selektiv om hvem jeg siger ja til.
                </p>
              </motion.div>
            </div>

            {/* Pull quote — breaks the grid */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-12 border-l-4 border-[color:var(--color-cactus-green)] pl-6 lg:mt-16 lg:pl-8"
            >
              <p className="font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-balance text-[color:var(--color-cactus-cream)] sm:text-4xl">
                "Hvis jeg ikke kan finde dig kunder,
                <br />
                <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
                  tjener jeg ikke en krone.
                </span>{" "}
                Det er præcis
                <br />
                sådan det burde være."
              </p>
            </motion.blockquote>

            {/* Facts grid */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-16 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[color:var(--color-cactus-green)]/15 pt-10 sm:grid-cols-3"
            >
              {FACTS.map(([label, value]) => (
                <div key={label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/45">
                    {label}
                  </dt>
                  <dd className="mt-1.5 font-display text-base font-medium text-[color:var(--color-cactus-cream)]">
                    {value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>

        {/* Timeline — full width, breaks below the grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-24 border-t border-[color:var(--color-cactus-green)]/15 pt-16 lg:mt-32 lg:pt-20"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
            Tidslinje // CactAi
          </div>
          <div className="relative mt-10 grid gap-y-12 lg:grid-cols-4 lg:gap-x-10">
            {/* Continuous timeline line — horizontal on desktop, vertical on mobile */}
            <div
              aria-hidden
              className="absolute left-0 top-0 h-full w-[2px] bg-[color:var(--color-cactus-green)]/20 lg:bottom-auto lg:left-0 lg:right-0 lg:top-0 lg:h-[2px] lg:w-full"
            />
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="relative pl-6 lg:pl-0 lg:pt-8"
              >
                {/* Per-cell dot — sits on the continuous line */}
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-3 w-3 -translate-x-[5px] rounded-full bg-[color:var(--color-cactus-green)] ring-4 ring-[color:var(--color-cactus-deep)] lg:left-0 lg:top-0 lg:-translate-x-0 lg:-translate-y-[5px]"
                />

                <div className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-cactus-green)]">
                  {item.date}
                </div>
                <p className="mt-3 font-display text-base leading-snug text-[color:var(--color-cactus-cream)]/80 lg:text-lg">
                  {item.event}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA row — full width below timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-[color:var(--color-cactus-green)]/15 pt-8"
        >
          <a
            href="/om"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)] underline decoration-[color:var(--color-cactus-green)] decoration-2 underline-offset-[6px] transition-colors hover:text-[color:var(--color-cactus-green)]"
          >
            Læs hele historien
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="mailto:enescactai@gmail.com"
              className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/55 transition-colors hover:text-[color:var(--color-cactus-cream)]"
            >
              enescactai@gmail.com
            </a>
            <a
              href="tel:+4591309560"
              className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/55 transition-colors hover:text-[color:var(--color-cactus-cream)]"
            >
              +45 91 30 95 60
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
