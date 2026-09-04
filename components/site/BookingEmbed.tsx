"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

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
/*
 *  Nedbrudssti tilfoejet 4. sep 2026.
 *
 *  Iframen kan fejle af grunde vi ikke styrer: GHL nede, firmafirewall der
 *  blokerer leadconnectorhq.com, eller en privacy-udvidelse der dræber den.
 *  Foer stod den besoegende saa med en tom ramme og hverken telefonnummer
 *  eller mail, paa den sektion hvis eneste opgave er at fange bookingen.
 *
 *  Der findes ingen paalidelig onError paa cross-origin iframes, saa vi
 *  bruger en timeout: har onLoad ikke meldt tilbage efter 8 sekunder,
 *  antager vi det er gaaet galt og viser kontaktinfo i stedet.
 */
const IFRAME_TIMEOUT_MS = 8000;

export function BookingEmbed() {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    const t = setTimeout(() => setFailed(true), IFRAME_TIMEOUT_MS);
    return () => clearTimeout(t);
  }, [loaded]);

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
        {failed ? (
          <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 px-8 text-center">
            <p className="text-[15px] leading-relaxed text-[color:var(--color-cactus-deep)]/70">
              Kalenderen kunne ikke indlæses. Ring eller skriv, så finder vi
              et tidspunkt med det samme.
            </p>
            <a
              href="tel:+4591309560"
              className="font-display text-2xl font-semibold text-[color:var(--color-cactus-deep)] transition-colors hover:text-[color:var(--color-cactus-green)]"
            >
              +45 91 30 95 60
            </a>
            <a
              href="mailto:enescactai@gmail.com"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-deep)]/55 underline underline-offset-4"
            >
              enescactai@gmail.com
            </a>
          </div>
        ) : (
          <iframe
            src={BOOKING_URL}
            title="Book din lokale kundeanalyse med Enes"
            className="block w-full border-0"
            style={{ minHeight: 720 }}
            scrolling="no"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => setLoaded(true)}
            id="PAmr1ASoJSEbIfxx8U52_1779403361589"
          />
        )}
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
