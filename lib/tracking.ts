import { track } from "@vercel/analytics";

/*
 *  Konverteringssporing i TO LAG.
 *
 *  Baggrund: Meta-pixel'en der laa paa GHL-bookingwidgeten blev fjernet
 *  4. sep 2026, fordi privatlivspolitikken samtidig lovede at vi ikke
 *  tracker paa tvaers af sites og ikke laver remarketing. Den kombination
 *  af sporing og et loefte om det modsatte er selve problemet, og den maa
 *  ikke opstaa igen. Derfor de to lag herunder.
 *
 *  ── LAG 1: maaling uden samtykke ──────────────────────────────────
 *  Vercel Analytics. Ingen cookies, ingen fingerprinting, ingen
 *  identifikation af den enkelte. Derfor kraever det ikke samtykke, og
 *  derfor passer det med det cookiepolitikken siger.
 *
 *  Det giver Enes en tragt: hvor mange saa booking-sektionen, hvor mange
 *  trykkede paa en knap, hvor mange gennemfoerte. Det er nok til at se
 *  HVOR folk falder fra.
 *
 *  ── LAG 2: annonceplatforme, kraever samtykke ─────────────────────
 *  Meta og Google faar INTET herfra i dag. `hasAdConsent()` returnerer
 *  altid false, og der er ingen pixel-id'er konfigureret.
 *
 *  Naar der en dag skal koeres annoncer med konverteringssporing, er der
 *  praecis tre ting der skal ske, og ALLE TRE skal ske samtidig:
 *    1. Byg et rigtigt samtykke-lag og lad hasAdConsent() laese det.
 *    2. Indsaet pixel-id og kald platformens event i sendPlatformEvent().
 *    3. Skriv cookie- og privatlivspolitikken om, saa de siger sandheden.
 *
 *  Springer man punkt 3 over, er man tilbage ved praecis det problem der
 *  fik pixel'en fjernet.
 */

/** Navnene paa de haendelser vi maaler. Hold listen kort og stabil. */
export type ConversionEvent =
  | "booking_section_set"   // booking-sektionen kom i syne
  | "cta_klik"              // en "Faa din kundeanalyse"-knap blev trykket
  | "booking_gennemfoert";  // /tak blev naaet, altsaa en rigtig booking

/**
 * Er der givet samtykke til sporing for annonceplatforme?
 *
 * Returnerer med vilje ALTID false lige nu. Der findes ikke noget
 * samtykke-lag paa sitet, og saa laenge det er tilfaeldet, maa der ikke
 * fyres et eneste platform-event. Ret den ikke til true uden ogsaa at
 * bygge samtykket og opdatere de juridiske sider.
 */
function hasAdConsent(): boolean {
  return false;
}

/** Placeholder. Her kommer Meta/Google-kaldet den dag samtykket findes. */
function sendPlatformEvent(_event: ConversionEvent): void {
  if (!hasAdConsent()) return;
  // Med vilje tom. Se noten i toppen af filen foer du udfylder den.
}

/**
 * Registrer en haendelse.
 *
 * Fejler aldrig hoejlydt. Kan Analytics ikke naas, fordi en blocker
 * staar i vejen eller vi koerer lokalt, skal siden opfoere sig praecis
 * som foer. Maaling maa aldrig kunne braekke en booking.
 */
export function trackConversion(
  event: ConversionEvent,
  data?: Record<string, string | number | boolean | null>,
): void {
  try {
    track(event, data);
    sendPlatformEvent(event);
  } catch {
    /* maaling er aldrig vigtigere end siden */
  }
}
