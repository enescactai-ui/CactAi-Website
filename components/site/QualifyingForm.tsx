"use client";

import Script from "next/script";

/**
 * GoHighLevel inline qualifying form ("Discovery call qualification — CactAi").
 *
 * Step 1 of the booking flow — captures business basics, services interest,
 * and qualifying questions BEFORE the prospect sees the calendar widget.
 *
 * Architecture:
 *  - <iframe> mounts the GHL-hosted form (auto-fills via Sticky Contact if
 *    the prospect has filled it before in same browser).
 *  - <Script> loads form_embed.js which listens for postMessage from the
 *    iframe and auto-resizes height as content changes (e.g. validation
 *    errors expand the form).
 *
 * NOTE: We use GHL's platform domain (api.leadconnectorhq.com) instead of the
 * white-label link.cactaihq.com because the CNAME isn't configured in DNS yet.
 * Same form, same submission flow. Swap back once DNS is live.
 */

const FORM_ID = "9wnYkZQwuCwn9UH7Ho7H";
const FORM_URL = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const EMBED_SCRIPT = "https://api.leadconnectorhq.com/js/form_embed.js";

export function QualifyingForm() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-cream)]">
      {/* Loading state — visible until iframe renders content on top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[color:var(--color-cactus-cream)] font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-deep)]/40"
      >
        Indlæser spørgsmål...
      </div>

      <iframe
        src={FORM_URL}
        title="Discovery call qualification — CactAi"
        id={`inline-${FORM_ID}`}
        data-layout={"{'id':'INLINE'}"}
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Discovery call qualification — CactAi"
        data-height="1401"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        className="relative block w-full border-0"
        style={{ minHeight: 1401 }}
        scrolling="no"
      />

      <Script
        src={EMBED_SCRIPT}
        strategy="lazyOnload"
        type="text/javascript"
      />
    </div>
  );
}
