"use client";

import { motion } from "framer-motion";
import { CalendarClock, Megaphone, PhoneCall, Wallet } from "lucide-react";

const STEPS = [
  {
    icon: Megaphone,
    step: "01",
    title: "Vi annoncerer",
    description:
      "Meta- og Google-ads målrettet villaejere i dit område. Du betaler ad-spend direkte til Meta — det går ikke gennem os.",
  },
  {
    icon: PhoneCall,
    step: "02",
    title: "Vi screener hver lead",
    description:
      "Vores danske setter ringer hver lead inden for 5 minutter. Kvalificerer scope, timeline, budget. Kun reelle kunder kommer videre.",
  },
  {
    icon: CalendarClock,
    step: "03",
    title: "Du får mødet",
    description:
      "Den kvalificerede kunde bookes direkte i din kalender. Du gør som du plejer — møder op, giver tilbud, lukker.",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Du betaler kun ved fremmøde",
    description:
      "Faktureres bi-ugentligt via Billy + bank-overførsel. Hvis kunden ikke møder op? Du betaler 0 kr. Så enkelt er det.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 lg:py-32">
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
            Fra ad-klik til fremmødt kunde
            <br />
            <span className="text-[color:var(--color-cactus-green)]">
              uden du løfter en finger
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
      className="group relative overflow-hidden rounded-3xl border border-[color:var(--color-cactus-green)]/10 bg-gradient-to-br from-[color:var(--color-cactus-dark)] to-[color:var(--color-cactus-deep)] p-8 transition-all hover:border-[color:var(--color-cactus-green)]/25 hover:shadow-[0_8px_40px_-12px_rgba(82,183,136,0.35)] lg:p-10"
    >
      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[color:var(--color-cactus-green)]/5 blur-2xl transition-all group-hover:bg-[color:var(--color-cactus-green)]/15" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-cactus-green)]/10 text-[color:var(--color-cactus-green)] ring-1 ring-[color:var(--color-cactus-green)]/20">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <span className="font-mono text-sm text-[color:var(--color-cactus-cream)]/30">
          {step.step}
        </span>
      </div>

      <h3 className="relative mt-8 font-display text-2xl font-semibold tracking-tight">
        {step.title}
      </h3>
      <p className="relative mt-3 text-[color:var(--color-cactus-cream)]/65 leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}
