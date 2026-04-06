import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Computer repair, IT support, networking, data recovery, 3D printing, and AI automation for Fairplay, Breckenridge, and Colorado mountain communities. Call (719) 838-0435.",
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

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            SERVICES
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Everything Your Computer Needs,
            <br />
            <span className="text-vivid-teal">Under One Roof</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            On-site repairs, remote support, and IT solutions for
            Colorado&apos;s mountain communities.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-12 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`glass-card rounded-xl p-8 flex flex-col ${
                svc.highlight
                  ? "border-alpine-gold/40"
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
              <h3 className="font-heading text-xl font-bold text-snow-white mb-4">
                {svc.title}
              </h3>
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
              {svc.href && (
                <Link
                  href={svc.href}
                  className="mt-6 text-alpine-gold font-heading font-bold text-sm flex items-center gap-2 hover:gap-3 transition-[gap] focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
                >
                  Learn more
                  <span aria-hidden="true" className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 px-6 md:px-8 mt-4">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-10 md:p-16 text-center">
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
