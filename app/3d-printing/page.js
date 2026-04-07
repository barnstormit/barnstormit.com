import Link from "next/link";

export const metadata = {
  title: "3D Printing",
  description:
    "Custom 3D printing in Fairplay, CO. Replacement parts, mounts, prototypes, and enclosures. Most parts ready in 24–48 hours.",
  alternates: { canonical: "https://barnstormit.com/3d-printing" },
  openGraph: {
    title: "3D Printing | Barnstorm Computer Services",
    description:
      "Custom 3D printing — replacement parts, mounts, prototypes, and more. Most parts ready in 24–48 hours.",
    url: "https://barnstormit.com/3d-printing",
    type: "website",
  },
};

const services = [
  {
    icon: "settings_suggest",
    title: "Replacement Parts",
    description:
      "Broken plastic clip, missing knob, cracked bracket? If you've got the file or a sample, we'll print a new one.",
  },
  {
    icon: "wall_art",
    title: "Custom Mounts & Brackets",
    description:
      "Wall mounts, desk organizers, equipment brackets. Bring your design file or we'll help you find one.",
    highlight: true,
  },
  {
    icon: "lightbulb",
    title: "Prototypes",
    description:
      "Got a 3D file for a product idea? We'll print it so you can hold it in your hands.",
  },
  {
    icon: "cable",
    title: "Cable Management",
    description:
      "Custom cable clips, routing brackets, and organizers. Tons of ready-made designs available.",
  },
  {
    icon: "package_2",
    title: "Enclosures & Cases",
    description:
      "Raspberry Pi cases, project boxes, protective housings. Huge library of existing designs to choose from.",
  },
  {
    icon: "emoji_objects",
    title: "One-Off Solutions",
    description:
      "If it exists as a 3D file, we can print it. Don't have a file? We'll help you find one or connect you with a designer.",
  },
];

export default function ThreeDPrinting() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-alpine-gold mb-4 block">
            3D PRINTING
          </span>
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] text-balance">
              Custom 3D Printing
            </h1>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold bg-alpine-gold text-deep-navy px-4 py-1.5 rounded-full self-start mt-2 md:mt-4">
              NEW
            </span>
          </div>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            Need a part that doesn&apos;t exist? We can probably print it.
            Bring us your file or your idea and we&apos;ll make it real.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-12 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`glass-card rounded-xl p-8 flex flex-col ${
                svc.highlight ? "border-alpine-gold/40" : ""
              }`}
              style={
                svc.highlight
                  ? { background: "rgba(240, 165, 0, 0.06)" }
                  : undefined
              }
            >
              <span
                aria-hidden="true"
                className={`material-symbols-outlined text-3xl mb-6 ${
                  svc.highlight ? "text-alpine-gold" : "text-vivid-teal"
                }`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {svc.icon}
              </span>
              <h3 className="font-heading text-xl font-bold text-snow-white mb-3">
                {svc.title}
              </h3>
              <p className="text-frost-gray text-sm leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="glass-card rounded-xl p-6 sm:p-10 md:p-14">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              How It Works
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex gap-4 items-start">
                <span className="font-heading text-4xl font-black text-vivid-teal/20">
                  1
                </span>
                <div>
                  <h3 className="font-heading font-bold text-snow-white mb-1">
                    Share Your File or Idea
                  </h3>
                  <p className="text-frost-gray text-sm leading-relaxed">
                    Send us a .STL, .OBJ, or .3MF file. Don&apos;t have one? We
                    can help you find a design or connect you with someone who
                    can create one.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-heading text-4xl font-black text-vivid-teal/20">
                  2
                </span>
                <div>
                  <h3 className="font-heading font-bold text-snow-white mb-1">
                    We Print It
                  </h3>
                  <p className="text-frost-gray text-sm leading-relaxed">
                    We handle material selection, settings, and quality control.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-heading text-4xl font-black text-vivid-teal/20">
                  3
                </span>
                <div>
                  <h3 className="font-heading font-bold text-snow-white mb-1">
                    Pick Up or Delivery
                  </h3>
                  <p className="text-frost-gray text-sm leading-relaxed">
                    Most parts ready in 24&ndash;48 hours. Local pickup or
                    delivery available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 px-6 md:px-8 mt-4">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-6 sm:p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-4 text-balance">
            Got a file or an idea?
          </h2>
          <p className="text-frost-gray text-lg mb-10">
            Call us or use our contact form.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto bg-alpine-gold text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">call</span>
              Call (719) 838-0435
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-frost-gray/20 hover:border-alpine-gold text-snow-white px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">mail</span>
              Request a Print
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
