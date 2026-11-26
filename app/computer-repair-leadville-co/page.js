import Link from "next/link";
import { baseOpenGraph, baseTwitter } from "@/lib/seo";

export const metadata = {
  title: "Computer Repair in Leadville, CO",
  description:
    "On-site computer repair in Leadville, CO. WiFi, Starlink, virus removal, and networking for Lake County homes and businesses. Call (719) 838-0435.",
  alternates: { canonical: "https://barnstormit.com/computer-repair-leadville-co" },
  openGraph: {
    ...baseOpenGraph,
    title: "Computer Repair in Leadville, CO | Barnstorm Computer Services",
    description:
      "On-site computer repair and IT support in Leadville, CO. WiFi, Starlink, networking, virus removal, and more across Lake County.",
    url: "https://barnstormit.com/computer-repair-leadville-co",
    type: "website",
  },
  twitter: {
    ...baseTwitter,
    title: "Computer Repair in Leadville, CO | Barnstorm Computer Services",
    description:
      "On-site computer repair and IT support in Leadville, CO. WiFi, Starlink, networking, and more. Serving Lake County.",
  },
  other: {
    "geo.region": "US-CO",
    "geo.placename": "Leadville",
    "geo.position": "39.2508;-106.2925",
    ICBM: "39.2508, -106.2925",
  },
};

const services = [
  {
    "icon": "shield",
    "title": "Virus & Malware Removal",
    "desc": "Fake antivirus warnings, a browser that's been taken over, ransomware locking up your files. We strip the infection out, figure out how it got in, and set things up so the next bad click doesn't wreck your day."
  },
  {
    "icon": "speed",
    "title": "Slow Computer Tune-Ups",
    "desc": "A computer that takes five minutes to open a browser costs you time every single day. We find the real bottleneck — a dying drive, too little memory, junk running at startup — instead of clearing the recycle bin and calling it fixed."
  },
  {
    "icon": "wifi",
    "title": "WiFi Setup & Troubleshooting",
    "desc": "Leadville's Victorian-era homes have plaster-and-lath walls that soak up a WiFi signal. We walk the house and place mesh access points where the signal actually reaches every room, upstairs and down."
  },
  {
    "icon": "satellite_alt",
    "title": "Starlink Installation",
    "desc": "Out toward Twin Lakes, Turquoise Lake, and up the county roads, Starlink is often the only real option. We handle the mount, aim it for a clear view of the sky, and tie it into a mesh network that covers the whole place."
  },
  {
    "icon": "laptop_chromebook",
    "title": "Laptop Repair & Upgrades",
    "desc": "Spilled coffee, a screen that won't light up, a battery that dies by noon. We swap the broken part and add an SSD or more RAM while we're in there, so the machine lasts a few more years."
  },
  {
    "icon": "lan",
    "title": "Home & Business Networking",
    "desc": "Wired drops, managed switches, separate guest and staff networks. Built clean so your setup keeps working through the busy season instead of crashing the week you can't afford downtime."
  },
  {
    "icon": "print",
    "title": "Printer Setup & Troubleshooting",
    "desc": "Receipt printers, label printers, the office all-in-one that drops off WiFi every other day. We get them connected and stop them from vanishing every time Windows pushes an update."
  },
  {
    "icon": "backup",
    "title": "Data Backup & Recovery",
    "desc": "Years of photos and business records shouldn't live on one aging hard drive. We set up a backup that runs on its own, and we can often pull files back when a drive quits on you."
  },
  {
    "icon": "settings_remote",
    "title": "Remote Support Sessions",
    "desc": "Stuck on a software problem and don't want to wait for a visit? We connect over a secure session and sort out email, settings, or updates while you watch every click."
  },
  {
    "icon": "view_in_ar",
    "title": "3D Printing Services",
    "desc": "Need a part that's discontinued or a custom bracket for an odd job? We print it on a Bambu Lab X2D dual-nozzle machine — prototypes, replacements, and one-off pieces."
  }
];

const localPoints = [
  {
    "icon": "calendar_month",
    "title": "Scheduled Lake County Visits",
    "desc": "We make regular trips to Leadville and the rest of Lake County, so getting on-site help here doesn't mean waiting weeks for someone to show up."
  },
  {
    "icon": "workspace_premium",
    "title": "20+ Years of IT Experience",
    "desc": "CompTIA A+ certified, with two decades of hands-on work across Windows, Mac, Linux, and networking gear."
  },
  {
    "icon": "distance",
    "title": "Twin Lakes & All of Lake County",
    "desc": "Beyond Leadville proper, we cover Twin Lakes, Stringtown, and the homes along the county roads."
  },
  {
    "icon": "settings_remote",
    "title": "Remote Support Anytime",
    "desc": "Software problem? No drive needed. We can fix most of it over a secure remote session, often the same day you call."
  }
];

const faqs = [
  {
    "q": "How often are you in Leadville?",
    "a": "We run regular scheduled visits to Leadville and Lake County. Call to get on the calendar for the next trip — and if it's a software problem, we can usually fix it remotely before then."
  },
  {
    "q": "My older house has terrible WiFi. Can you fix that?",
    "a": "Yes. Plaster walls, multiple floors, and long, narrow layouts are common in Leadville homes. We map the house and place mesh access points so every room gets a usable signal."
  },
  {
    "q": "Can you set up Starlink outside of town?",
    "a": "Yes — mounting, dish placement for a clear view of the sky, router configuration, and connecting it to a mesh network for the whole house."
  },
  {
    "q": "Do you work with businesses on Harrison Avenue?",
    "a": "Absolutely. POS systems, back-office networking, staff computers, printers, and guest WiFi for shops, restaurants, and lodging."
  },
  {
    "q": "What does an on-site visit cost?",
    "a": "It depends on where you are and what the job involves. Contact us and we'll give you a straight quote based on your location and what you need done."
  }
];

const PROVIDER_REF = { "@id": "https://barnstormit.com/#localbusiness" };

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Computer Repair in Leadville, CO",
  "description":
    "On-site computer repair and IT support in Leadville, Colorado — virus removal, WiFi and networking, Starlink, hardware upgrades, data recovery, remote support, and 3D printing for Lake County.",
  "serviceType": "Computer repair and IT support",
  "provider": PROVIDER_REF,
  "url": "https://barnstormit.com/computer-repair-leadville-co",
  "areaServed": {
  "@type": "City",
  "name": "Leadville",
  "sameAs": "https://en.wikipedia.org/wiki/Leadville,_Colorado",
  "containedInPlace": {
    "@type": "AdministrativeArea",
    "name": "Lake County, Colorado"
  }
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
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://barnstormit.com/" },
    { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://barnstormit.com/service-area" },
    { "@type": "ListItem", "position": 3, "name": "Computer Repair in Leadville, CO", "item": "https://barnstormit.com/computer-repair-leadville-co" },
  ],
};

export default function ComputerRepairLeadville() {
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
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold-ink mb-4 block">
            Leadville, CO &middot; 80461
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Computer Repair
            <br />
            <span className="text-vivid-teal">in Leadville, CO</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl mx-auto leading-relaxed mb-10">
            On-site IT support for Leadville and Lake County &mdash; so a broken laptop doesn&apos;t mean a trip over Fremont Pass or down to Denver.
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
              className="w-full sm:w-auto border-2 border-alpine-gold/30 hover:border-alpine-gold text-gold-ink px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
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
              At 10,152 feet, Leadville is the highest incorporated city in the country, and it&apos;s a long way from the nearest repair counter. The big-box options are over the pass in Summit County or down in Denver, and they&apos;ll keep your machine for days. We make scheduled trips to Lake County and fix things on-site at your home or business &mdash; and for software problems, we can usually connect remotely and get you working the same day instead of waiting for the next visit.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="leadville-services-heading">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              Services
            </span>
            <h2
              id="leadville-services-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance"
            >
              What We Fix in Leadville
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

      {/* Why Leadville Calls Barnstorm */}
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="leadville-trust-heading">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold-ink mb-3 block">
              Local
            </span>
            <h2
              id="leadville-trust-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance"
            >
              Why Leadville Calls Barnstorm
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
                    className="material-symbols-outlined text-gold-ink text-2xl"
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
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="leadville-faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              FAQ
            </span>
            <h2
              id="leadville-faq-heading"
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
            Book an appointment or give us a call &mdash; we make regular trips to Lake County.
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
              className="w-full sm:w-auto border-2 border-alpine-gold/30 hover:border-alpine-gold text-gold-ink px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
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
