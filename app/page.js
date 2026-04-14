import Link from "next/link";

export const metadata = {
  title: "IT Support & Repair in Fairplay, CO",
  description:
    "On-site and remote computer repair, IT support, and networking for Fairplay, Breckenridge, and Colorado mountain communities. (719) 838-0435.",
  alternates: { canonical: "https://barnstormit.com" },
  openGraph: {
    title: "Barnstorm Computer Services — Mountain Tech, Done Right",
    description:
      "On-site and remote computer repair and IT support for Colorado's mountain communities. Based in Fairplay, serving Summit, Park, and Lake counties.",
    url: "https://barnstormit.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 px-6 text-center">
      {/* Background Image + Overlays */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[rgba(13,27,42,0.7)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 via-transparent to-deep-navy" />
        <div className="absolute inset-0 topo-pattern opacity-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Grand Opening Banner */}
        <div
          className="w-full rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in-up"
          style={{
            background: "#1B2838",
            border: "2px solid #F0A500",
            boxShadow: "0 0 20px rgba(240,165,0,0.1)",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="text-alpine-gold text-2xl" aria-hidden="true">&#10022;</span>
            <span className="font-heading text-lg sm:text-xl font-bold text-snow-white">
              Grand Opening Special
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <span className="text-snow-white text-sm">
              50% off service call fees through July 4th
            </span>
            <Link
              href="/pricing"
              className="text-vivid-teal font-heading font-bold text-sm flex items-center gap-1 hover:text-alpine-gold transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              See Pricing
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-frost-gray/20 animate-fade-in-up">
          <span
            className="material-symbols-outlined text-alpine-gold text-sm"
            aria-hidden="true"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            terrain
          </span>
          <span className="font-mono text-[10px] tracking-widest text-snow-white uppercase">
            Colorado High Country Specialists
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-snow-white tracking-tighter leading-[0.9] drop-shadow-2xl animate-fade-in-up stagger-1 text-balance">
          Mountain Tech,
          <br />
          <span className="text-vivid-teal">Done Right</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed drop-shadow-md animate-fade-in-up stagger-2">
          On-site computer repair and IT support for Colorado&apos;s mountain
          communities. Based in{" "}
          <span className="text-snow-white font-semibold">Fairplay</span>,
          serving Summit, Park, Lake, and Chaffee counties.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-fade-in-up stagger-3">
          <a
            href="tel:+17198380435"
            className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-xl font-heading font-bold text-lg shadow-[0_20px_40px_rgba(58,155,213,0.3)] hover:shadow-[0_20px_40px_rgba(58,155,213,0.4)] transition-[box-shadow,transform] duration-300 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
          >
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            Call (719) 838-0435
          </a>
          <Link
            href="/services"
            className="w-full sm:w-auto bg-deep-navy/50 backdrop-blur-sm border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-10 py-4 rounded-xl font-heading font-bold text-lg transition-[border-color,transform] duration-300 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
          >
            View Services
            <span className="material-symbols-outlined text-vivid-teal" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
          <Link
            href="/book"
            className="w-full sm:w-auto bg-deep-navy/50 backdrop-blur-sm border-2 border-alpine-gold/30 hover:border-alpine-gold text-alpine-gold px-10 py-4 rounded-xl font-heading font-bold text-lg transition-[border-color,transform] duration-300 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              event
            </span>
            Book a Call
          </Link>
        </div>

        {/* Vacation callout */}
        <p className="text-sm text-frost-gray/70 mt-2 animate-fade-in-up stagger-4">
          Vacationing in the mountains?{" "}
          <Link
            href="/vacation-help"
            className="text-vivid-teal font-medium hover:text-alpine-gold transition-colors inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
          >
            Get vacation tech help
            <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
          </Link>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6 mt-12 pt-12 border-t border-frost-gray/15 w-full animate-fade-in-up stagger-4">
          <div className="flex items-center gap-2 text-snow-white">
            <span
              className="material-symbols-outlined text-vivid-teal"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              school
            </span>
            <span className="font-mono text-[10px] uppercase tracking-tight whitespace-nowrap">
              BS, Information Technology
            </span>
          </div>
          <div className="flex items-center gap-2 text-snow-white">
            <span
              className="material-symbols-outlined text-alpine-gold"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              workspace_premium
            </span>
            <span className="font-mono text-[10px] uppercase tracking-tight whitespace-nowrap">
              27+ Years IT Experience
            </span>
          </div>
          <div className="flex items-center gap-2 text-snow-white">
            <span
              className="material-symbols-outlined text-alpine-gold"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              person_pin_circle
            </span>
            <span className="font-mono text-[10px] uppercase tracking-tight whitespace-nowrap">
              Local Owner &amp; Operator
            </span>
          </div>
          <div className="flex items-center gap-2 text-snow-white">
            <span
              className="material-symbols-outlined text-vivid-teal"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified_user
            </span>
            <span className="font-mono text-[10px] uppercase tracking-tight whitespace-nowrap">
              Licensed &amp; Insured
            </span>
          </div>
        </div>
      </div>

      {/* Coordinates Ornament */}
      <div className="absolute bottom-12 left-12 hidden lg:block z-10">
        <div className="flex flex-col gap-2 font-mono text-[10px] text-frost-gray/40 tracking-[0.3em] uppercase">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-vivid-teal" /> Lat: 39.2247&deg; N
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-vivid-teal" /> Long: 105.9989&deg; W
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-vivid-teal" /> Elev: 9,953 FT
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Explore
        </span>
        <span className="material-symbols-outlined" aria-hidden="true">
          keyboard_double_arrow_down
        </span>
      </div>
    </section>

    {/* Services Overview */}
    <section className="bg-midnight-slate/50 py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* On-Site Support */}
        <div className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500">
          <div className="w-14 h-14 rounded-lg bg-vivid-teal/10 flex items-center justify-center mb-6 group-hover:bg-vivid-teal/20 transition-colors border border-vivid-teal/20">
            <span className="material-symbols-outlined text-vivid-teal text-3xl" aria-hidden="true">
              speed
            </span>
          </div>
          <h2 className="font-heading text-xl font-bold mb-3 text-snow-white">
            On-Site Support
          </h2>
          <p className="text-frost-gray text-sm leading-relaxed">
            We come to you. Professional troubleshooting for home offices,
            vacation rentals, and local businesses across the high country.
          </p>
        </div>

        {/* Network & WiFi */}
        <div className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500">
          <div className="w-14 h-14 rounded-lg bg-vivid-teal/10 flex items-center justify-center mb-6 group-hover:bg-vivid-teal/20 transition-colors border border-vivid-teal/20">
            <span className="material-symbols-outlined text-vivid-teal text-3xl" aria-hidden="true">
              wifi
            </span>
          </div>
          <h2 className="font-heading text-xl font-bold mb-3 text-snow-white">
            Network &amp; WiFi
          </h2>
          <p className="text-frost-gray text-sm leading-relaxed">
            Secure networks, strong WiFi coverage, firewalls, and encrypted
            VPNs for homes and businesses.
          </p>
        </div>

        {/* Remote Support */}
        <div className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500">
          <div className="w-14 h-14 rounded-lg bg-vivid-teal/10 flex items-center justify-center mb-6 group-hover:bg-vivid-teal/20 transition-colors border border-vivid-teal/20">
            <span className="material-symbols-outlined text-vivid-teal text-3xl" aria-hidden="true">
              cloud_sync
            </span>
          </div>
          <h2 className="font-heading text-xl font-bold mb-3 text-snow-white">
            Remote Support
          </h2>
          <p className="text-frost-gray text-sm leading-relaxed">
            Instant assistance via secure screen sharing. Resolving software
            issues without the drive time.
          </p>
        </div>

      </div>
      {/* Bottom row — 2 cards centered */}
      <div className="max-w-[1200px] mx-auto mt-8 flex flex-col sm:flex-row justify-center gap-8">
        {/* Business IT */}
        <div className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500 sm:w-1/3">
          <div className="w-14 h-14 rounded-lg bg-vivid-teal/10 flex items-center justify-center mb-6 group-hover:bg-vivid-teal/20 transition-colors border border-vivid-teal/20">
            <span className="material-symbols-outlined text-vivid-teal text-3xl" aria-hidden="true">
              business_center
            </span>
          </div>
          <h2 className="font-heading text-xl font-bold mb-3 text-snow-white">
            Business IT
          </h2>
          <p className="text-frost-gray text-sm leading-relaxed">
            Managed services, consulting, and service contracts tailored for
            local businesses.
          </p>
        </div>

        {/* 3D Printing */}
        <Link href="/3d-printing" className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500 sm:w-1/3 block focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none">
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-lg bg-vivid-teal/10 flex items-center justify-center group-hover:bg-vivid-teal/20 transition-colors border border-vivid-teal/20">
              <span className="material-symbols-outlined text-vivid-teal text-3xl" aria-hidden="true">
                view_in_ar
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-alpine-gold bg-alpine-gold/10 px-2.5 py-1 rounded-full border border-alpine-gold/30">
              New
            </span>
          </div>
          <h2 className="font-heading text-xl font-bold mb-3 text-snow-white">
            3D Printing
          </h2>
          <p className="text-frost-gray text-sm leading-relaxed">
            Need a part that doesn&apos;t exist? We can probably print it.
            Bring us your file or your idea and we&apos;ll make it real.
          </p>
        </Link>
      </div>
      <p className="mt-10 pt-8 border-t border-frost-gray/10 max-w-[1200px] mx-auto text-center text-snow-white text-sm md:text-base">
        Small jobs billed hourly &middot; Big projects get a fixed price &mdash;{" "}
        <Link
          href="/book"
          className="text-alpine-gold font-bold hover:text-vivid-teal hover:underline transition-colors focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
        >
          Book a Call
        </Link>{" "}
        to get started.
      </p>
    </section>

    {/* Why Barnstorm — Trust Section */}
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Bio */}
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Why Barnstorm
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-snow-white tracking-tight leading-tight mb-8 text-balance">
            27 Years of IT.
            <br />
            <span className="text-vivid-teal">Actually Lives Here.</span>
          </h2>
          <div className="space-y-5 text-frost-gray text-lg leading-relaxed">
            <p>
              Jeff Barnstorf isn&apos;t a remote contractor dialing in from
              Denver. He lives in Fairplay, drives the same mountain roads you
              do, and has been solving tech problems since 1997.
            </p>
            <p>
              From wrangling printers in vacation rentals to hardening networks
              for local businesses — enterprise-grade expertise with small-town
              accountability. When something breaks, he picks up the phone and
              usually shows up the same day.
            </p>
          </div>
        </div>

        {/* Right — Photo + Credential Badges */}
        <div className="flex flex-col gap-6">
          {/* Photo */}
          <div className="relative rounded-xl overflow-hidden border border-steel-blue/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/TempHeadshot.jpg"
              alt="Jeff Barnstorf — Founder of Barnstorm Computer Services"
              className="w-full aspect-[3/4] object-cover object-center"
              width={600}
              height={800}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent">
              <h3 className="text-xl font-heading font-bold text-snow-white">
                Jeff Barnstorf
              </h3>
              <p className="text-vivid-teal text-sm font-medium">
                Founder &amp; Lead Technician
              </p>
            </div>
          </div>

          {/* Credential Badges — stacked pills */}
          <div className="flex flex-col gap-3">
            <div className="glass-card flex items-center gap-3 px-5 py-3.5 border-alpine-gold/30">
              <span
                className="material-symbols-outlined text-xl text-alpine-gold"
                aria-hidden="true"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                school
              </span>
              <span className="font-heading font-bold text-snow-white text-sm">
                BS, Information Technology — D&apos;Youville University
              </span>
            </div>
            <div className="glass-card flex items-center gap-3 px-5 py-3.5 border-alpine-gold/30">
              <span
                className="material-symbols-outlined text-xl text-alpine-gold"
                aria-hidden="true"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-heading font-bold text-snow-white text-sm">
                CompTIA A+ Certified
              </span>
            </div>
            <div className="glass-card flex items-center gap-3 px-5 py-3.5 border-alpine-gold/30">
              <span
                className="material-symbols-outlined text-xl text-alpine-gold"
                aria-hidden="true"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield
              </span>
              <span className="font-heading font-bold text-snow-white text-sm">
                MCSE NT4.0 / MCP / MCP+I
              </span>
            </div>
            <div className="glass-card flex items-center gap-3 px-5 py-3.5 border-alpine-gold/30">
              <span
                className="material-symbols-outlined text-xl text-alpine-gold"
                aria-hidden="true"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                workspace_premium
              </span>
              <span className="font-heading font-bold text-snow-white text-sm">
                27+ Years IT Experience
              </span>
            </div>
            <div className="glass-card flex items-center gap-3 px-5 py-3.5 border-alpine-gold/30">
              <span
                className="material-symbols-outlined text-xl text-alpine-gold"
                aria-hidden="true"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person_pin_circle
              </span>
              <span className="font-heading font-bold text-snow-white text-sm">
                Fairplay Local
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Service Coverage Zones */}
    <section className="py-20 md:py-28 px-6 md:px-8 bg-midnight-slate/50 relative">
      <div className="absolute inset-0 atmospheric-bg opacity-30" />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Service Area
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-snow-white tracking-tight text-balance">
            Service Coverage Zones
          </h2>
          <p className="text-frost-gray text-lg">
            We travel where the problems are. Our tiered service zones ensure
            you get the support you need, no matter how remote your location.
          </p>
        </div>

        {/* Zone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Zone 1 — Local */}
          <div className="glass-card p-8 hover:border-vivid-teal/30 transition-colors flex flex-col">
            <span className="text-xs font-mono font-bold text-vivid-teal tracking-widest uppercase mb-2 block">
              Zone 01
            </span>
            <h3 className="text-2xl font-heading font-bold mb-4 text-snow-white">
              Local
            </h3>
            <p className="text-sm text-frost-gray mb-8 min-h-[40px]">
              Fairplay, Alma, Como
            </p>
            <div className="text-3xl font-heading font-bold mb-8 text-vivid-teal">
              Free{" "}
              <span className="text-sm font-normal text-frost-gray">
                Service Call Fee
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-sm flex-1">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-vivid-teal text-lg" aria-hidden="true">
                  check_circle
                </span>
                <span className="text-frost-gray">Same-day On-site</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-vivid-teal text-lg" aria-hidden="true">
                  check_circle
                </span>
                <span className="text-frost-gray">Priority Response</span>
              </li>
            </ul>
            <Link
              href="/service-area"
              className="text-vivid-teal font-heading font-bold text-sm flex items-center gap-2 hover:gap-3 transition-[gap] focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              Learn more
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          {/* Zone 2 — Regional (Popular) */}
          <div className="glass-card p-8 transition-colors flex flex-col" style={{ borderColor: "rgba(58, 155, 213, 0.5)" }}>
            <span className="text-xs font-mono font-bold text-alpine-gold tracking-widest uppercase mb-2 block">
              Zone 02 — Popular
            </span>
            <h3 className="text-2xl font-heading font-bold mb-4 text-snow-white">
              Regional
            </h3>
            <p className="text-sm text-frost-gray mb-8 min-h-[40px]">
              Breckenridge, Blue River, Buena Vista, Jefferson, Grant
            </p>
            <div className="mb-8">
              <span className="text-sm font-heading text-frost-gray line-through mr-2">$50</span>
              <span className="text-3xl font-heading font-bold text-alpine-gold">$25</span>
              <span className="text-sm font-normal text-frost-gray ml-2">
                Service Call Fee
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-sm flex-1">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-vivid-teal text-lg" aria-hidden="true">
                  check_circle
                </span>
                <span className="text-frost-gray">Next-day On-site</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-vivid-teal text-lg" aria-hidden="true">
                  check_circle
                </span>
                <span className="text-frost-gray">Standard Support</span>
              </li>
            </ul>
            <Link
              href="/service-area"
              className="text-vivid-teal font-heading font-bold text-sm flex items-center gap-2 hover:gap-3 transition-[gap] focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              Learn more
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          {/* Zone 3 — Extended */}
          <div className="glass-card p-8 hover:border-vivid-teal/30 transition-colors flex flex-col">
            <span className="text-xs font-mono font-bold text-vivid-teal tracking-widest uppercase mb-2 block">
              Zone 03
            </span>
            <h3 className="text-2xl font-heading font-bold mb-4 text-snow-white">
              Extended
            </h3>
            <p className="text-sm text-frost-gray mb-8 min-h-[40px]">
              Frisco, Bailey
            </p>
            <div className="mb-8">
              <span className="text-sm font-heading text-frost-gray line-through mr-2">$75</span>
              <span className="text-3xl font-heading font-bold text-alpine-gold">$38</span>
              <span className="text-sm font-normal text-frost-gray ml-2">
                Service Call Fee
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-sm flex-1">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-vivid-teal text-lg" aria-hidden="true">
                  check_circle
                </span>
                <span className="text-frost-gray">Scheduled Visits</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-vivid-teal text-lg" aria-hidden="true">
                  check_circle
                </span>
                <span className="text-frost-gray">On-site Support</span>
              </li>
            </ul>
            <Link
              href="/service-area"
              className="text-vivid-teal font-heading font-bold text-sm flex items-center gap-2 hover:gap-3 transition-[gap] focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              Learn more
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          {/* Zone 4 — Remote */}
          <div className="glass-card p-8 hover:border-vivid-teal/30 transition-colors flex flex-col">
            <span className="text-xs font-mono font-bold text-vivid-teal tracking-widest uppercase mb-2 block">
              Zone 04
            </span>
            <h3 className="text-2xl font-heading font-bold mb-4 text-snow-white">
              Remote
            </h3>
            <p className="text-sm text-frost-gray mb-8 min-h-[40px]">
              Dillon, Silverthorne, Leadville, Salida
            </p>
            <div className="mb-8">
              <span className="text-sm font-heading text-frost-gray line-through mr-2">$100+</span>
              <span className="text-3xl font-heading font-bold text-alpine-gold">$50</span>
              <span className="text-sm font-normal text-frost-gray ml-2">
                Service Call Fee
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-sm flex-1">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-vivid-teal text-lg" aria-hidden="true">
                  check_circle
                </span>
                <span className="text-frost-gray">Scheduled Visits</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-vivid-teal text-lg" aria-hidden="true">
                  check_circle
                </span>
                <span className="text-frost-gray">Remote Support Available</span>
              </li>
            </ul>
            <Link
              href="/service-area"
              className="text-vivid-teal font-heading font-bold text-sm flex items-center gap-2 hover:gap-3 transition-[gap] focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              Learn more
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="relative py-20 md:py-28 px-6 md:px-8 overflow-hidden border-t border-steel-blue/15">
      {/* Background image + overlays */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMljnSJ6mCIiIsZmdh9PlhS7pa6yGsKlfTwq3VnhCR6ts8QSyrXbPWbhgNaZiD1dxCi0mIVbqBtc9YSRgjaPuSqUZKSNslJp03EJlIGZR2oOvHRxoIhL0gO_9kTBxf5HBl14lHBta8yd_XSsfUNfv63Z__yri3oDS1XsBhHANlLyAHwvSSnZwK75mniosNN2E0mn4gVE8DTlxypan6b8MsPEqptOAKqdoDbjDS6itYoHCaHww7Don3SyGAEC5G_PCFWaKO_wcWM8g"
          alt="Server circuit boards with teal fiber optic lights"
          className="w-full h-full object-cover opacity-10"
          width={1200}
          height={800}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-deep-navy/70" />
        <div className="absolute inset-0 atmospheric-bg opacity-40" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-alpine-gold mb-4 block">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-snow-white mb-8 tracking-tight leading-[0.95] text-balance">
          Tech Problems Don&apos;t Care About Your{" "}
          <span className="text-alpine-gold">Checkout Date.</span>
        </h2>
        <p className="text-lg md:text-xl text-frost-gray mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re a local business, a full-time resident, or a
          visitor whose laptop just died at the cabin — we&apos;re here.
          Professional, local IT support that understands your environment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+17198380435"
            className="w-full sm:w-auto px-10 py-5 bg-alpine-gold text-deep-navy font-heading font-bold text-lg rounded-lg hover:brightness-110 transition-[filter,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(240,165,0,0.3)] flex items-center justify-center gap-3 active:scale-95 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
          >
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            Call Now
          </a>
          <a
            href="mailto:info@barnstormit.com"
            className="w-full sm:w-auto px-10 py-5 border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white font-heading font-bold text-lg rounded-lg transition-[border-color,transform] duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
          >
            <span className="material-symbols-outlined" aria-hidden="true">mail</span>
            Email Us
          </a>
          <Link
            href="/book"
            className="w-full sm:w-auto px-10 py-5 border-2 border-alpine-gold/30 hover:border-alpine-gold text-alpine-gold font-heading font-bold text-lg rounded-lg transition-[border-color,transform] duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
          >
            <span className="material-symbols-outlined" aria-hidden="true">event</span>
            Book a Call
          </Link>
        </div>
      </div>
    </section>

    {/* Latest from the Blog */}
    <section className="py-20 md:py-28 px-6 md:px-8 bg-midnight-slate/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Latest from the Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-snow-white tracking-tight text-balance">
            What We&apos;re Working On
          </h2>
        </div>

        <Link
          href="/blog/tailscale-mesh-vpn"
          className="glass-card group block overflow-hidden hover:border-vivid-teal/30 transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-56 md:h-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog/tailscale-mesh-vpn-header.jpg"
                alt="How I Use Tailscale to Run My Business From Anywhere in the Mountains"
                className="w-full h-full object-cover object-left"
                width={600}
                height={400}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-midnight-slate/60 hidden md:block" />
            </div>
            <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full border text-vivid-teal bg-vivid-teal/10 border-vivid-teal/30 w-fit mb-4">
                Tech Tips
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-snow-white tracking-tight leading-tight mb-4 group-hover:text-vivid-teal transition-colors text-balance">
                How I Use Tailscale to Run My Business From Anywhere in the Mountains
              </h3>
              <p className="text-frost-gray leading-relaxed mb-6">
                How a mesh VPN connects my entire infrastructure — from a Raspberry Pi in Fairplay to a VPS in Los Angeles — and why you might want one too.
              </p>
              <span className="text-vivid-teal font-heading font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-[gap]">
                Read more
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
    </>
  );
}
