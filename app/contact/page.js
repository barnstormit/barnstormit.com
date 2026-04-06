import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Contact Barnstorm Computer Services for IT support in Fairplay, Breckenridge, and Colorado mountain communities. Call (719) 838-0435 or send us a message.",
  alternates: { canonical: "https://barnstormit.com/contact" },
  openGraph: {
    title: "Contact | Barnstorm Computer Services",
    description:
      "Get in touch for computer repair and IT support. Call (719) 838-0435 or send a message.",
    url: "https://barnstormit.com/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            CONTACT
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Let&apos;s Get Your
            <br />
            <span className="text-vivid-teal">Tech Working</span>
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact Info */}
          <div className="space-y-10">
            {/* Phone */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
                Immediate Response
              </span>
              <a
                href="tel:+17198380435"
                className="font-heading text-3xl md:text-4xl font-black text-snow-white hover:text-vivid-teal transition-colors block mb-2 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                (719) 838-0435
              </a>
              <p className="text-alpine-gold text-sm font-bold flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  bolt
                </span>
                Emergency service available
              </p>
            </div>

            {/* Email */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
                Direct Email
              </span>
              <a
                href="mailto:jeff@barnstormit.com"
                className="text-lg text-snow-white hover:text-vivid-teal transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
              >
                jeff@barnstormit.com
              </a>
            </div>

            {/* Address */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
                Mailing Address
              </span>
              <p className="text-frost-gray leading-relaxed">
                PO Box 371
                <br />
                Fairplay, CO 80440
              </p>
            </div>

            {/* Hours */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-3 block">
                Operational Hours
              </span>
              <p className="text-frost-gray leading-relaxed">
                Monday &ndash; Friday
                <br />
                9:00 AM &ndash; 5:00 PM
              </p>
            </div>
          </div>

          {/* Right — Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Book a Call */}
      <section className="pb-8 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-alpine-gold/5 border border-alpine-gold/20 rounded-xl py-6 px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span
                className="material-symbols-outlined text-alpine-gold text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                event
              </span>
              <p className="text-frost-gray">
                Prefer to schedule a specific time?{" "}
                <span className="text-snow-white font-bold">
                  Book a discovery call.
                </span>
              </p>
            </div>
            <Link
              href="/book"
              className="shrink-0 bg-alpine-gold text-deep-navy px-6 py-3 rounded-lg font-heading font-bold hover:brightness-110 transition-[filter] flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                calendar_month
              </span>
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-bg.jpg"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative z-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              Service Area
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-8 text-balance">
              Serving Colorado&apos;s High Country
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Fairplay",
                "Breckenridge",
                "Frisco",
                "Dillon",
                "Leadville",
                "Buena Vista",
                "Surrounding Communities",
              ].map((town) => (
                <span
                  key={town}
                  className="px-4 py-2 rounded-full glass-card text-frost-gray text-sm font-heading font-medium"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
