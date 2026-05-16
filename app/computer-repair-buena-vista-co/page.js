import Link from "next/link";

export const metadata = {
  title: "Computer Repair in Buena Vista, CO",
  description:
    "On-site computer repair and IT support in Buena Vista, CO. Starlink, WiFi, networking, home office setup, and more. Serving Chaffee County. Call (719) 838-0435.",
  alternates: { canonical: "https://barnstormit.com/computer-repair-buena-vista-co" },
  openGraph: {
    title: "Computer Repair in Buena Vista, CO | Barnstorm Computer Services",
    description:
      "On-site computer repair and IT support in Buena Vista, CO. Starlink, WiFi, networking, home office setup, and more. Serving Chaffee County.",
    url: "https://barnstormit.com/computer-repair-buena-vista-co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Repair in Buena Vista, CO | Barnstorm Computer Services",
    description:
      "On-site computer repair and IT support in Buena Vista, CO. Starlink, WiFi, networking, home office setup, and more. Serving Chaffee County.",
  },
  other: {
    "geo.region": "US-CO",
    "geo.placename": "Buena Vista",
    "geo.position": "38.8422;-106.1311",
    ICBM: "38.8422, -106.1311",
  },
};

const services = [
  {
    icon: "shield",
    title: "Virus & Malware Removal",
    desc: "Pop-ups that won't quit, a browser that's been hijacked, files held hostage by ransomware. We clear it out and tighten up your machine so the next bad click doesn't take down your work week.",
  },
  {
    icon: "speed",
    title: "Slow Computer Tune-Ups",
    desc: "If your computer crawls every time you join a video call, that's a real problem when you work from home. We track down what's actually dragging it down and get it responsive again.",
  },
  {
    icon: "wifi",
    title: "WiFi Setup & Troubleshooting",
    desc: "When one person's on a work call, the kid's gaming, and the TV's streaming, a basic router gives up. We size the network to your real household and clear out the dead spots room by room.",
  },
  {
    icon: "satellite_alt",
    title: "Starlink Installation",
    desc: "Starlink runs a big chunk of the valley out here. We handle dish placement, the mount, router setup, bypass mode, and tying it into a mesh system so the whole house gets a steady connection.",
  },
  {
    icon: "laptop_chromebook",
    title: "Laptop Repair & Upgrades",
    desc: "A slow drive, a swollen battery, a cracked hinge. We replace what failed and add an SSD or more RAM, so you keep the laptop you already know instead of starting over with a new one.",
  },
  {
    icon: "lan",
    title: "Home & Business Networking",
    desc: "New construction is going up all over BV, and a new home is the right time to wire it properly. We run network drops, set up switches, and get offices and shops solid from day one.",
  },
  {
    icon: "print",
    title: "Printer Setup & Troubleshooting",
    desc: "Printers that won't show up on the network, drivers that fight Windows, jobs stuck in the queue. We get yours printing and keep it connected so it stays that way.",
  },
  {
    icon: "backup",
    title: "Data Backup & Recovery",
    desc: "A lifetime of photos, tax records, and important files shouldn't sit on one drive with no copy. We set up an automatic backup, and we can often recover data after a drive fails.",
  },
  {
    icon: "settings_remote",
    title: "Remote Support Sessions",
    desc: "A lot of fixes don't need a visit at all. We hop on a secure remote session, handle the software side, and you watch the whole thing happen from your own chair.",
  },
  {
    icon: "view_in_ar",
    title: "3D Printing Services",
    desc: "Custom parts, replacement pieces, brackets, prototypes — printed on a Bambu Lab X2D dual-nozzle machine for when you can't find what you need on a store shelf.",
  },
];

const localPoints = [
  {
    icon: "calendar_month",
    title: "Regular in BV & Chaffee County",
    desc: "We make scheduled trips to Buena Vista and the rest of Chaffee County, so getting on-site help here doesn't mean waiting weeks for someone to show up.",
  },
  {
    icon: "workspace_premium",
    title: "20+ Years of IT Experience",
    desc: "CompTIA A+ certified, with two decades of hands-on work across Windows, Mac, Linux, and networking gear.",
  },
  {
    icon: "distance",
    title: "Salida, Johnson Village & Beyond",
    desc: "We also cover Salida, Johnson Village, and the surrounding Chaffee County communities.",
  },
  {
    icon: "settings_remote",
    title: "Remote Support Anytime",
    desc: "Software problem? No drive needed. We can fix most of it over a secure remote session whenever you need it.",
  },
];

const faqs = [
  {
    q: "How often are you in the Buena Vista area?",
    a: "We run regular scheduled visits to BV and the rest of Chaffee County. Give us a call to get on the calendar for the next trip out.",
  },
  {
    q: "Can you help with my Starlink setup?",
    a: "Yes — mounting, dish placement, router configuration, mesh integration, and bypass mode. It's one of our most common calls out here in the valley.",
  },
  {
    q: "I work from home and my WiFi keeps dropping — can you fix that?",
    a: "Yes. We look at your whole setup, place access points where they actually belong, and make sure a work call doesn't cut out on you mid-sentence.",
  },
  {
    q: "Do you serve Salida too?",
    a: "We do — Salida, Johnson Village, Nathrop, and the surrounding parts of Chaffee County are all in our service area.",
  },
  {
    q: "What does an on-site visit cost?",
    a: "It depends on where you are and what the job involves. Contact us and we'll give you a straight quote based on your location and what you need done.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Computer Repair in Buena Vista, CO",
  "description":
    "On-site computer repair and IT support in Buena Vista, Colorado — Starlink setup, networking, home office WiFi, virus removal, hardware upgrades, data recovery, remote support, and 3D printing.",
  "serviceType": "Computer repair and IT support",
  "provider": PROVIDER_REF,
  "url": "https://barnstormit.com/computer-repair-buena-vista-co",
  "areaServed": {
    "@type": "City",
    "name": "Buena Vista",
    "sameAs": "https://en.wikipedia.org/wiki/Buena_Vista,_Colorado",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "Chaffee County, Colorado",
    },
  },
};

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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://barnstormit.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Service Area",
      "item": "https://barnstormit.com/service-area",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Computer Repair in Buena Vista, CO",
      "item": "https://barnstormit.com/computer-repair-buena-vista-co",
    },
  ],
};

export default function ComputerRepairBuenaVista() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <header className="relative pt-20 md:pt-28 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-vivid-teal blur-[160px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-alpine-gold blur-[160px] rounded-full opacity-40" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-alpine-gold mb-4 block">
            Buena Vista, CO &middot; 81211
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Computer Repair
            <br />
            <span className="text-vivid-teal">in Buena Vista, CO</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl mx-auto leading-relaxed mb-10">
            On-site IT support across BV and Chaffee County &mdash; so you
            aren&apos;t making the long drive to Salida or down to the Springs
            just to fix a computer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span aria-hidden="true" className="material-symbols-outlined">event</span>
              Book an Appointment
            </Link>
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto border-2 border-alpine-gold/30 hover:border-alpine-gold text-alpine-gold px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span aria-hidden="true" className="material-symbols-outlined">call</span>
              Call (719) 838-0435
            </a>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8 md:p-10">
            <p className="text-frost-gray text-base md:text-lg leading-relaxed">
              Buena Vista is growing fast. Remote workers and retirees keep
              moving into the valley, new neighborhoods are going up, and
              Starlink dishes are on rooftops everywhere you look. A home
              network that worked fine for two people tends to fall apart once
              somebody&apos;s on a Zoom call, the kid&apos;s gaming, and the
              smart TV is streaming all at once. We come to you across Chaffee
              County and sort it out on-site &mdash; because driving to
              Colorado Springs for computer help is a two-hour-plus round trip
              nobody should have to make.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="bv-services-heading">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              Services
            </span>
            <h2
              id="bv-services-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance"
            >
              What We Fix in Buena Vista
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="glass-card rounded-xl p-7 flex flex-col"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-3xl text-vivid-teal mb-5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {svc.icon}
                </span>
                <h3 className="font-heading text-lg font-bold text-snow-white mb-3">
                  {svc.title}
                </h3>
                <p className="text-frost-gray text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buena Vista Trusts Barnstorm */}
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="bv-trust-heading">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-alpine-gold mb-3 block">
              Local
            </span>
            <h2
              id="bv-trust-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance"
            >
              Why Buena Vista Trusts Barnstorm
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {localPoints.map((p) => (
              <div
                key={p.title}
                className="glass-card rounded-xl p-7 flex gap-5 items-start"
                style={{
                  borderColor: "rgba(240, 165, 0, 0.4)",
                  background: "rgba(240, 165, 0, 0.06)",
                }}
              >
                <div className="bg-alpine-gold/10 p-3 rounded-lg border border-alpine-gold/20 shrink-0">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-alpine-gold text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {p.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-snow-white text-lg mb-1">
                    {p.title}
                  </h3>
                  <p className="text-frost-gray text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="bv-faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              FAQ
            </span>
            <h2
              id="bv-faq-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance"
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group glass-card rounded-xl overflow-hidden"
              >
                <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vivid-teal rounded-xl">
                  <h3 className="font-heading font-bold text-lg pr-4 text-snow-white">
                    {faq.q}
                  </h3>
                  <span
                    className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0"
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-frost-gray leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 px-6 md:px-8 mt-4">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-6 sm:p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-4 text-balance">
            Ready to get your tech fixed?
          </h2>
          <p className="text-frost-gray text-lg mb-10">
            Book an appointment or call us &mdash; we&apos;ll get you on the
            calendar for the next trip through the valley.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span aria-hidden="true" className="material-symbols-outlined">event</span>
              Book an Appointment
            </Link>
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto border-2 border-alpine-gold/30 hover:border-alpine-gold text-alpine-gold px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span aria-hidden="true" className="material-symbols-outlined">call</span>
              Call (719) 838-0435
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
