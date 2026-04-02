import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 px-6 text-center">
      {/* Background Image + Overlays */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8KsEducRoSJ50MZXciNd1VAW8Z3SVQxO_ge2NsjJRHs1AxCfLBMQvMx4kFZU3G6-WR31YUE0mctkQAzwYQS-lOpyGmRXeYlcOTuW8jymLqzY-AN0OBEMwFBnyUxOyIrmYqNkpsCdEudSdIs-EmxGYs6ETX4fp_RrPZnqVkkifIyn6xWUBHQAmWnsRNykWZ6fNRw1NYt8n6pCF4qbxH_Dh2eKEd3O-YATJTmvGrD2G0iC7Xjo2XV5005NT13gMEZOGfAoXVR_treg"
          alt="Jagged snow-capped alpine peaks at dusk with deep blue shadows and a glowing teal horizon"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/90 via-deep-navy/20 to-deep-navy" />
        <div className="absolute inset-0 topo-pattern opacity-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-frost-gray/20 animate-fade-in-up">
          <span
            className="material-symbols-outlined text-alpine-gold text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            terrain
          </span>
          <span className="font-mono text-[10px] tracking-widest text-snow-white uppercase">
            Colorado High Country Specialists
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-snow-white tracking-tighter leading-[0.9] drop-shadow-2xl animate-fade-in-up stagger-1">
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
            className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-xl font-heading font-bold text-lg shadow-[0_20px_40px_rgba(58,155,213,0.3)] hover:shadow-[0_20px_40px_rgba(58,155,213,0.4)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">call</span>
            Call (719) 838-0435
          </a>
          <Link
            href="/services"
            className="w-full sm:w-auto bg-deep-navy/50 backdrop-blur-sm border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-10 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
          >
            View Services
            <span className="material-symbols-outlined text-vivid-teal">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6 mt-12 pt-12 border-t border-frost-gray/15 w-full animate-fade-in-up stagger-4">
          <div className="flex items-center gap-2 text-snow-white">
            <span
              className="material-symbols-outlined text-vivid-teal"
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
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              person_pin_circle
            </span>
            <span className="font-mono text-[10px] uppercase tracking-tight whitespace-nowrap">
              Local Owner &amp; Operator
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
        <span className="material-symbols-outlined">
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
            <span className="material-symbols-outlined text-vivid-teal text-3xl">
              speed
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold mb-3 text-snow-white">
            On-Site Support
          </h3>
          <p className="text-frost-gray text-sm leading-relaxed">
            We come to you. Professional troubleshooting for home offices,
            vacation rentals, and local businesses across the high country.
          </p>
        </div>

        {/* Network & WiFi */}
        <div className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500">
          <div className="w-14 h-14 rounded-lg bg-vivid-teal/10 flex items-center justify-center mb-6 group-hover:bg-vivid-teal/20 transition-colors border border-vivid-teal/20">
            <span className="material-symbols-outlined text-vivid-teal text-3xl">
              wifi
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold mb-3 text-snow-white">
            Network &amp; WiFi
          </h3>
          <p className="text-frost-gray text-sm leading-relaxed">
            Secure networks, strong WiFi coverage, firewalls, and encrypted
            VPNs for homes and businesses.
          </p>
        </div>

        {/* Remote Support */}
        <div className="glass-card p-8 group hover:border-vivid-teal/30 transition-colors duration-500">
          <div className="w-14 h-14 rounded-lg bg-vivid-teal/10 flex items-center justify-center mb-6 group-hover:bg-vivid-teal/20 transition-colors border border-vivid-teal/20">
            <span className="material-symbols-outlined text-vivid-teal text-3xl">
              cloud_sync
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold mb-3 text-snow-white">
            Remote Support
          </h3>
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
            <span className="material-symbols-outlined text-vivid-teal text-3xl">
              business_center
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold mb-3 text-snow-white">
            Business IT
          </h3>
          <p className="text-frost-gray text-sm leading-relaxed">
            Managed services, consulting, and service contracts tailored for
            local businesses.
          </p>
        </div>

        {/* 3D Printing — gold highlight */}
        <div className="glass-card p-8 group transition-colors duration-500 sm:w-1/3" style={{ borderColor: "rgba(240, 165, 0, 0.4)", background: "rgba(240, 165, 0, 0.06)" }}>
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-lg bg-alpine-gold/10 flex items-center justify-center group-hover:bg-alpine-gold/20 transition-colors border border-alpine-gold/30">
              <span className="material-symbols-outlined text-alpine-gold text-3xl">
                view_in_ar
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-alpine-gold bg-alpine-gold/10 px-2.5 py-1 rounded-full border border-alpine-gold/30">
              New
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold mb-3 text-snow-white">
            3D Printing
          </h3>
          <p className="text-frost-gray text-sm leading-relaxed">
            Custom parts, replacement components, and prototypes — printed
            locally, delivered fast.
          </p>
        </div>
      </div>
    </section>

    {/* Why Barnstorm — Trust Section */}
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Bio */}
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Why Barnstorm
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-snow-white tracking-tight leading-tight mb-8">
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
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent">
              <h4 className="text-xl font-heading font-bold text-snow-white">
                Jeff Barnstorf
              </h4>
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
    </>
  );
}
