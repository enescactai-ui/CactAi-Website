"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/*
 *  FAQ'en er sidens aerlighedstest. Den er det sidste folk laeser foer de
 *  booker, og den ene ting der adskiller os fra alle andre bureauer er at
 *  vi IKKE lover et tal vi ikke kan holde.
 *
 *  "Kan I garantere resultater" er det vigtigste svar paa hele siden.
 *  Svaret er nej, med vilje, og begrundelsen er selve saelgeren: alle
 *  andre lover fem leads om maaneden, og enhver ejer der er blevet
 *  braendt foer ved godt at det er et kroghook. At sige det hoejt
 *  koeber mere tillid end garantien nogensinde ville.
 *
 *  Skriv aldrig et fast antal kunder eller leads ind her.
 */
const FAQS = [
  {
    q: "Kan I garantere mig et bestemt antal kunder?",
    a: "Nej, og det er et bevidst valg. Vi garanterer at systemet bliver bygget, at det kører, og at hver eneste henvendelse bliver besvaret. Hvor mange der ender med at sige ja afhænger også af dine priser, dit område og hvor hurtigt du selv følger op, og det er ting vi ikke styrer. Alle der lover dig et fast antal kunder uden at kende din forretning, gætter. Din sikkerhed er i stedet at du kan sige op med 30 dages varsel fra dag ét.",
  },
  {
    q: "Har I resultater fra andre kunder I kan vise mig?",
    a: "Ikke nogen færdige endnu, og jeg vil ikke pynte på det. CactAi er startet i 2026, og der kører ét forløb lige nu som ikke er afsluttet. Under Cases kan du se præcis hvad der er bygget, og hvad der stadig mangler. Den dag der er en færdig case med tal du kan efterprøve, kommer den op. Indtil da kan du bedømme mig på to ting: hvad jeg finder i din egen kundeanalyse, og at du kan gå med 30 dages varsel.",
  },
  {
    q: "Hvordan afregner I?",
    a: "Fast beløb om måneden. Ingen provision oveni dine egne priser, og ingen regning der svinger fra måned til måned. Annoncebudgettet betaler du direkte til platformen, det går aldrig gennem os, og vi får aldrig adgang til dit kort.",
  },
  {
    q: "Hvad koster det egentlig?",
    a: "Der er to måder at starte. Hjemmeside og synlighed har ingen opstart og ingen binding. Vil du have opgaver hentet aktivt ind, hedder det Vækstmotoren, og prisen følger omfanget. Vi regner den konkret ud på mødet ud fra dine egne tal, ikke ud fra en prisliste der passer på ingen.",
  },
  {
    q: "Hvor mange opgaver får jeg om måneden?",
    a: "Det varierer meget efter branche, område og budget. Vi regner konkret på det ud fra dine egne tal på mødet, og vi siger nej hvis regnestykket ikke hænger sammen. Det er billigere for os begge at finde ud af det inden, end tre måneder inde.",
  },
  {
    q: "Hvor lang tid går der før det virker?",
    a: "Regn med uger, ikke dage. Systemet skal bygges, annoncerne skal finde ud af hvem de rammer, og de første tal skal ind før vi kan justere. Målet er en jævn strøm af opgaver måned efter måned, ikke ét spring den første uge.",
  },
  {
    q: "Hvor lang er bindingsperioden?",
    a: "Der er ingen. Du kan opsige med 30 dages varsel, fra første dag. Vi bygger forretningen på at du bliver fordi det virker, ikke fordi du er låst inde i en kontrakt.",
  },
  {
    q: "Skal jeg lære nyt software?",
    a: "Nej. Du får hver ny henvendelse direkte på SMS, og bookede aftaler lander i din almindelige kalender, Google eller Outlook. Du arbejder præcis som du plejer.",
  },
  {
    q: "Hvilke brancher arbejder I med?",
    a: "Lokale servicevirksomheder: rengøring, tag, VVS, el, håndværk og klinikker. Systemet er det samme uanset branche. Det der ændrer sig er hvem annoncerne rammer, og hvad der står på hjemmesiden.",
  },
  {
    q: "Hvem ejer hjemmesiden og kontiene?",
    a: "Det gør du. Annoncekonti, hjemmeside, domæne og alle data står i dit navn, også hvis du stopper hos os. Du skal aldrig købe dit eget fra os for at kunne gå.",
  },
  {
    q: "Hvordan betaler jeg?",
    a: "Du får en faktura på mail og betaler med bankoverførsel eller kort. Netto 8 dages betalingsfrist. Ingen autotræk og intet kort gemt hos os.",
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
            De spørgsmål ejere faktisk stiller
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
