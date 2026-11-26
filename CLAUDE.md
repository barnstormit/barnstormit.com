@AGENTS.md

# Barnstorm Computer Services — Project Rules

## Stack
- **Next.js** + **Tailwind CSS**
- Mobile-first. Key breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

## Color Palette (light-amber redesign, Aug 2026)
Token names are legacy from the old dark theme — the **name no longer describes the color**. Always use the token, never raw hex.

| Token | Hex | Role |
|---|---|---|
| `deep-navy` | `#FAF7F2` | Page background (cream) |
| `midnight-slate` | `#F2EDE5` | Alternate section background |
| `steel-blue` | `#E4DFD6` | Borders, dividers |
| `paper-line` | `#E4DFD6` | Hairlines |
| `ice-blue` | `#FFFFFF` | White surfaces |
| `snow-white` | `#1A1D21` | Primary text (near-black); dark text on gold buttons |
| `frost-gray` | `#6B6459` | Muted/secondary text |
| `vivid-teal` | `#8A5711` | Primary accent (dark amber) — links, accent text, filled buttons |
| `alpine-gold` | `#EF9F27` | Bright gold — **fills, borders, glows, icons; text only on dark backgrounds** (footer, home hero) |
| `gold-ink` | `#8F5900` | Gold **text** on light backgrounds (≥5:1) |
| `slate-band` | `#2B3743` | Dark footer band |
| `espresso` | `#412402` | Dark text on bright gold |

**Contrast rules:** never put `alpine-gold` text on a light background (~2:1, fails AA) — use `gold-ink`. On `bg-alpine-gold`, use `text-snow-white` or `text-espresso`, never `text-deep-navy`. Never use pure black (`#000000`).

## Typography
- **Heading font:** Bold display sans-serif (e.g. Space Grotesk, Bebas Neue)
- **Body font:** DM Sans — 400 body, 500 emphasis, 600 strong
- **Monospace:** DM Mono — labels, tags, eyebrow text, captions
- Hero heading: 48–64px, tight letter-spacing (−0.02em)
- Eyebrow text: 10–12px, monospace, uppercase, `vivid-teal` (or `gold-ink`), letter-spacing 3px

## Component Conventions
- **Cards:** `.glass-card` — white background + 1px `#E4DFD6` border + 12px radius
- **Primary button:** `bg-alpine-gold` + `text-snow-white`/`text-espresso` (gold CTA), or `bg-vivid-teal` + cream text, 8px radius
- **Secondary button:** Transparent with `vivid-teal` or `alpine-gold` border, fills on hover
- **Highlight/featured card:** `border-alpine-gold/40` + `bg-alpine-gold/5`
- **Nav:** Sticky top, hamburger on mobile, `vivid-teal` active indicator
- No harsh drop shadows — use border glow and background contrast for depth

## Layout
- Max content width: 1200px, side padding 24–48px
- Section vertical padding: 80–120px desktop, 48–64px mobile
- Smooth scroll, subtle scroll-triggered fade-in-up animations (under 400ms, nothing flashy)

## SEO / Accessibility (updated 2026-11-25)
- WCAG 2.1 AA — minimum 4.5:1 contrast ratio (see Contrast rules above)
- Unique `<title>`, meta description, and OG tags per page (all titles under 70 chars)
- Title template is `%s | Barnstorm Computer Services` — page titles must NOT include "| Barnstorm" to avoid duplication
- Meta descriptions: 120–155 chars for Bing compliance
- `og:type` set on every page (`website` for pages, `article` for blog posts)
- LocalBusiness schema.org structured data (layout.js)
- Article schema.org structured data on blog posts (app/blog/[slug]/page.js)
- Static OG image at `/public/barnstorm_og.png` — 1200x630. Shared OG/Twitter defaults live in `lib/seo.js`: every page-level `openGraph`/`twitter` object must spread `baseOpenGraph`/`baseTwitter` (Next.js metadata merges shallowly — omitting it drops the image)
- Blog posts: optional `seoTitle` frontmatter for the `<title>` when the full title + template would exceed 70 chars
- Apple touch icon at `app/apple-icon.png` — 180x180
- `theme-color: #FAF7F2` and `color-scheme: light` on `<html>`
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
- `tabular-nums` on numeric columns (e.g. 3D printing price calculator)
- CTA glass card padding: use `p-6 sm:p-10 md:p-16` (never `p-10` without mobile breakpoint)
- Banner CTA buttons in flex-col layouts: always include `w-full md:w-auto`
- Sitemap at `/sitemap.xml` (auto-generated, includes all pages + blog posts)
- robots.txt at `/robots.txt`

## Domain & Hosting
- Primary domain: `barnstormit.com` (no www)
- `www.barnstormit.com` → redirect to `barnstormit.com` (currently 307 — should be 308, change in Vercel Domains)
- Deployed on Vercel from GitHub (barnstormit/barnstormit.com)
- Google Search Console and Bing Webmaster Tools configured (2026-04-04)
- Google Analytics: G-C7QTMH6VK9 (via @next/third-parties, production only)

## Content Rules
- Phone number **(719) 838-0435** must be visible on every page without scrolling
- Never hide contact info — phone and email are the primary CTAs
- Tone: direct, friendly, competent — like a knowledgeable neighbor, not a corporate support line
- Avoid jargon, buzzwords, generic stock photos

## Pages
Homepage, Services (+ 8 service subpages), About, Service Area, city pages (Fairplay, Breckenridge, Buena Vista), Contact, Blog, Vacation Help, STR Partners, Remote Support, 3D Printing, Book, Privacy Policy, Terms. (No Pricing page — removed.)

See `DESIGN.md` for full page specs and `STITCH_PROMPTS.md` for section-by-section design prompts.
