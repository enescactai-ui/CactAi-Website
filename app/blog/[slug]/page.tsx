import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import {
  POSTS,
  formatPostDate,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog-posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

/**
 * Generate static params at build time → each post becomes a static .html
 * Same SEO/performance as a hand-crafted page, just one file controls them all.
 */
export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel ikke fundet" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Enes Tokmak"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);
  const { Body } = post;

  /* Article schema — gives Google rich result eligibility */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://cactaihq.com/blog/${post.slug}#post`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "da-DK",
    url: `https://cactaihq.com/blog/${post.slug}`,
    image: "https://cactaihq.com/opengraph-image",
    author: {
      "@type": "Person",
      "@id": "https://cactaihq.com/om#person",
      name: "Enes Tokmak",
      url: "https://cactaihq.com/om",
    },
    publisher: { "@id": "https://cactaihq.com/#org" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cactaihq.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    timeRequired: `PT${post.readMinutes}M`,
  };

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={[
          { name: "Hjem", url: "https://cactaihq.com" },
          { name: "Blog & Indsigt", url: "https://cactaihq.com/blog" },
          { name: post.title, url: `https://cactaihq.com/blog/${post.slug}` },
        ]}
      />
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <article>
          {/* Hero header */}
          <header className="mx-auto max-w-3xl px-6 lg:px-12">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
              <Link
                href="/blog"
                className="transition-colors hover:text-[color:var(--color-cactus-cream)]"
              >
                ← Blog & Indsigt
              </Link>
              <span className="text-[color:var(--color-cactus-cream)]/30">·</span>
              <span>{post.category}</span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-medium leading-[1] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[color:var(--color-cactus-green)]/15 pt-5 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/55">
              <span className="text-[color:var(--color-cactus-cream)]/75">
                Enes Tokmak
              </span>
              <span className="text-[color:var(--color-cactus-cream)]/30">·</span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span className="text-[color:var(--color-cactus-cream)]/30">·</span>
              <span>{post.readMinutes} min læsning</span>
            </div>
          </header>

          {/* Body — rendered by post component */}
          <div className="mt-16 px-6 lg:mt-20 lg:px-12">
            <Body />
          </div>

          {/* Author bio + CTA */}
          <footer className="mx-auto mt-24 max-w-3xl border-t border-[color:var(--color-cactus-green)]/15 px-6 pt-12 lg:px-12">
            <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/15 font-display text-3xl font-medium text-[color:var(--color-cactus-green)]">
                ET
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                  Forfatter
                </div>
                <div className="mt-2 font-display text-xl font-medium text-[color:var(--color-cactus-cream)]">
                  Enes Tokmak
                </div>
                <p className="mt-3 text-base leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                  19-årig founder af CactAi. Bygger pay-per-show marketing
                  for danske håndværkere fra Greve. Læs mere{" "}
                  <Link
                    href="/om"
                    className="text-[color:var(--color-cactus-green)] underline decoration-2 underline-offset-4 transition-colors hover:text-[color:var(--color-cactus-cream)]"
                  >
                    om mig her
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/[0.08] p-8 lg:p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Næste skridt
              </div>
              <h3 className="mt-3 font-display text-2xl font-medium leading-tight tracking-[-0.01em] sm:text-3xl">
                Vil du tale konkret om dit firma?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-cactus-cream)]/75">
                20 min. Ingen salgs-pres. Vi regner præcis på hvad PPSA
                ville betyde for dig.
              </p>
              <Link
                href="/#book"
                className="mt-6 inline-flex items-center gap-3 border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)] px-6 py-4 font-display text-base font-medium text-[color:var(--color-cactus-deep)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0_0_var(--color-cactus-green)]"
              >
                Book strategi-møde
                <span aria-hidden>→</span>
              </Link>
            </div>
          </footer>

          {/* Related posts */}
          {related.length > 0 && (
            <section className="mx-auto mt-24 max-w-7xl px-6 lg:px-12">
              <div className="border-t border-[color:var(--color-cactus-green)]/15 pt-12">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                  Læs også
                </div>
                <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex flex-col border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-dark)]/50 p-7 transition-all hover:border-[color:var(--color-cactus-green)] hover:bg-[color:var(--color-cactus-dark)]"
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
                        {p.category} · {p.readMinutes} min
                      </div>
                      <h4 className="mt-3 font-display text-xl font-medium leading-tight text-[color:var(--color-cactus-cream)] sm:text-2xl">
                        {p.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                        {p.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)] transition-transform group-hover:translate-x-1">
                        Læs
                        <span aria-hidden>→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
