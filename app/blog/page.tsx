import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { POSTS, formatPostDate, type BlogPost } from "@/lib/blog-posts";
import Link from "next/link";
import { pageMeta, SITE } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...pageMeta("/blog", "Indsigt til servicevirksomheder", "Konkrete artikler om hvordan lokale danske servicevirksomheder får flere opgaver. Skrevet af Enes Tokmak. Ingen jargon, kun det jeg selv har lært."),
};

/* Blog schema, tells Google this is a publication, lists all posts */
const BLOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE}/blog#blog`,
  url: `${SITE}/blog`,
  name: "CactAi Blog & Indsigt",
  description:
    "Artikler om hvordan lokale danske servicevirksomheder får flere opgaver.",
  inLanguage: "da-DK",
  publisher: { "@id": `${SITE}/#org` },
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    "@id": `https://www.cactaihq.com/blog/${p.slug}#post`,
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    url: `https://www.cactaihq.com/blog/${p.slug}`,
    author: { "@id": `${SITE}/om#person` },
  })),
};

export default function BlogIndexPage() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={[
          { name: "Hjem", url: SITE },
          { name: "Blog & Indsigt", url: `${SITE}/blog` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(BLOG_SCHEMA).replace(/</g, "\\u003c"),
        }}
      />

      <main id="main" className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Hero */}
          <header className="max-w-4xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
              Blog & Indsigt // 2026
            </div>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] break-words sm:text-7xl lg:text-8xl">
              Sådan får lokale firmaer{" "}
              <span className="text-[color:var(--color-cactus-green)]">
                flere opgaver
              </span>
              . Uden{" "}
              <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
                fyld
              </span>
              .
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70 sm:text-xl">
              Konkrete artikler om hvad der virker for danske
              servicevirksomheder, og hvad der ikke gør. Ingen jargon, ingen
              tal jeg ikke kan stå inde for, kun det jeg selv har lært.
            </p>
          </header>

          {/* Featured post, full width, bigger */}
          <FeaturedCard post={featured} />

          {/* Remaining posts in grid */}
          <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Closing CTA */}
          <section className="mt-24 border-t border-[color:var(--color-cactus-green)]/15 pt-16 lg:mt-32 lg:pt-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                  Vil du tale om dit firma direkte?
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
                  Læsning er én ting. Tal er noget andet. Få en 20-min lokal
                  kundeanalyse, så ved du hvad der faktisk er at hente i dit
                  område.
                </p>
              </div>
              <div className="flex items-end lg:col-span-4 lg:justify-end">
                <Link
                  href="/#book"
                  className="inline-flex items-center gap-3 border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)] px-7 py-5 font-display text-lg font-medium text-[color:var(--color-cactus-deep)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_var(--color-cactus-green)]"
                >
                  Få din kundeanalyse
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────
   Featured card, large, hero-like
   ───────────────────────────────────────── */
function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative mt-16 block border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-dark)] p-8 transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0_0_var(--color-cactus-green)] sm:p-12 lg:mt-24 lg:p-16"
    >
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
          Senest
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
          {post.category} · {post.readMinutes} min læsning
        </span>
      </div>
      <h2 className="mt-6 font-display text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
        {post.title}
      </h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
        {post.excerpt}
      </p>
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-[color:var(--color-cactus-green)]/20 pt-6">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
          {formatPostDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)] transition-transform group-hover:translate-x-1">
          Læs artikel
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────
   Standard post card
   ───────────────────────────────────────── */
function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-dark)]/50 p-8 transition-all hover:border-[color:var(--color-cactus-green)] hover:bg-[color:var(--color-cactus-dark)] lg:p-10"
    >
      {/* Top accent on hover */}
      <div
        aria-hidden
        className="absolute left-0 top-0 h-[3px] w-0 bg-[color:var(--color-cactus-green)] transition-all duration-500 group-hover:w-full"
      />

      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
          {post.category}
        </span>
        <span className="text-[color:var(--color-cactus-cream)]/65">·</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
          {post.readMinutes} min læsning
        </span>
      </div>

      <h2 className="mt-5 font-display text-2xl font-medium leading-[1.15] tracking-[-0.01em] sm:text-3xl">
        {post.title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-[color:var(--color-cactus-cream)]/65">
        {post.excerpt}
      </p>

      <div className="mt-auto pt-8">
        <div className="flex items-center justify-between gap-4 border-t border-[color:var(--color-cactus-green)]/15 pt-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
            {formatPostDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)] transition-transform group-hover:translate-x-1">
            Læs
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
