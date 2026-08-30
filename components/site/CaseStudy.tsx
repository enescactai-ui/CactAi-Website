"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CASES } from "@/lib/cases";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Forsidens bevis-sektion. Trækker fra lib/cases.ts, så der kun er ét sted at rette. */
export function CaseStudy() {
  const c = CASES.find((x) => x.status !== "eget") ?? CASES[0];
  if (!c) return null;

  return (
    <section id="case" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            Rigtigt arbejde
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {c.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
            {c.teaser}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/[0.06] p-7 text-center"
              >
                <div className="font-display text-4xl font-bold leading-none tracking-tight text-[color:var(--color-cactus-green)]">
                  {m.value}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-cream)]/55">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/cases"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-green)] px-7 py-3.5 font-display text-base font-semibold text-white transition-all hover:brightness-110"
            >
              Se hele forløbet og øvrige cases
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
