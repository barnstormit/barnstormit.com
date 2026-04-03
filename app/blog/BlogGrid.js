"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORY_COLORS = {
  "Tech Tips": "text-vivid-teal bg-vivid-teal/10 border-vivid-teal/30",
  "3D Printing": "text-alpine-gold bg-alpine-gold/10 border-alpine-gold/30",
  "Mountain Living": "text-snow-white bg-frost-gray/10 border-frost-gray/30",
  "Business Updates": "text-vivid-teal bg-vivid-teal/10 border-vivid-teal/30",
};

const FILTERS = [
  "All Stories",
  "Tech Tips",
  "3D Printing",
  "Mountain Living",
  "Business Updates",
];

export default function BlogGrid({ posts }) {
  const [active, setActive] = useState("All Stories");

  const filtered =
    active === "All Stories"
      ? posts
      : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full font-heading font-bold text-sm transition-all ${
              active === cat
                ? "bg-vivid-teal text-deep-navy"
                : "glass-card text-frost-gray hover:text-snow-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      {filtered.length === 0 ? (
        <p className="text-frost-gray text-center py-12">
          No posts in this category yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card rounded-xl overflow-hidden group hover:border-vivid-teal/40 transition-all block"
            >
              {/* Post Image */}
              <div className="h-48 bg-midnight-slate relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image || "/hero_bg.jpg"}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/80 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-[10px] font-mono tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full border ${
                      CATEGORY_COLORS[post.category] ||
                      "text-frost-gray bg-frost-gray/10 border-frost-gray/30"
                    }`}
                  >
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
                <h3 className="font-heading text-lg font-bold text-snow-white mb-2 group-hover:text-vivid-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-frost-gray text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-vivid-teal font-heading font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read more
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
