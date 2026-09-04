import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog-posts";
import { BRANCHER } from "@/lib/brancher";
import { LIVE_CASES } from "@/lib/cases";
import { SITE } from "@/lib/seo";

/*
 *  TO TING ER BEVIDSTE HER, ret dem ikke tilbage:
 *
 *  1. INGEN `new Date()`. Foer stod der `const now = new Date()` paa alle
 *     statiske sider, saa hver eneste deploy fortalte Google at
 *     privatlivspolitikken og vilkaarene var aendret i dag. Google begynder
 *     at ignorere lastmod fra sites hvor feltet ikke er sandt, og saa har
 *     man traenet den til at mistro det ene felt i sitemappet den faktisk
 *     bruger. Skriv rigtige datoer, ogsaa selvom det kraever en haand.
 *
 *  2. /cases og case-siderne SKAL vaere her. De manglede helt, selvom de er
 *     linket fra menuen og er sidens eneste bevismateriale. Paa et nyt
 *     domaene med naesten intet crawl-budget er sitemappet hovedvejen ind.
 */
const UPDATED = {
  forside: "2026-09-04",
  ydelser: "2026-09-04",
  blog: "2026-09-03",
  om: "2026-09-04",
  cases: "2026-09-04",
  vilkaar: "2026-09-04",
  privatliv: "2026-09-04",
  cookies: "2026-09-04",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: new Date(UPDATED.forside), priority: 1 },
    { url: `${SITE}/ydelser`, lastModified: new Date(UPDATED.ydelser), priority: 0.9 },
    { url: `${SITE}/cases`, lastModified: new Date(UPDATED.cases), priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: new Date(UPDATED.blog), priority: 0.85 },
    { url: `${SITE}/om`, lastModified: new Date(UPDATED.om), priority: 0.8 },
    { url: `${SITE}/privatlivspolitik`, lastModified: new Date(UPDATED.privatliv), priority: 0.3 },
    { url: `${SITE}/vilkaar`, lastModified: new Date(UPDATED.vilkaar), priority: 0.3 },
    { url: `${SITE}/cookies`, lastModified: new Date(UPDATED.cookies), priority: 0.3 },
  ];

  const casePages: MetadataRoute.Sitemap = LIVE_CASES.map((c) => ({
    url: `${SITE}/cases/${c.slug}`,
    lastModified: new Date(UPDATED.cases),
    priority: 0.6,
  }));

  // Branchesiderne er de eneste sider der kan rangere for det folk faktisk
  // soeger paa. Hoej prioritet, de er ikke pynt.
  const branchePages: MetadataRoute.Sitemap = BRANCHER.map((b) => ({
    url: `${SITE}/flere-kunder/${b.slug}`,
    lastModified: new Date("2026-09-04"),
    priority: 0.9,
  }));

  const blogPosts: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
  }));

  return [...staticPages, ...branchePages, ...casePages, ...blogPosts];
}
