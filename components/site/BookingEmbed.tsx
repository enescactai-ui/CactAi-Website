"use client";

import Script from "next/script";

const BOOKING_URL = "https://link.cactaihq.com/widget/booking/NglOO1Sak4rAw7sQDCrI";
const EMBED_SCRIPT = "https://link.cactaihq.com/js/form_embed.js";

/**
 * GoHighLevel booking widget embed.
 *
 * The widget renders an iframe that the form_embed.js script auto-resizes
 * based on its content. Loaded lazyOnload so it doesn't block LCP.
 */
export function BookingEmbed() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-cream)]">
      {/* Loading state — replaced when iframe renders */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[color:var(--color-cactus-cream)] font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-deep)]/40"
      >
        Indlæser kalender...
      </div>

      <iframe
        src={BOOKING_URL}
        title="Book et 20-min strategi-møde med Enes"
        className="relative block w-full border-0"
        style={{ minHeight: 720 }}
        scrolling="no"
        loading="lazy"
        id="PAmr1ASoJSEbIfxx8U52_1779403361589"
      />

      <Script
        src={EMBED_SCRIPT}
        strategy="lazyOnload"
        type="text/javascript"
      />
    </div>
  );
}
