"use client";

import { motion } from "framer-motion";
import { SERVICES, type Service } from "@/lib/services";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Services() {
  return (
    <section id="ydelser" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            Ydelser
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Fem ydelser.{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              Én partner der tager ansvaret.
            </span>
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-cactus-cream)]/65">
            Website, Google-presence, automation, AI-receptionist og PPSA. Vælg
            én — eller lad os bygge hele maskinen der får dig flere kunder.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.n} service={s} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
        >
          <a
            href="/ydelser"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-cactus-green)] px-7 py-3.5 font-display text-base font-semibold text-[color:var(--color-cactus-deep)] transition-all hover:brightness-110 hover:shadow-[0_8px_30px_-8px_rgba(82,183,136,0.6)]"
          >
            Se alle ydelser i detaljer
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="/#book"
            className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/55 transition-colors hover:text-[color:var(--color-cactus-cream)]"
          >
            Eller book et gratis møde
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s, index }: { service: Service; index: number }) {
  return (
    <motion.a
      href="/ydelser"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--color-cactus-green)]/10 bg-gradient-to-br from-[color:var(--color-cactus-dark)] to-[color:var(--color-cactus-deep)] p-8 transition-all hover:border-[color:var(--color-cactus-green)]/30 hover:shadow-[0_8px_40px_-12px_rgba(82,183,136,0.35)]"
    >
      <div
        aria-hidden
        className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[color:var(--color-cactus-green)]/5 blur-2xl transition-all group-hover:bg-[color:var(--color-cactus-green)]/15"
      />
      <div className="relative flex items-center justify-between">
        <span className="rounded-full border border-[color:var(--color-cactus-green)]/30 bg-[color:var(--color-cactus-green)]/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
          {s.badge}
        </span>
        <span className="font-mono text-sm text-[color:var(--color-cactus-cream)]/30">
          {s.n}
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-2xl font-semibold tracking-tight">
        {s.title}
      </h3>
      <p className="relative mt-3 leading-relaxed text-[color:var(--color-cactus-cream)]/65">
        {s.tagline}
      </p>

      <div className="relative mt-auto pt-8">
        <div className="font-mono text-[11px] leading-relaxed text-[color:var(--color-cactus-cream)]/45">
          {s.price}
        </div>
        <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)] transition-colors group-hover:text-[color:var(--color-cactus-cream)]">
          Læs mere
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </motion.a>
  );
}
