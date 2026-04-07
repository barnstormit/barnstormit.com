@AGENTS.md

# Barnstorm Computer Services — Project Rules

## Stack
- **Next.js** + **Tailwind CSS**
- Mobile-first. Key breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

## Color Palette
| Token | Hex | Role |
|---|---|---|
| Deep Navy | `#0D1B2A` | Primary background — dominant across entire site |
| Midnight Slate | `#1B2838` | Card backgrounds, elevated surfaces |
| Steel Blue | `#1A4A7A` | Section borders, dividers, subtle accents |
| Vivid Teal | `#3A9BD5` | Primary accent — buttons, links, highlights |
| Alpine Gold | `#F0A500` | Secondary accent — badges, callouts, trust signals |
| Snow White | `#F7F9FC` | Primary text |
| Frost Gray | `#8AA0B4` | Muted/secondary text |
| Card overlay | `rgba(255,255,255,0.04)` | Glass card backgrounds |
| Border Glow | `rgba(58,155,213,0.18)` | Subtle card borders |

**Never use pure black (`#000000`).** Always use Deep Navy or Midnight Slate.

## Typography
- **Heading font:** Bold display sans-serif (e.g. Space Grotesk, Bebas Neue)
- **Body font:** DM Sans — 400 body, 500 emphasis, 600 strong
- **Monospace:** DM Mono — labels, tags, eyebrow text, captions
- Hero heading: 48–64px, tight letter-spacing (−0.02em)
- Eyebrow text: 10–12px, monospace, uppercase, teal, letter-spacing 3px

## Component Conventions
- **Cards:** `rgba(255,255,255,0.04)` background + `backdrop-filter: blur` + 1px `rgba(58,155,213,0.18)` border + 10–12px radius
- **Primary button:** Teal (`#3A9BD5`) background, Snow White text, 8px radius, hover glow
- **Secondary button:** Transparent with teal border, fills on hover
- **Highlight/featured card:** Gold border `rgba(240,165,0,0.4)` + faint gold background `rgba(240,165,0,0.06)`
- **Nav:** Sticky top, hamburger on mobile, teal active indicator
- No harsh drop shadows — use border glow and background contrast for depth

## Layout
- Max content width: 1200px, side padding 24–48px
- Section vertical padding: 80–120px desktop, 48–64px mobile
- Smooth scroll, subtle scroll-triggered fade-in-up animations (under 400ms, nothing flashy)

## SEO / Accessibility (updated 2026-04-07)
- WCAG 2.1 AA — minimum 4.5:1 contrast ratio (critical on dark theme)
- Unique `<title>`, meta description, and OG tags per page (all titles under 70 chars)
- Title template is `%s | Barnstorm Computer Services` — page titles must NOT include "| Barnstorm" to avoid duplication
- Meta descriptions: 120–155 chars for Bing compliance
- `og:type` set on every page (`website` for pages, `article` for blog posts)
- LocalBusiness schema.org structured data (layout.js)
- Article schema.org structured data on blog posts (app/blog/[slug]/page.js)
- Static OG image at `/public/barnstorm_cover_v2.png` — 1200x630 (referenced in layout.js metadata)
- Auto-generated Apple touch icon (app/apple-icon.js) — 180x180
- `theme-color: #0D1B2A` and `color-scheme: dark` on `<html>`
- Geo meta tags (Fairplay, CO coordinates)
- Google Fonts preconnect for Material Symbols
- Google Analytics via `@next/third-parties` — measurement ID `G-C7QTMH6VK9`, production only (layout.js)
- Semantic HTML, keyboard navigable, alt text on all images
- `aria-hidden="true"` on all decorative icons (material-symbols-outlined)
- Visible `focus-visible:ring-*` states on all interactive elements
- Proper heading hierarchy (h1 → h2 → h3, no skipped levels)
- `text-balance` on headings to prevent widows
- No `transition-all` — use specific properties (e.g. `transition-[filter,transform]`)
- `width`/`height` on images where possible; `loading="lazy"` on below-fold images
- `tabular-nums` on numeric columns (pricing page)
- CTA glass card padding: use `p-6 sm:p-10 md:p-16` (never `p-10` without mobile breakpoint)
- Banner CTA buttons in flex-col layouts: always include `w-full md:w-auto`
- Sitemap at `/sitemap.xml` (auto-generated, includes all pages + blog posts)
- robots.txt at `/robots.txt`

## Domain & Hosting
- Primary domain: `barnstormit.com` (no www)
- `www.barnstormit.com` → 307 redirect to `barnstormit.com`
- Deployed on Vercel from GitHub (barnstormit/barnstormit.com)
- Google Search Console and Bing Webmaster Tools configured (2026-04-04)
- Google Analytics: G-C7QTMH6VK9 (via @next/third-parties, production only)

## Content Rules
- Phone number **(719) 838-0435** must be visible on every page without scrolling
- Never hide contact info — phone and email are the primary CTAs
- Tone: direct, friendly, competent — like a knowledgeable neighbor, not a corporate support line
- Avoid jargon, buzzwords, generic stock photos

## Pages
Homepage, Services, About, Pricing, Service Area, Contact, Blog, Vacation Help, STR Partners, Remote Support, 3D Printing, Book

See `DESIGN.md` for full page specs and `STITCH_PROMPTS.md` for section-by-section design prompts.
