import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Business IT Support",
  description:
    "Managed IT, consulting, POS installation, and workflow automation for small businesses in Fairplay, Breckenridge, and Summit County.",
  alternates: { canonical: "https://barnstormit.com/services/business-it" },
  openGraph: {
    title: "Business IT Support | Barnstorm Computer Services",
    description:
      "Managed IT services, IT consulting, technology planning, POS installation, workflow automation, and remote support — built for Colorado small business.",
    url: "https://barnstormit.com/services/business-it",
    type: "website",
  },
};

const items = [
  {
    title: "Managed IT services",
    description:
      "Predictable monthly support so you stop thinking about IT and start running your business. Includes monitoring, patching, security, and response when something breaks. Local, no offshore call centers.",
  },
  {
    title: "IT consulting and strategy",
    description:
      "Choosing the right software, planning a hardware refresh, evaluating cloud vs on-prem — we sit down with you, learn the business, and recommend tech that fits how you actually work.",
  },
  {
    title: "Business technology planning",
    description:
      "Quarterly reviews of what's working and what's costing you money. Hardware lifecycles, software licensing, security posture, and growth-readiness all on one page.",
  },
  {
    title: "POS system installation",
    description:
      "From small retail to restaurants, we set up POS hardware and software, configure payment processing, train staff, and document the system so you're not stuck if your tech person leaves.",
  },
  {
    title: "Workflow automation",
    description:
      "Tasks done by hand that should be automatic — invoice generation, customer follow-up, file processing, reporting. We build the automations using the right tool for the job (n8n, Make, Zapier, or custom).",
  },
  {
    title: "Remote support",
    description:
      "Quick fixes without a site visit. Most software issues, configuration changes, and routine maintenance can be handled remotely — fast, cheaper than a house call, and covered by our standard rate.",
  },
  {
    title: "Service contracts",
    description:
      "Discounted rates and priority response for businesses that need IT to be there when it matters. Flexible terms — no multi-year lock-ins.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business IT",
  serviceType: "Managed IT services",
  description:
    "Managed IT, consulting and strategy, technology planning, POS installation, workflow automation, remote support, and service contracts for small businesses.",
  provider: PROVIDER_REF,
  url: "https://barnstormit.com/services/business-it",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Park County, Colorado" },
    { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
    { "@type": "AdministrativeArea", name: "Lake County, Colorado" },
    { "@type": "AdministrativeArea", name: "Chaffee County, Colorado" },
  ],
};

export default function BusinessIT() {
  return (
    <ServiceLandingLayout
      slug="business-it"
      eyebrow="BUSINESS IT"
      title="Business IT"
      titleAccent="Without the Bloat"
      icon="business_center"
      intro="Managed IT, consulting, POS systems, and workflow automation for Colorado small businesses — built around how you actually operate, not a generic playbook."
      items={items}
      serviceJsonLd={serviceJsonLd}
    />
  );
}
