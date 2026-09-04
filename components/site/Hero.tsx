"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Star, Zap } from "lucide-react";
import { trackConversion } from "@/lib/tracking";
import HeroBackground from "./HeroBackground";
import { LeadPhone } from "./LeadPhone";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  /*
   *  Muse-glowet er FJERNET 3. sep 2026, og det aendrer ingenting visuelt.
   *
   *  Det virkede aldrig. glowX gav allerede strengen "50%", og
   *  template-strengen satte endnu et procenttegn paa, saa CSS'en blev
   *  "at 50%% 50%%". Ugyldig, saa browseren smed hele deklarationen vaek
   *  og laget tegnede ingenting. Samtidig laeste den
   *  getBoundingClientRect() ved hver eneste musebevaegelse, hvilket
   *  tvinger layout synkront, plus to spring-loops der kørte for evigt.
   *
   *  Skal glowet tilbage, er det en ny funktion der skal bygges rigtigt,
   *  ikke en genindsaettelse af det her. Det er Enes' beslutning.
   */
  return (
    <section id="top" className="relative isolate overflow-hidden">

      {/*
        Baggrunden foelger indholdets hoejde, den gaetter den ikke.

        Foer havde alle tre lag "h-[98vh] min-h-[780px]", altsaa en fast
        hoejde uafhaengig af hvad der stod ovenpaa. Paa en 390px skaerm blev
        indholdet hoejere end de 780px, og saa faldt tillidsraekken
        ("Fast maanedspris, Ingen provision, Ingen binding") ud over kanten
        og ned paa den hvide baggrund. Der var en synlig vandret soem lige
        under knapperne.

        Nu ligger lagene i en wrapper med inset-0, saa de er praecis lige
        saa hoeje som indholdet, uanset skaerm og uanset hvor meget tekst
        der staar. Paa desktop holder min-h stadig den fulde foelelse.

        Roer ikke inset-0 tilbage til en fast hoejde. Saa er fejlen tilbage,
        bare ved en anden skaermstoerrelse.
      */}
      <div className="relative lg:min-h-[92vh]">
        {/* ── Hero background: full mint-green card like Brainly.AI ── */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(145deg, #e8f8ef 0%, #d0f0e2 40%, #c2ead8 70%, #b8e8d2 100%)",
          }}
        />

        {/* ── Living, video-like animated background (WebGL flowing green light) ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <HeroBackground />
        </div>

        {/* Subtle grid overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31, 125, 88,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31, 125, 88,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-0 lg:px-12 lg:pt-36">

        {/* Live pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--color-cactus-green)]/30 bg-white/70 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-[0.14em] text-[color:var(--color-cactus-green)] backdrop-blur-sm shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-cactus-green)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-cactus-green)]" />
          </span>
          Vækstmotoren · for lokale servicefirmaer
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-12 pb-28 lg:grid-cols-[1fr_480px] lg:gap-16 xl:grid-cols-[1fr_520px]">

          {/* ── LEFT: headline + CTA ── */}
          <div className="relative z-10 max-w-2xl">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="font-display tracking-[-0.035em] leading-[1.12]"
            >
              <Line className="block text-[2.75rem] font-extrabold text-[color:var(--color-cactus-cream)] sm:text-6xl lg:text-7xl">
                Bliv den de ringer til{" "}
              </Line>
              <Line className="mt-1 block text-[2.75rem] font-extrabold sm:text-6xl lg:text-7xl">
                <em className="relative not-italic font-light text-[color:var(--color-cactus-green)]">
                  først
                  <AnimatedUnderline />
                </em>{" "}
                <span className="text-[color:var(--color-cactus-cream)]">i dit område</span>
                <span className="text-[color:var(--color-cactus-green)]">.</span>
              </Line>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              className="mt-7 max-w-lg text-lg leading-[1.65] text-[color:var(--color-cactus-cream)]/65 sm:text-xl"
            >
              De fleste lokale servicefirmaer venter på at telefonen ringer.
              Vi henter opgaverne ind, svarer på under et minut, og lægger dem
              i din kalender.{" "}
              <strong className="font-semibold text-[color:var(--color-cactus-cream)]/85">
                Du møder bare op til arbejdet.
              </strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#book"
                onClick={() => trackConversion("cta_klik", { sted: "hero" })}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-cream)] px-7 py-4 text-base font-semibold text-[color:var(--color-cactus-dark)] shadow-[0_4px_24px_-6px_rgba(13,31,22,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_32px_-6px_rgba(13,31,22,0.45)] active:scale-[0.98]"
              >
                Få din lokale kundeanalyse
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </a>
              <a
                href="#system"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-cream)]/25 bg-white/50 px-6 py-4 text-base font-medium text-[color:var(--color-cactus-cream)]/75 backdrop-blur-sm transition-all hover:bg-white/70 hover:text-[color:var(--color-cactus-cream)]"
              >
                Se hvordan det virker →
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[color:var(--color-cactus-cream)]/65"
            >
              {[
                { icon: Zap, text: "Fast månedspris" },
                { icon: CheckCircle2, text: "Ingen provision" },
                { icon: Star, text: "Ingen binding" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-[color:var(--color-cactus-green)]" />
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: phone product photo + floating badges ── */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="relative hidden lg:block"
          >
            {/* Soft halo behind the phone */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-cactus-green)]/15 blur-3xl" />

            {/* Telefon bygget i CSS, saa teksten altid er skarp og korrekt */}
            <LeadPhone />

            {/* Floating badges */}
            <FloatingBadge
              icon={Zap}
              title="Svar på 60 sek."
              sub="Før konkurrenten når det"
              className="-left-16 top-[18%]"
              delay={1.2}
              floatY={-8}
            />
            <FloatingBadge
              icon={CheckCircle2}
              title="Hver ny opgave besvaret"
              sub="Automatisk, også aften & weekend"
              className="-right-14 bottom-[30%]"
              delay={1.4}
              floatY={8}
            />
            <FloatingBadge
              icon={Star}
              title="Fast månedspris"
              sub="Ingen provision oveni dine priser"
              className="-bottom-4 -left-6"
              delay={1.6}
              floatY={-6}
            />
          </motion.div>
        </div>
      </div>

      </div>

      {/* ── Stats strip ──
          Fire store tal paa en side der bevidst IKKE har et bevis-afsnit
          laeses som resultater, hvis man ikke rammer dem ind. Overskriften
          herunder goer det tydeligt at det er loefter man kan holde mig op
          paa, ikke maalinger fra kunder. Fjern den ikke. */}
      <div className="relative border-t border-[color:var(--color-cactus-green)]/15 bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/65">
            Det her kan du holde mig op på
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[color:var(--color-cactus-green)]/10 lg:grid-cols-4 lg:divide-y-0">
          {[
            { metric: "24/7", note: "også aften og weekend" },
            { metric: "60 sek.", note: "svartid på hver ny opgave" },
            { metric: "Fast", note: "månedspris, ingen provision" },
            { metric: "30 dage", note: "opsigelse, ingen binding" },
          ].map((s, i) => (
            <div
              key={s.metric}
              className="group relative px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Nr. {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-display text-4xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-5xl">
                {s.metric}
              </div>
              <div className="mt-2 text-sm text-gray-500">{s.note}</div>
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[color:var(--color-cactus-green)] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({
  icon: Icon,
  title,
  sub,
  className,
  delay,
  floatY,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  className: string;
  delay: number;
  floatY: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, floatY, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, delay: delay + 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
      }}
      className={`absolute z-20 flex items-center gap-3 rounded-2xl border border-white/90 bg-white px-4 py-3 shadow-[0_8px_32px_-8px_rgba(13,31,22,0.15)] ${className}`}
    >
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-cactus-green)]/12">
        <Icon className="h-4 w-4 text-[color:var(--color-cactus-green)]" />
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-800 whitespace-nowrap">{title}</div>
        <div className="text-[10px] text-gray-400 whitespace-nowrap">{sub}</div>
      </div>
    </motion.div>
  );
}

function Line({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

function AnimatedUnderline() {
  return (
    <motion.svg
      aria-hidden
      width="100%"
      height="12"
      viewBox="0 0 200 12"
      className="absolute -bottom-1 left-0 w-full"
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
        d="M2 7 Q 50 2, 100 5 T 198 7"
        fill="none"
        stroke="var(--color-cactus-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
