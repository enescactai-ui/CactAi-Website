import Script from "next/script";

/**
 * GoHighLevel AI chat widget.
 *
 * Two-part embed:
 *  1. <div data-chat-widget> — mount point the GHL loader targets
 *  2. <Script src="loader.js"> — loads the chat UI and injects into the div
 *
 * Performance:
 *  - Uses next/script with strategy="lazyOnload" → script downloads AFTER
 *    the page becomes interactive. Zero LCP / FCP impact.
 *  - Mount-point div is server-rendered in initial HTML so loader finds it
 *    immediately when script executes.
 *
 * If GHL moves off the beta CDN, only the two URL constants below need to
 * change. Widget ID and location ID stay the same.
 */

const WIDGET_ID = "69e35f8729e846567a4d1e68";
const LOCATION_ID = "sdQQXNwPIvPRf3iIayFm";
const LOADER_SRC = "https://beta.leadconnectorhq.com/loader.js";
const RESOURCES_URL = "https://beta.leadconnectorhq.com/chat-widget/loader.js";

export function ChatBot() {
  return (
    <>
      {/* Mount point the loader injects chat UI into */}
      <div
        data-chat-widget
        data-widget-id={WIDGET_ID}
        data-location-id={LOCATION_ID}
      />

      {/* Loader script — lazy-loaded so it never blocks page render */}
      <Script
        id="ghl-chat-widget-loader"
        src={LOADER_SRC}
        data-resources-url={RESOURCES_URL}
        data-widget-id={WIDGET_ID}
        strategy="lazyOnload"
      />
    </>
  );
}
