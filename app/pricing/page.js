import { Suspense } from "react";
import Link from "next/link";
import PricingTabs from "./PricingTabs";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent IT pricing — zone-based service fees, clear estimates, no hidden charges. Serving Colorado mountain communities.",
  alternates: { canonical: "https://barnstormit.com/pricing" },
  openGraph: {
    title: "Pricing | Barnstorm Computer Services",
    description:
      "Transparent IT support pricing — zone-based service fees, clear estimates, no surprises.",
    url: "https://barnstormit.com/pricing",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Barnstorm price service calls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is zone-based. The local Fairplay area has no service call fee. Regional zones (Breckenridge, Buena Vista) start at $25, extended zones (Frisco, Bailey) at $38, and remote zones (Dillon, Silverthorne, Leadville, Salida) at $50. Hourly labor is added on top.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you charge for an estimate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Every job gets a clear estimate before we start work — no hidden fees and no hourly creep.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer remote support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Remote screen-sharing support is available anywhere in Colorado with no travel fee, and most software issues can be resolved without an on-site visit.",
      },
    },
    {
      "@type": "Question",
      "name": "Are there emergency or after-hours rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Emergency and after-hours support is available at priority rates. Call (719) 838-0435 for details.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer ongoing IT support contracts for businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Business service contracts cover scheduled maintenance, monitoring, and priority response for local businesses across Park and Summit counties.",
      },
    },
  ],
};

export default function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Pricing
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Straightforward Rates.
            <br />
            <span className="text-vivid-teal">No Surprises.</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl mx-auto leading-relaxed">
            No hidden fees, no hourly creep. You&apos;ll know what it costs
            before we start.
          </p>
        </div>
      </section>

      {/* Tabbed Pricing Content */}
      <section className="pb-8 px-6 md:px-8">
        <Suspense>
          <PricingTabs />
        </Suspense>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 px-6 md:px-8 mt-8">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-6 sm:p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-10 text-balance">
            Questions about pricing?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">call</span>
              Call Us: (719) 838-0435
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">mail</span>
              Send a Message
            </Link>
            <Link
              href="/book"
              className="w-full sm:w-auto border-2 border-alpine-gold/30 hover:border-alpine-gold text-alpine-gold px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">event</span>
              Book a Call
            </Link>
          </div>
          <p className="text-frost-gray text-sm mb-4 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-alpine-gold text-base" aria-hidden="true">
              nights_stay
            </span>
            Emergency &amp; after-hours support available at priority rates.{" "}
            <a
              href="tel:+17198380435"
              className="text-vivid-teal font-medium hover:text-alpine-gold transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              Call us directly for details.
            </a>
          </p>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-frost-gray/40">
            Serving South Park &amp; Summit County, Colorado
          </p>
        </div>
      </section>
    </>
  );
}
