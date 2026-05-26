"use client";

import { useEffect } from "react";

/**
 * GoHighLevel AI chat widget — loaded OUTSIDE React's render tree.
 *
 * ROOT CAUSE we're avoiding: GHL's chat widget script injects DOM nodes
 * directly into <body> as it loads (chat bubble, popup containers, etc).
 * If we render the mount-point <div> inside React's tree, those injected
 * nodes become unexpected siblings to React's managed children. On client
 * navigation, React's reconciler tries to insertBefore/removeChild but the
 * node positions don't match what React expected → throws NotFoundError →
 * entire DOM gets wiped → blank screen.
 *
 * Solution: append the mount-point div + loader script directly to document.body
 * via useEffect. React renders nothing (returns null) so it never tries to
 * manage these elements. GHL is free to inject whatever it needs without
 * conflicting with React's reconciliation.
 *
 * The check for existing script prevents double-loading on hot reload or
 * accidental re-mount.
 */

const WIDGET_ID = "69e35f8729e846567a4d1e68";
const LOCATION_ID = "sdQQXNwPIvPRf3iIayFm";
const LOADER_SRC = "https://beta.leadconnectorhq.com/loader.js";
const RESOURCES_URL = "https://beta.leadconnectorhq.com/chat-widget/loader.js";
const SCRIPT_ID = "ghl-chat-widget-loader";

export function ChatBot() {
  useEffect(() => {
    // Don't double-load if already present
    if (document.getElementById(SCRIPT_ID)) return;

    // Create mount-point div — GHL's script looks for [data-chat-widget]
    const mount = document.createElement("div");
    mount.setAttribute("data-chat-widget", "");
    mount.setAttribute("data-widget-id", WIDGET_ID);
    mount.setAttribute("data-location-id", LOCATION_ID);
    document.body.appendChild(mount);

    // Load the loader script — async so it doesn't block other work
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = LOADER_SRC;
    script.async = true;
    script.setAttribute("data-resources-url", RESOURCES_URL);
    script.setAttribute("data-widget-id", WIDGET_ID);
    document.body.appendChild(script);

    // Note: we DON'T clean up on unmount. GHL's widget has its own lifecycle
    // and removing the script after load would orphan its injected DOM.
    // The script + mount-point persist for the entire SPA session.
  }, []);

  return null; // Nothing in React's tree
}
