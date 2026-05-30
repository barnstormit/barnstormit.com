import Link from "next/link";

export const metadata = {
  title: "Business IT Support",
  description:
    "Small business IT support in Fairplay, Breckenridge, Frisco, Dillon, and Buena Vista. Managed IT, consulting, POS installation, and workflow automation — local response, no contracts.",
  alternates: { canonical: "https://barnstormit.com/services/business-it" },
  openGraph: {
    title: "Business IT Support | Barnstorm Computer Services",
    description:
      "Small business IT support in Fairplay, Breckenridge, Frisco, Dillon, and Buena Vista. Managed IT, consulting, POS installation, and workflow automation — local response, no contracts.",
    url: "https://barnstormit.com/services/business-it",
    type: "website",
  },
};

const items = [
  {
    title: "Managed IT services",
    description:
      "Predictable monthly support so you stop thinking about IT. We monitor your systems, handle patches and security updates, and respond when something breaks — before it becomes a crisis. No offshore call centers, no ticket queues. You call us, we answer. Good fit for businesses with 2–20 computers that want IT handled without hiring someone full-time.",
  },
  {
    title: "IT consulting and strategy",
    description:
      "Choosing between cloud and on-premise? Evaluating new software? Planning a hardware refresh? We sit down with you, learn how your business actually operates, and give you a straight recommendation — not a vendor pitch. We work with whatever you already have and only suggest changes that make sense for your size and budget.",
  },
  {
    title: "Business technology planning",
    description:
      "We do a periodic review of your whole tech picture — hardware lifecycles, software licensing, security gaps, and anything that's costing you more than it should. You get a plain-language summary of what's working, what needs attention, and what can wait. No upsells, no fear tactics.",
  },
  {
    title: "POS system installation",
    description:
      "We set up POS hardware and software for restaurants, retail, and hospitality businesses — from Square and Clover to more complex systems. We configure payment processing, train your staff, and document the whole setup so you're not stuck if something changes. We've worked both sides of a restaurant — we know how much downtime costs you during a rush.",
  },
  {
    title: "Workflow automation",
    description:
      "Tasks your team does by hand every day that should run automatically — invoicing, customer follow-up, appointment reminders, file processing, reporting. We build automations using the right tool for your situation (n8n, Make, Zapier, or custom scripts). Most businesses save several hours a week once the right automations are in place.",
  },
  {
    title: "Remote support",
    description:
      "Most software issues, configuration changes, and routine maintenance don't require a site visit. We connect directly to your system, fix the problem, and you're back to work — usually within the hour. Faster than scheduling an on-site call, and billed at our standard rate.",
  },
  {
    title: "Service contracts",
    description:
      "Priority response and discounted rates for businesses that need IT to be there when it matters. Month-to-month terms — no multi-year lock-ins. Contracts are sized for small businesses, not enterprise budgets. Contact us to talk through what makes sense for your situation.",
  },
];

const industries = [
  { icon: "restaurant", label: "Restaurants & bars" },
  { icon: "storefront", label: "Retail shops" },
  { icon: "apartment", label: "Property managers" },
  { icon: "real_estate_agent", label: "Real estate offices" },
  { icon: "local_hospital", label: "Medical & dental" },
  { icon: "work", label: "Professional services" },
  { icon: "downhill_skiing", label: "Ski industry" },
  { icon: "cottage", label: "STR hosts" },
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://barnstormit.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://barnstormit.com/services" },
    { "@type": "ListItem", position: 3, name: "Business IT", item: "https://barnstormit.com/services/business-it" },
  ],
};

export default function BusinessIT() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="max-w-[1200px] mx-auto px-6 md:px-8 pt-20 md:pt-24"
      >
        <ol className="flex items-center gap-2 text-xs font-mono text-frost-gray flex-wrap">
          <li>
            <Link
              href="/"
              className="hover:text-vivid-teal transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-frost-gray/40">/</li>
          <li>
            <Link
              href="/services"
              className="hover:text-vivid-teal transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              Services
            </Link>
          </li>
          <li aria-hidden="true" className="text-frost-gray/40">/</li>
          <li className="text-snow-white" aria-current="page">Business IT</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="relative pt-8 pb-10 md:pt-12 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-vivid-teal blur-[160px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 text-center flex flex-col items-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass-card">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal">
              Business IT
            </span>
          </div>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-5xl md:text-6xl text-vivid-teal mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            business_center
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[0.95] text-snow-white text-balance">
            IT support that knows your business
            <br />
            <span className="text-vivid-teal">— and your town</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            Most small businesses in Fairplay, Breckenridge, Frisco, Dillon, and Buena Vista
            don&apos;t have an IT person on staff. When something breaks — a POS goes down
            mid-service, the office WiFi stops working before a showing, a computer won&apos;t
            start on a busy Monday — you need someone local who can actually show up.
            That&apos;s what we do.
          </p>
        </div>
      </header>

      {/* Local callout */}
      <section className="px-6 md:px-8 pb-10 md:pb-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="glass-card rounded-xl p-6 md:p-8 border-l-4 border-alpine-gold bg-alpine-gold/[0.04]">
            <p className="text-frost-gray text-lg leading-relaxed">
              We&apos;re based in Fairplay. For most of our business clients across Park,
              Summit, and Chaffee counties, we&apos;re 20–40 minutes away — not on the
              other end of a support queue.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="glass-card rounded-xl p-8 flex flex-col"
            >
              <h2 className="font-heading text-xl font-bold text-snow-white mb-3 flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-vivid-teal text-2xl mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                {item.title}
              </h2>
              <p className="text-frost-gray leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-10 text-balance">
            Businesses we work with
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="glass-card rounded-lg px-5 py-3 flex items-center gap-3"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-vivid-teal text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {ind.icon}
                </span>
                <span className="text-snow-white text-sm font-medium">
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-6 sm:p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-4 text-balance">
            Not sure what you need?
          </h2>
          <p className="text-frost-gray text-lg mb-10 max-w-2xl mx-auto">
            Call us and we&apos;ll figure it out. No commitment, no sales pitch — just a
            straight conversation about your situation.
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
              Request a Quote
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

      <section className="pb-16 md:pb-20 px-6 md:px-8 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-frost-gray hover:text-vivid-teal text-sm font-mono tracking-[0.15em] uppercase transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">arrow_back</span>
          Back to All Services
        </Link>
      </section>
    </>
  );
}
