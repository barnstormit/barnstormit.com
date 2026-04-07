import Link from "next/link";

export const metadata = {
  title: "Vacation Tech Help for Guests",
  description:
    "Tech emergency during your stay? We come to your rental. WiFi, smart TV, printer, and laptop help in Summit & Park County. (719) 838-0435.",
  alternates: { canonical: "https://barnstormit.com/vacation-help" },
  openGraph: {
    title: "Vacation Tech Help — On-Site IT for Guests",
    description:
      "Tech emergency during your stay? Fast, friendly on-site IT help for vacation rentals in Summit & Park County.",
    url: "https://barnstormit.com/vacation-help",
    type: "website",
  },
};

const problems = [
  {
    icon: "wifi",
    title: "WiFi Issues",
    desc: "Can\u2019t connect, slow speeds, or dead zones throughout the rental.",
  },
  {
    icon: "tv",
    title: "Smart TV",
    desc: "Streaming apps won\u2019t load, no signal, or can\u2019t find the right input.",
  },
  {
    icon: "print",
    title: "Printers",
    desc: "Won\u2019t print, paper jams, or need to connect your laptop to the host\u2019s printer.",
  },
  {
    icon: "computer",
    title: "Laptop Crash",
    desc: "Blue screens, won\u2019t boot, or lost files you need for work.",
  },
  {
    icon: "desktop_windows",
    title: "Monitor & Adapters",
    desc: "Wrong cables, display won\u2019t mirror, or need a dock for your setup.",
  },
];

const steps = [
  {
    num: "01",
    title: "Call or Text",
    desc: "Reach us directly at (719) 838-0435. Describe the issue \u2014 no phone trees, no tickets.",
  },
  {
    num: "02",
    title: "We Come to You",
    desc: "We drive to your rental with the tools and parts to fix it on the spot.",
  },
  {
    num: "03",
    title: "Problem Solved",
    desc: "Most issues resolved in a single visit. Get back to your vacation.",
  },
];

const reasons = [
  {
    icon: "person_pin_circle",
    title: "Local & Fast",
    desc: "Based in Fairplay \u2014 not a call center three states away.",
  },
  {
    icon: "speed",
    title: "Same-Day Response",
    desc: "Most calls answered within the hour. Immediate dispatch when possible.",
  },
  {
    icon: "handshake",
    title: "No Contracts",
    desc: "One-time visit, one invoice. No subscriptions or recurring fees.",
  },
  {
    icon: "receipt_long",
    title: "Transparent Pricing",
    desc: "Flat service-call fee + hourly rate. You know the cost before we start.",
  },
];

export default function VacationHelp() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden py-14 md:py-20 px-6 text-center">
        {/* Background layers */}
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
              luggage
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-snow-white uppercase">
              Vacation Tech Help
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.9] drop-shadow-2xl animate-fade-in-up stagger-1 text-balance">
            Tech Emergency
            <br />
            <span className="text-vivid-teal">During Your Stay?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-frost-gray max-w-xl leading-relaxed animate-fade-in-up stagger-2">
            We come to your rental. Fast, friendly, done.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-fade-in-up stagger-3">
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-xl font-heading font-bold text-lg shadow-[0_20px_40px_rgba(58,155,213,0.3)] hover:shadow-[0_20px_40px_rgba(58,155,213,0.4)] transition-[box-shadow,transform] duration-300 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">call</span>
              Call or Text (719) 838-0435
            </a>
            <Link
              href="/book"
              className="w-full sm:w-auto bg-deep-navy/50 backdrop-blur-sm border-2 border-alpine-gold/30 hover:border-alpine-gold text-alpine-gold px-10 py-4 rounded-xl font-heading font-bold text-lg transition-[border-color,transform] duration-300 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">event</span>
              Book a Call
            </Link>
          </div>

          {/* Dispatch note */}
          <p className="text-sm text-frost-gray/70 font-mono tracking-wide mt-2 animate-fade-in-up stagger-4">
            Immediate dispatch available in Summit &amp; Park County.
          </p>
        </div>
      </section>

      {/* ── Common Problems ── */}
      <section className="bg-midnight-slate/50 py-10 md:py-12 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              Common Problems
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-snow-white tracking-tight text-balance">
              We Fix What Ruins Vacations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500"
              >
                <div className="w-14 h-14 rounded-lg bg-vivid-teal/10 flex items-center justify-center mb-6 group-hover:bg-vivid-teal/20 transition-colors border border-vivid-teal/20">
                  <span
                    className="material-symbols-outlined text-vivid-teal text-3xl"
                    aria-hidden="true"
                  >
                    {p.icon}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-snow-white">
                  {p.title}
                </h3>
                <p className="text-frost-gray text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-10 md:py-14 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Steps */}
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-snow-white tracking-tight leading-tight mb-8 text-balance">
              Three Steps.{" "}
              <span className="text-vivid-teal">Back to Vacation.</span>
            </h2>

            <div className="flex flex-col gap-10">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-6">
                  <span className="text-5xl font-heading font-black text-alpine-gold/30 leading-none select-none shrink-0">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-snow-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-frost-gray leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="relative rounded-xl overflow-hidden border border-steel-blue/20 aspect-[4/3] bg-midnight-slate flex items-center justify-center">
            <div className="text-center text-frost-gray/40">
              <span
                className="material-symbols-outlined text-6xl mb-2 block"
                aria-hidden="true"
              >
                photo_camera
              </span>
              <span className="font-mono text-xs uppercase tracking-widest">
                Photo Placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Guests Call Us ── */}
      <section className="bg-midnight-slate/50 py-10 md:py-14 px-6 md:px-8 relative">
        <div className="absolute inset-0 atmospheric-bg opacity-30" />
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              Why Guests Call Us
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-snow-white tracking-tight text-balance">
              No Hassle. No Runaround.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reason cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500"
                >
                  <span
                    className="material-symbols-outlined text-vivid-teal text-3xl mb-4 block"
                    aria-hidden="true"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {r.icon}
                  </span>
                  <h3 className="font-heading text-lg font-bold mb-2 text-snow-white">
                    {r.title}
                  </h3>
                  <p className="text-frost-gray text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Sticky CTA card */}
            <div className="lg:sticky lg:top-28 self-start">
              <div
                className="glass-card p-8 text-center flex flex-col items-center gap-5"
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
                  support_agent
                </span>
                <h3 className="font-heading text-xl font-bold text-snow-white">
                  Need Help Now?
                </h3>
                <p className="text-frost-gray text-sm leading-relaxed">
                  Call or text us directly. No phone trees, no waiting.
                </p>
                <a
                  href="tel:+17198380435"
                  className="w-full px-8 py-4 bg-alpine-gold text-deep-navy font-heading font-bold text-lg rounded-lg hover:brightness-110 transition-[filter,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(240,165,0,0.3)] flex items-center justify-center gap-3 active:scale-95 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">call</span>
                  (719) 838-0435
                </a>
                <Link
                  href="/book"
                  className="w-full px-8 py-3 border-2 border-alpine-gold/30 hover:border-alpine-gold text-alpine-gold font-heading font-bold rounded-lg transition-[border-color] duration-300 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">event</span>
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Host Teaser Banner ── */}
      <section className="py-8 md:py-10 px-6 md:px-8 border-t border-steel-blue/15">
        <div className="max-w-[1200px] mx-auto glass-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-snow-white mb-2 text-balance">
              Are you a property manager or STR host?
            </h2>
            <p className="text-frost-gray text-lg">
              We partner with hosts to keep guests happy and tech running smooth.
            </p>
          </div>
          <Link
            href="/str-partners"
            className="w-full md:w-auto shrink-0 bg-vivid-teal text-deep-navy px-8 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] duration-300 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
          >
            Learn More
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
