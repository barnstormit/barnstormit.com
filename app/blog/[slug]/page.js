import { getAllPosts, getPostBySlug } from "../../../lib/posts";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const description = post.seoDescription || post.excerpt;
  return {
    title: post.title,
    description,
    alternates: { canonical: `https://barnstormit.com/blog/${slug}` },
    openGraph: {
      title: `${post.title} | Barnstorm Computer Services`,
      description,
      url: `https://barnstormit.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Jeff Barnstorf"],
      ...(post.image
        ? { images: [{ url: `https://barnstormit.com${post.image}`, width: 1200, height: 630, alt: post.title }] }
        : {}),
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const result = await remark().use(html).process(post.content);
  const contentHtml = result.toString();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Jeff Barnstorf"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Barnstorm Computer Services",
      "url": "https://barnstormit.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://barnstormit.com/blog/${slug}`
    },
    ...(post.image ? { "image": "https://barnstormit.com" + post.image } : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://barnstormit.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://barnstormit.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://barnstormit.com/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="pt-20 md:pt-28 pb-16 md:pb-24 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-frost-gray hover:text-vivid-teal transition-colors text-sm flex items-center gap-2 mb-8 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
        >
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            arrow_back
          </span>
          Back to Blog
        </Link>

        {/* Featured Image */}
        {post.image && (
          <div className="relative rounded-xl overflow-hidden mb-10 -mx-2 md:-mx-8 h-52 sm:h-64 md:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 768px) 800px, 100vw"
              className="object-cover object-bottom"
            />
          </div>
        )}

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full border text-vivid-teal bg-vivid-teal/10 border-vivid-teal/30">
              {post.category}
            </span>
            <span className="text-frost-gray/40 text-xs">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-black text-snow-white tracking-tight leading-tight text-balance">
            {post.title}
          </h1>
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-base md:prose-lg max-w-none
            prose-headings:font-heading prose-headings:text-snow-white prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-frost-gray prose-p:leading-relaxed
            prose-strong:text-snow-white
            prose-a:text-vivid-teal prose-a:no-underline hover:prose-a:underline
            prose-li:text-frost-gray
            prose-ul:space-y-1
            prose-pre:overflow-x-auto prose-pre:text-sm prose-code:text-sm prose-code:break-words"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Bottom CTA */}
        <div className="mt-16 glass-card rounded-xl p-8 text-center">
          <p className="text-frost-gray mb-4">
            Need help with something mentioned in this post?
          </p>
          <a
            href="tel:+17198380435"
            className="inline-flex items-center gap-3 bg-vivid-teal text-deep-navy px-8 py-3 rounded-lg font-heading font-bold hover:brightness-110 transition-[filter] focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
          >
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            Call (719) 838-0435
          </a>
        </div>
      </div>
    </article>
    </>
  );
}
