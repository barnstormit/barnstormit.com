import { Suspense } from "react";
import Link from "next/link";
import OsSetupTabs from "../components/OsSetupTabs";

export const metadata = {
  title: "Remote Support",
  description:
    "Get remote IT support from Barnstorm Computer Services. Download the app, share your ID, and we connect to fix your computer while you watch.",
  alternates: { canonical: "https://barnstormit.com/remote-support" },
  openGraph: {
    title: "Remote Support | Barnstorm Computer Services",
    description:
      "Skip the house call. Download the app, share your ID, and we fix your computer while you watch.",
    url: "https://barnstormit.com/remote-support",
    type: "website",
  },
};

export default function RemoteSupport() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-16 pb-10 md:pt-20 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-vivid-teal blur-[160px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-alpine-gold blur-[160px] rounded-full opacity-30" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 text-center flex flex-col items-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass-card">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal">
              Remote Support
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-snow-white text-balance">
            Get Help Without
            <br />
            the <span className="text-vivid-teal">House Call</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            No drive time. No waiting. We connect to your screen and fix it
            while you watch.
          </p>
        </div>
      </header>

      {/* Download & Setup Guide */}
      <section className="py-12 md:py-16 bg-midnight-slate/50">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              Get Connected
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-snow-white tracking-tight text-balance">
              Download &amp; Set Up
            </h2>
          </div>

          <Suspense>
            <OsSetupTabs />
          </Suspense>
        </div>
      </section>

      {/* Privacy & Trust */}
      <section className="py-12 md:py-16 bg-midnight-slate/50 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-alpine-gold mb-4 block">
                Privacy &amp; Trust
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-12 leading-tight text-snow-white text-balance">
                Your Computer,
                <br />
                <span className="text-alpine-gold">Your Control</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="bg-alpine-gold/10 p-3 rounded-lg border border-alpine-gold/20 shrink-0">
                    <span
                      className="material-symbols-outlined text-alpine-gold text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      aria-hidden="true"
                    >
                      verified_user
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1 text-snow-white">
                      Total Transparency
                    </h3>
                    <p className="text-frost-gray">
                      You see everything happening on your screen in real time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="bg-alpine-gold/10 p-3 rounded-lg border border-alpine-gold/20 shrink-0">
                    <span
                      className="material-symbols-outlined text-alpine-gold text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      aria-hidden="true"
                    >
                      timer_off
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1 text-snow-white">
                      One-Time Connection
                    </h3>
                    <p className="text-frost-gray">
                      The connection ends the moment the session is over. No
                      permanent access — the app only runs when you open it.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="bg-alpine-gold/10 p-3 rounded-lg border border-alpine-gold/20 shrink-0">
                    <span
                      className="material-symbols-outlined text-alpine-gold text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      aria-hidden="true"
                    >
                      security
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1 text-snow-white">
                      Zero Background Bloat
                    </h3>
                    <p className="text-frost-gray">
                      No background software, no tracking, no data collection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="bg-alpine-gold/10 p-3 rounded-lg border border-alpine-gold/20 shrink-0">
                    <span
                      className="material-symbols-outlined text-alpine-gold text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      aria-hidden="true"
                    >
                      lock
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1 text-snow-white">
                      End-to-End Encrypted
                    </h3>
                    <p className="text-frost-gray">
                      256-bit AES encryption — the same standard used by banking
                      institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual panel */}
            <div className="hidden lg:block relative">
              <div className="glass-card rounded-xl p-12 text-center">
                <span
                  className="material-symbols-outlined text-vivid-teal mb-6 block"
                  style={{
                    fontSize: "120px",
                    fontVariationSettings: "'FILL' 1",
                  }}
                  aria-hidden="true"
                >
                  shield
                </span>
                <p className="font-heading font-bold text-2xl text-snow-white mb-2">
                  You&apos;re Always in Control
                </p>
                <p className="text-frost-gray">
                  Close the app at any time to instantly end the session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vivid-teal mb-4 block">
              FAQ
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-snow-white tracking-tight text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group glass-card rounded-xl overflow-hidden" open>
              <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                <h3 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  Is this safe?
                </h3>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0" aria-hidden="true">
                  expand_more
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 text-frost-gray leading-relaxed">
                Absolutely. You&apos;re in total control the entire time. You
                can see everything happening on your computer, and you can
                end the session at any second by closing the app. All
                connections use encrypted tunnels to keep your data safe.
              </div>
            </details>

            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                <h3 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  Do I need to install anything permanently?
                </h3>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0" aria-hidden="true">
                  expand_more
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 text-frost-gray leading-relaxed">
                No. You can delete the app after the session. It doesn&apos;t
                run in the background and leaves nothing behind.
              </div>
            </details>

            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                <h3 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  What if I&apos;m not tech-savvy?
                </h3>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0" aria-hidden="true">
                  expand_more
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 text-frost-gray leading-relaxed">
                Just download the app, open it, and call us. We&apos;ll walk
                you through the rest — that&apos;s literally all you need to do.
              </div>
            </details>

            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                <h3 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  How much does a remote session cost?
                </h3>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0" aria-hidden="true">
                  expand_more
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 text-frost-gray leading-relaxed">
                $100/hour, same as on-site — and no drive time means we get to
                work right away. Most common fixes are handled within 30&ndash;60 minutes.
              </div>
            </details>

            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                <h3 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  What happens after the session?
                </h3>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0" aria-hidden="true">
                  expand_more
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 text-frost-gray leading-relaxed">
                Once you close the remote support app, it completely
                disconnects. We cannot reconnect unless you open the app again
                and provide a brand new, one-time password generated by the
                software.
              </div>
            </details>
          </div>
        </div>
      </section>

    </>
  );
}
