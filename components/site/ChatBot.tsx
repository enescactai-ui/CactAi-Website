"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * GoHighLevel AI chat widget — loaded OUTSIDE React's render tree.
 *
 * ROOT CAUSE we're avoiding: GHL's chat widget script injects DOM nodes
 * directly into <body> as it loads (chat bubble, popup containers, etc).
 * If we render the mount-point <div> inside React's tree, those injected
 * nodes become unexpected siblings to React's managed children. On client
 * navigation, React's reconciler tries to insertBefore/removeChild but the
 * node positions don't match what React expected, throws NotFoundError,
 * and the entire DOM gets wiped, leaving a blank screen.
 *
 * Solution: append the mount-point div + loader script directly to
 * document.body via useEffect. React renders nothing for those, so it never
 * tries to manage them.
 */

/*
 *  SAMTYKKE-PORT, tilfoejet 3. sep 2026. Rul den ikke tilbage.
 *
 *  To grunde, og den foerste er juridisk:
 *
 *  1. GDPR / cookiebekendtgoerelsen. Widgeten indlaeser et tredjepartsscript
 *     fra beta.leadconnectorhq.com bundet til vores GHL-konto, og den gemmer
 *     besoegs- og samtale-id i browserens storage og sender til HighLevel i
 *     USA. Det er ikke-noedvendig tredjepartslagring, og den kraever
 *     FORUDGAAENDE samtykke. Foer var den paa hver eneste side for hver
 *     eneste besoegende, mens cookiepolitikken samtidig paastod at vi ikke
 *     havde brug for en cookie-banner. Den kombination var problemet.
 *
 *     Loesningen her er ikke en banner. Knappen ER samtykket: intet loader
 *     foer nogen aktivt klikker for at aabne chatten. Derfor kan vi stadig
 *     sige at der ikke er en banner, og nu passer det ogsaa.
 *
 *  2. Ydelse. Widgeten trak 25 tredjepartsforespoergsler ved sideindlaesning,
 *     inklusive fire separate Roboto-kald til fonts.bunny.net, og
 *     konkurrerede med hero-posteren som er sidens LCP-element.
 *
 *  Valget huskes i localStorage, saa den kun skal klikkes en gang.
 */
const WIDGET_ID = "69e35f8729e846567a4d1e68";
const LOCATION_ID = "sdQQXNwPIvPRf3iIayFm";
const LOADER_SRC = "https://beta.leadconnectorhq.com/loader.js";
const RESOURCES_URL = "https://beta.leadconnectorhq.com/chat-widget/loader.js";
const SCRIPT_ID = "ghl-chat-widget-loader";
const CONSENT_KEY = "cactai-chat-consent";

export function ChatBot() {
  const [allowed, setAllowed] = useState(false);

  // Husk et tidligere ja. Storage kan vaere blokeret, saa fejl = bliv slukket.
  useEffect(() => {
    try {
      setAllowed(window.localStorage.getItem(CONSENT_KEY) === "yes");
    } catch {
      /* privat vindue eller blokeret storage, chatten forbliver slukket */
    }
  }, []);

  useEffect(() => {
    if (!allowed) return;
    if (document.getElementById(SCRIPT_ID)) return;

    // Mount-point, GHL's script leder efter [data-chat-widget]
    const mount = document.createElement("div");
    mount.setAttribute("data-chat-widget", "");
    mount.setAttribute("data-widget-id", WIDGET_ID);
    mount.setAttribute("data-location-id", LOCATION_ID);
    document.body.appendChild(mount);

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = LOADER_SRC;
    script.async = true;
    script.setAttribute("data-resources-url", RESOURCES_URL);
    script.setAttribute("data-widget-id", WIDGET_ID);
    document.body.appendChild(script);

    // Ingen oprydning ved unmount. GHL's widget har sin egen livscyklus, og
    // at fjerne scriptet efter load ville efterlade dens injicerede DOM.
  }, [allowed]);

  if (allowed) return null; // GHL tegner nu sin egen boble

  /*
   *  Kompakt paa mobil, med vilje. Som bred pille daekkede den indhold i
   *  hver eneste sektion paa en 390px skaerm. En chat-knap skal vaere en
   *  lille cirkel paa telefon og maa foerst blive en pille naar der er
   *  plads. aria-label baerer teksten for skaermlaesere i begge tilstande.
   */
  return (
    <button
      type="button"
      aria-label="Åbn chat og skriv til os"
      onClick={() => {
        try {
          window.localStorage.setItem(CONSENT_KEY, "yes");
        } catch {
          /* kan ikke huskes, men chatten aabner stadig i denne session */
        }
        setAllowed(true);
      }}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[color:var(--color-cactus-green)] text-white shadow-[0_8px_30px_-8px_rgba(82,183,136,0.7)] transition-transform hover:scale-[1.04] active:scale-[0.98] sm:h-auto sm:w-auto sm:px-5 sm:py-3.5"
    >
      <MessageCircle className="h-6 w-6 sm:h-4 sm:w-4" aria-hidden />
      <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] sm:inline">
        Skriv til os
      </span>
    </button>
  );
}
