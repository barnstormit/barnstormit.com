import Link from "next/link";
import CopyField from "../components/CopyField";

export const metadata = {
  title: "Remote Support",
  description:
    "Get remote IT support from Barnstorm Computer Services. Download the app, share your ID, and we connect to fix your computer while you watch.",
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
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-snow-white">
            Get Help Without
            <br />
            the <span className="text-vivid-teal">House Call</span>
          </h1>
          <p className="text-lg md:text-xl text-frost-gray max-w-2xl leading-relaxed">
            No service call fee. No waiting. We connect to your screen and fix it
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-snow-white tracking-tight">
              Download &amp; Set Up
            </h2>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-heading font-black text-4xl text-vivid-teal/30">
                  1
                </span>
                <h3 className="font-heading text-xl font-bold text-snow-white">
                  Download and install the app
                </h3>
              </div>
              <div className="glass-card rounded-xl p-6 space-y-4">
                <p className="text-frost-gray leading-relaxed">
                  Click the button that matches your computer to download the
                  app:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-x86_64.exe"
                    className="flex-1 flex items-center justify-center gap-3 bg-alpine-gold text-deep-navy px-6 py-4 rounded-lg font-heading font-bold text-base hover:brightness-110 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      desktop_windows
                    </span>
                    Windows
                  </a>
                  <a
                    href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-aarch64.dmg"
                    className="flex-1 flex items-center justify-center gap-3 border-2 border-alpine-gold text-alpine-gold px-6 py-4 rounded-lg font-heading font-bold text-base hover:bg-alpine-gold/5 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      laptop_mac
                    </span>
                    Mac (2021+)
                  </a>
                  <a
                    href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-x86_64.dmg"
                    className="flex-1 flex items-center justify-center gap-3 border-2 border-alpine-gold text-alpine-gold px-6 py-4 rounded-lg font-heading font-bold text-base hover:bg-alpine-gold/5 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      laptop_mac
                    </span>
                    Mac (Pre-2021)
                  </a>
                </div>
                <p className="text-frost-gray text-xs">
                  Not sure which Mac you have? Click the Apple menu &rarr; About
                  This Mac. If it says &ldquo;Apple M1&rdquo;, &ldquo;M2&rdquo;,
                  etc., choose Mac (2021+). Otherwise choose Mac (Pre-2021).
                </p>
                <div className="bg-vivid-teal/5 border border-vivid-teal/20 rounded-lg p-4 mt-2">
                  <p className="text-frost-gray text-sm leading-relaxed">
                    <span className="text-vivid-teal font-bold">
                      After it downloads:
                    </span>{" "}
                    Look at the bottom of your screen (or your Downloads folder)
                    for a file called{" "}
                    <span className="text-snow-white font-bold">
                      rustdesk
                    </span>
                    . Double-click it to install. If your computer asks
                    &ldquo;Are you sure?&rdquo; or &ldquo;Do you want to allow
                    this?&rdquo; &mdash; click{" "}
                    <span className="text-snow-white font-bold">Yes</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-heading font-black text-4xl text-vivid-teal/30">
                  2
                </span>
                <h3 className="font-heading text-xl font-bold text-snow-white">
                  Open the app and click the three dots
                </h3>
              </div>
              <p className="text-frost-gray mb-4 leading-relaxed">
                Once the app is open, look for the{" "}
                <span className="text-snow-white font-bold">
                  three small vertical dots (
                </span>
                <span className="text-vivid-teal font-bold inline-flex flex-col items-center leading-[0.4] text-lg align-middle mx-1">&bull;<br/>&bull;<br/>&bull;</span>
                <span className="text-snow-white font-bold">)</span> next to
                your ID number. Click them to open the settings. See the picture
                below:
              </p>
              <div className="glass-card rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/rustdesk-step1-dots.png"
                  alt="RustDesk main screen — click the three-dot menu next to your ID"
                  className="w-full"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-heading font-black text-4xl text-vivid-teal/30">
                  3
                </span>
                <h3 className="font-heading text-xl font-bold text-snow-white">
                  Click &ldquo;Network&rdquo; on the left side, then click
                  &ldquo;Unlock Network Settings&rdquo;
                </h3>
              </div>
              <p className="text-frost-gray mb-4 leading-relaxed">
                If Windows asks &ldquo;Do you want to allow this app to make
                changes?&rdquo; &mdash; click{" "}
                <span className="text-snow-white font-bold">Yes</span>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/rustdesk-step2-network.png"
                    alt="RustDesk settings — click Network on the left sidebar"
                    className="w-full"
                  />
                </div>
                <div className="glass-card rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/rustdesk-step3-unlock.png"
                    alt="Click Unlock Network Settings and approve the Windows prompt"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-heading font-black text-4xl text-vivid-teal/30">
                  4
                </span>
                <h3 className="font-heading text-xl font-bold text-snow-white">
                  Click &ldquo;ID/Relay Server&rdquo; and fill in the boxes
                </h3>
              </div>
              <p className="text-frost-gray mb-4 leading-relaxed">
                You need to type (or copy and paste) the information below into
                the matching boxes shown in the picture. To copy: click the{" "}
                <span className="text-snow-white font-bold">Copy</span> button
                next to each value. To paste: click inside the box in the app,
                then press{" "}
                <span className="text-snow-white font-bold">
                  Ctrl + V
                </span>{" "}
                on your keyboard (hold down Ctrl and tap V).
              </p>
              <div className="glass-card rounded-xl overflow-hidden mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/rustdesk-step4-server.png"
                  alt="RustDesk ID/Relay Server configuration screen"
                  className="w-full"
                />
              </div>
              <div className="glass-card rounded-xl p-6 space-y-3">
                <p className="text-frost-gray text-sm mb-2">
                  Copy each value below and paste it into the matching box in
                  the app:
                </p>
                <CopyField label="ID Server" value="107.175.137.52" />
                <CopyField label="Relay Server" value="107.175.137.52" />
                <CopyField
                  label="Key"
                  value="znmg4BbrRHz2X20rKw0vqNI5AVv9Dpwy8Lh6KJBNXzw="
                />
                <p className="text-frost-gray/50 font-mono text-xs pt-2">
                  Click OK when done.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-heading font-black text-4xl text-vivid-teal/30">
                  5
                </span>
                <h3 className="font-heading text-xl font-bold text-snow-white">
                  Go back to the Home screen and make sure it says
                  &ldquo;Ready&rdquo;
                </h3>
              </div>
              <p className="text-frost-gray mb-4 leading-relaxed">
                Click{" "}
                <span className="text-snow-white font-bold">Home</span> at the
                top of the app. You should see the word{" "}
                <span className="text-vivid-teal font-bold">Ready</span> at
                the bottom of the window and a number on the left side &mdash;
                that&apos;s your ID.
              </p>
              <div className="glass-card rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/rustdesk-step5-ready.png"
                  alt="RustDesk home screen showing Ready status and your ID number"
                  className="w-full"
                />
              </div>
            </div>

            {/* Step 6 */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-heading font-black text-4xl text-vivid-teal/30">
                  6
                </span>
                <h3 className="font-heading text-xl font-bold text-snow-white">
                  Call us and read your ID number and password out loud
                </h3>
              </div>
              <p className="text-frost-gray mb-4 leading-relaxed">
                That&apos;s it &mdash; you&apos;re done with the hard part.
                Just pick up the phone and call. We&apos;ll take it from here.
              </p>
              <div className="glass-card rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6">
                <span
                  className="material-symbols-outlined text-vivid-teal"
                  style={{
                    fontSize: "64px",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  call
                </span>
                <div>
                  <a
                    href="tel:+17198380435"
                    className="font-heading font-black text-3xl md:text-4xl text-snow-white hover:text-vivid-teal transition-colors"
                  >
                    (719) 838-0435
                  </a>
                  <p className="text-frost-gray mt-1">
                    We&apos;ll connect to your screen and fix the issue while you
                    watch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trouble note */}
          <div className="mt-12 text-center glass-card rounded-xl p-6">
            <p className="text-frost-gray flex items-center justify-center gap-3">
              <span
                className="material-symbols-outlined text-alpine-gold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                help
              </span>
              Having trouble? Just call — we&apos;ll walk you through it on the
              phone.
            </p>
          </div>
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
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-12 leading-tight text-snow-white">
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
                    >
                      verified_user
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1 text-snow-white">
                      Total Transparency
                    </h4>
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
                    >
                      timer_off
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1 text-snow-white">
                      One-Time Connection
                    </h4>
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
                    >
                      security
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1 text-snow-white">
                      Zero Background Bloat
                    </h4>
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
                    >
                      lock
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1 text-snow-white">
                      End-to-End Encrypted
                    </h4>
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-snow-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group glass-card rounded-xl overflow-hidden" open>
              <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                <h4 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  Is this safe?
                </h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0">
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
                <h4 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  Do I need to install anything permanently?
                </h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0">
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
                <h4 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  What if I&apos;m not tech-savvy?
                </h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0">
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
                <h4 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  How much does a remote session cost?
                </h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0">
                  expand_more
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 text-frost-gray leading-relaxed">
                $100/hour, same as on-site — but with no service call fee. Most common
                fixes are handled within 30&ndash;60 minutes.
              </div>
            </details>

            <details className="group glass-card rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                <h4 className="font-heading font-bold text-lg pr-4 text-snow-white">
                  What happens after the session?
                </h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-vivid-teal shrink-0">
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

      {/* Bottom CTA */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-vivid-teal">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 text-center text-white">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-12">
            Ready to get fixed?
          </h2>
          <div className="bg-deep-navy inline-flex flex-col md:flex-row items-center gap-10 p-8 md:p-14 rounded-xl border border-steel-blue/30 shadow-2xl">
            <div className="text-left">
              <p className="text-vivid-teal font-mono text-[10px] tracking-[0.3em] uppercase mb-4">
                Step 1: Download App
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-x86_64.exe"
                  className="glass-card p-5 rounded-lg text-vivid-teal hover:bg-vivid-teal hover:text-deep-navy transition-all text-center"
                  title="Windows"
                >
                  <span className="material-symbols-outlined text-4xl">
                    desktop_windows
                  </span>
                </a>
                <a
                  href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-aarch64.dmg"
                  className="glass-card p-5 rounded-lg text-vivid-teal hover:bg-vivid-teal hover:text-deep-navy transition-all text-center"
                  title="Mac (2021+)"
                >
                  <span className="material-symbols-outlined text-4xl">
                    laptop_mac
                  </span>
                </a>
                <a
                  href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-x86_64.dmg"
                  className="glass-card p-5 rounded-lg text-vivid-teal hover:bg-vivid-teal hover:text-deep-navy transition-all text-center"
                  title="Mac (Pre-2021)"
                >
                  <span className="material-symbols-outlined text-4xl">
                    laptop_mac
                  </span>
                </a>
              </div>
            </div>
            <div className="w-px h-24 bg-steel-blue/30 hidden md:block" />
            <div className="text-left">
              <p className="text-vivid-teal font-mono text-[10px] tracking-[0.3em] uppercase mb-4">
                Step 2: Call Barnstorm
              </p>
              <a
                href="tel:+17198380435"
                className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-alpine-gold hover:brightness-110 transition-all block"
              >
                (719) 838-0435
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
