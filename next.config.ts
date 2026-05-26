import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      // Legacy blog — old GHL site had /blog; new site doesn't have one yet.
      // Redirect to homepage until we build a real blog.
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },

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
    ];
  },
};

export default nextConfig;
