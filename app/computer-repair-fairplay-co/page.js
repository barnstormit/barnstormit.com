import Link from "next/link";

export const metadata = {
  title: "Computer Repair in Fairplay, CO",
  description:
    "On-site computer repair and IT support in Fairplay, CO. Virus removal, WiFi setup, Starlink, networking, and more. Local technician based in Fairplay. Call (719) 838-0435.",
  alternates: { canonical: "https://barnstormit.com/computer-repair-fairplay-co" },
  openGraph: {
    title: "Computer Repair in Fairplay, CO | Barnstorm Computer Services",
    description:
      "On-site computer repair and IT support in Fairplay, CO. Virus removal, WiFi setup, Starlink, networking, and more. Local technician based in Fairplay.",
    url: "https://barnstormit.com/computer-repair-fairplay-co",
    type: "website",
  },
};

const services = [
  {
    icon: "shield",
    title: "Virus & Malware Removal",
    desc: "Persistent pop-ups, sluggish performance, ransomware, browser hijackers — we clean it out and harden your machine against the next round.",
  },
  {
    icon: "speed",
    title: "Slow Computer Tune-Ups",
    desc: "Your computer didn't always boot this slowly. We diagnose what's actually wrong — failing drive, malware, bloatware, low memory — and fix it instead of guessing.",
  },
  {
    icon: "wifi",
    title: "WiFi Setup & Troubleshooting",
    desc: "Dead zones, dropped connections, slow speeds. We map your home, place gear where it actually works, and lock down your network.",
  },
  {
    icon: "satellite_alt",
    title: "Starlink Installation",
    desc: "Mount, aim, and integrate Starlink with your existing network. Common in Park County — we know the gotchas with mesh systems and bypass mode.",
  },
  {
    icon: "laptop_chromebook",
    title: "Laptop Repair & Upgrades",
    desc: "Cracked screens, dying batteries, slow drives, not enough RAM. We replace the failed parts instead of pushing you toward a new $1,500 laptop.",
  },
  {
    icon: "lan",
    title: "Home & Business Networking",
    desc: "Wired networking, switches, access points, VLANs, guest networks. Clean installs that won't fall over six months later.",
  },
  {
    icon: "print",
    title: "Printer Setup & Troubleshooting",
    desc: "Wireless printers that vanish from the network, drivers that fight Windows updates, jobs that won't print. We get it working and keep it working.",
  },
  {
    icon: "backup",
    title: "Data Backup & Recovery",
    desc: "Set up an automated backup you don't have to think about — or recover what you thought was gone after a drive failure or accidental delete.",
  },
  {
    icon: "settings_remote",
    title: "Remote Support Sessions",
    desc: "Software fix, email setup, password reset — handled in under an hour without us coming out. You watch everything we do.",
  },
  {
    icon: "view_in_ar",
    title: "3D Printing Services",
    desc: "Custom parts, replacement components, brackets, prototypes. Bambu Lab X2D dual-nozzle, printed locally in our Fairplay shop.",
  },
];

const localPoints = [
  {
    icon: "home_pin",
    title: "Based in Fairplay",
    desc: "PO Box 371, 80440. This is home — not a satellite office and not a call center.",
  },
  {
    icon: "workspace_premium",
    title: "20+ Years of IT Experience",
    desc: "CompTIA A+ certified. Decades of hands-on work across Windows, Mac, Linux, and networking.",
  },
  {
    icon: "distance",
    title: "Alma, Como & South Park",
    desc: "We also serve Alma, Como, and the entire South Park area without a trip charge.",
  },
  {
    icon: "store",
    title: "Drop-Offs Accepted",
    desc: "Don't want to wait for a house call? Bring your device to us in Fairplay — call to arrange a time.",
  },
];

const faqs = [
  {
    q: "How fast can you get to my house in Fairplay?",
    a: "Since we're based here, usually within the hour if we have availability. Book an appointment to guarantee your time slot.",
  },
  {
    q: "Do you work on Macs and PCs?",
    a: "Both. Windows, Mac, Linux, and Chromebooks.",
  },
  {
    q: "Can I drop off my computer instead of scheduling a house call?",
    a: "Yes — drop-offs are welcome in Fairplay. Call us to arrange a time.",
  },
  {
    q: "Do you offer remote support?",
    a: "Yes. We can connect to your computer remotely and fix most software issues while you watch. Available anywhere with an internet connection.",
  },
  {
    q: "What about after-hours or emergency service?",
    a: "We offer emergency and after-hours service at a premium rate. Scheduled appointments during business hours are always the best deal.",
  },
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Computer Repair in Fairplay, CO",
  "description":
    "On-site computer repair and IT support in Fairplay, Colorado — virus removal, networking, Starlink, hardware upgrades, data recovery, remote support, and 3D printing.",
  "serviceType": "Computer repair and IT support",
  "provider": PROVIDER_REF,
  "url": "https://barnstormit.com/computer-repair-fairplay-co",
  "areaServed": {
    "@type": "City",
    "name": "Fairplay",
    "sameAs": "https://en.wikipedia.org/wiki/Fairplay,_Colorado",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "Park County, Colorado",
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
      "name": "Computer Repair in Fairplay, CO",
      "item": "https://barnstormit.com/computer-repair-fairplay-co",
    },
  ],
};

export default function ComputerRepairFairplay() {
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
            Fairplay, CO &middot; 80440
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Computer Repair
            <br />
            <span className="text-vivid-teal">in Fairplay, CO</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl mx-auto leading-relaxed mb-10">
            On-site IT support from a technician who actually lives here &mdash;
            not a call center down the mountain.
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
              Barnstorm Computer Services is based right here in Fairplay at
              nearly 10,000 feet. When your computer goes down, you don&apos;t
              have to drive to Denver or wait for a big-box store to ship your
              machine back in two weeks. We come to your home or business,
              diagnose the problem on the spot, and get you back up and
              running &mdash; usually same-visit. Drop-offs welcome too.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="fairplay-services-heading">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              Services
            </span>
            <h2
              id="fairplay-services-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance"
            >
              What We Fix in Fairplay
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

      {/* Why Fairplay Trusts Barnstorm */}
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="fairplay-trust-heading">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-alpine-gold mb-3 block">
              Local
            </span>
            <h2
              id="fairplay-trust-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance"
            >
              Why Fairplay Trusts Barnstorm
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
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="fairplay-faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              FAQ
            </span>
            <h2
              id="fairplay-faq-heading"
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
            Book an appointment or call us &mdash; we&apos;re right here in
            Fairplay.
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
