import Link from "next/link";

export const metadata = {
  title: "Pricing",
  description:
    "Straightforward IT service rates — $100/hour with no hidden fees. Service zone fees from $25–$100+. Serving Fairplay, Breckenridge, and Colorado mountain communities.",
  alternates: { canonical: "https://barnstormit.com/pricing" },
  openGraph: {
    title: "Pricing | Barnstorm Computer Services",
    description:
      "Transparent IT support pricing — $100/hour, zone-based service fees, no surprises.",
    url: "https://barnstormit.com/pricing",
  },
};

export default function Pricing() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
            Pricing
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-snow-white tracking-tighter leading-[0.95] mb-6">
            Straightforward Rates.
            <br />
            <span className="text-vivid-teal">No Surprises.</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            No hidden fees, no hourly creep. You&apos;ll know what it costs
            before we start.
          </p>
        </div>
      </section>

      {/* Rate Card + Zone Fees */}
      <section className="pb-8 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Rate Card */}
          <div className="glass-card rounded-xl p-8 md:p-10 flex flex-col">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-frost-gray/60 mb-6 block">
              Standard Rate
            </span>
            <div className="mb-6">
              <span className="font-heading text-6xl md:text-7xl font-black text-alpine-gold">
                $100
              </span>
              <span className="text-frost-gray text-2xl font-heading font-medium ml-1">
                /hour
              </span>
            </div>
            <p className="text-frost-gray leading-relaxed mb-4">
              1.5-hour minimum for on-site service calls.
            </p>
            <p className="text-frost-gray/50 text-sm leading-relaxed mb-8">
              Parts and travel billed separately — see below.
            </p>
            <div className="mt-auto flex items-center gap-2 text-vivid-teal">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              <span className="font-heading font-bold text-sm">
                Responsive &amp; Efficient
              </span>
            </div>
          </div>

          {/* Zone Fee Table */}
          <div className="glass-card rounded-xl p-8 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-snow-white mb-8">
              Service Zone Fees
            </h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-steel-blue/30">
                  <th className="text-left font-mono text-[10px] tracking-[0.2em] uppercase text-frost-gray/50 pb-3">
                    Zone
                  </th>
                  <th className="text-left font-mono text-[10px] tracking-[0.2em] uppercase text-frost-gray/50 pb-3">
                    Areas Served
                  </th>
                  <th className="text-right font-mono text-[10px] tracking-[0.2em] uppercase text-frost-gray/50 pb-3">
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-blue/15">
                <tr>
                  <td className="py-4 font-heading font-bold text-vivid-teal">
                    Local
                  </td>
                  <td className="py-4 text-frost-gray text-sm">
                    Fairplay, Alma, Como
                  </td>
                  <td className="py-4 text-right font-heading font-bold text-alpine-gold">
                    $25
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-heading font-bold text-alpine-gold">
                    Regional
                  </td>
                  <td className="py-4 text-frost-gray text-sm">
                    Breckenridge, Blue River, Buena Vista, Jefferson, Grant
                  </td>
                  <td className="py-4 text-right font-heading font-bold text-alpine-gold">
                    $50
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-heading font-bold text-snow-white">
                    Extended
                  </td>
                  <td className="py-4 text-frost-gray text-sm">
                    Frisco, Bailey
                  </td>
                  <td className="py-4 text-right font-heading font-bold text-alpine-gold">
                    $75
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-heading font-bold text-snow-white">
                    Remote
                  </td>
                  <td className="py-4 text-frost-gray text-sm">
                    Dillon, Silverthorne, Leadville, Salida
                  </td>
                  <td className="py-4 text-right font-heading font-bold text-alpine-gold">
                    $100+
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-frost-gray/50 text-sm mt-6">
              Not sure which zone you&apos;re in?{" "}
              <a
                href="tel:+17198380435"
                className="text-vivid-teal hover:text-alpine-gold transition-colors"
              >
                Call and ask
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods + Parts & Hardware */}
      <section className="py-8 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment Methods */}
          <div className="glass-card rounded-xl p-8 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-snow-white mb-3">
              Payment Methods
            </h2>
            <p className="text-frost-gray text-sm leading-relaxed mb-8">
              Direct payment keeps costs down for everyone.
            </p>

            {/* Preferred badge */}
            <div className="bg-vivid-teal/10 border border-vivid-teal/30 rounded-lg px-5 py-3 mb-8 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-vivid-teal"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                thumb_up
              </span>
              <span className="font-heading font-bold text-sm text-vivid-teal">
                No Fee for Direct Payment
              </span>
            </div>

            <div className="divide-y divide-steel-blue/15">
              {/* Cash, Check, Zelle */}
              <div className="py-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading font-bold text-snow-white">
                    Cash, Check, or Zelle
                  </span>
                  <span className="font-mono text-xs text-vivid-teal bg-vivid-teal/10 px-3 py-1 rounded-full">
                    No fee (preferred)
                  </span>
                </div>
                <p className="text-frost-gray/50 text-xs">
                  Zelle:{" "}
                  <span className="text-frost-gray">
                    info@barnstormit.com
                  </span>{" "}
                  or{" "}
                  <span className="text-frost-gray">(719) 838-0435</span>
                </p>
              </div>

              {/* ACH */}
              <div className="py-4 flex items-center justify-between">
                <span className="font-heading font-bold text-snow-white">
                  ACH Transfer
                </span>
                <span className="font-mono text-xs text-alpine-gold bg-alpine-gold/10 px-3 py-1 rounded-full">
                  +1% fee
                </span>
              </div>

              {/* Card */}
              <div className="py-4 flex items-center justify-between">
                <span className="font-heading font-bold text-snow-white">
                  Credit / Debit Card
                </span>
                <span className="font-mono text-xs text-alpine-gold bg-alpine-gold/10 px-3 py-1 rounded-full">
                  +3% fee
                </span>
              </div>
            </div>

            <p className="text-frost-gray/40 text-xs mt-6 leading-relaxed">
              Card payments welcome — a small processing fee applies to help
              cover network costs.
            </p>
          </div>

          {/* Parts & Hardware */}
          <div className="glass-card rounded-xl p-8 md:p-10 flex flex-col">
            <h2 className="font-heading text-2xl font-bold text-snow-white mb-4">
              Parts &amp; Hardware
            </h2>
            <p className="text-frost-gray leading-relaxed mb-8">
              Parts and components billed at cost plus markup. We source quality
              parts and pass along fair pricing.
            </p>
            <div
              className="mt-auto rounded-lg p-6 border-l-4 border-alpine-gold"
              style={{ background: "rgba(240, 165, 0, 0.06)" }}
            >
              <p className="text-frost-gray leading-relaxed italic">
                &ldquo;Every job gets a clear estimate before we start. No
                hidden fees, no hourly creep.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 px-6 md:px-8 mt-8">
        <div className="max-w-[1200px] mx-auto glass-card rounded-xl p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-10">
            Questions about pricing?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">call</span>
              Call Us: (719) 838-0435
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-10 py-4 rounded-lg font-heading font-bold text-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">mail</span>
              Send a Message
            </Link>
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-frost-gray/40">
            Serving South Park &amp; Summit County, Colorado
          </p>
        </div>
      </section>
    </>
  );
}
