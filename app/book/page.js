import Link from "next/link";

export const metadata = {
  title: "Book a Discovery Call",
  description:
    "Schedule a free 30-minute discovery call with Barnstorm Computer Services. We'll discuss your tech issue and determine the best next steps.",
  alternates: { canonical: "https://barnstormit.com/book" },
  openGraph: {
    title: "Book a Discovery Call | Barnstorm Computer Services",
    description:
      "Schedule a free 30-minute discovery call. We'll discuss your tech issue and determine the best next steps.",
    url: "https://barnstormit.com/book",
    type: "website",
  },
};

export default function Book() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Schedule a Call
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Book a <span className="text-vivid-teal">Discovery Call</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl mx-auto leading-relaxed">
            Quick 30-minute call to discuss your tech issue and figure out
            whether an on-site visit or remote session is the best fit. Prefer
            to just call? The number above works too &mdash; booking is for folks
            who want a scheduled slot.
          </p>
        </div>
      </section>

      {/* Info Cards + CTA */}
      <section className="pb-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Detail Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="glass-card rounded-xl p-6 text-center">
              <span
                className="material-symbols-outlined text-vivid-teal mb-3 block"
                style={{ fontSize: "36px", fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                timer
              </span>
              <p className="font-heading font-bold text-snow-white mb-1">
                30 Minutes
              </p>
              <p className="text-frost-gray text-sm">
                Quick and focused
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <span
                className="material-symbols-outlined text-vivid-teal mb-3 block"
                style={{ fontSize: "36px", fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                calendar_month
              </span>
              <p className="font-heading font-bold text-snow-white mb-1">
                Mon&ndash;Fri, All Day
              </p>
              <p className="text-frost-gray text-sm">
                Business hours
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <span
                className="material-symbols-outlined text-vivid-teal mb-3 block"
                style={{ fontSize: "36px", fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                call
              </span>
              <p className="font-heading font-bold text-snow-white mb-1">
                Phone Call
              </p>
              <p className="text-frost-gray text-sm">
                We&apos;ll call you
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="tel:+17198380435"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-alpine-gold text-deep-navy px-12 py-5 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
              >
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                  call
                </span>
                Call (719) 838-0435
              </a>
              <a
                href="https://calendar.proton.me/bookings#09QBswOvmtV3jol2kqY5sFsrj7dRNRdmnN_j2Mq0tvE="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-12 py-5 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                  event
                </span>
                Book a Time Slot
              </a>
            </div>
            <p className="text-frost-gray text-sm">
              Prefer email? Head to our{" "}
              <Link
                href="/contact"
                className="text-vivid-teal hover:brightness-110 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none rounded"
              >
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
