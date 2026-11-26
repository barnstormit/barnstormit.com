// Shared metadata defaults.
// Next.js metadata merges shallowly: a page that sets its own `openGraph` or
// `twitter` object replaces the layout's entirely. Spread these into every
// page-level object so images, siteName and locale are never dropped.

export const OG_IMAGE = {
  url: "/barnstorm_og.png",
  width: 1200,
  height: 630,
  alt: "Barnstorm Computer Services — Mountain Tech, Done Right",
};

export const baseOpenGraph = {
  siteName: "Barnstorm Computer Services",
  locale: "en_US",
  type: "website",
  images: [OG_IMAGE],
};

export const baseTwitter = {
  card: "summary_large_image",
  images: [OG_IMAGE.url],
};
