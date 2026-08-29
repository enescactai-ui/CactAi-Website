"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FounderPhoto } from "./FounderPhoto";

const EASE = [0.16, 1, 0.3, 1] as const;

const TIMELINE = [
  { date: "2026", event: "CactAi grundlagt på én idé: du skal betale for resultater, ikke for tomme løfter." },
  { date: "2026", event: "Første faste klient i drift, med rigtige resultater på bordet." },
  { date: "Nu", event: "Vækstmotoren rulles ud til flere faste klienter i hele landet." },
];

const FACTS: [string, string][] = [
  ["Grundlægger", "Enes Tokmak"],
  ["Grundlagt", "2026"],
  ["Base", "Greve, Sjælland"],
  ["Fokus", "Lokale servicevirksomheder"],
];

export function Founder() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="founder" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Photo — clickable, opens the story */}
          <div className="lg:col-span-5">
            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="group relative block w-full max-w-md text-left"
              aria-label="Åbn Om os"
            >
              <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-mid)]">
                <FounderPhoto />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-cactus-deep)]/55 via-transparent to-transparent"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 bg-[color:var(--color-cactus-deep)]/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)] backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-cactus-green)]" />
                    Om os
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-cactus-green)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Klik for historien →
                  </span>
                </div>
              </div>
            </motion.button>
          </div>

          {/* Compact intro */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Om // CactAi
              </div>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.0] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Ikke et bureau.{" "}
                <span className="text-[color:var(--color-cactus-green)]">
                  En partner.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
                Vi er ikke endnu et bureau der forsvinder når kontrakten er
                skrevet under. Vi bygger systemet der henter dine kunder og
                sørger for, at ingen af dem går tabt, og vi tager kun de klienter
                vi ved vi kan levere for.
              </p>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-cream)] px-6 py-3.5 font-display text-base font-semibold text-[color:var(--color-cactus-deep)] shadow-[0_4px_24px_-6px_rgba(13,31,22,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Se vores historie
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Story modal ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-[color:var(--color-cactus-deep)]/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[color:var(--color-cactus-green)]/20 bg-white p-8 shadow-[0_40px_120px_-30px_rgba(12,36,23,0.5)] sm:p-10"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Luk"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-cactus-green)]/10 text-[color:var(--color-cactus-cream)]/70 transition-colors hover:bg-[color:var(--color-cactus-green)]/20 hover:text-[color:var(--color-cactus-cream)]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Om CactAi
              </div>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-[color:var(--color-cactus-cream)] sm:text-4xl">
                Historien bag
              </h3>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-cactus-cream)]/75">
                <p>
                  <strong className="text-[color:var(--color-cactus-cream)]">
                    CactAi blev grundlagt i 2026 af Enes Tokmak
                  </strong>{" "}
                  med én simpel idé: du skal ikke betale et bureau et
                  fast beløb hver måned for tomme løfter. De skal betale for
                  resultater, og aldrig miste en kunde igen.
                </p>
                <p>
                  Vi bygger vækstsystemer der henter kunderne med annoncer og
                  sørger for at hvert lead får svar på sekunder, døgnet rundt.
                  Så du bare møder op til arbejdet.
                </p>
                <p>
                  Ringer du til os, får du fat i et menneske der faktisk kender
                  din konto, ikke en support-bot i Manila. Vi tager kun de
                  klienter vi ved vi kan levere for, og siger nej hvis vi ikke
                  kan.
                </p>
              </div>

              <blockquote className="mt-8 border-l-4 border-[color:var(--color-cactus-green)] pl-5">
                <p className="font-display text-xl font-medium leading-snug text-[color:var(--color-cactus-cream)] sm:text-2xl">
                  "Kan vi ikke finde dig kunder, tjener vi ikke en krone. Præcis
                  sådan burde det være."
                </p>
              </blockquote>

              {/* Timeline */}
              <div className="mt-8 space-y-4 border-t border-[color:var(--color-cactus-green)]/15 pt-6">
                {TIMELINE.map((item) => (
                  <div key={item.event} className="flex gap-4">
                    <span className="mt-0.5 w-14 flex-shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-cactus-green)]">
                      {item.date}
                    </span>
                    <span className="text-sm leading-relaxed text-[color:var(--color-cactus-cream)]/75">
                      {item.event}
                    </span>
                  </div>
                ))}
              </div>

              {/* Facts */}
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[color:var(--color-cactus-green)]/15 pt-6">
                {FACTS.map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/45">
                      {label}
                    </dt>
                    <dd className="mt-1 font-display text-base font-medium text-[color:var(--color-cactus-cream)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[color:var(--color-cactus-green)]/15 pt-6">
                <a
                  href="/#book"
                  onClick={() => setOpen(false)}
                  className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-cactus-green)] px-6 py-3 font-display text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  Book et møde
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </a>
                <a
                  href="mailto:enescactai@gmail.com"
                  className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-cactus-cream)]/55 transition-colors hover:text-[color:var(--color-cactus-cream)]"
                >
                  enescactai@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
