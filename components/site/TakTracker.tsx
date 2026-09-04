"use client";

import { useEffect, useRef } from "react";
import { trackConversion } from "@/lib/tracking";

/*
 *  Registrerer en gennemfoert booking, én gang.
 *
 *  Ligger i sin egen klient-komponent, saa selve /tak-siden kan blive en
 *  serverkomponent og stadig praerenderes statisk.
 *
 *  useRef-vagten er der fordi React i udviklingstilstand koerer effects
 *  to gange. Uden den ville hver booking blive taalt som to.
 */
export function TakTracker() {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    trackConversion("booking_gennemfoert");
  }, []);

  return null;
}
