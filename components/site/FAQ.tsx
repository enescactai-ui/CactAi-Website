"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    q: "Hvad betyder pay-per-show?",
    a: "Du betaler kun når en kvalificeret kunde faktisk møder op til dit besøg. Hvis de ikke dukker op — koster det dig 0 kr. Vi tjener intet på no-shows, så vi har samme incitament som dig: kun reelle, klare kunder.",
  },
  {
    q: "Hvad hvis det ikke virker?",
    a: "Vi har 14-dages garanti. Hvis vi ikke leverer 5 fremmødte møder inden for de første 14 dage, refunderer vi setup-fee 100%. Ad-spend dækkes ikke, fordi det er din direkte betaling til Meta — ikke til os.",
  },
  {
    q: "Hvad koster det egentlig?",
    a: "Setup starter ved 5.000 kr (engangsbeløb). Per fremmødt møde betaler du 500–4.500 kr afhængigt af pakke og job-størrelse. Ad-budget (5.000–10.000 kr/md) betales direkte til Meta. Vi får aldrig adgang til dit kort.",
  },
  {
    q: "Hvor mange leads får jeg om måneden?",
    a: "Realistisk 25–30 leads/md, hvoraf 10–14 møder fysisk op (de andre er no-shows eller kommer ikke i mål). Det varierer per branche og ad-budget — vi regner konkret på det på vores strategi-møde.",
  },
  {
    q: "Skal jeg lære nyt software?",
    a: "Nej. Du får leads direkte via SMS, og bookede møder lander i din almindelige kalender (Google/Outlook). Du arbejder præcis som du plejer.",
  },
  {
    q: "Hvilke brancher arbejder I med?",
    a: "VVS, elektriker, maler, tømrer, tagdækker, rengøring (privat + erhverv), murer, brolægger, anlægsgartner, varmepumpe-specialister, glarmester, smed. Hvis du er håndværker i Danmark — vi har formentlig en model for dig.",
  },
  {
    q: "Hvordan betaler jeg?",
    a: "Bank-overførsel via Billy (dansk regnskabssoftware). Faktura sendes hver 14. dag. Netto 8 dages betalingsfrist. Ingen amerikanske payment-systemer, ingen card-on-file, ingen autotræk.",
  },
  {
    q: "Hvor lang er bindingsperioden?",
    a: "Ingen lang binding. Du kan opsige med 30 dages varsel efter de første 14 dages garanti-periode. Vi bygger forretningen på resultater, ikke kontrakter.",
  },
];

/**
 * FAQPage JSON-LD schema — gives Google rich results for these questions.
 * Each Q&A becomes an expandable result in search.
 */
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            FAQ
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Spørgsmål andre håndværkere stiller
          </h2>
        </motion.div>

        <div className="mt-16 space-y-3">
          {FAQS.map((faq, index) => (
            <FAQItem key={faq.q} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof FAQS)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="overflow-hidden rounded-2xl border border-[color:var(--color-cactus-green)]/10 bg-[color:var(--color-cactus-dark)]/50 backdrop-blur-sm transition-colors hover:border-[color:var(--color-cactus-green)]/25"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[color:var(--color-cactus-green)]/5 lg:px-8 lg:py-6"
        aria-expanded={open}
      >
        <span className="font-display text-base font-medium tracking-tight lg:text-lg">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-cactus-green)]/10 text-[color:var(--color-cactus-green)]"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-[color:var(--color-cactus-cream)]/65 leading-relaxed lg:px-8 lg:pb-8">
          {faq.a}
        </p>
      </motion.div>
    </motion.div>
  );
}
