"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const businessServices = [
  {
    icon: "wifi",
    title: "Network Setup & WiFi",
    desc: "Site surveys, access point placement, wiring, and business-grade WiFi that actually covers the building.",
  },
  {
    icon: "desktop_windows",
    title: "Workstation Deployment",
    desc: "New machines configured, data migrated, printers mapped, and ready to work on day one.",
  },
  {
    icon: "dns",
    title: "Server & NAS Setup",
    desc: "File servers, NAS appliances, backup systems, and shared storage configured and secured.",
  },
  {
    icon: "support_agent",
    title: "Ongoing IT Support",
    desc: "Scheduled maintenance, monitoring, and priority response for your team.",
  },
  {
    icon: "move_to_inbox",
    title: "Office Moves & Buildouts",
    desc: "Network drops, rack setup, equipment relocation, and everything plugged back in and working.",
  },
  {
    icon: "smart_toy",
    title: "AI & Automation",
    desc: "Workflow automation, local AI deployment, chatbots, and tools that save your team hours every week.",
  },
  {
    icon: "language",
    title: "Website & SEO",
    desc: "Business websites, Google Business Profile setup, local SEO, and domain/email configuration.",
  },
];

export default function PricingTabs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(
    tabParam === "business" ? "business" : "residential"
  );

  function switchTab(tab) {
    setActiveTab(tab);
    const url =
      tab === "residential" ? "/pricing" : "/pricing?tab=business";
    router.replace(url, { scroll: false });
  }

  return (
    <>
      {/* Tab buttons */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-xl glass-card p-1.5 gap-1.5">
          <button
            onClick={() => switchTab("residential")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-lg font-heading font-bold text-base transition-colors focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none ${
              activeTab === "residential"
                ? "bg-alpine-gold text-deep-navy"
                : "text-frost-gray hover:text-snow-white"
            }`}
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              home
            </span>
            Residential &amp; Guests
          </button>
          <button
            onClick={() => switchTab("business")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-lg font-heading font-bold text-base transition-colors focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none ${
              activeTab === "business"
                ? "bg-alpine-gold text-deep-navy"
                : "text-frost-gray hover:text-snow-white"
            }`}
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              business_center
            </span>
            Business &amp; Commercial
          </button>
        </div>
      </div>

      {/* Tab content */}
      {activeTab === "residential" ? <ResidentialTab /> : <BusinessTab />}
    </>
  );
}

function ResidentialTab() {
  return (
    <>
      {/* Rate Card + Zone Fees */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
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
          <div className="mt-auto space-y-3">
            <div className="flex items-center gap-2 text-vivid-teal">
              <span
                className="material-symbols-outlined"
                aria-hidden="true"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              <span className="font-heading font-bold text-sm">
                Responsive &amp; Efficient
              </span>
            </div>
            <div className="flex items-center gap-2 text-frost-gray">
              <span
                className="material-symbols-outlined text-vivid-teal"
                aria-hidden="true"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="font-mono text-[10px] uppercase tracking-tight">
                Licensed &amp; Insured
              </span>
            </div>
          </div>
        </div>

        {/* Zone Fee Table */}
        <div className="glass-card rounded-xl p-8 md:p-10">
          <h2 className="font-heading text-2xl font-bold text-snow-white mb-8">
            Service Zone Fees
          </h2>
          <div className="overflow-x-auto -mx-2">
            <table className="w-full min-w-[360px]">
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
                  <td className="py-4 text-right font-heading font-bold text-alpine-gold tabular-nums">
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
                  <td className="py-4 text-right font-heading font-bold text-alpine-gold tabular-nums">
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
                  <td className="py-4 text-right font-heading font-bold text-alpine-gold tabular-nums">
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
                  <td className="py-4 text-right font-heading font-bold text-alpine-gold tabular-nums">
                    $100+
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-frost-gray/50 text-sm mt-6">
            Not sure which zone you&apos;re in?{" "}
            <a
              href="tel:+17198380435"
              className="text-vivid-teal hover:text-alpine-gold transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              Call and ask
            </a>
            .
          </p>
        </div>
      </div>

      {/* Payment Methods + Parts & Hardware */}
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
              aria-hidden="true"
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
              <div className="flex items-center justify-between flex-wrap gap-y-2 mb-1">
                <span className="font-heading font-bold text-snow-white">
                  Cash, Check, or Zelle
                </span>
                <span className="font-mono text-xs text-vivid-teal bg-vivid-teal/10 px-3 py-1 rounded-full">
                  No fee (preferred)
                </span>
              </div>
              <p className="text-frost-gray/50 text-xs">
                Zelle:{" "}
                <span className="text-frost-gray">info@barnstormit.com</span>{" "}
                or <span className="text-frost-gray">(719) 838-0435</span>
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
            Card payments welcome — a small processing fee applies to help cover
            network costs.
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
              &ldquo;Every job gets a clear estimate before we start. No hidden
              fees, no hourly creep.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function BusinessTab() {
  return (
    <>
      {/* Intro */}
      <div className="max-w-[1200px] mx-auto mb-10">
        <div className="glass-card rounded-xl p-8 md:p-10 flex items-start gap-5">
          <span
            className="material-symbols-outlined text-alpine-gold text-3xl shrink-0 mt-1"
            aria-hidden="true"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            handshake
          </span>
          <div>
            <h2 className="font-heading text-2xl font-bold text-snow-white mb-3">
              Scoped &amp; Quoted Upfront
            </h2>
            <p className="text-frost-gray leading-relaxed">
              Every business job is scoped before we start — no surprises, no
              open-ended billing. We assess the work, give you a flat-rate
              project quote, and get it done.
            </p>
          </div>
        </div>
      </div>

      {/* Service Category Cards — top row */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {businessServices.slice(0, 4).map((svc) => (
          <div
            key={svc.title}
            className="glass-card rounded-xl p-8 group hover:border-vivid-teal/30 transition-colors duration-500"
          >
            <span
              className="material-symbols-outlined text-vivid-teal text-3xl mb-5 block"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {svc.icon}
            </span>
            <h3 className="font-heading text-lg font-bold text-snow-white mb-2">
              {svc.title}
            </h3>
            <p className="text-frost-gray text-sm leading-relaxed">
              {svc.desc}
            </p>
          </div>
        ))}
      </div>
      {/* Bottom row — centered */}
      <div className="max-w-[1200px] mx-auto mt-6 mb-10 flex flex-col sm:flex-row justify-center gap-6">
        {businessServices.slice(4).map((svc) => (
          <div
            key={svc.title}
            className="glass-card rounded-xl p-8 group hover:border-vivid-teal/30 transition-colors duration-500 sm:w-1/4"
          >
            <span
              className="material-symbols-outlined text-vivid-teal text-3xl mb-5 block"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {svc.icon}
            </span>
            <h3 className="font-heading text-lg font-bold text-snow-white mb-2">
              {svc.title}
            </h3>
            <p className="text-frost-gray text-sm leading-relaxed">
              {svc.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Flat-rate note */}
      <div className="max-w-[1200px] mx-auto mb-10">
        <div
          className="rounded-lg p-6 border-l-4 border-alpine-gold"
          style={{ background: "rgba(240, 165, 0, 0.06)" }}
        >
          <p className="text-frost-gray leading-relaxed">
            <span className="text-alpine-gold font-bold">
              Flat-rate project quotes.
            </span>{" "}
            We scope the job, quote a fixed price, and stick to it. No hourly
            surprises, no scope creep. You approve the number before we touch
            anything.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1200px] mx-auto">
        <div className="glass-card rounded-xl p-6 sm:p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-snow-white mb-4 text-balance">
            Tell us what you need.
          </h2>
          <p className="text-frost-gray text-lg mb-10 max-w-xl mx-auto">
            Describe the project and we&apos;ll get back to you with a scope and
            quote — usually within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                mail
              </span>
              Request a Quote
            </Link>
            <a
              href="tel:+17198380435"
              className="w-full sm:w-auto border-2 border-frost-gray/20 hover:border-vivid-teal text-snow-white px-10 py-4 rounded-lg font-heading font-bold text-lg transition-[border-color,transform] hover:-translate-y-0.5 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                call
              </span>
              Call (719) 838-0435
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-frost-gray mt-8">
            <span
              className="material-symbols-outlined text-vivid-teal text-lg"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified_user
            </span>
            <span className="font-mono text-[10px] uppercase tracking-tight">
              Licensed &amp; Insured
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
