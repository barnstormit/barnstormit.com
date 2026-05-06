import { execSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
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

const APP_DIR = "app";

// Recursively find every page.{js,jsx,ts,tsx} under app/, skipping:
//  - api/ (route handlers, not crawlable pages)
//  - [slug] dynamic segments (handled separately, e.g. blog posts via getAllPosts)
//  - @parallel and _private folders
function discoverPageFiles(dir = APP_DIR) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "api") continue;
      if (entry.name.startsWith("[")) continue;
      if (entry.name.startsWith("@")) continue;
      if (entry.name.startsWith("_")) continue;
      out.push(...discoverPageFiles(full));
    } else if (/^page\.(jsx?|tsx?)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

// Convert a page file path to its public URL path.
//   app/page.js                              -> /
//   app/services/page.js                     -> /services
//   app/services/hardware-repair/page.js     -> /services/hardware-repair
//   app/(marketing)/promo/page.js            -> /promo (route groups stripped)
function fileToUrlPath(file) {
  const trimmed = relative(APP_DIR, file)
    .replace(/page\.(jsx?|tsx?)$/, "")
    .replace(/\/$/, "");
  if (trimmed === "") return "/";
  const segments = trimmed
    .split("/")
    .filter((s) => !(s.startsWith("(") && s.endsWith(")")));
  return "/" + segments.join("/");
}

const PRIMARY_SERVICE_PATHS = new Set([
  "/services",
  "/service-area",
  "/remote-support",
  "/3d-printing",
  "/vacation-help",
  "/str-partners",
  "/book",
]);

function getPriority(path) {
  if (path === "/") return 1.0;
  if (PRIMARY_SERVICE_PATHS.has(path)) return 0.8;
  if (path.startsWith("/services/")) return 0.8;
  if (/^\/computer-repair-/.test(path)) return 0.8;
  return 0.5;
}

export default function sitemap() {
  const baseUrl = "https://barnstormit.com";

  const staticPages = discoverPageFiles().map((file) => {
    const path = fileToUrlPath(file);
    return {
      url: `${baseUrl}${path}`,
      lastModified: lastModified(file),
      changeFrequency: "monthly",
      priority: getPriority(path),
    };
  });

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
