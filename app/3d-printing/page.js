import PricingCalculator from "./PricingCalculator";
import QuoteForm from "./QuoteForm";

export const metadata = {
  title: "Custom 3D Printing",
  description:
    "Custom FDM 3D printing in Fairplay, CO. Bambu X2D dual-nozzle, multi-material AMS. Fair pricing, no minimums on quotes. Call (719) 838-0435.",
  alternates: { canonical: "https://barnstormit.com/3d-printing" },
  openGraph: {
    title: "Custom 3D Printing | Barnstorm Computer Services",
    description:
      "Professional FDM printing on a Bambu Lab X2D — prototypes, parts, props, and production runs. Printed locally in Fairplay, CO.",
    url: "https://barnstormit.com/3d-printing",
    type: "website",
  },
};

const materials = [
  {
    name: "PLA",
    rate: "$0.15/g",
    tag: "Most popular",
    icon: "category",
    desc: "Great for prototypes, cosplay props, decorative items, and gifts. Rigid, smooth finish, tons of color options.",
    not: "Not great for outdoor use or high heat.",
  },
  {
    name: "PETG",
    rate: "$0.18/g",
    tag: "Functional",
    icon: "build",
    desc: "Stronger and more flexible than PLA. Good for functional parts, phone cases, brackets — anything that needs to handle some stress.",
    not: "Food-safe options available.",
  },
  {
    name: "ABS / ASA",
    rate: "$0.22/g",
    tag: "Tough & weatherproof",
    icon: "wb_sunny",
    desc: "Tough and heat-resistant. ASA is UV-stable for outdoor use. Think automotive parts, enclosures, anything that lives outside or near heat.",
    not: null,
  },
  {
    name: "TPU",
    rate: "$0.28/g",
    tag: "Flexible",
    icon: "waves",
    desc: "Flexible rubber-like material. Phone cases, gaskets, grips, vibration dampeners. Stretchy and durable.",
    not: null,
  },
  {
    name: "PLA-CF / PETG-CF",
    rate: "$0.35/g",
    tag: "Premium",
    icon: "auto_awesome",
    desc: "Carbon fiber reinforced — extremely stiff and lightweight. Drone frames, structural parts, engineering prototypes.",
    not: "Premium material for demanding applications.",
    highlight: true,
  },
];

const steps = [
  {
    title: "Send your file",
    body: (
      <>
        STL, STEP, or 3MF format. Email{" "}
        <a
          href="mailto:info@barnstormit.com"
          className="text-vivid-teal hover:text-alpine-gold transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
        >
          info@barnstormit.com
        </a>{" "}
        or call{" "}
        <a
          href="tel:+17198380435"
          className="text-vivid-teal hover:text-alpine-gold transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
        >
          (719) 838-0435
        </a>{" "}
        to discuss your project.
      </>
    ),
  },
  {
    title: "Get a quote",
    body: (
      <>
        We review your file, recommend the right material, and send you a price. Use the calculator below for a quick estimate.
      </>
    ),
  },
  {
    title: "We print it",
    body: (
      <>
        Standard turnaround is 3–5 business days. Rush and same-day options available. Pickup in Fairplay or shipping available.
      </>
    ),
  },
];

const faqs = [
  {
    q: "What 3D printing services do you offer?",
    a: "We print custom parts, replacement brackets, prototypes, enclosures, and more using a Bambu Lab X2D with AMS right here in Fairplay, CO. We work with PLA, PETG, TPU, and multi-material prints. We serve customers in Alma, Breckenridge, Frisco, Dillon, Buena Vista, Leadville, and across Park, Summit, Lake, and Chaffee counties.",
  },
  {
    q: "What files do you accept?",
    a: "We accept STL, 3MF, and STEP files. You'll need to provide the print file — we don't do CAD design. If you found a model on Thingiverse, Printables, or another repository, just send us the file and we'll handle the rest.",
  },
  {
    q: "How much does a 3D print cost?",
    a: "It depends on size, material, and complexity. Send us your file and we'll give you a quote — usually within a day.",
  },
  {
    q: "How long does a print take?",
    a: "Small parts can be done in a few hours. Larger or more complex prints may take a day or two. We'll give you a timeline with your quote.",
  },
  {
    q: "Can I drop off a file in person?",
    a: "Yes — you can drop off a USB drive or send your STL file by email. We're based in Fairplay and accept drop-offs. You can also submit your file through our contact form or email it to info@barnstormit.com.",
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom 3D Printing",
  name: "Custom 3D Printing",
  description:
    "Professional FDM 3D printing on a Bambu Lab X2D dual-nozzle printer with AMS multi-material. Printed locally in Fairplay, Colorado.",
  provider: { "@id": "https://barnstormit.com/#localbusiness" },
  areaServed: [
    "Fairplay",
    "Alma",
    "Breckenridge",
    "Frisco",
    "Dillon",
    "Silverthorne",
    "Leadville",
    "Buena Vista",
  ],
  url: "https://barnstormit.com/3d-printing",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "20",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      minPrice: "20",
      description: "Minimum charge per job. Material starts at $0.15/g; machine time billed at $2/hr.",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "3D Printing Materials",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PLA" }, price: "0.15", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PETG" }, price: "0.18", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ABS / ASA" }, price: "0.22", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "TPU" }, price: "0.28", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PLA-CF / PETG-CF" }, price: "0.35", priceCurrency: "USD" },
    ],
  },
};

export default function ThreeDPrinting() {
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

      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-alpine-gold mb-4 block">
            3D Printing
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Custom 3D Printing
          </h1>
          <p className="text-lg md:text-xl text-vivid-teal max-w-2xl mx-auto leading-relaxed mb-6">
            From prototype to finished product — printed locally in Fairplay, CO.
          </p>
          <p className="text-base md:text-lg text-frost-gray max-w-3xl mx-auto leading-relaxed">
            Professional FDM printing on a Bambu Lab X2D with dual nozzles and AMS multi-material. Fast turnaround, fair pricing, no minimums on quotes.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              Materials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance">
              Pick the right plastic for the job
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((m) => (
              <div
                key={m.name}
                className={`glass-card rounded-xl p-7 flex flex-col ${
                  m.highlight ? "border-alpine-gold/40" : ""
                }`}
                style={
                  m.highlight
                    ? { background: "rgba(240, 165, 0, 0.06)" }
                    : undefined
                }
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    aria-hidden="true"
                    className={`material-symbols-outlined text-3xl ${
                      m.highlight ? "text-alpine-gold" : "text-vivid-teal"
                    }`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {m.icon}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-frost-gray">
                    {m.tag}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mb-3 gap-3 flex-wrap">
                  <h3 className="font-heading text-xl font-bold text-snow-white">
                    {m.name}
                  </h3>
                  <span
                    className={`font-mono text-sm font-bold tabular-nums ${
                      m.highlight ? "text-alpine-gold" : "text-vivid-teal"
                    }`}
                  >
                    {m.rate}
                  </span>
                </div>
                <p className="text-frost-gray text-sm leading-relaxed">
                  {m.desc}
                </p>
                {m.not && (
                  <p className="text-frost-gray/80 text-xs leading-relaxed mt-3 italic">
                    {m.not}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="glass-card rounded-xl p-6 sm:p-10 md:p-14">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-10 text-balance">
              Three steps from idea to finished part
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s, i) => (
                <div key={s.title} className="flex gap-4 items-start">
                  <span className="font-heading text-5xl font-black text-vivid-teal/20 leading-none">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-snow-white mb-2 text-lg">
                      {s.title}
                    </h3>
                    <p className="text-frost-gray text-sm leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 md:py-16 px-6 md:px-8" id="calculator">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-alpine-gold mb-3 block">
              Pricing Calculator
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-4 text-balance">
              Get an instant estimate
            </h2>
            <p className="text-frost-gray max-w-2xl mx-auto">
              Plug in your specs or pick a size — we&apos;ll do the math.
            </p>
          </div>
          <PricingCalculator />
        </div>
      </section>

      {/* Notes */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-7">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
                Turnaround
              </span>
              <ul className="space-y-3 text-frost-gray text-sm">
                <li className="flex justify-between gap-4">
                  <span><strong className="text-snow-white font-heading">Standard</strong> — 3–5 business days</span>
                  <span className="font-mono text-vivid-teal whitespace-nowrap">included</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span><strong className="text-snow-white font-heading">Rush</strong> — 24–48 hours</span>
                  <span className="font-mono text-alpine-gold whitespace-nowrap">+50%</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span><strong className="text-snow-white font-heading">Same-day</strong> — when machine is available</span>
                  <span className="font-mono text-alpine-gold whitespace-nowrap">+100%</span>
                </li>
              </ul>
            </div>
            <div className="glass-card rounded-xl p-7">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
                Pricing notes
              </span>
              <ul className="space-y-3 text-frost-gray text-sm">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-vivid-teal text-base leading-snug" aria-hidden="true">
                    payments
                  </span>
                  <span><strong className="text-snow-white font-heading">$20 minimum</strong> per job.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-vivid-teal text-base leading-snug" aria-hidden="true">
                    palette
                  </span>
                  <span><strong className="text-snow-white font-heading">1–2 colors</strong> included thanks to our dual-nozzle setup. <strong className="text-snow-white font-heading">3+ colors</strong> have a small surcharge for material waste.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-vivid-teal text-base leading-snug" aria-hidden="true">
                    schedule
                  </span>
                  <span>Machine time billed at <strong className="text-snow-white font-heading">$2/hour</strong>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-6 md:px-8" aria-labelledby="threed-faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
              FAQ
            </span>
            <h2
              id="threed-faq-heading"
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

      {/* CTA / Quote Form */}
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-6 sm:p-10 md:p-16">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-4 text-balance">
              Ready to get started?
            </h2>
            <p className="text-frost-gray text-lg max-w-2xl mx-auto">
              Send your STL, STEP, or 3MF file and we&apos;ll get you a quote — usually within a few hours.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <QuoteForm />
          </div>

          <p className="text-frost-gray/70 text-xs mt-6 text-center">
            Or call{" "}
            <a
              href="tel:+17198380435"
              className="text-vivid-teal hover:underline"
            >
              (719) 838-0435
            </a>
          </p>

          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-frost-gray/40 mt-8 text-center">
            Bambu Lab X2D · AMS 2 Pro · Printed in Fairplay, CO
          </p>
        </div>
      </section>
    </>
  );
}
