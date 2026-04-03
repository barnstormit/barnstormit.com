import Link from "next/link";

export const metadata = {
  title: "Service Area",
  description:
    "Barnstorm Computer Services covers Fairplay, Breckenridge, Frisco, Dillon, Leadville, Buena Vista, and surrounding Colorado mountain communities. On-site IT support with zone-based service fees.",
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
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6">
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
              towns="Fairplay, Alma"
              note="Our home base."
              icon="home_pin"
            />
            <ZoneCard
              name="Regional Zone"
              fee="$50"
              towns="Blue River, Breckenridge, Como"
              note="Just over the pass."
              icon="distance"
            />
            <ZoneCard
              name="Extended Zone"
              fee="$75"
              towns="Frisco, Dillon, Buena Vista, Jefferson"
              note="Worth the drive."
              icon="explore"
            />
            <ZoneCard
              name="Remote Zone"
              fee="$100+"
              towns="Silverthorne, Leadville, Salida"
              note="We&apos;ll come to you."
              icon="landscape"
            />
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/pricing"
              className="text-vivid-teal hover:text-alpine-gold transition-colors font-heading font-bold text-sm"
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
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-6">
            Not sure if we cover your area?
          </h2>
          <p className="text-frost-gray text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            If you&apos;re in the mountains and need help, just call. If we
            can&apos;t get to you on-site, we can almost always help remotely.
          </p>
          <a
            href="tel:+17198380435"
            className="inline-flex items-center gap-3 bg-alpine-gold text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            <span className="material-symbols-outlined">call</span>
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
          <span className="material-symbols-outlined">{icon}</span>
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

function ColoradoMap() {
  /*
   * Simplified SVG map of Colorado with county zones highlighted.
   * ViewBox maps roughly to Colorado's geographic extent:
   *   Longitude: -109.05 to -102.05 (7 degrees → 700 units)
   *   Latitude:  41.0 to 37.0 (4 degrees → 400 units)
   *   x = (lon + 109.05) * 100
   *   y = (41.0 - lat) * 100
   */
  return (
    <svg
      viewBox="0 0 700 400"
      className="w-full h-auto"
      role="img"
      aria-label="Map of Colorado showing Barnstorm service zones: Park County (Local), Summit County (Regional), Lake County (Extended), and Chaffee County (Extended)"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* State outline */}
      <rect
        x="0"
        y="0"
        width="700"
        height="400"
        fill="#1a2740"
        stroke="#2A3F55"
        strokeWidth="2"
      />

      {/* Faint county grid lines for context */}
      {[80, 160, 240, 320, 400, 480, 560, 620].map((x) => (
        <line
          key={`v${x}`}
          x1={x}
          y1="0"
          x2={x}
          y2="400"
          stroke="#2A3F55"
          strokeWidth="0.5"
        />
      ))}
      {[65, 130, 195, 260, 330].map((y) => (
        <line
          key={`h${y}`}
          x1="0"
          y1={y}
          x2="700"
          y2={y}
          stroke="#2A3F55"
          strokeWidth="0.5"
        />
      ))}

      {/* Extended zone — Lake County (small, west of Park) */}
      <polygon
        points="237,155 265,155 265,195 237,195"
        fill="#1A4A7A"
        stroke="#2A5A8A"
        strokeWidth="1"
      />

      {/* Extended zone — Chaffee County (south of Lake) */}
      <polygon
        points="237,195 315,195 315,262 237,262"
        fill="#1A4A7A"
        stroke="#2A5A8A"
        strokeWidth="1"
      />

      {/* Regional zone — Summit County (north) */}
      <polygon
        points="258,112 340,112 340,155 258,155"
        fill="#F0A500"
        fillOpacity="0.85"
        stroke="#F0A500"
        strokeWidth="1"
      />

      {/* Local zone — Park County (central, largest) */}
      <polygon
        points="265,155 375,155 375,222 265,222"
        fill="#3A9BD5"
        fillOpacity="0.7"
        stroke="#3A9BD5"
        strokeWidth="1"
      />

      {/* County labels */}
      <text
        x="320"
        y="195"
        fill="#F7F9FC"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.4"
      >
        PARK CO.
      </text>
      <text
        x="299"
        y="138"
        fill="#0D1B2A"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.6"
      >
        SUMMIT CO.
      </text>
      <text
        x="251"
        y="179"
        fill="#F7F9FC"
        fontSize="7"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.4"
      >
        LAKE
      </text>
      <text
        x="276"
        y="235"
        fill="#F7F9FC"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.4"
      >
        CHAFFEE CO.
      </text>

      {/* Town dots and labels */}
      {/* Park County towns */}
      <TownLabel x={316} y={177} name="Fairplay" primary />
      <TownLabel x={300} y={168} name="Alma" />

      {/* Summit County towns */}
      <TownLabel x={305} y={148} name="Breckenridge" />
      <TownLabel x={280} y={127} name="Frisco" />
      <TownLabel x={310} y={120} name="Dillon" />
      <TownLabel x={330} y={130} name="Silverthorne" />

      {/* Lake County towns */}
      <TownLabel x={251} y={172} name="Leadville" />

      {/* Chaffee County towns */}
      <TownLabel x={278} y={248} name="Buena Vista" />

      {/* Legend */}
      <g transform="translate(520, 280)">
        <rect
          x="0"
          y="0"
          width="165"
          height="105"
          rx="6"
          fill="#0D1B2A"
          fillOpacity="0.8"
          stroke="#2A3F55"
          strokeWidth="1"
        />
        <text
          x="12"
          y="22"
          fill="#F7F9FC"
          fontSize="11"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          Service Zones
        </text>
        <rect x="12" y="35" width="14" height="10" rx="2" fill="#3A9BD5" />
        <text x="32" y="44" fill="#F7F9FC" fontSize="10" fontFamily="sans-serif">
          Local — Park Co.
        </text>
        <rect x="12" y="52" width="14" height="10" rx="2" fill="#F0A500" />
        <text x="32" y="61" fill="#F7F9FC" fontSize="10" fontFamily="sans-serif">
          Regional — Summit Co.
        </text>
        <rect x="12" y="69" width="14" height="10" rx="2" fill="#1A4A7A" />
        <text x="32" y="78" fill="#F7F9FC" fontSize="10" fontFamily="sans-serif">
          Extended — Lake, Chaffee
        </text>
        <rect x="12" y="86" width="14" height="10" rx="2" fill="#2A3F55" />
        <text
          x="32"
          y="95"
          fill="#8AA0B4"
          fontSize="10"
          fontFamily="sans-serif"
        >
          Remote / Not Served
        </text>
      </g>

      {/* Fairplay home base marker */}
      <circle
        cx="316"
        cy="177"
        r="8"
        fill="none"
        stroke="#3A9BD5"
        strokeWidth="1.5"
        opacity="0.4"
        filter="url(#glow)"
      />
      <circle
        cx="316"
        cy="177"
        r="14"
        fill="none"
        stroke="#3A9BD5"
        strokeWidth="0.8"
        opacity="0.2"
      />
    </svg>
  );
}

function TownLabel({ x, y, name, primary }) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={primary ? 3 : 2}
        fill={primary ? "#F7F9FC" : "#F7F9FC"}
        opacity={primary ? 1 : 0.7}
      />
      <text
        x={x}
        y={y - 6}
        fill="#F7F9FC"
        fontSize={primary ? "10" : "8"}
        fontWeight={primary ? "bold" : "normal"}
        fontFamily="sans-serif"
        textAnchor="middle"
        opacity={primary ? 1 : 0.8}
      >
        {name}
      </text>
    </g>
  );
}
