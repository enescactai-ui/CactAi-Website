"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Guarantee() {
  return (
    <section id="garanti" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Dark guarantee card — intentional, full-width, not a random island */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-3xl bg-[#0d1f16] p-10 lg:p-16"
        >
          {/* Ambient glow blobs */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[color:var(--color-cactus-green)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[color:var(--color-cactus-green)]/10 blur-3xl" />
          {/* Noise grain */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/35 bg-[color:var(--color-cactus-green)]/12 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
                <ShieldCheck className="h-3.5 w-3.5" />
                14-dages garanti
              </div>

              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
                Leverer vi ikke 5 fremmødte på 14 dage —{" "}
                <span className="text-[color:var(--color-cactus-green)]">
                  får du pengene tilbage
                </span>
                .
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/65">
                Vi tjener kun penge når dine kunder faktisk møder op. Hvis
                modellen ikke virker for dig, får du setup-fee&apos;en fuldt
                refunderet. Ingen smålig snak, ingen klausuler.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Skriftlig garanti i kontrakten",
                  "Refundering inden 14 dage efter anmodning",
                  "Ingen binding ud over de 14 dage",
                  "Ad-spend går direkte til Meta — aldrig gennem os",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[color:var(--color-cactus-green)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-cactus-green)] px-7 py-4 font-semibold text-white shadow-[0_4px_20px_-4px_rgba(42,157,111,0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_-4px_rgba(42,157,111,0.7)]"
                >
                  Book gratis møde
                </a>
              </div>
            </div>

            {/* Right: big guarantee badge */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.85, opacity: 0, rotate: -5 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE }}
                className="relative"
              >
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-[color:var(--color-cactus-green)]/20 scale-110" />
                <div className="absolute inset-0 rounded-full border border-[color:var(--color-cactus-green)]/10 scale-125" />

                <div className="flex h-72 w-72 flex-col items-center justify-center rounded-full border-2 border-[color:var(--color-cactus-green)]/40 bg-gradient-to-br from-[color:var(--color-cactus-green)]/20 to-[color:var(--color-cactus-green)]/5">
                  <ShieldCheck
                    className="h-16 w-16 text-[color:var(--color-cactus-green)]"
                    strokeWidth={1.25}
                  />
                  <div className="mt-4 font-display text-6xl font-extrabold tracking-tight text-white">
                    0 kr
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                    ved no-show
                  </div>
                </div>

                {/* Orbiting detail badges */}
                <div className="absolute -top-4 -right-4 rounded-xl border border-[color:var(--color-cactus-green)]/30 bg-[#162d1e] px-3 py-2 text-xs">
                  <span className="font-semibold text-white">14 dage</span>
                  <span className="ml-1 text-white/50">garanti</span>
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-xl border border-[color:var(--color-cactus-green)]/30 bg-[#162d1e] px-3 py-2 text-xs">
                  <span className="font-semibold text-[color:var(--color-cactus-green)]">5+</span>
                  <span className="ml-1 text-white/50">fremmødte</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
