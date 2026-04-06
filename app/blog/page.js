import { getAllPosts } from "../../lib/posts";
import BlogGrid from "./BlogGrid";

export const metadata = {
  title: "Blog",
  description:
    "Tech tips, 3D printing projects, and mountain living updates from Barnstorm Computer Services. Practical advice from Fairplay, Colorado.",
  alternates: { canonical: "https://barnstormit.com/blog" },
  openGraph: {
    title: "Blog | Barnstorm Computer Services",
    description:
      "Practical tech advice, behind-the-scenes builds, and updates from Colorado's high country.",
    url: "https://barnstormit.com/blog",
    type: "website",
  },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            BLOG
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Tech Tips, Projects
            <br />
            <span className="text-vivid-teal">&amp; Mountain Life</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            Practical advice, behind-the-scenes builds, and updates from
            Barnstorm Computer Services.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 md:pb-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <BlogGrid posts={posts} />
        </div>
      </section>
    </>
  );
}
