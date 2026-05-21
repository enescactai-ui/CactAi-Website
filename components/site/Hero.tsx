"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32"
    >
      <BackgroundGlow />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-8 lg:gap-12"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium tracking-wide text-[color:var(--color-cactus-green)] backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase">Eneste i Danmark</span>
            <span className="text-[color:var(--color-cactus-cream)]/40">·</span>
            <span className="text-[color:var(--color-cactus-cream)]/70">
              Pay-per-show marketing
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="max-w-5xl font-display text-5xl font-semibold leading-[1.04] tracking-[-0.02em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Du betaler kun{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-[color:var(--color-cactus-lime)] via-[color:var(--color-cactus-green)] to-[color:var(--color-cactus-green)] bg-clip-text text-transparent">
                når kunden
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-[color:var(--color-cactus-lime)] via-[color:var(--color-cactus-green)] to-transparent"
              />
            </span>{" "}
            faktisk møder op.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="max-w-2xl text-pretty text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70 lg:text-xl"
          >
            Komplet AI-marketing for danske håndværkere. Vi kører Meta-ads,
            screener hver lead, og booker dem direkte i din kalender. Ingen
            no-shows. Ingen abonnement. Bare resultater.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-cactus-green)] px-7 py-3.5 text-base font-medium text-[color:var(--color-cactus-deep)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_40px_-8px_rgba(82,183,136,0.6)] active:scale-[0.98]"
            >
              Book gratis strategi-møde
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-cactus-cream)]/15 px-7 py-3.5 text-base font-medium text-[color:var(--color-cactus-cream)] transition-colors hover:border-[color:var(--color-cactus-cream)]/30 hover:bg-[color:var(--color-cactus-cream)]/5"
            >
              Se hvordan det virker
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[color:var(--color-cactus-cream)]/55"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[color:var(--color-cactus-green)]" />
              14-dages garanti
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-[color:var(--color-cactus-cream)]/20 sm:block" />
            <div>5 fremmødte kunder eller pengene tilbage</div>
            <div className="hidden h-1 w-1 rounded-full bg-[color:var(--color-cactus-cream)]/20 sm:block" />
            <div>Ingen binding</div>
          </motion.div>
        </motion.div>

        <ProofStrip />
      </div>
    </section>
  );
}

function ProofStrip() {
  const stats = [
    { value: "0 kr", label: "ved no-show" },
    { value: "14 dage", label: "garanti-periode" },
    { value: "100%", label: "dansk-talende screening" },
    { value: "1:1", label: "eksklusivitet pr. område" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[color:var(--color-cactus-green)]/15 bg-[color:var(--color-cactus-green)]/10 lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[color:var(--color-cactus-deep)]/95 px-6 py-8 backdrop-blur-sm"
        >
          <div className="font-display text-3xl font-semibold tracking-tight text-[color:var(--color-cactus-cream)] sm:text-4xl">
            {stat.value}
          </div>
          <div className="mt-2 text-sm text-[color:var(--color-cactus-cream)]/55">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function BackgroundGlow() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[color:var(--color-cactus-green)]/15 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-[color:var(--color-cactus-lime)]/10 blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--color-cactus-deep)_70%)]" />
    </div>
  );
}
