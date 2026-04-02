# Design System: Barnstorm Computer Services

**Project:** barnstormit.com — Business website for a mobile IT support company serving Colorado mountain communities.

---

## 1. Visual Theme & Atmosphere

The aesthetic is **bold, confident, and alpine-modern** — a dark-themed site that feels premium without being corporate. Think high-end ski lodge meets tech company. The tone is approachable and local, not slick and distant.

The site should feel like a confident solo operator who knows his craft — not a faceless enterprise. It needs to convey trust, speed, and local expertise at a glance. Visitors are often stressed (their computer just broke), so the design should be calm, clear, and action-oriented.

**Mood:** Professional yet warm. Dark and atmospheric, like a well-lit cabin at night — not sterile, not gloomy. Modern without being trendy. Clean without being minimal to the point of emptiness.

**Density:** Medium — generous whitespace between sections, but content-rich within sections. Let the site breathe.

**Inspiration direction:** Awwwards-quality dark sites, Godly design references, Dribbble portfolio sites. Not template-y. Not generic "IT company" blue-and-white.

---

## 2. Color Palette & Roles

| Color Name | Hex Code | Role |
|---|---|---|
| Deep Navy | #0D1B2A | Primary background — the dominant color across the site |
| Midnight Slate | #1B2838 | Card backgrounds, elevated surfaces, secondary panels |
| Steel Blue | #1A4A7A | Section borders, dividers, subtle accents |
| Vivid Teal | #3A9BD5 | Primary accent — buttons, links, highlights, interactive elements |
| Alpine Gold | #F0A500 | Secondary accent — badges, callouts, attention-grabbing details, trust signals |
| Snow White | #F7F9FC | Primary text on dark backgrounds |
| Frost Gray | #8AA0B4 | Muted text — captions, secondary info, timestamps |
| Ice Blue | #E8F4FD | Light surface for contrast sections (e.g., a light-mode pricing table on a dark page) |
| Transparent Navy | rgba(255,255,255,0.04) | Glass/card overlays with backdrop blur |
| Border Glow | rgba(58,155,213,0.18) | Subtle borders on cards and containers |

**Gradient usage:** Subtle radial gradients on the background (navy to slightly lighter navy with teal tint) to add depth. Never flat black. The background should feel like it has atmosphere.

---

## 3. Typography Rules

**Heading Font:** A bold, characterful sans-serif with presence. Think Bebas Neue, Space Grotesk, or similar — something with personality that reads "confident professional," not "generic template." All-caps for section labels and eyebrow text. Mixed case for main headings.

**Body Font:** DM Sans or a similar clean geometric sans-serif. Weight 400 for body, 500 for emphasis, 600 for strong emphasis. Highly legible at small sizes against dark backgrounds.

**Monospace Font:** DM Mono — used sparingly for technical details, labels, small tags, and micro-copy like zone names or service categories.

**Type Scale:**
- Hero heading: 48–64px, bold, tight letter-spacing (-0.02em)
- Section headings: 32–42px, bold
- Card headings: 18–22px, semibold
- Body text: 16–17px, regular, line-height 1.7–1.8
- Captions/labels: 11–13px, monospace, uppercase, letter-spacing 2–3px, muted color
- Eyebrow text above headings: 10–12px, monospace, uppercase, teal accent color, letter-spacing 3px

---

## 4. Component Stylings

**Buttons:**
- Primary: Vivid Teal (#3A9BD5) background, Snow White text, gently rounded corners (8px), subtle hover glow
- Secondary: Transparent with teal border, teal text, fills on hover
- CTA buttons should be prominent but not garish — confident, not desperate

**Cards/Containers:**
- Background: Transparent Navy overlay (rgba(255,255,255,0.04)) with backdrop-filter blur
- Border: 1px solid Border Glow (rgba(58,155,213,0.18))
- Corner radius: 10–12px
- No harsh drop shadows — use subtle border glow and background contrast instead

**Highlight Cards (for featured content):**
- Border: Alpine Gold tint (rgba(240,165,0,0.4))
- Background: Faint gold overlay (rgba(240,165,0,0.06))
- Used sparingly for trust badges, featured services, or CTAs

**Navigation:**
- Fixed/sticky top nav
- Dark background matching the page
- Logo/business name on left, nav links on right
- Mobile: hamburger menu with slide-in panel
- Active page indicator: teal underline or highlight

**Footer:**
- Full-width dark section (slightly lighter than main background)
- Business info, quick links, service area summary
- Phone and email prominently displayed
- Monospace styling for the legal/copyright line

**Service Zone Table:**
- Clean table with alternating subtle row backgrounds
- Zone names in monospace labels
- Fees right-aligned with teal accent
- Current/relevant zone highlighted with gold border treatment

**Trust Badges:**
- Small pill-shaped badges: "27+ Years Experience," "CompTIA A+," "MCSE," "Local Owner"
- Monospace text, subtle border, Alpine Gold or Teal accent
- Arranged in a horizontal row or flex-wrap group

---

## 5. Layout Principles

**Grid:** 12-column grid on desktop, collapsing to single-column on mobile. Max content width: 1200px. Side padding: 24–48px.

**Section rhythm:** Each major section has generous vertical padding (80–120px on desktop, 48–64px on mobile). Sections alternate between full-dark and slightly elevated backgrounds for visual rhythm.

**Mobile-first:** Every design decision starts at mobile width. Over half of visitors will be on phones — often panicking about a broken computer while standing in a rental cabin.

**Scroll behavior:** Smooth scroll between sections. Subtle scroll-triggered animations (fade-in-up on cards, slide-in on text blocks). Nothing distracting — professional and polished.

**Whitespace:** Generous. Let sections breathe. Dense information (like the service list or pricing table) gets extra surrounding space to compensate.

---

## 6. Pages & Content Structure

### Homepage (Landing Page — build first)
1. **Hero Section** — Bold headline: "Mountain Tech, Done Right" or similar. Subline about local IT support for Colorado mountain communities. Primary CTA button: "Call (719) 838-0435" and secondary CTA: "See Services." Background with atmospheric dark gradient, possibly with subtle mountain imagery or topographic pattern.
2. **Services Overview** — 4–5 feature cards highlighting core service categories (On-Site Repair, Remote Support, Business IT, Network Setup, 3D Printing). Each card: icon, title, short description, link to full services page.
3. **Why Barnstorm / Trust Section** — "27 years of IT experience. Actually lives here." Brief trust pitch with credential badges (CompTIA A+, MCSE, BS in IT). Photo of Jeff if available.
4. **Service Area Snapshot** — Visual showing towns covered with zone-based pricing preview. Link to full service area page.
5. **Contact CTA** — Phone number large and prominent. Email. "Tech problems don't care about your checkout date."

### Services Page
Full categorized service list:
- **Hardware Repair:** Laptop screen, SSD upgrades, RAM, motherboard, battery, keyboard, cooling
- **Software Services:** OS install, virus/malware removal, optimization, driver updates
- **Data Services:** Recovery, backup, transfer, cloud setup
- **Networking:** Home WiFi, router config, troubleshooting, security
- **Business IT:** Managed services, consulting, POS, remote support, service contracts
- **3D Printing:** Custom parts, replacement components, prototypes, mounts and brackets, cable management solutions, custom enclosures. "Need a part that doesn't exist? We can probably print it."
- **Other:** Mobile repair, printer, training, Mac and PC

### Blog Page
- Grid of blog post cards with featured image, title, date, short excerpt, and "Read more" link
- Categories/tags for filtering: Tech Tips, Business Updates, Mountain Life, 3D Printing, Behind the Scenes
- Individual post layout: full-width hero image, title, date, body content, related posts at bottom
- Posts serve triple duty: SEO content on the site, shortened for Facebook/Nextdoor posts, and shareable links
- Content ideas: tech tips for locals ("Why your WiFi is slow in a log cabin"), 3D printing projects with photos, business journey updates, mountain community tech guides, STR host tips
- Built with markdown files — write a .md file, it becomes a post automatically

### About Page
Jeff Barnstorf's bio — 27 years IT experience (CompTIA A+, MCSE, MCP, MCT, BS in IT from D'Youville University). Managed restaurants and bars across Summit County before launching Barnstorm. Lives in Fairplay. The angle: unlike big-box stores down the mountain, he actually lives here.

### Pricing Page
- $100/hour rate
- 1.5-hour minimum for on-site service
- Service zone fee table:
  - Local (Fairplay, Alma): $25
  - Regional (Blue River, Breckenridge, Como): $50
  - Extended (Frisco, Dillon, Buena Vista, Jefferson): $75
  - Remote (Silverthorne, Leadville, Salida): $100+
- Payment methods: Cash, Check, Zelle (preferred), Venmo, ACH (+1%), Credit Card (+3%)
- Parts markup: 25–50% over cost

### Service Area Page
- Map or visual of coverage zones (Summit, Park, Lake, Chaffee counties)
- Town list with zone classifications
- "Not sure if we cover your area? Just call."

### Contact Page
- Phone: (719) 838-0435 — large and prominent
- Email: jeff@barnstormit.com
- Mailing: PO Box 371, Fairplay, CO 80440
- Business hours (Mon–Sat, 8am–6pm, emergency available)
- Future: contact form, Calendly booking widget

### Vacation / STR Help Page
- Targeted at short-term rental guests and vacation visitors
- "Tech emergency during your stay? We come to you."
- Quick services: WiFi fix, printer setup, laptop repair, smart TV help
- Fast response, no membership, one-time service
- CTA: Call or text (719) 838-0435

### Remote Support Page
- Page for clients to download the remote support app (RustDesk) to allow Jeff to connect to their computer
- Headline: "Remote Support — Get Help Without the House Call"
- How it works — 3 simple steps:
  1. Download the app (buttons for Windows and Mac)
  2. Open it and share the ID and password shown on screen with Jeff
  3. Jeff connects, you watch, problem solved
- Trust/privacy section: "Your computer, your control. You can see everything happening on screen. The connection ends the moment the session is over. No permanent access, no background software — the app only runs when you open it."
- FAQ: "Do I need to install anything?" / "Is this safe?" / "What if I'm not tech-savvy?"
- Download buttons: placeholder links until RustDesk server is configured (point to # or a "coming soon" note during initial build)
- CTA: "Ready for a remote session? Call (719) 838-0435 and have the app open."
- Note: Once RustDesk server is live on remote.barnstormit.com, update download links to custom-branded RustDesk client with server address baked in

---

## 7. Brand Voice & Copy Guidelines

**Tone:** Direct, friendly, competent. Like talking to a knowledgeable neighbor, not a corporate support line. Use "you" and "your" — speak directly to the person with the problem.

**Avoid:** Corporate jargon, buzzwords ("synergy," "leverage," "solutions-driven"), overly formal language, and anything that sounds like a template.

**Key phrases to weave in:**
- "Actually lives here" (vs. big-box stores down the mountain)
- "Tech problems don't care about your checkout date"
- "No confusing jargon, no surprise charges"
- "Jeff comes to you"
- Mountain community language — reference the real towns, the real drive times, the real experience of living at 10,000 feet

**CTAs should be warm and direct:** "Call Jeff," "Get help now," "Let's fix it" — not "Submit inquiry" or "Request consultation."

---

## 8. Technical Implementation

**Stack:** Next.js + Tailwind CSS, deployed on Vercel from GitHub (repo: barnstormit/barnstormit.com). Auto-deploys on push.

**Performance targets:** Under 2.5 second load time. Optimize images aggressively. Lazy load below-fold content.

**SEO:** Each page needs unique title, meta description, Open Graph tags. LocalBusiness structured data (schema.org). Sitemap auto-generated.

**Accessibility:** WCAG 2.1 AA minimum. Proper contrast ratios (especially important with dark theme). Alt text on all images. Keyboard navigable. Semantic HTML.

**Responsive breakpoints:** Mobile-first. Key breakpoints at 640px (sm), 768px (md), 1024px (lg), 1280px (xl).

---

## 9. Do's and Don'ts

**Do:**
- Use the dark navy palette consistently — it's the brand identity
- Make the phone number visible on every page without scrolling
- Use real town names and real distances — locals notice
- Keep the design clean and fast — stressed people need answers, not animations
- Use subtle glass/blur effects on cards for depth

**Don't:**
- Use pitch black (#000000) anywhere — always use Deep Navy or Midnight Slate
- Use generic stock photos of people in headsets or handshakes
- Make it look like a "free website template" — this needs to feel custom
- Overdo animations — one or two subtle effects per page, max
- Hide the contact info — phone and email should be impossible to miss
- Use light mode for the main design — the dark theme IS the brand

---

*Barnstorm Computer Services LLC — Fairplay, CO 80440*
*barnstormit.com — (719) 838-0435 — jeff@barnstormit.com*
