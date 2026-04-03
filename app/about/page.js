export const metadata = {
  title: "About",
  description:
    "Meet Jeff Barnstorf — 27 years of IT experience, MCSE certified, based in Fairplay, Colorado. On-site computer repair and IT support for mountain communities.",
  alternates: { canonical: "https://barnstormit.com/about" },
  openGraph: {
    title: "About | Barnstorm Computer Services",
    description:
      "Meet Jeff Barnstorf — 27 years of IT experience serving Colorado's mountain communities from Fairplay.",
    url: "https://barnstormit.com/about",
  },
};

const timeline = [
  {
    year: "1997–2010",
    title: "Buffalo, NY Origins",
    description:
      "The foundation of a 27-year IT career. Help desk support, network administration, and the early days of enterprise computing. BS in Information Technology from D'Youville University.",
    image: "/about-buffalo.jpg",
    fit: "contain",
  },
  {
    year: "2010–2018",
    title: "Colorado IT Leadership",
    description:
      "Datacenter management, MCSE certification, and Microsoft Certified Trainer roles.",
    image: "/about-summit.jpg",
    fit: "center 60%",
  },
  {
    year: "2018–2025",
    title: "Summit County Hospitality",
    description:
      "Managing Robbie's Tavern, Bird and Cow, South Park Saloon, Colorado Cantina. Rooting into the mountain community.",
    image: "/about-waterfall.jpg",
    fit: "center 70%",
  },
  {
    year: "2026",
    title: "Barnstorm Launch",
    description:
      "Combining 27 years of IT expertise with deep local roots. On-site repair, remote support, business IT, 3D printing, and AI automation.",
    image: "/about-snowboard.jpg",
    fit: "contain",
  },
];

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            ABOUT
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6">
            Meet <span className="text-vivid-teal">Jeff Barnstorf</span>
          </h1>
        </div>
      </section>

      {/* Hero Bio Section */}
      <section className="pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="glass-card rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about-hero.jpg"
                alt="Jeff Barnstorf — Founder of Barnstorm Computer Services"
                className="w-full object-cover"
              />
            </div>
            {/* Cert Badge */}
            <div className="absolute bottom-4 left-4 bg-deep-navy/90 backdrop-blur-sm border border-alpine-gold/40 rounded-lg px-4 py-2 flex items-center gap-2">
              <span
                className="material-symbols-outlined text-alpine-gold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-alpine-gold font-bold">
                MCSE &amp; CompTIA A+
              </span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-frost-gray text-lg leading-relaxed mb-8">
              Jeff Barnstorf isn&apos;t a remote contractor dialing in from
              Denver. He lives in Fairplay, drives the same mountain roads you
              do, and has been solving tech problems at altitude since 1997.
            </p>
            <p className="text-frost-gray leading-relaxed mb-8">
              With nearly 27 years of experience spanning help desks, network
              administration, and enterprise datacenter management, he brings a
              level of technical depth rarely found in residential IT support. He
              holds a BS in IT from D&apos;Youville University and
              certifications including MCSE, MCP, and MCT.
            </p>
            <p className="text-frost-gray leading-relaxed mb-10">
              Having managed beloved Summit County spots like Robbie&apos;s
              Tavern and South Park Saloon, Jeff understands this community
              personally. He works fast, avoids unnecessary jargon, and brings
              professional-grade solutions directly to your home, office, or
              rental.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-3">
              {["Remote Support", "On-Site Repair", "Network Setup"].map(
                (service) => (
                  <span
                    key={service}
                    className="px-5 py-2 rounded-full glass-card text-vivid-teal text-sm font-heading font-bold"
                  >
                    {service}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Evolution Timeline */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-midnight-slate/50">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Technical Evolution
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white tracking-tight mb-12">
            27 Years of Solving Problems
          </h2>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Image or placeholder */}
                <div
                  className={`${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  {item.image ? (
                    <div className={`glass-card rounded-xl overflow-hidden ${item.fit === "contain" ? "" : "h-80 md:h-96"}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full ${item.fit === "contain" ? "object-contain" : "h-full object-cover"}`}
                        style={item.fit && item.fit !== "contain" ? { objectPosition: item.fit } : undefined}
                      />
                    </div>
                  ) : (
                    <div className="glass-card rounded-xl h-48 md:h-64 flex items-center justify-center">
                      <span className="material-symbols-outlined text-vivid-teal/20 text-8xl">
                        computer
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="font-mono text-sm text-alpine-gold font-bold mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-snow-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-frost-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-10">
            Ready to get your tech working?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">call</span>
              Call (719) 838-0435
            </a>
            <a
              href="mailto:jeff@barnstormit.com"
              className="w-full sm:w-auto border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-10 py-4 rounded-lg font-heading font-bold text-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">mail</span>
              jeff@barnstormit.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
