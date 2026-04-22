export const metadata = {
  title: "Ops Dashboard",
  robots: { index: false, follow: false },
};

const plannedPages = [
  {
    slug: "filament",
    label: "Filament Cost Reference",
    description:
      "Per-gram pricing, brand notes, and profit margins across the 3D printing catalog.",
  },
  {
    slug: "calculator",
    label: "Service Cost Calculator",
    description:
      "Internal pricing worksheet for quoting jobs — parts, labor, and travel.",
  },
  {
    slug: "clients",
    label: "Client Notes",
    description:
      "Per-client history, preferences, access details, and follow-up cadence.",
  },
  {
    slug: "sops",
    label: "Standard Operating Procedures",
    description:
      "Checklists for common repairs, on-site visits, and data recovery workflows.",
  },
];

export default function OpsDashboard() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 md:px-12 py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-vivid-teal mb-4">
          Ops · Internal Tools
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-snow-white tracking-tight leading-[1.05] text-balance">
          Barnstorm Ops Dashboard
        </h1>
        <p className="mt-5 max-w-[60ch] text-frost-gray text-base md:text-lg leading-relaxed">
          Private reference area for running the business — pricing tables,
          client notes, standard operating procedures, and anything else that
          lives outside the public site.
        </p>
      </div>

      <div className="glass-card p-6 md:p-8 mb-10 md:mb-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-alpine-gold mb-2">
          Security notice
        </p>
        <p className="text-snow-white/90 text-sm md:text-base leading-relaxed">
          This area is protected by HTTP Basic authentication. Don&apos;t share
          credentials outside the business, and assume the browser caches them
          until it&apos;s closed. Rotate the password if a device is lost or
          staff changes.
        </p>
      </div>

      <h2 className="font-heading text-2xl md:text-3xl font-bold text-snow-white tracking-tight mb-6">
        Planned pages
      </h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {plannedPages.map((p) => (
          <li key={p.slug} className="glass-card p-6 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading text-lg md:text-xl font-semibold text-snow-white">
                {p.label}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-alpine-gold border border-alpine-gold/40 bg-alpine-gold/10 px-2 py-1 rounded shrink-0">
                Coming soon
              </span>
            </div>
            <p className="text-frost-gray text-sm leading-relaxed">
              {p.description}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-frost-gray/70 mt-auto">
              /ops/{p.slug}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
