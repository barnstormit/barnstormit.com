import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Computer Training",
  description:
    "One-on-one computer training, email and productivity setup, security awareness, and business software training in mountain Colorado.",
  alternates: { canonical: "https://barnstormit.com/services/training" },
  openGraph: {
    title: "Computer Training | Barnstorm Computer Services",
    description:
      "Patient one-on-one computer training, email and productivity coaching, safe-browsing education, and business software training tailored to your workflow.",
    url: "https://barnstormit.com/services/training",
    type: "website",
  },
};

const items = [
  {
    title: "One-on-one computer training",
    description:
      "Confused by a computer task? We sit down with you (in person or remotely) and walk through it at your pace. No condescension, no rushing — leave knowing how to do it yourself next time.",
  },
  {
    title: "Email and productivity setup",
    description:
      "Email rules that triage your inbox automatically, calendar setups that don't double-book you, document templates that save you reformatting every time. Small changes that add up to hours back per week.",
  },
  {
    title: "Safe browsing and security awareness",
    description:
      "Recognize phishing emails, spot fake websites, manage passwords sanely, and avoid the scams that target small businesses and seniors. Plain-English training, no fear-mongering.",
  },
  {
    title: "Business software training",
    description:
      "QuickBooks, Excel, Google Workspace, Microsoft 365, industry-specific software — we train you and your team on the tools you actually use, customized to your real workflow.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Training & Education",
  serviceType: "Computer training",
  description:
    "One-on-one computer training, email and productivity setup, safe browsing and security awareness, and business software training.",
  provider: PROVIDER_REF,
  url: "https://barnstormit.com/services/training",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Park County, Colorado" },
    { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
    { "@type": "AdministrativeArea", name: "Lake County, Colorado" },
    { "@type": "AdministrativeArea", name: "Chaffee County, Colorado" },
  ],
};

export default function Training() {
  return (
    <ServiceLandingLayout
      slug="training"
      eyebrow="TRAINING & EDUCATION"
      title="Computer Training"
      titleAccent="That Sticks"
      icon="school"
      intro="Patient, plain-English training in person or remote. We help you (or your staff) get faster at what you already do — and confident enough to figure out the rest."
      items={items}
      serviceJsonLd={serviceJsonLd}
    />
  );
}
