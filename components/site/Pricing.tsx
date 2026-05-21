"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const TIERS = [
  {
    name: "Starter",
    tagline: "Service-jobs under 10.000 kr",
    setup: "5.000 kr",
    perMeeting: "500–1.500 kr",
    adBudget: "Min. 5.000 kr/md",
    bestFor: "Rengøring, basis VVS/EL, mindre håndværker-opgaver",
    features: [
      "Meta + Google ads",
      "AI-kvalificering af leads",
      "Booking direkte i din kalender",
      "Du betaler kun for fremmødte",
      "14-dages garanti — 5 fremmødte eller pengene tilbage",
    ],
    cta: "Start med Starter",
    highlight: false,
  },
  {
    name: "Premium",
    tagline: "Jobs mellem 10.000–50.000 kr",
    setup: "5.000 kr",
    perMeeting: "1.500–3.000 kr",
    adBudget: "Min. 7.500 kr/md",
    bestFor: "Badeværelses-VVS, eltavle-installation, mindre renovationer",
    features: [
      "Alt fra Starter",
      "Højere targeting-præcision",
      "Custom landing-side til din niche",
      "Månedlig optimering",
      "14-dages garanti",
    ],
    cta: "Vælg Premium",
    highlight: true,
  },
  {
    name: "Elite",
    tagline: "Premium-jobs over 50.000 kr",
    setup: "7.500 kr",
    perMeeting: "3.000–4.500 kr",
    adBudget: "Min. 10.000 kr/md",
    bestFor: "Varmepumpe, tagrenovering, fuld bad-reno, B2B-kontrakter",
    features: [
      "Alt fra Premium",
      "Hyper-niche targeting",
      "Eksklusiv lead-flow (ingen overlap)",
      "Direkte adgang til Enes",
      "Månedlig strategisession",
    ],
    cta: "Vælg Elite",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="priser" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            Pricing
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Tre pakker.{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              Nul risiko.
            </span>
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-cactus-cream)]/65">
            Ingen abonnementer. Ingen leads-fees. Du betaler kun når en kunde
            møder op til dit besøg.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier, index) => (
            <Tier key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-[color:var(--color-cactus-cream)]/45"
        >
          Alle priser er ekskl. moms. Ad-budget betales direkte til Meta — går
          aldrig gennem os.
        </motion.p>
      </div>
    </section>
  );
}

function Tier({ tier, index }: { tier: (typeof TIERS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-sm lg:p-10 ${
        tier.highlight
          ? "border-[color:var(--color-cactus-green)]/40 bg-gradient-to-br from-[color:var(--color-cactus-green)]/10 via-[color:var(--color-cactus-dark)] to-[color:var(--color-cactus-deep)] shadow-[0_8px_60px_-20px_rgba(82,183,136,0.45)]"
          : "border-[color:var(--color-cactus-green)]/10 bg-gradient-to-br from-[color:var(--color-cactus-dark)]/70 to-[color:var(--color-cactus-deep)]/70"
      }`}
    >
      {tier.highlight && (
        <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-cactus-green)] px-3 py-1 text-xs font-medium text-[color:var(--color-cactus-deep)]">
          <Sparkles className="h-3 w-3" />
          Mest populær
        </div>
      )}

      <div>
        <h3 className="font-display text-2xl font-semibold tracking-tight">
          {tier.name}
        </h3>
        <p className="mt-2 text-sm text-[color:var(--color-cactus-cream)]/55">
          {tier.tagline}
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <div>
          <div className="font-display text-4xl font-semibold tracking-tight">
            {tier.setup}
          </div>
          <div className="mt-1 text-xs uppercase tracking-wide text-[color:var(--color-cactus-cream)]/45">
            Setup (engang)
          </div>
        </div>
        <div className="rounded-2xl border border-[color:var(--color-cactus-green)]/10 bg-[color:var(--color-cactus-deep)]/40 p-4">
          <div className="text-lg font-semibold text-[color:var(--color-cactus-green)]">
            {tier.perMeeting}
          </div>
          <div className="mt-1 text-xs text-[color:var(--color-cactus-cream)]/55">
            per fremmødt møde
          </div>
        </div>
        <div className="text-xs text-[color:var(--color-cactus-cream)]/45">
          Ad-budget: {tier.adBudget}{" "}
          <span className="text-[color:var(--color-cactus-cream)]/35">
            (betales direkte til Meta)
          </span>
        </div>
      </div>

      <ul className="mt-8 space-y-3 text-sm">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-[color:var(--color-cactus-cream)]/75"
          >
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--color-cactus-green)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-xl border border-[color:var(--color-cactus-green)]/10 bg-[color:var(--color-cactus-deep)]/40 p-4">
        <div className="text-xs uppercase tracking-wide text-[color:var(--color-cactus-cream)]/45">
          Ideel til
        </div>
        <p className="mt-1 text-sm text-[color:var(--color-cactus-cream)]/75">
          {tier.bestFor}
        </p>
      </div>

      <a
        href="#book"
        className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] ${
          tier.highlight
            ? "bg-[color:var(--color-cactus-green)] text-[color:var(--color-cactus-deep)] hover:shadow-[0_8px_30px_-8px_rgba(82,183,136,0.6)]"
            : "border border-[color:var(--color-cactus-cream)]/15 text-[color:var(--color-cactus-cream)] hover:border-[color:var(--color-cactus-green)]/40 hover:bg-[color:var(--color-cactus-green)]/5"
        }`}
      >
        {tier.cta}
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </motion.div>
  );
}
