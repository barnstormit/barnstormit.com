import Link from "next/link";

export const metadata = {
  title: "STR Partner Program for Hosts",
  description:
    "On-call IT support for vacation rental hosts and property managers in Summit & Park County. No contracts, local response. (719) 838-0435.",
  alternates: { canonical: "https://barnstormit.com/str-partners" },
  openGraph: {
    title: "STR Partner Program — On-Call Tech for Hosts",
    description:
      "Keep your guests happy with on-call tech support. No contracts, local response in Summit & Park County.",
    url: "https://barnstormit.com/str-partners",
    type: "website",
  },
};

const scenarios = [
  {
    icon: "wifi_off",
    problem: "Guest calls you at 9 pm about WiFi",
    detail: "The router needs a reset, the password changed, or there\u2019s a dead zone in the loft.",
    resolution: "You forward them to Barnstorm. We walk them through it or drive out.",
  },
  {
    icon: "tv_off",
    problem: "Your TV won\u2019t connect to their streaming",
    detail: "Wrong input, app needs updating, or the Roku lost its WiFi connection.",
    resolution: "You forward them to Barnstorm. We get it sorted, usually in minutes.",
  },
  {
    icon: "print_disabled",
    problem: "Laptop won\u2019t connect to the printer",
    detail: "Drivers, network discovery, or a simple cable issue \u2014 guests don\u2019t know where to start.",
    resolution: "You forward them to Barnstorm. We handle it so you don\u2019t have to.",
  },
];

const included = [
  {
    icon: "schedule",
    title: "On-Call Availability",
    desc: "Your guests can reach us directly when tech goes sideways \u2014 evenings and weekends included.",
  },
  {
    icon: "contact_phone",
    title: "Guest-Direct Contact",
    desc: "Guests call or text us directly. No middleman, no delays, no back-and-forth with you.",
  },
  {
    icon: "badge",
    title: "Leave-Behind Cards",
    desc: "We provide cards for your units with our number and a QR code. Guests know who to call.",
  },
  {
    icon: "money_off",
    title: "No Monthly Retainer",
    desc: "Pay per visit only. No subscriptions, no minimums, no contracts to cancel.",
  },
];

export default function StrPartners() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden py-14 md:py-20 px-6 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-deep-navy" />
          <div className="absolute inset-0 atmospheric-bg opacity-40" />
          <div className="absolute inset-0 topo-pattern opacity-10" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-frost-gray/20 animate-fade-in-up">
            <span
              className="material-symbols-outlined text-alpine-gold text-sm"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              handshake
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-snow-white uppercase">
              STR Partner Program
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.9] drop-shadow-2xl animate-fade-in-up stagger-1 text-balance">
            Be the Host Who Has
            <br />
            <span className="text-vivid-teal">Everything Covered</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed animate-fade-in-up stagger-2">
            When your guests hit a tech snag, you have a local pro to call.
            That&apos;s a <span className="text-alpine-gold font-semibold">5-star review</span> instead of a 3-star.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-fade-in-up stagger-3">
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-xl font-heading font-bold text-lg shadow-[0_20px_40px_rgba(58,155,213,0.3)] hover:shadow-[0_20px_40px_rgba(58,155,213,0.4)] transition-[box-shadow,transform] duration-300 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">call</span>
              Call (719) 838-0435
            </a>
            <Link
              href="/book"
              className="w-full sm:w-auto bg-deep-navy/50 backdrop-blur-sm border-2 border-alpine-gold/30 hover:border-alpine-gold text-alpine-gold px-10 py-4 rounded-xl font-heading font-bold text-lg transition-[border-color,transform] duration-300 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">event</span>
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problem / Solution ── */}
      <section className="bg-midnight-slate/50 py-10 md:py-14 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              Sound Familiar?
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-snow-white tracking-tight text-balance">
              Guest Tech Problems Are <span className="text-alpine-gold">Your</span> Problem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((s) => (
              <div
                key={s.problem}
                className="glass-card p-8 flex flex-col"
              >
                <span
                  className="material-symbols-outlined text-3xl text-alpine-gold mb-5"
                  aria-hidden="true"
                >
                  {s.icon}
                </span>
                <h3 className="font-heading text-lg font-bold text-snow-white mb-2">
                  {s.problem}
                </h3>
                <p className="text-frost-gray text-sm leading-relaxed mb-6 flex-1">
                  {s.detail}
                </p>
                <div className="border-t border-steel-blue/20 pt-4">
                  <p className="text-vivid-teal text-sm font-medium flex items-start gap-2">
                    <span
                      className="material-symbols-outlined text-lg shrink-0 mt-0.5"
                      aria-hidden="true"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    {s.resolution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-10 md:py-14 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              What&apos;s Included
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-snow-white tracking-tight text-balance">
              Simple. No Strings.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {included.map((item) => (
              <div
                key={item.title}
                className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500"
              >
                <span
                  className="material-symbols-outlined text-vivid-teal text-3xl mb-4 block"
                  aria-hidden="true"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                <h3 className="font-heading text-lg font-bold mb-2 text-snow-white">
                  {item.title}
                </h3>
                <p className="text-frost-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 md:py-14 px-6 md:px-8 border-t border-steel-blue/15">
        <div
          className="max-w-[1200px] mx-auto glass-card p-8 md:p-12 text-center flex flex-col items-center gap-6"
          style={{
            borderColor: "rgba(240, 165, 0, 0.4)",
            background: "rgba(240, 165, 0, 0.06)",
          }}
        >
          <span
            className="material-symbols-outlined text-alpine-gold text-4xl"
            aria-hidden="true"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            diversity_3
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white text-balance">
            Ready to Partner Up?
          </h2>
          <p className="text-frost-gray text-lg max-w-xl leading-relaxed">
            Book a quick discovery call and we&apos;ll set up the partner
            program for your properties. No commitment, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto bg-alpine-gold text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(240,165,0,0.3)] active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">event</span>
              Book a Discovery Call
            </Link>
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">call</span>
              Call (719) 838-0435
            </a>
          </div>
        </div>
      </section>

      {/* ── Vacation Help Cross-link ── */}
      <section className="pb-10 md:pb-14 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto glass-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-snow-white mb-2 text-balance">
              Are you a guest with a tech problem?
            </h2>
            <p className="text-frost-gray text-lg">
              We come to your rental. Fast, friendly, done.
            </p>
          </div>
          <Link
            href="/vacation-help"
            className="w-full md:w-auto shrink-0 bg-vivid-teal text-deep-navy px-8 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] duration-300 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
          >
            Vacation Tech Help
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
