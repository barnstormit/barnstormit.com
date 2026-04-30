import Link from "next/link";

export default function ServiceLandingLayout({
  slug,
  eyebrow,
  title,
  titleAccent,
  intro,
  icon,
  highlight = false,
  items,
  serviceJsonLd,
}) {
  const accentColor = highlight ? "alpine-gold" : "vivid-teal";
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://barnstormit.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://barnstormit.com/services" },
      { "@type": "ListItem", position: 3, name: title, item: `https://barnstormit.com/services/${slug}` },
    ],
  };

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
          <li className="text-snow-white" aria-current="page">{title}</li>
        </ol>
      </nav>

      <header className="relative pt-8 pb-10 md:pt-12 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-${accentColor} blur-[160px] rounded-full`} />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 text-center flex flex-col items-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass-card">
            <span className={`font-mono text-[10px] tracking-[0.3em] uppercase text-${accentColor}`}>
              {eyebrow}
            </span>
          </div>
          {icon && (
            <span
              aria-hidden="true"
              className={`material-symbols-outlined text-5xl md:text-6xl text-${accentColor} mb-6`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {icon}
            </span>
          )}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[0.95] text-snow-white text-balance">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className={`text-${accentColor}`}>{titleAccent}</span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            {intro}
          </p>
        </div>
      </header>

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
                  className={`material-symbols-outlined text-${accentColor} text-2xl mt-0.5 shrink-0`}
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

      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-6 sm:p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-4 text-balance">
            Ready to get started?
          </h2>
          <p className="text-frost-gray text-lg mb-10 max-w-2xl mx-auto">
            Call us, request a quote, or book a free 15-minute call. We&apos;ll figure out the
            right next step together.
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
