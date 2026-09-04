"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Faar HELE sitets Framer Motion-animationer til at respektere
 * "reducer bevaegelse" i brugerens systemindstillinger.
 *
 * Hvorfor den findes: globals.css havde allerede en
 * prefers-reduced-motion-blok, men kommentaren der paastod at "Framer
 * Motion has its own internal reduced-motion handling". Det passer ikke.
 * Framer respekterer kun indstillingen hvis man beder den om det, og
 * CSS-reglens transition-duration rammer ikke Framers JS-drevne
 * transforms. Hele siden er bygget paa Framer, saa alt der glider ind ved
 * scroll ignorerede brugerens valg.
 *
 * reducedMotion="user" betyder: laes systemindstillingen, og slaa
 * transform- og layout-animationer fra for dem der har bedt om det.
 * Opacity-overgange bevares, saa indhold stadig toner frem i stedet for
 * at poppe, hvilket er den anbefalede opfoersel.
 *
 * Vigtigt for folk med vestibulaere lidelser, og et krav i WCAG 2.3.3.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
