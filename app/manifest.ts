import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/*
 *  Web app manifest. Manglede helt, saa /manifest.webmanifest gav 404.
 *
 *  Den bruges naar nogen gemmer siden paa hjemmeskaermen paa en telefon, og
 *  den er et af de smaa signaler der siger "rigtigt site" frem for
 *  "hjemmelavet". Billig at have, irriterende at mangle.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CactAi",
    short_name: "CactAi",
    description: "Vækstpartner for lokale danske servicevirksomheder",
    start_url: `${SITE}/`,
    display: "standalone",
    background_color: "#e9f8f0",
    theme_color: "#e9f8f0",
    lang: "da",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
