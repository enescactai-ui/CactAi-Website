/**
 * Infinite horizontal marquee of trust signals.
 *
 * Visually breaks up the page rhythm between Hero and Manifesto, and
 * communicates legitimacy (CVR, location, no fake reviews) without taking
 * up vertical real estate.
 *
 * Implementation: the track contains the item list twice. CSS animates
 * translateX from 0 → -50% so the second copy seamlessly replaces the
 * first. Pause-on-hover lets users read individual items.
 *
 * Server-renderable — no client state needed.
 */

const ITEMS = [
  "CVR 46210689",
  "Greve · Sjælland",
  "1 founder + dansk setter",
  "Ingen falske reviews",
  "14 dages garanti",
  "Pay-per-show",
  "0 kr ved no-show",
  "1:1 eksklusivitet pr. by",
  "Ad-spend direkte til Meta",
  "Faktureret via Billy",
];

export function TrustMarquee() {
  return (
    <section
      aria-label="CactAi trust signaler"
      className="relative overflow-hidden border-y border-[color:var(--color-cactus-green)]/15 bg-[color:var(--color-cactus-dark)]/40 py-5"
    >
      {/* Edge fades — hide the marquee seams */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--color-cactus-deep)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--color-cactus-deep)] to-transparent"
      />

      <div className="group flex w-full overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
          {/* Render the list twice so the loop is seamless */}
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-12"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/55">
                {item}
              </span>
              <span
                aria-hidden
                className="h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-cactus-green)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
