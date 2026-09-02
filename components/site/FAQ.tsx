"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    q: "Hvordan afregner I?",
    a: "Fast beløb om måneden, ingen provision og ingen binding. Du ved præcis hvad det koster, uanset hvor mange opgaver der kommer ind. Annoncebudgettet betaler du direkte til Google eller Meta, det går aldrig gennem os.",
  },
  {
    q: "Hvad hvis det ikke virker?",
    a: "Får du ikke mindst 5 kvalificerede henvendelser i den første måned annoncerne kører, får du månedens honorar tilbage. En henvendelse tæller når den ligger inden for din aftalte målgruppe, har reel kontaktinfo og svarer på opfølgning. Annoncebudgettet dækkes ikke, fordi det er din direkte betaling til platformen, ikke til os.",
  },
  {
    q: "Hvad koster det egentlig?",
    a: "Der er to måder at starte. Hjemmeside og Google har ingen opstart og ingen binding. Vil du have kunder hentet aktivt ind med annoncer, hedder det Vækstmotoren. Prisen afhænger af omfang og mål, og vi regner den konkret ud på et kort møde, ikke ud fra en fast liste. Annoncebudgettet betaler du direkte til Meta, vi får aldrig adgang til dit kort.",
  },
  {
    q: "Hvor mange leads får jeg om måneden?",
    a: "Det varierer meget efter branche, område og annoncebudget, og alle der giver dig et fast tal uden at kende din forretning gætter. Vi regner konkret på det ud fra dine egne tal på strategi-mødet, og vi siger nej hvis regnestykket ikke hænger sammen.",
  },
  {
    q: "Skal jeg lære nyt software?",
    a: "Nej. Du får leads direkte via SMS, og bookede møder lander i din almindelige kalender (Google/Outlook). Du arbejder præcis som du plejer.",
  },
  {
    q: "Hvilke brancher arbejder I med?",
    a: "Vi arbejder med servicevirksomheder og mindre virksomheder generelt: rengøring, VVS, el, håndværk, klinikker, og virksomheder der sælger online. Systemet er det samme, uanset branche. Det der ændrer sig, er hvem annoncerne rammer, og hvad der står på hjemmesiden."
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
            Spørgsmål andre ejere stiller
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
