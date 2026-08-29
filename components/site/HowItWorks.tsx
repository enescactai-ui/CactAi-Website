"use client";

import { motion } from "framer-motion";
import { CalendarClock, Megaphone, PhoneCall, Wallet } from "lucide-react";

const STEPS = [
  {
    icon: Megaphone,
    step: "01",
    title: "Vi henter kunderne",
    description:
      "Meta-annoncer målrettet kunder i dit område. Du betaler ad-budgettet direkte til Meta, det går ikke gennem os.",
  },
  {
    icon: PhoneCall,
    step: "02",
    title: "AI'en svarer med det samme",
    description:
      "Hvert opkald og lead bliver besvaret på sekunder, døgnet rundt. AI'en kvalificerer og sorterer, så kun de rigtige kunder kommer videre.",
  },
  {
    icon: CalendarClock,
    step: "03",
    title: "Booket i din kalender",
    description:
      "Den kvalificerede kunde bookes automatisk i din kalender. Du gør som du plejer: møder op, giver tilbud, lukker.",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Du betaler kun for resultater",
    description:
      "No-show koster 0 kr. Du betaler kun når en kunde rent faktisk møder op. Så enkelt er det.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-[#e8f5ee] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            Sådan virker det
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Fra annonce til booket kunde
            <br />
            <span className="text-[color:var(--color-cactus-green)]">
              uden at du løfter en finger
            </span>
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-cactus-cream)]/65">
            Du gør det du er bedst til. Vi tager resten.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {STEPS.map((step, index) => (
            <Step key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const Icon = step.icon;
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
      className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-2px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_16px_48px_-8px_rgba(42,157,111,0.18)] lg:p-10"
    >
      {/* Hover bg tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-cactus-green)]/0 to-[color:var(--color-cactus-green)]/0 transition-all duration-500 group-hover:from-[color:var(--color-cactus-green)]/4 group-hover:to-transparent" />
      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[color:var(--color-cactus-green)]/5 blur-2xl transition-all group-hover:bg-[color:var(--color-cactus-green)]/12" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-cactus-green)]/10 text-[color:var(--color-cactus-green)] ring-1 ring-[color:var(--color-cactus-green)]/20 transition-all group-hover:bg-[color:var(--color-cactus-green)]/18 group-hover:ring-[color:var(--color-cactus-green)]/35">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <span className="font-mono text-sm font-medium text-[color:var(--color-cactus-green)]/40">
          {step.step}
        </span>
      </div>

      <h3 className="relative mt-8 font-display text-2xl font-semibold tracking-tight text-gray-900">
        {step.title}
      </h3>
      <p className="relative mt-3 leading-relaxed text-gray-500">
        {step.description}
      </p>
    </motion.div>
  );
}
