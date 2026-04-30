import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Web Design & SEO",
  description:
    "Modern fast websites, local SEO, Google Business Profile setup, and domain email. Built for small businesses across the Colorado high country.",
  alternates: { canonical: "https://barnstormit.com/services/web-design" },
  openGraph: {
    title: "Web Design & SEO | Barnstorm Computer Services",
    description:
      "Custom websites, local SEO, Google Business Profile setup, and domain email for Colorado small businesses. Fast, mobile-friendly, no platform lock-in.",
    url: "https://barnstormit.com/services/web-design",
    type: "website",
  },
};

const items = [
  {
    title: "Website design and development",
    description:
      "Modern, fast, mobile-friendly websites that actually convert visitors into customers. Built on solid platforms (Next.js, Astro, WordPress when it fits) with hosting recommendations that don't bleed you dry.",
  },
  {
    title: "SEO and local search optimization",
    description:
      "Get found by people searching for your services in your area. We handle on-page SEO, schema markup, Google Business Profile, local citations, and ongoing content strategy that actually moves the needle.",
  },
  {
    title: "Google Business Profile setup",
    description:
      "Your Google Business Profile is often the first thing customers see. We set it up correctly, optimize photos and categories, and help you keep it active with posts and reviews.",
  },
  {
    title: "Domain and email setup",
    description:
      "Professional email at your own domain (you@yourbusiness.com), DNS configured right, SPF/DKIM/DMARC set up so your emails don't land in spam. Includes Google Workspace or Proton setup if you go that route.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web & Digital",
  serviceType: "Web design and SEO",
  description:
    "Website design and development, SEO and local search optimization, Google Business Profile setup, and domain and email setup.",
  provider: PROVIDER_REF,
  url: "https://barnstormit.com/services/web-design",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Park County, Colorado" },
    { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
    { "@type": "AdministrativeArea", name: "Lake County, Colorado" },
    { "@type": "AdministrativeArea", name: "Chaffee County, Colorado" },
  ],
};

export default function WebDesign() {
  return (
    <ServiceLandingLayout
      slug="web-design"
      eyebrow="WEB & DIGITAL"
      title="Web Design"
      titleAccent="& Local SEO"
      icon="language"
      intro="Fast modern websites, local SEO that gets you found, professional email at your own domain. Everything a small business needs to look like the pros — without the agency price tag."
      items={items}
      serviceJsonLd={serviceJsonLd}
    />
  );
}
