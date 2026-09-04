"use client";

import { useState } from "react";

/*
 *  Founder-portraet med pladsholder.
 *
 *  SAADAN SAETTER DU BILLEDET IND IGEN:
 *    1. Gem dit billede som public/enes.webp
 *    2. Saet HAS_PHOTO herunder til true
 *  Det er alt. Ingen anden kode skal roeres.
 *
 *  Hvorfor flaget findes: det gamle billede blev taget af 2. sep 2026.
 *  Komponenten proevede stadig at hente /enes.webp, fangede 404'eren og
 *  viste pladsholderen, saa siden SAA rigtig ud. Men den fyrede en
 *  mislykket netvaerksforespoergsel af paa hver eneste visning af /om og
 *  skrev en 404-fejl i konsollen. Det er stoej man kommer til at jagte,
 *  og en forespoergsel der aldrig kan lykkes.
 *
 *  onError-fallbacken er BEHOLDT med vilje. Saetter du flaget til true og
 *  glemmer filen, degraderer siden pænt i stedet for at vise et brudt
 *  billede.
 */
const HAS_PHOTO = false;

export function FounderPhoto({ size = "default" }: { size?: "default" | "large" }) {
  const [errored, setErrored] = useState(false);

  const eClass =
    size === "large"
      ? "font-display text-8xl font-medium tracking-[-0.04em] text-[color:var(--color-cactus-green)]"
      : "font-display text-7xl font-medium tracking-[-0.04em] text-[color:var(--color-cactus-green)]";

  if (!HAS_PHOTO || errored) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[color:var(--color-cactus-mid)] to-[color:var(--color-cactus-dark)] p-8 text-center">
        <div className={eClass}>E</div>
        <div className="mt-4 font-display text-lg font-medium text-[color:var(--color-cactus-cream)]">
          Enes Tokmak
        </div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
          Founder · Greve
        </div>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/enes.webp"
      alt="Enes Tokmak, founder af CactAi"
      onError={() => setErrored(true)}
      className="absolute inset-0 h-full w-full object-cover grayscale-[0.15] contrast-[1.05]"
    />
  );
}
