import { execSync } from "node:child_process";
import { statSync } from "node:fs";
import { getAllPosts } from "../lib/posts";

// Use git log first — survives Vercel's shallow clone for files touched in the
// last ~10 commits. Falls back to fs mtime, then to "now" if both fail.
function lastModified(file) {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${file}"`, {
      encoding: "utf8",
    }).trim();
    if (iso) return new Date(iso);
  } catch {}
  try {
    return statSync(file).mtime;
  } catch {}
  return new Date();
}

export default function sitemap() {
  const baseUrl = "https://barnstormit.com";

  const pages = [
    { path: "/", file: "app/page.js", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", file: "app/services/page.js", priority: 0.9, changeFrequency: "monthly" },
    { path: "/service-area", file: "app/service-area/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", file: "app/about/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", file: "app/contact/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/remote-support", file: "app/remote-support/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/3d-printing", file: "app/3d-printing/page.js", priority: 0.7, changeFrequency: "monthly" },
    { path: "/book", file: "app/book/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/vacation-help", file: "app/vacation-help/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/str-partners", file: "app/str-partners/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", file: "app/blog/page.js", priority: 0.7, changeFrequency: "weekly" },
    { path: "/privacy-policy", file: "app/privacy-policy/page.js", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", file: "app/terms/page.js", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: lastModified(page.file),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
