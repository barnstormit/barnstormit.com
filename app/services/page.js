import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Computer repair, networking, 3D printing, and AI automation for Fairplay, Breckenridge, and Colorado mountain communities. Call (719) 838-0435.",
  alternates: { canonical: "https://barnstormit.com/services" },
  openGraph: {
    title: "Services | Barnstorm Computer Services",
    description:
      "Hardware repair, software services, networking, business IT, 3D printing, and more for Colorado mountain communities.",
    url: "https://barnstormit.com/services",
    type: "website",
  },
};

const services = [
  {
    icon: "build",
    title: "Hardware Repair",
    href: "/services/hardware-repair",
    items: [
      "Laptop screen repair",
      "SSD/HDD upgrades",
      "RAM upgrades",
      "Motherboard repair",
      "Battery replacement",
      "Keyboard/hinge repair",
      "Cooling system repair",
      "DC jack repair",
    ],
  },
  {
    icon: "terminal",
    title: "Software Services",
    href: "/services/software-services",
    items: [
      "OS installation",
      "Virus/malware removal",
      "System optimization",
      "Software updates",
      "Driver updates",
      "System cleanup",
    ],
  },
  {
    icon: "database",
    title: "Data Services",
    href: "/services/data-services",
    items: [
      "Data recovery",
      "Backup solutions",
      "Data transfer",
      "Cloud storage setup",
    ],
  },
  {
    icon: "wifi",
    title: "Networking",
    href: "/services/networking",
    items: [
      "Home/business WiFi setup",
      "Router/modem configuration",
      "WiFi troubleshooting",
      "Network security",
      "Starlink installation",
    ],
  },
  {
    icon: "business_center",
    title: "Business IT",
    href: "/services/business-it",
    items: [
      "Managed IT services",
      "IT consulting and strategy",
      "Business technology planning",
      "POS system installation",
      "Workflow automation",
      "Remote support",
      "Service contracts",
    ],
  },
  {
    icon: "school",
    title: "Training & Education",
    href: "/services/training",
    items: [
      "One-on-one computer training",
      "Email and productivity setup",
      "Safe browsing and security awareness",
      "Business software training",
    ],
  },
  {
    icon: "language",
    title: "Web & Digital",
    href: "/services/web-design",
    items: [
      "Website design and development",
      "SEO and local search optimization",
      "Google Business Profile setup",
      "Domain and email setup",
    ],
  },
  {
    icon: "smart_toy",
    title: "AI & Automation",
    badge: "NEW",
    highlight: true,
    href: "/services/ai-automation",
    items: [
      "AI tool setup and integration",
      "Workflow automation (n8n, Make, Zapier)",
      "Local AI server deployment",
      "Chatbot and AI assistant setup",
      "Business process automation",
      "AI strategy consulting",
    ],
  },
  {
    icon: "view_in_ar",
    title: "3D Printing",
    badge: "NEW",
    highlight: true,
    href: "/3d-printing",
    items: [
      "Custom parts",
      "Replacement components",
      "Prototypes",
      "Mounts and brackets",
      "Cable management",
      "Enclosures",
    ],
  },
];

const faqs = [
  {
    q: "Do you come to my location or do I bring my computer to you?",
    a: "Both! Barnstorm is fully mobile — we come to your home or business in Fairplay, Alma, Como, Bailey, Jefferson, Grant, Blue River, Breckenridge, Frisco, Dillon, Buena Vista, Leadville, Salida, and surrounding areas across Park, Summit, Lake, and Chaffee counties. We also offer remote support sessions for software issues, and we accept drop-offs if you'd rather bring your device to us in Fairplay.",
  },
  {
    q: "How fast can you get to Breckenridge or Buena Vista from Fairplay?",
    a: "Breckenridge is about 30–35 minutes over Hoosier Pass, and Buena Vista is about 40 minutes south on 285. We're frequently in Breckenridge, Frisco, Dillon, and Buena Vista for other appointments and same-day service is often available.",
  },
  {
    q: "Do you work on Macs or just PCs?",
    a: "Both. We support Windows, Mac, Linux, and Chromebooks for residents and businesses across Fairplay, Breckenridge, Buena Vista, Leadville, and all of our service areas.",
  },
  {
    q: "How much do you charge?",
    a: "Pricing depends on the service and your location. Whether you're in Fairplay, Breckenridge, Dillon, Buena Vista, or anywhere in our service area — contact us for a quote. No surprise charges, ever.",
  },
  {
    q: "Do you offer monthly IT support plans?",
    a: "Yes. We offer monthly plans for businesses in Fairplay, Breckenridge, Frisco, Dillon, Buena Vista, Leadville, and across the mountain communities that want priority response and ongoing maintenance. Contact us for details.",
  },
  {
    q: "Can you set up a network for my small business?",
    a: "That's one of our specialties. WiFi, wired networking, security, workstation setup, email, backups, and ongoing support for small businesses in Fairplay, Breckenridge, Frisco, Dillon, Buena Vista, Leadville, Salida, and throughout Park, Summit, Lake, and Chaffee counties.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
};

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Hardware Repair",
      "description": "Laptop screen, SSD/HDD, RAM, motherboard, battery, keyboard/hinge, cooling system, and DC jack repair.",
      "provider": PROVIDER_REF,
      "serviceType": "Computer hardware repair",
    },
    {
      "@type": "Service",
      "name": "Software Services",
      "description": "OS installation, virus and malware removal, system optimization, and software and driver updates.",
      "provider": PROVIDER_REF,
      "serviceType": "Computer software services",
    },
    {
      "@type": "Service",
      "name": "Data Services",
      "description": "Data recovery, backup solutions, data transfer, and cloud storage setup.",
      "provider": PROVIDER_REF,
      "serviceType": "Data recovery and backup",
    },
    {
      "@type": "Service",
      "name": "Networking",
      "description": "Home and business WiFi setup, router and modem configuration, WiFi troubleshooting, network security, and Starlink installation.",
      "provider": PROVIDER_REF,
      "serviceType": "Network and WiFi setup",
    },
    {
      "@type": "Service",
      "name": "Business IT",
      "description": "Managed IT services, consulting and strategy, technology planning, POS system installation, workflow automation, remote support, and service contracts.",
      "provider": PROVIDER_REF,
      "serviceType": "Managed IT services",
    },
    {
      "@type": "Service",
      "name": "Training & Education",
      "description": "One-on-one computer training, email and productivity setup, safe browsing and security awareness, and business software training.",
      "provider": PROVIDER_REF,
      "serviceType": "Computer training",
    },
    {
      "@type": "Service",
      "name": "Web & Digital",
      "description": "Website design and development, SEO and local search optimization, Google Business Profile setup, and domain and email setup.",
      "provider": PROVIDER_REF,
      "serviceType": "Web design and SEO",
    },
    {
      "@type": "Service",
      "name": "AI & Automation",
      "description": "AI tool setup and integration, workflow automation (n8n, Make, Zapier), local AI server deployment, chatbot and AI assistant setup, business process automation, and AI strategy consulting.",
      "provider": PROVIDER_REF,
      "serviceType": "AI integration and workflow automation",
    },
    {
      "@type": "Service",
      "name": "3D Printing",
      "description": "Custom parts, replacement components, prototypes, mounts and brackets, cable management, and enclosures.",
      "provider": PROVIDER_REF,
      "serviceType": "Custom 3D printing",
      "url": "https://barnstormit.com/3d-printing",
    },
  ],
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            SERVICES
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Everything Your Computer Needs,
            <br />
            <span className="text-vivid-teal">Under One Roof</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl mx-auto leading-relaxed">
            On-site repairs, remote support, and IT solutions for
            Colorado&apos;s mountain communities.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-12 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className={`glass-card rounded-xl p-8 flex flex-col group hover:border-vivid-teal/30 transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none ${
                svc.highlight
                  ? "border-alpine-gold/40 hover:border-alpine-gold/60"
                  : ""
              }`}
              style={
                svc.highlight
                  ? { background: "rgba(240, 165, 0, 0.06)" }
                  : undefined
              }
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  aria-hidden="true"
                  className={`material-symbols-outlined text-3xl ${
                    svc.highlight ? "text-alpine-gold" : "text-vivid-teal"
                  }`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {svc.icon}
                </span>
                {svc.badge && (
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold bg-alpine-gold text-deep-navy px-3 py-1 rounded-full">
                    {svc.badge}
                  </span>
                )}
              </div>
              <h2 className="font-heading text-xl font-bold text-snow-white mb-4">
                {svc.title}
              </h2>
              <ul className="space-y-2 flex-1">
                {svc.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-frost-gray text-sm"
                  >
                    <span aria-hidden="true" className="material-symbols-outlined text-vivid-teal/60 text-base mt-0.5 shrink-0">
                      check
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <span
                className={`mt-6 font-heading font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-[gap] ${
                  svc.highlight ? "text-alpine-gold" : "text-vivid-teal"
                }`}
              >
                Learn more
                <span aria-hidden="true" className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Vacation & STR */}
      <section className="pb-12 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-6 block">
            Vacation &amp; STR Support
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/vacation-help"
              className="glass-card rounded-xl p-8 flex flex-col group hover:border-vivid-teal/30 transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-3xl text-vivid-teal mb-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                luggage
              </span>
              <h2 className="font-heading text-xl font-bold text-snow-white mb-3">
                Vacation Tech Help
              </h2>
              <p className="text-frost-gray text-sm leading-relaxed flex-1">
                Tech emergency during your stay? We come to your rental
                fast&nbsp;&mdash; WiFi, laptops, Smart TV, and more.
              </p>
              <span className="mt-6 text-vivid-teal font-heading font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-[gap]">
                Learn more
                <span aria-hidden="true" className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </Link>
            <Link
              href="/str-partners"
              className="glass-card rounded-xl p-8 flex flex-col group hover:border-alpine-gold/30 transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
              style={{ borderColor: "rgba(240, 165, 0, 0.4)", background: "rgba(240, 165, 0, 0.06)" }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-3xl text-alpine-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  handshake
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold bg-alpine-gold text-deep-navy px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>
              <h2 className="font-heading text-xl font-bold text-snow-white mb-3">
                STR Partner Program
              </h2>
              <p className="text-frost-gray text-sm leading-relaxed flex-1">
                Property managers and hosts&nbsp;&mdash; keep your guests happy
                with on-call tech support. No contracts, local response.
              </p>
              <span className="mt-6 text-alpine-gold font-heading font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-[gap]">
                Learn more
                <span aria-hidden="true" className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12 px-6 md:px-8" aria-labelledby="services-faq-heading">
        <div className="max-w-[900px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block text-center">
            FAQ
          </span>
          <h2
            id="services-faq-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-center mb-10 text-balance"
          >
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="faq-item glass-card rounded-xl px-5 sm:px-6 py-4 group focus-within:border-vivid-teal/40 transition-colors duration-300"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-heading font-bold text-snow-white text-base sm:text-lg leading-snug focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vivid-teal rounded-md">
                  <span className="flex-1">{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-vivid-teal text-2xl shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-45"
                  >
                    add
                  </span>
                </summary>
                <p className="mt-4 text-frost-gray text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 px-6 md:px-8 mt-4">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-6 sm:p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-4 text-balance">
            Don&apos;t see what you need?
          </h2>
          <p className="text-frost-gray text-lg mb-10">
            Call us &mdash; we probably do it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span aria-hidden="true" className="material-symbols-outlined">call</span>
              Call (719) 838-0435
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span aria-hidden="true" className="material-symbols-outlined">mail</span>
              Request Quote
            </Link>
            <Link
              href="/book"
              className="w-full sm:w-auto border-2 border-alpine-gold/30 hover:border-alpine-gold text-alpine-gold px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span aria-hidden="true" className="material-symbols-outlined">event</span>
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
