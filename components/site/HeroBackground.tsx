/**
 * Hero background: a lightweight looping "aurora" video (flowing green light on
 * a mint base) — an actual <video>, so it costs zero WebGL contexts. A CSS
 * gradient + poster paint instantly and act as the fallback if the video is
 * blocked or still loading. A left-side veil keeps the headline readable.
 */
export default function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* instant paint + fallback */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 70% 15%, #e9f8f0 0%, #d5f2e5 45%, #c2ead8 100%)",
        }}
      />

      {/*
        LCP-elementet paa mobil er posteren herunder. Uden preload blev den
        koeet bag 15 JS-chunks, 2 CSS-filer og 3 skrifttyper, saa den var
        587 ms om overhovedet at komme i gang, selvom filen kun er 10 KB.
        React 19 loefter dette link op i <head>.
      */}
      <link
        rel="preload"
        as="image"
        href="/images/hero-aurora-poster.jpg?v=2"
        fetchPriority="high"
      />

      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-aurora-poster.jpg?v=2"
      >
        <source src="/hero-aurora.webm?v=2" type="video/webm" />
        <source src="/hero-aurora.mp4?v=2" type="video/mp4" />
      </video>

      {/* keep the headline (left) side lighter for contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(233,248,240,0.72) 0%, rgba(233,248,240,0.18) 40%, transparent 62%)",
        }}
      />
    </div>
  );
}
