"use client";

import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";

type Branche = {
  key: string;
  label: string;
  defaultJobValue: number;
  defaultMeetings: number;
  defaultCloseRate: number;
  tier: "Starter" | "Premium" | "Elite";
  perMeeting: number;
  setup: number;
  adBudget: number;
};

const BRANCHES: Branche[] = [
  {
    key: "rengoering",
    label: "Rengøring",
    defaultJobValue: 40_000,
    defaultMeetings: 12,
    defaultCloseRate: 35,
    tier: "Starter",
    perMeeting: 1_000,
    setup: 5_000,
    adBudget: 5_000,
  },
  {
    key: "vvs",
    label: "VVS (badeværelse/reno)",
    defaultJobValue: 75_000,
    defaultMeetings: 12,
    defaultCloseRate: 30,
    tier: "Premium",
    perMeeting: 2_250,
    setup: 5_000,
    adBudget: 7_500,
  },
  {
    key: "el",
    label: "Elektriker",
    defaultJobValue: 25_000,
    defaultMeetings: 14,
    defaultCloseRate: 35,
    tier: "Premium",
    perMeeting: 2_250,
    setup: 5_000,
    adBudget: 7_500,
  },
  {
    key: "tag",
    label: "Tagdækker",
    defaultJobValue: 120_000,
    defaultMeetings: 10,
    defaultCloseRate: 25,
    tier: "Elite",
    perMeeting: 3_750,
    setup: 7_500,
    adBudget: 10_000,
  },
  {
    key: "varmepumpe",
    label: "Varmepumpe",
    defaultJobValue: 60_000,
    defaultMeetings: 11,
    defaultCloseRate: 30,
    tier: "Elite",
    perMeeting: 3_750,
    setup: 7_500,
    adBudget: 10_000,
  },
  {
    key: "tomrer",
    label: "Tømrer",
    defaultJobValue: 50_000,
    defaultMeetings: 12,
    defaultCloseRate: 30,
    tier: "Premium",
    perMeeting: 2_250,
    setup: 5_000,
    adBudget: 7_500,
  },
];

function formatDKK(value: number): string {
  return new Intl.NumberFormat("da-DK", {
    maximumFractionDigits: 0,
  }).format(value);
}

export function ROICalculator() {
  const [brancheKey, setBrancheKey] = useState(BRANCHES[1].key);
  const branche = useMemo(
    () => BRANCHES.find((b) => b.key === brancheKey) ?? BRANCHES[1],
    [brancheKey]
  );

  const [jobValue, setJobValue] = useState(branche.defaultJobValue);
  const [meetings, setMeetings] = useState(branche.defaultMeetings);
  const [closeRate, setCloseRate] = useState(branche.defaultCloseRate);

  // When branche changes, reset defaults
  const handleBrancheChange = (key: string) => {
    setBrancheKey(key);
    const next = BRANCHES.find((b) => b.key === key);
    if (next) {
      setJobValue(next.defaultJobValue);
      setMeetings(next.defaultMeetings);
      setCloseRate(next.defaultCloseRate);
    }
  };

  const calc = useMemo(() => {
    const closesPerMonth = (meetings * closeRate) / 100;
    const revenuePerMonth = closesPerMonth * jobValue;
    const costPerMonth =
      branche.setup / 6 + meetings * branche.perMeeting + branche.adBudget; // setup amortized over 6 months
    const costFirstMonth =
      branche.setup + meetings * branche.perMeeting + branche.adBudget;
    const profitPerMonth = revenuePerMonth - costPerMonth;
    const roiMultiplier = revenuePerMonth / costPerMonth;
    const yearlyRevenue = revenuePerMonth * 12;
    const yearlyProfit = profitPerMonth * 12;

    return {
      closesPerMonth,
      revenuePerMonth,
      costPerMonth,
      costFirstMonth,
      profitPerMonth,
      roiMultiplier,
      yearlyRevenue,
      yearlyProfit,
    };
  }, [branche, jobValue, meetings, closeRate]);

  return (
    <section id="roi" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            <Calculator className="h-3.5 w-3.5" />
            ROI Beregner
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hvad er det værd{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              for dig?
            </span>
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-cactus-cream)]/65">
            Vælg din branche. Justér tallene. Se hvad PPSA-modellen leverer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid gap-6 lg:grid-cols-5"
        >
          {/* Inputs */}
          <div className="rounded-3xl border border-[color:var(--color-cactus-green)]/10 bg-[color:var(--color-cactus-dark)]/50 p-8 backdrop-blur-sm lg:col-span-2 lg:p-10">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Dine tal
            </h3>

            {/* Branche selector */}
            <div className="mt-8">
              <label className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-cream)]/45">
                Branche
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {BRANCHES.map((b) => (
                  <button
                    key={b.key}
                    type="button"
                    onClick={() => handleBrancheChange(b.key)}
                    className={`rounded-xl border px-3 py-2.5 text-sm transition-all ${
                      b.key === brancheKey
                        ? "border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/15 text-[color:var(--color-cactus-cream)]"
                        : "border-[color:var(--color-cactus-cream)]/10 text-[color:var(--color-cactus-cream)]/65 hover:border-[color:var(--color-cactus-green)]/30 hover:bg-[color:var(--color-cactus-green)]/5"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider: Job value */}
            <SliderField
              label="Gennemsnitlig job-værdi"
              value={jobValue}
              setValue={setJobValue}
              min={5_000}
              max={300_000}
              step={5_000}
              format={(v) => `${formatDKK(v)} kr`}
            />

            {/* Slider: Meetings */}
            <SliderField
              label="Fremmødte møder/md"
              value={meetings}
              setValue={setMeetings}
              min={3}
              max={25}
              step={1}
              format={(v) => `${v} møder`}
            />

            {/* Slider: Close rate */}
            <SliderField
              label="Din close-rate på warm leads"
              value={closeRate}
              setValue={setCloseRate}
              min={10}
              max={60}
              step={5}
              format={(v) => `${v}%`}
            />
          </div>

          {/* Results */}
          <div className="overflow-hidden rounded-3xl border border-[color:var(--color-cactus-green)]/25 bg-gradient-to-br from-[color:var(--color-cactus-green)]/10 via-[color:var(--color-cactus-dark)] to-[color:var(--color-cactus-deep)] p-8 backdrop-blur-sm lg:col-span-3 lg:p-12">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
              <TrendingUp className="h-3.5 w-3.5" />
              Anbefalet pakke: {branche.tier}
            </div>

            {/* Big number */}
            <motion.div
              key={calc.yearlyProfit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              <div className="text-xs uppercase tracking-wide text-[color:var(--color-cactus-cream)]/45">
                Forventet årlig PROFIT
              </div>
              <div className="mt-2 font-display text-5xl font-semibold tracking-tight text-[color:var(--color-cactus-green)] sm:text-6xl lg:text-7xl">
                {formatDKK(Math.round(calc.yearlyProfit))} kr
              </div>
              <div className="mt-2 text-sm text-[color:var(--color-cactus-cream)]/55">
                = {calc.roiMultiplier.toFixed(1)}x ROI på din samlede
                investering
              </div>
            </motion.div>

            {/* Breakdown grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Metric
                label="Closes/md"
                value={calc.closesPerMonth.toFixed(1)}
              />
              <Metric
                label="Revenue/md"
                value={`${formatDKK(Math.round(calc.revenuePerMonth))} kr`}
              />
              <Metric
                label="Profit/md"
                value={`${formatDKK(Math.round(calc.profitPerMonth))} kr`}
                highlight
              />
            </div>

            {/* Cost breakdown */}
            <div className="mt-8 rounded-2xl border border-[color:var(--color-cactus-cream)]/10 bg-[color:var(--color-cactus-deep)]/50 p-5">
              <div className="text-xs uppercase tracking-wide text-[color:var(--color-cactus-cream)]/45">
                Din månedlige cost
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <CostRow
                  label="Setup (amortiseret 6 mdr)"
                  value={`${formatDKK(Math.round(branche.setup / 6))} kr`}
                />
                <CostRow
                  label={`${meetings} fremmødte × ${formatDKK(branche.perMeeting)} kr`}
                  value={`${formatDKK(meetings * branche.perMeeting)} kr`}
                />
                <CostRow
                  label="Ad-budget (direkte til Meta)"
                  value={`${formatDKK(branche.adBudget)} kr`}
                />
                <div className="mt-3 border-t border-[color:var(--color-cactus-cream)]/10 pt-3">
                  <CostRow
                    label="Total/md"
                    value={`${formatDKK(Math.round(calc.costPerMonth))} kr`}
                    bold
                  />
                </div>
              </div>
            </div>

            <a
              href="#book"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-cactus-green)] px-7 py-3.5 text-base font-medium text-[color:var(--color-cactus-deep)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_40px_-8px_rgba(82,183,136,0.6)] active:scale-[0.98]"
            >
              Book et møde — vi regner præcist for dig
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-[color:var(--color-cactus-cream)]/45">
          Tallene er estimater baseret på faktiske benchmarks for danske
          håndværker-brancher. Eksakte resultater varierer med marked, sæson,
          og din lukke-effektivitet.
        </p>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  setValue,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  setValue: (n: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mt-8">
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-cream)]/45">
          {label}
        </label>
        <span className="font-display text-lg font-semibold tracking-tight text-[color:var(--color-cactus-green)]">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[color:var(--color-cactus-cream)]/10 accent-[color:var(--color-cactus-green)]"
        style={{
          background: `linear-gradient(to right, var(--color-cactus-green) 0%, var(--color-cactus-green) ${pct}%, rgba(244,241,232,0.10) ${pct}%, rgba(244,241,232,0.10) 100%)`,
        }}
      />
    </div>
  );
}

function Metric({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? "border-[color:var(--color-cactus-green)]/30 bg-[color:var(--color-cactus-green)]/10"
          : "border-[color:var(--color-cactus-cream)]/10 bg-[color:var(--color-cactus-deep)]/40"
      }`}
    >
      <div className="text-xs uppercase tracking-wide text-[color:var(--color-cactus-cream)]/45">
        {label}
      </div>
      <div className="mt-1 font-display text-xl font-semibold tracking-tight">
        {value}
      </div>
    </div>
  );
}

function CostRow({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-3 ${
        bold ? "font-semibold" : ""
      }`}
    >
      <span
        className={
          bold ? "text-[color:var(--color-cactus-cream)]" : "text-[color:var(--color-cactus-cream)]/65"
        }
      >
        {label}
      </span>
      <span
        className={
          bold ? "text-[color:var(--color-cactus-green)]" : "text-[color:var(--color-cactus-cream)]/85"
        }
      >
        {value}
      </span>
    </div>
  );
}
