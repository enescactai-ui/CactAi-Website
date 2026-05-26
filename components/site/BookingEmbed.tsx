"use client";

import Script from "next/script";

// NOTE: We use GHL's platform domain (api.leadconnectorhq.com) instead of the
// white-label link.cactaihq.com because the CNAME for link.cactaihq.com isn't
// configured in DNS yet. Same widget, same booking flow — only the URL inside
// the iframe differs. Swap back to link.cactaihq.com once the CNAME is live
// and verified in GHL (Settings → Domains).
const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/NglOO1Sak4rAw7sQDCrI";
const EMBED_SCRIPT = "https://api.leadconnectorhq.com/js/form_embed.js";

/**
 * GoHighLevel booking widget embed.
 *
 * The widget renders an iframe that the form_embed.js script auto-resizes
 * based on its content. Loaded lazyOnload so it doesn't block LCP.
 */
export function BookingEmbed() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-cream)]"
      style={{ height: 720 }}
    >
      {/* Loading state — sits below iframe, visible until widget paints */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[color:var(--color-cactus-cream)] font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-deep)]/40"
      >
        Indlæser kalender...
      </div>

      {/* Scroll viewport — iframe grows naturally inside, user scrolls within */}
      <div className="relative h-full overflow-y-auto overscroll-contain">
        <iframe
          src={BOOKING_URL}
          title="Book et 20-min strategi-møde med Enes"
          className="block w-full border-0"
          style={{ minHeight: 720 }}
          scrolling="no"
          loading="lazy"
          id="PAmr1ASoJSEbIfxx8U52_1779403361589"
        />
      </div>

      {/* Subtle bottom fade hinting "more content below" */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[color:var(--color-cactus-cream)] to-transparent"
      />

      <Script
        src={EMBED_SCRIPT}
        strategy="lazyOnload"
        type="text/javascript"
      />
    </div>
  );
}
