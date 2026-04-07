import Link from "next/link";
import countyData from "./colorado-counties.json";

export const metadata = {
  title: "Service Area",
  description:
    "On-site IT support for Fairplay, Breckenridge, Frisco, Dillon, Leadville, and Buena Vista. Zone-based service fees starting at $25.",
  alternates: { canonical: "https://barnstormit.com/service-area" },
  openGraph: {
    title: "Service Area | Barnstorm Computer Services",
    description:
      "On-site IT support across Park, Summit, Lake, and Chaffee counties in Colorado.",
    url: "https://barnstormit.com/service-area",
    type: "website",
  },
};

export default function ServiceArea() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            SERVICE AREA
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6 text-balance">
            Colorado Mountain
            <br />
            <span className="text-vivid-teal">Communities, Covered</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            Based in Fairplay, we serve South Park, Summit County, and the
            surrounding high country. If you&apos;re up here, we come to you.
          </p>
        </div>
      </section>

      {/* SVG Coverage Map */}
      <section className="pb-12 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="glass-card rounded-xl p-6 md:p-10 overflow-hidden">
            <ColoradoMap />
          </div>
        </div>
      </section>

      {/* Zone Cards */}
      <section className="py-8 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ZoneCard
              name="Local Zone"
              fee="$25"
              towns="Fairplay, Alma, Como"
              note="Our home base."
              icon="home_pin"
            />
            <ZoneCard
              name="Regional Zone"
              fee="$50"
              towns="Breckenridge, Blue River, Buena Vista, Jefferson, Grant"
              note="Just over the pass."
              icon="distance"
            />
            <ZoneCard
              name="Extended Zone"
              fee="$75"
              towns="Frisco, Bailey"
              note="Worth the drive."
              icon="explore"
            />
            <ZoneCard
              name="Remote Zone"
              fee="$100+"
              towns="Dillon, Silverthorne, Leadville, Salida"
              note="We&apos;ll come to you."
              icon="landscape"
            />
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/pricing"
              className="text-vivid-teal hover:text-alpine-gold transition-colors font-heading font-bold text-sm focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              See pricing by zone &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Remote Support Banner */}
      <section className="py-8 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-alpine-gold/5 border border-alpine-gold/20 rounded-xl py-5 px-8 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
            <span
              className="material-symbols-outlined text-alpine-gold"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden="true"
            >
              settings_remote
            </span>
            <p className="text-frost-gray text-sm md:text-base">
              Remote support available anywhere &mdash;{" "}
              <span className="text-alpine-gold font-bold">
                no travel fee
              </span>{" "}
              for screen-sharing sessions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 px-6 md:px-8 mt-4">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-6 sm:p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-6 text-balance">
            Not sure if we cover your area?
          </h2>
          <p className="text-frost-gray text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            If you&apos;re in the mountains and need help, just call. If we
            can&apos;t get to you on-site, we can almost always help remotely.
          </p>
          <a
            href="tel:+17198380435"
            className="inline-flex items-center gap-3 bg-alpine-gold text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
          >
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            Call (719) 838-0435 and Ask
          </a>
        </div>
      </section>
    </>
  );
}

function ZoneCard({ name, fee, towns, note, icon }) {
  return (
    <div className="glass-card rounded-xl p-8 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <span className="p-3 rounded-lg bg-vivid-teal/10 text-vivid-teal">
          <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
        </span>
        <span className="font-heading text-xl font-bold text-alpine-gold">
          {fee}
        </span>
      </div>
      <h3 className="font-heading text-xl font-bold text-snow-white mb-2">
        {name}
      </h3>
      <p className="text-vivid-teal text-sm mb-6">{towns}</p>
      <div className="mt-auto pt-6 border-t border-steel-blue/20">
        <p className="text-sm italic text-frost-gray">{note}</p>
      </div>
    </div>
  );
}

/* Nudge labels so close towns don't overlap */
const LABEL_NUDGE = {
  Silverthorne: { dx: -8, dy: -16, anchor: "end" },
  Dillon: { dx: 10, dy: 16, anchor: "start" },
  Frisco: { dx: -10, dy: -10, anchor: "end" },
  Breckenridge: { dx: -10, dy: 16, anchor: "end" },
  Fairplay: { dx: 0, dy: 18, anchor: "middle" },
  Alma: { dx: -10, dy: -8, anchor: "end" },
  Leadville: { dx: -10, dy: 4, anchor: "end" },
  Salida: { dx: 0, dy: -10 },
  Como: { dx: 10, dy: -8, anchor: "start" },
  Jefferson: { dx: 10, dy: 14, anchor: "start" },
  Grant: { dx: 10, dy: -10, anchor: "start" },
  Bailey: { dx: 10, dy: -10, anchor: "start" },
};

/* County fill colors — very muted, recede behind town labels */
const COUNTY_COLORS = {
  "08093": "#152840", // Park
  "08117": "#122828", // Summit
  "08065": "#1C152A", // Lake
  "08015": "#15281D", // Chaffee
};

/* Town label colors by pricing zone */
const TOWN_ZONE_COLORS = {
  Fairplay: "#FFFFFF",     // Local
  Alma: "#FFFFFF",         // Local
  Como: "#FFFFFF",         // Local
  Breckenridge: "#F0A500", // Regional
  "Buena Vista": "#F0A500", // Regional
  Jefferson: "#F0A500",    // Regional
  Grant: "#F0A500",        // Regional
  Frisco: "#5CE0D6",       // Extended
  Bailey: "#5CE0D6",       // Extended
  Dillon: "#DC2626",       // Remote
  Silverthorne: "#DC2626",  // Remote
  Leadville: "#DC2626",    // Remote
  Salida: "#DC2626",       // Remote
};

function ColoradoMap() {
  return (
    <svg
      viewBox="0 -30 700 530"
      className="w-full h-auto"
      role="img"
      aria-label="Map of Colorado showing Barnstorm service area with town labels colored by pricing zone"
    >
      {/* County paths — muted fills for geographic reference */}
      {countyData.paths.map((county) => (
        <path
          key={county.id}
          d={county.d}
          fill={COUNTY_COLORS[county.id] || "#111921"}
          stroke="#0D1B2A"
          strokeWidth="0.75"
        />
      ))}

      {/* Town dots and labels — colored by pricing zone */}
      {countyData.towns.map((town) => {
        const nudge = LABEL_NUDGE[town.name] || {};
        const dx = nudge.dx || 0;
        const dy = nudge.dy || (town.primary ? -10 : -8);
        const anchor = nudge.anchor || "middle";
        const color = TOWN_ZONE_COLORS[town.name] || "#F7F9FC";
        return (
          <g key={town.name}>
            <circle
              cx={town.x}
              cy={town.y}
              r={town.primary ? 4 : 2.5}
              fill={color}
            />
            <text
              x={town.x + dx}
              y={town.y + dy}
              fill={color}
              fontSize={town.primary ? "13" : "11"}
              fontWeight={town.primary ? "bold" : "normal"}
              fontFamily="sans-serif"
              textAnchor={anchor}
            >
              {town.name}
            </text>
          </g>
        );
      })}

      {/* Legend — pricing zones by label color */}
      <g transform="translate(500, 350)">
        <rect
          x="0"
          y="0"
          width="180"
          height="115"
          rx="8"
          fill="#0D1B2A"
          fillOpacity="0.85"
          stroke="#2A3F55"
          strokeWidth="1"
        />
        <text
          x="14"
          y="26"
          fill="#F7F9FC"
          fontSize="13"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          Pricing Zones
        </text>
        <circle cx="22" cy="46" r="6" fill="#FFFFFF" />
        <text x="36" y="50" fill="#F7F9FC" fontSize="12" fontFamily="sans-serif">
          Local $25
        </text>
        <circle cx="22" cy="66" r="6" fill="#F0A500" />
        <text x="36" y="70" fill="#F7F9FC" fontSize="12" fontFamily="sans-serif">
          Regional $50
        </text>
        <circle cx="22" cy="86" r="6" fill="#5CE0D6" />
        <text x="36" y="90" fill="#F7F9FC" fontSize="12" fontFamily="sans-serif">
          Extended $75
        </text>
        <circle cx="22" cy="106" r="6" fill="#DC2626" />
        <text x="36" y="110" fill="#F7F9FC" fontSize="12" fontFamily="sans-serif">
          Remote $100+
        </text>
      </g>
    </svg>
  );
}
