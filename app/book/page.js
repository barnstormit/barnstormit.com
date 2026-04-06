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
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Schedule a Call
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Book a <span className="text-vivid-teal">Discovery Call</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            Quick call to discuss your tech issue and determine if an on-site
            visit or remote session is the best fit. We&apos;ll cover what&apos;s
            going on, what to expect, and get you scheduled.
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
              <h3 className="font-heading font-bold text-snow-white mb-1">
                30 Minutes
              </h3>
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
              <h3 className="font-heading font-bold text-snow-white mb-1">
                Mon&ndash;Fri, 4&ndash;5 PM MT
              </h3>
              <p className="text-frost-gray text-sm">
                Available time slots
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
              <h3 className="font-heading font-bold text-snow-white mb-1">
                Phone Call
              </h3>
              <p className="text-frost-gray text-sm">
                We&apos;ll call you
              </p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="text-center mb-16">
            <a
              href="https://calendar.proton.me/bookings/guest#bILEoNxAWGfua9kbENy-U8IOYkdby_EYCUy5W_3x6Qw="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-alpine-gold text-deep-navy px-12 py-5 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                event
              </span>
              Book a Time Slot
            </a>
          </div>

          {/* Secondary — Need Help Now */}
          <div className="glass-card rounded-xl p-8 md:p-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-snow-white mb-4 text-balance">
              Need help right now?
            </h2>
            <p className="text-frost-gray mb-6">
              Skip the scheduling &mdash; just call or send us a message.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+17198380435"
                className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-8 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                (719) 838-0435
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-8 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
