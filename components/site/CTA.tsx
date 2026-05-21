"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export function CTA() {
  return (
    <section id="book" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-[color:var(--color-cactus-green)]/25 bg-gradient-to-br from-[color:var(--color-cactus-green)]/15 via-[color:var(--color-cactus-mid)] to-[color:var(--color-cactus-deep)] p-10 text-center lg:p-20"
        >
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute -top-20 left-1/4 h-60 w-60 rounded-full bg-[color:var(--color-cactus-lime)]/40 blur-3xl" />
            <div className="absolute -bottom-20 right-1/4 h-60 w-60 rounded-full bg-[color:var(--color-cactus-green)]/40 blur-3xl" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/30 bg-[color:var(--color-cactus-deep)]/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)] backdrop-blur-sm">
            <CalendarDays className="h-3.5 w-3.5" />
            Gratis 20-min strategi-møde
          </div>

          <h2 className="mt-6 mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Klar til at få kunder{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              uden risiko?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/75">
            Book et 20-min strategi-møde. Vi regner konkret på hvad det
            betyder for din forretning, og du beslutter selv om det giver
            mening.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://calendly.com/cactai/book"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-cactus-green)] px-8 py-4 text-base font-medium text-[color:var(--color-cactus-deep)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_40px_-8px_rgba(82,183,136,0.6)] active:scale-[0.98]"
            >
              Find en tid der passer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+4591309560"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-cactus-cream)]/20 px-8 py-4 text-base font-medium text-[color:var(--color-cactus-cream)] transition-colors hover:border-[color:var(--color-cactus-cream)]/40 hover:bg-[color:var(--color-cactus-cream)]/5"
            >
              Eller ring +45 91 30 95 60
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[color:var(--color-cactus-cream)]/55">
            <span>Intet salgspres</span>
            <span className="hidden h-1 w-1 rounded-full bg-[color:var(--color-cactus-cream)]/30 sm:block" />
            <span>Konkret regneeksempel for dit firma</span>
            <span className="hidden h-1 w-1 rounded-full bg-[color:var(--color-cactus-cream)]/30 sm:block" />
            <span>20 minutter — så ved du</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
