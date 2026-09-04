export const SITE = "https://www.cactaihq.com";

/*
 *  Delt metadata-hjaelper. Tilfoejet 4. sep 2026.
 *
 *  PROBLEMET DEN LOESER, og det var to fejl i samme mekanisme:
 *
 *  Next fletter metadata OVERFLADISK. Det betyder:
 *
 *  1. En side der IKKE definerer sit eget openGraph, arver rod-layoutets
 *     helt uaendret, inklusive og:url. Resultatet var at 12 ud af 13 ruter
 *     sagde og:url = forsiden. Facebook og LinkedIn bruger og:url som
 *     kanonisk, saa hver eneste deling af /om, /ydelser eller en case blev
 *     slaaet sammen til ét forside-opslag. Reaktioner og kommentarer paa en
 *     case-deling landede paa forsiden.
 *
 *  2. Det omvendte for blogindlaeg. De definerede deres eget openGraph og
 *     ERSTATTEDE dermed hele objektet, ogsaa billederne fra
 *     app/opengraph-image.tsx. Et delt blogindlaeg blev til et nøgent
 *     tekstlink uden kort. Det er dyrt for et firma hvis kanalplan bygger
 *     paa at dele indlaeg.
 *
 *  Derfor: naevn ALTID images eksplicit her. De arves ikke.
 */
export function pageMeta(
  path: string,
  title: string,
  description: string,
  ogExtra: Record<string, unknown> = {},
) {
  const url = `${SITE}${path}`;
  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      locale: "da_DK",
      siteName: "CactAi",
      url,
      title,
      description,
      images: ["/opengraph-image"],
      ...ogExtra,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
