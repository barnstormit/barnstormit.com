import Link from "next/link";
import { baseOpenGraph, baseTwitter } from "@/lib/seo";

export const metadata = {
  title: "Computer Repair in Salida, CO",
  description:
    "On-site computer repair in Salida, CO. WiFi, Starlink, virus removal, and networking for Chaffee County homes and businesses. Call (719) 838-0435.",
  alternates: { canonical: "https://barnstormit.com/computer-repair-salida-co" },
  openGraph: {
    ...baseOpenGraph,
    title: "Computer Repair in Salida, CO | Barnstorm Computer Services",
    description:
      "On-site computer repair and IT support in Salida, CO. WiFi, Starlink, networking, virus removal, and more across Chaffee County.",
    url: "https://barnstormit.com/computer-repair-salida-co",
    type: "website",
  },
  twitter: {
    ...baseTwitter,
    title: "Computer Repair in Salida, CO | Barnstorm Computer Services",
    description:
      "On-site computer repair and IT support in Salida, CO. WiFi, Starlink, networking, and more. Serving Chaffee County.",
  },
  other: {
    "geo.region": "US-CO",
    "geo.placename": "Salida",
    "geo.position": "38.5347;-105.9989",
    ICBM: "38.5347, -105.9989",
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
    "desc": "Thick brick walls in the historic downtown buildings and spread-out homes in the valley both make WiFi tricky. We find the dead spots and place access points where they actually help, so the back office and the upstairs bedroom both get a solid signal."
  },
  {
    "icon": "satellite_alt",
    "title": "Starlink Installation",
    "desc": "Plenty of homes out toward Poncha Springs, Howard, and up the county roads rely on Starlink. We handle the mount, the aim, and getting it to work with a mesh network instead of the stock router alone."
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
    "title": "Regular Chaffee County Visits",
    "desc": "Salida is on our regular Chaffee County run along with Buena Vista, so on-site help doesn't mean waiting weeks for someone to show up."
  },
  {
    "icon": "workspace_premium",
    "title": "20+ Years of IT Experience",
    "desc": "CompTIA A+ certified, with two decades of hands-on work across Windows, Mac, Linux, and networking gear."
  },
  {
    "icon": "distance",
    "title": "Poncha Springs, Nathrop & Beyond",
    "desc": "We also cover Poncha Springs, Nathrop, Howard, and the rest of Chaffee County."
  },
  {
    "icon": "settings_remote",
    "title": "Remote Support Anytime",
    "desc": "Software problem? No drive needed. We can fix most of it over a secure remote session, often the same day you call."
  }
];

const faqs = [
  {
    "q": "How often are you in Salida?",
    "a": "Salida is part of our regular scheduled visits to Chaffee County. Call to get on the calendar for the next trip — and if it's a software problem, we can usually fix it remotely before then."
  },
  {
    "q": "Can you help my downtown business?",
    "a": "Yes. POS systems, back-office networking, staff computers, printers, and guest WiFi for shops, galleries, cafes, and river outfitters."
  },
  {
    "q": "I work from home and my WiFi keeps dropping. Can you fix that?",
    "a": "Yes. We look at your whole setup, place access points where they actually belong, and make sure a work call doesn't cut out on you mid-sentence."
  },
  {
    "q": "Do you cover Buena Vista and Poncha Springs too?",
    "a": "We do — Buena Vista, Poncha Springs, Nathrop, Johnson Village, and the surrounding parts of Chaffee County are all in our service area."
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
  "name": "Computer Repair in Salida, CO",
  "description":
    "On-site computer repair and IT support in Salida, Colorado — virus removal, WiFi and networking, Starlink, hardware upgrades, data recovery, remote support, and 3D printing for Chaffee County.",
  "serviceType": "Computer repair and IT support",
  "provider": PROVIDER_REF,
  "url": "https://barnstormit.com/computer-repair-salida-co",
  "areaServed": {
  "@type": "City",
  "name": "Salida",
  "sameAs": "https://en.wikipedia.org/wiki/Salida,_Colorado",
  "containedInPlace": {
    "@type": "AdministrativeArea",
    "name": "Chaffee County, Colorado"
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
    { "@type": "ListItem", "position": 3, "name": "Computer Repair in Salida, CO", "item": "https://barnstormit.com/computer-repair-salida-co" },
  ],
};

export default function ComputerRepairSalida() {
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
            Salida, CO &middot; 81201
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Computer Repair
            <br />
            <span className="text-vivid-teal">in Salida, CO</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl mx-auto leading-relaxed mb-10">
            On-site IT support in Salida and Chaffee County &mdash; from downtown shops on F Street to homes way up the county roads.
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
              Salida keeps drawing remote workers, artists, and small businesses, and all of them run on computers and WiFi that have to just work. The nearest big repair shops are in Colorado Springs or Pueblo, a couple of hours each way. We make regular scheduled trips through Chaffee County and fix things on-site at your home, studio, or shop &mdash; and for software problems, we can usually connect remotely and sort it out the same day.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="salida-services-heading">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              Services
            </span>
            <h2
              id="salida-services-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance"
            >
              What We Fix in Salida
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

      {/* Why Salida Calls Barnstorm */}
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="salida-trust-heading">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold-ink mb-3 block">
              Local
            </span>
            <h2
              id="salida-trust-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance"
            >
              Why Salida Calls Barnstorm
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
      <section className="pb-12 md:pb-16 px-6 md:px-8" aria-labelledby="salida-faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              FAQ
            </span>
            <h2
              id="salida-faq-heading"
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
            Book an appointment or give us a call &mdash; Salida is on our regular Chaffee County run.
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
