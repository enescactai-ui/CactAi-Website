"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const NUMBERS: { v: string; k: string }[] = [
  { v: "5", k: "kunder booket" },
  { v: "< 1 uge", k: "fra start til booket" },
  { v: "0 kr", k: "nye annoncekroner" },
];

export function CaseStudy() {
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
            Rigtig case
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Et rengøringsfirma i Aalborg havde{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              allerede betalt for kunderne.
            </span>{" "}
            De vidste det bare ikke.
          </h2>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] border border-[color:var(--color-cactus-green)]/15 bg-white/60 p-8 backdrop-blur-sm lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
            {/* Story */}
            <div className="space-y-5 text-base leading-relaxed text-[color:var(--color-cactus-cream)]/75">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                  Situationen
                </div>
                <p className="mt-2">
                  Firmaet kørte Facebook-annoncer og fik henvendelser ind. Men
                  størstedelen blev aldrig til noget. Leads landede i indbakken,
                  blev ikke ringet op i tide, og kunden bookede en anden. Ejeren
                  havde reelt betalt for kunder, hun aldrig fangede, og havde
                  skrevet dem af som døde.
                </p>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                  Hvad vi gjorde
                </div>
                <p className="mt-2">
                  Vi gik ind i de gamle leads, dem hun havde opgivet, og
                  kontaktede dem med det samme og personligt. Kvalificerede dem,
                  håndterede bookingen, og sendte kunden videre klar til opgave.
                  Der blev ikke brugt én ny annoncekrone.
                </p>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                  Hvorfor det betyder noget for dig
                </div>
                <p className="mt-2">
                  Får du overhovedet henvendelser i dag, sidder du sandsynligvis
                  på det samme hul. Det er ikke flere leads, der mangler. Det er
                  et system, der fanger dem, du allerede har, inden de
                  forsvinder.
                </p>
              </div>

              <p className="pt-2 text-sm text-[color:var(--color-cactus-cream)]/50">
                Casen står anonymt, fordi vi ikke nævner klienter uden deres
                accept. Firmaet er ægte, tallene er ægte.
              </p>
            </div>

            {/* Numbers */}
            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/[0.06] p-8">
              {NUMBERS.map((n, i) => (
                <motion.div
                  key={n.k}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: EASE }}
                >
                  <div className="font-display text-4xl font-bold leading-none tracking-tight text-[color:var(--color-cactus-green)] sm:text-5xl">
                    {n.v}
                  </div>
                  <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/55">
                    {n.k}
                  </div>
                </motion.div>
              ))}

              <a
                href="/#book"
                className="group mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-cactus-green)] px-6 py-3.5 font-display text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Se om du har samme hul
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
