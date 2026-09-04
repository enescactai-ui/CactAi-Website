"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Route-level error boundary, catches errors thrown while rendering a
 * route segment under app/.
 *
 * VIGTIG AFGRAENSNING: den fanger IKKE fejl i rod-layoutet. Kommentaren
 * her paastod tidligere at den fangede alt under app/, og navnet var
 * GlobalError, hvilket var to gange misvisende. ChatBot, JsonLd og
 * Analytics ligger netop i rod-layoutet, og et kast der bliver fanget af
 * app/global-error.tsx i stedet. Det er en anden fil, se den.
 *
 * Replaces Next.js's default "This page couldn't load" UI (which shows
 * to all users in production with no way to debug) with a branded page
 * that shows the error digest, lets users retry without full reload,
 * and gives them an escape hatch back home.
 *
 * Must be a Client Component because it uses useEffect + an onClick reset.
 */
export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to browser console — visible in Vercel Logs too if user reports.
    console.error("[CactAi error boundary]", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-cactus-green)]">
          Fejl // Noget gik galt
        </div>

        <h1 className="mt-6 font-display text-5xl font-medium leading-[1] tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
          Beklager,{" "}
          <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
            siden
          </span>{" "}
          fejlede.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
          Vi har logget fejlen og kigger på den. I mellemtiden kan du prøve at
          klikke knappen nedenfor, det fungerer som regel.
        </p>

        {error.digest && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-deep)]/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-cactus-green)]" />
            Fejl-ID: {error.digest}
          </div>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-3 border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)] px-7 py-4 font-display text-base font-medium text-[color:var(--color-cactus-deep)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0_0_var(--color-cactus-green)]"
          >
            Prøv igen
            <span aria-hidden>↻</span>
          </button>
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/60 underline decoration-[color:var(--color-cactus-green)]/40 decoration-2 underline-offset-[6px] transition-colors hover:text-[color:var(--color-cactus-cream)]"
          >
            ← Tilbage til forsiden
          </Link>
        </div>
      </div>
    </main>
  );
}
