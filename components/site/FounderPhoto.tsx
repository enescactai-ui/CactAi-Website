"use client";

import { useState } from "react";

/**
 * Founder portrait with graceful fallback if /public/enes.jpg isn't saved yet.
 * Falls back to a stylized green "E" placeholder in brand colors.
 */
export function FounderPhoto({ size = "default" }: { size?: "default" | "large" }) {
  const [errored, setErrored] = useState(false);

  const eClass =
    size === "large"
      ? "font-display text-8xl font-medium tracking-[-0.04em] text-[color:var(--color-cactus-green)]"
      : "font-display text-7xl font-medium tracking-[-0.04em] text-[color:var(--color-cactus-green)]";

  if (errored) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[color:var(--color-cactus-mid)] to-[color:var(--color-cactus-dark)] p-8 text-center">
        <div className={eClass}>E</div>
        <div className="mt-4 font-display text-lg font-medium text-[color:var(--color-cactus-cream)]">
          Enes Tokmak
        </div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/45">
          Founder · 19 år
        </div>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/enes.jpg"
      alt="Enes Tokmak, founder af CactAi"
      onError={() => setErrored(true)}
      className="absolute inset-0 h-full w-full object-cover grayscale-[0.15] contrast-[1.05]"
    />
  );
}
