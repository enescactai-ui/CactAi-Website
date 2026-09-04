import type { NextConfig } from "next";

/*
 *  Content-Security-Policy.
 *
 *  Kilderne herunder er UDLEDT af koden, ikke gaettet. Aendrer du en
 *  integration, skal listen opdateres, ellers gaar noget i stykker uden
 *  fejlmeddelelse i browseren.
 *
 *  'wasm-unsafe-eval' ER PAAKRAEVET. 3D-motorens GLB er komprimeret med
 *  meshopt, og afkoderen kalder WebAssembly.instantiate. Fjerner du den,
 *  render motoren ikke, og du faar ingen tydelig fejl.
 *
 *  'unsafe-inline' paa script-src er et bevidst valg. Next indsaetter
 *  inline hydrerings-scripts, og nonces ville kraeve middleware, hvilket
 *  ville tvinge alle 21 statiske ruter over i dynamisk rendering. Daarlig
 *  byttehandel for en marketingside uden brugerinput. CSP'ens vaerdi her
 *  er at begraense tredjeparter, ikke at forsvare en XSS-flade vi ikke har.
 *
 *  Skrifttyper hostes af os selv. next/font henter dem ved build og lægger
 *  dem i /_next/static/media, saa der er INGEN fonts.googleapis.com.
 *
 *  HAANDHAEVES nu, efter verifikation paa den levende side 4. sep 2026 med
 *  chat-widgeten aabnet. Foerste runde i Report-Only fangede 53
 *  overtraedelser, som er rettet i listen herunder. Anden runde gav nul.
 *
 *  AENDRER DU EN INTEGRATION, saa saet noeglen tilbage til
 *  "Content-Security-Policy-Report-Only" foerst, deploy, aabn siden og
 *  chatten, og tjek konsollen. En manglende kilde braekker tingene LYDLOEST
 *  under haandhaevelse. Der kommer ingen tydelig fejl, funktionen holder
 *  bare op med at virke.
 */
const csp = [
  "default-src 'self'",
  // *.leadconnectorhq.com, ikke kun api og beta. Chat-widgeten henter
  // scripts fra services. og stcdn. underdomaenerne, og med kun de to
  // eksplicitte vaerter blev de blokeret.
  "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://*.leadconnectorhq.com https://va.vercel-scripts.com",
  // fonts.bunny.net: GHL's chat-widget henter Roboto derfra, baade som
  // stylesheet og som selve skriftfilerne.
  "style-src 'self' 'unsafe-inline' https://fonts.bunny.net https://*.leadconnectorhq.com",
  "font-src 'self' data: https://fonts.bunny.net",
  // assets.cdn.filesafe.space: GHL's eget billed-CDN, bruges til avatar
  // og vedhaeftninger i chatten.
  "img-src 'self' data: blob: https://*.leadconnectorhq.com https://assets.cdn.filesafe.space",
  // blob: kraeves af widgeten selv. services.msgsndr.com er GHL's
  // attributions-endpoint.
  "connect-src 'self' blob: https://*.leadconnectorhq.com wss://*.leadconnectorhq.com https://services.msgsndr.com",
  "frame-src https://*.leadconnectorhq.com",
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://*.leadconnectorhq.com",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  /* Der laa en stray package-lock.json i hjemmemappen som Next valgte som
     workspace-rod. Det giver forkert file tracing. Pinnet her. */
  turbopack: { root: __dirname },

  /**
   * 301 permanent redirects.
   *
   * Old GHL-hosted cactaihq.com had different URLs than our new Next.js site.
   * Google has those old URLs indexed → clicks return 404 → bad UX + lost SEO.
   *
   * Each redirect tells Google "this page permanently moved here" so it
   * transfers link equity and updates its index within days.
   *
   * Add new entries here whenever you discover an old indexed URL via
   * Google Search Console's "Pages with errors" report.
   */
  async redirects() {
    return [
      // /blog now exists as a real section — no redirect needed!

      // Spelling fix: old site used single-a "/vilkar", new uses "/vilkaar".
      { source: "/vilkar", destination: "/vilkaar", permanent: true },

      // Common Danish URL conventions from old site → new equivalents
      { source: "/om-os", destination: "/om", permanent: true },
      { source: "/services", destination: "/ydelser", permanent: true },
      { source: "/priser", destination: "/#priser", permanent: true },
      { source: "/kontakt", destination: "/#book", permanent: true },
      { source: "/booking", destination: "/#book", permanent: true },
      { source: "/cookie-politik", destination: "/cookies", permanent: true },
      { source: "/privatlivserklaering", destination: "/privatlivspolitik", permanent: true },

      // Blogindlaegget "pay-per-show-vs-retainer" er afpubliceret 3. sep
      // 2026. Det argumenterede imod fast maanedsbetaling, altsaa imod den
      // model vi selv saelger. Erstattet af fast-pris-uden-binding, som
      // beholder pointen om incitamenter men lander det rigtige sted.
      // Afpubliceret 4. sep 2026, se noten i lib/blog-posts.ts.
      {
        source: "/blog/meta-ads-lokale-virksomheder-2026",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/pay-per-show-vs-retainer",
        destination: "/blog/fast-pris-uden-binding",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
