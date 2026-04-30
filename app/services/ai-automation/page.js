import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "AI & Automation",
  description:
    "AI tool setup, workflow automation, local AI servers, and chatbot deployment for Colorado small businesses. Practical AI that saves real time and money.",
  alternates: { canonical: "https://barnstormit.com/services/ai-automation" },
  openGraph: {
    title: "AI & Automation | Barnstorm Computer Services",
    description:
      "AI tool setup, workflow automation (n8n / Make / Zapier), local on-premises AI servers, chatbot deployment, and AI strategy consulting for small business.",
    url: "https://barnstormit.com/services/ai-automation",
    type: "website",
  },
};

const items = [
  {
    title: "AI tool setup and integration",
    description:
      "ChatGPT, Claude, Gemini, Perplexity — we help you pick the right tool for your work and set it up to actually save time. Includes integration with your existing apps so AI fits into your workflow, not the other way around.",
  },
  {
    title: "Workflow automation (n8n, Make, Zapier)",
    description:
      "Repetitive tasks turned into automations that run themselves. Lead intake, invoice processing, file conversion, scheduled reporting — pick the platform that fits your scale and budget, and we build the flows.",
  },
  {
    title: "Local AI server deployment",
    description:
      "Run AI privately on your own hardware. Ollama, LM Studio, or full-stack setups with GPU acceleration — keep your data on-premises while still getting the productivity benefit. Great for businesses with sensitive customer data.",
  },
  {
    title: "Chatbot and AI assistant setup",
    description:
      "Customer-facing chatbots that handle FAQs, internal assistants that answer staff questions about your own documents, voice agents that field after-hours calls. Built on your data, not generic templates.",
  },
  {
    title: "Business process automation",
    description:
      "Map a manual process, identify the tedious bits, automate them. Sometimes the right answer is no-code (Zapier), sometimes it's custom (Python, n8n), sometimes it's a workflow change. We pick what fits your business.",
  },
  {
    title: "AI strategy consulting",
    description:
      "Where can AI actually help your business right now, and where is it just hype? We give you a candid assessment, a roadmap for adoption, and the training to use it responsibly.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI & Automation",
  serviceType: "AI integration and workflow automation",
  description:
    "AI tool setup and integration, workflow automation (n8n, Make, Zapier), local AI server deployment, chatbot setup, business process automation, and strategy consulting.",
  provider: PROVIDER_REF,
  url: "https://barnstormit.com/services/ai-automation",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Park County, Colorado" },
    { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
    { "@type": "AdministrativeArea", name: "Lake County, Colorado" },
    { "@type": "AdministrativeArea", name: "Chaffee County, Colorado" },
  ],
};

export default function AIAutomation() {
  return (
    <ServiceLandingLayout
      slug="ai-automation"
      eyebrow="AI & AUTOMATION"
      title="AI That"
      titleAccent="Pays For Itself"
      icon="smart_toy"
      highlight={true}
      intro="AI tool setup, workflow automation, local AI deployments, and honest strategy advice. Practical applications that move your business forward — not buzzword bingo."
      items={items}
      serviceJsonLd={serviceJsonLd}
    />
  );
}
