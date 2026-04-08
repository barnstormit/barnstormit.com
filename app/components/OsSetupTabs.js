"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CopyField from "./CopyField";

const SERVER_CONFIG = [
  { label: "ID Server", value: "remote.barnstormit.com" },
  { label: "Relay Server", value: "remote.barnstormit.com" },
  { label: "Key", value: "znmg4BbrRHz2X20rKw0vqNI5AVv9Dpwy8Lh6KJBNXzw=" },
];

function StepNumber({ n }) {
  return (
    <span className="font-heading font-black text-4xl text-vivid-teal/30">
      {n}
    </span>
  );
}

function StepHeading({ children }) {
  return (
    <h3 className="font-heading text-xl font-bold text-snow-white text-balance">
      {children}
    </h3>
  );
}

function ServerConfigBlock() {
  return (
    <div className="glass-card rounded-xl p-6 space-y-3">
      <p className="text-frost-gray text-sm mb-2">
        Copy each value below and paste it into the matching box in the app:
      </p>
      {SERVER_CONFIG.map((f) => (
        <CopyField key={f.label} label={f.label} value={f.value} />
      ))}
      <p className="text-frost-gray/50 font-mono text-xs pt-2">
        Click OK when done.
      </p>
    </div>
  );
}

function WindowsSteps() {
  return (
    <div className="space-y-12">
      {/* Step 1 */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={1} />
          <StepHeading>Download the portable app</StepHeading>
        </div>
        <div className="glass-card rounded-xl p-6 space-y-4">
          <p className="text-frost-gray leading-relaxed">
            Click the button below to download the app. It&rsquo;s a portable
            file &mdash; no installation required. Just download and run.
          </p>
          <a
            href="https://remote.barnstormit.com/rustdesk.exe"
            className="flex items-center justify-center gap-3 bg-alpine-gold text-deep-navy px-6 py-4 rounded-lg font-heading font-bold text-base hover:brightness-110 transition-[filter,transform] active:scale-95 focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              desktop_windows
            </span>
            Download for Windows
          </a>
          <div className="bg-vivid-teal/5 border border-vivid-teal/20 rounded-lg p-4">
            <p className="text-frost-gray text-sm leading-relaxed">
              <span className="text-vivid-teal font-bold">No install needed:</span>{" "}
              Look at the bottom of your screen (or your Downloads folder) for a
              file called{" "}
              <span className="text-snow-white font-bold">rustdesk.exe</span>.
              If your computer asks &ldquo;Are you sure?&rdquo; or &ldquo;Do you
              want to allow this?&rdquo; &mdash; click{" "}
              <span className="text-snow-white font-bold">Yes</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={2} />
          <StepHeading>
            Run the app and click the three dots
          </StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          Double-click{" "}
          <span className="text-snow-white font-bold">rustdesk.exe</span> to
          open it. You should see a window that looks like the screenshot
          below. Look for the{" "}
          <span className="text-snow-white font-bold">three small vertical dots</span>{" "}
          inside the red circle next to your ID number. Click those dots to
          open the settings.
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rustdesk-step1-dots.png"
            alt="RustDesk main screen — click the three-dot menu next to your ID"
            width={776}
            height={582}
            className="w-full"
          />
        </div>
        <p className="text-frost-gray/60 text-sm italic mt-3">
          Your ID and password will be different &mdash; we&apos;ve hidden ours
          in this example for privacy.
        </p>
      </div>

      {/* Step 3 */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={3} />
          <StepHeading>
            Click &ldquo;Network&rdquo; on the left side, then click
            &ldquo;Unlock Network Settings&rdquo;
          </StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          Click{" "}
          <span className="text-snow-white font-bold">Network</span> in the
          left sidebar. You&apos;ll see a button that says{" "}
          <span className="text-snow-white font-bold">Unlock Network Settings</span>{" "}
          &mdash; click it. If Windows asks &ldquo;Do you want to allow this
          app to make changes?&rdquo; &mdash; click{" "}
          <span className="text-snow-white font-bold">Yes</span>.
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rustdesk-step2-network.png"
            alt="RustDesk settings — click Unlock Network Settings circled in red"
            width={778}
            height={583}
            className="w-full"
          />
        </div>
      </div>

      {/* Step 4 */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={4} />
          <StepHeading>
            Click &ldquo;ID/Relay Server&rdquo;
          </StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          After unlocking, you&apos;ll see the screen below. Click{" "}
          <span className="text-snow-white font-bold">ID/Relay Server</span>{" "}
          (circled in red) to open the connection settings.
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rustdesk-step3-unlock.png"
            alt="RustDesk Network settings — click ID/Relay Server circled in red"
            width={771}
            height={581}
            className="w-full"
          />
        </div>
      </div>

      {/* Step 5 */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={5} />
          <StepHeading>
            Fill in the boxes
          </StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          Copy each value below and paste it into the matching box in the app.
          To copy: click the{" "}
          <span className="text-snow-white font-bold">Copy</span> button next to
          each value. To paste: click inside the box in the app, then press{" "}
          <span className="text-snow-white font-bold">Ctrl + V</span> on your
          keyboard (hold down Ctrl and tap V).
        </p>
        <ServerConfigBlock />
        <p className="text-frost-gray/60 text-sm mt-4 mb-4">
          Here&apos;s what it should look like when filled in:
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rustdesk-settings.png"
            alt="RustDesk ID/Relay Server configuration screen with fields filled in"
            width={779}
            height={591}
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Step 6 */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={6} />
          <StepHeading>
            Go back to the Home screen and make sure it says &ldquo;Ready&rdquo;
          </StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          Click <span className="text-snow-white font-bold">Home</span> at the
          top of the app. You should see the word{" "}
          <span className="text-vivid-teal font-bold">Ready</span> at the bottom
          of the window and a number on the left side &mdash; that&apos;s your
          ID.
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rustdesk-step5-ready.png"
            alt="RustDesk home screen showing Ready status and your ID number"
            width={773}
            height={584}
            className="w-full"
          />
        </div>
      </div>

      {/* Step 7 */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={7} />
          <StepHeading>Call Us</StepHeading>
        </div>
        <CallUsBlock />
      </div>
    </div>
  );
}

function MacSteps() {
  return (
    <div className="space-y-12">
      {/* Step 1 — Download */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={1} />
          <StepHeading>Download RustDesk</StepHeading>
        </div>
        <div className="glass-card rounded-xl p-6 space-y-4">
          <p className="text-frost-gray leading-relaxed">
            Click the button that matches your Mac to download the installer:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-aarch64.dmg"
              className="flex-1 flex flex-col items-center justify-center gap-2 bg-alpine-gold text-deep-navy px-5 py-4 rounded-lg font-heading font-bold hover:brightness-110 transition-[filter,transform] active:scale-95 text-center focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                laptop_mac
              </span>
              <span className="text-sm leading-tight">
                Apple Silicon<br className="sm:hidden" />{" "}
                (M1/M2/M3)
              </span>
            </a>
            <a
              href="https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-x86_64.dmg"
              className="flex-1 flex flex-col items-center justify-center gap-2 bg-alpine-gold text-deep-navy px-5 py-4 rounded-lg font-heading font-bold hover:brightness-110 transition-[filter,transform] active:scale-95 text-center focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none"
            >
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                laptop_mac
              </span>
              <span className="text-sm leading-tight">Intel Mac</span>
            </a>
          </div>
          <p className="text-frost-gray text-xs">
            Not sure which? Apple menu &rarr; About This Mac &rarr; check{" "}
            <span className="text-snow-white font-bold">Chip</span> or{" "}
            <span className="text-snow-white font-bold">Processor</span>.
          </p>
        </div>
      </div>

      {/* Step 2 — Install */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={2} />
          <StepHeading>Install RustDesk</StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          Open the downloaded DMG file and drag RustDesk to your{" "}
          <span className="text-snow-white font-bold">Applications</span> folder.
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mac1.png"
            alt="Drag RustDesk into the Applications folder"
            width={661}
            height={423}
            className="w-full"
          />
        </div>
      </div>

      {/* Step 3 — Quit any running RustDesk */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={3} />
          <StepHeading>Quit Any Running RustDesk</StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          Before proceeding, make sure RustDesk is fully quit. Check your menu
          bar and quit the RustDesk service if you see it.
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mac2.png"
            alt="Quit RustDesk from the menu bar"
            width={279}
            height={71}
            className="w-full"
          />
        </div>
      </div>

      {/* Step 4 — Allow RustDesk to run */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={4} />
          <StepHeading>Allow RustDesk to Run</StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          macOS may block RustDesk the first time. If prompted, go to{" "}
          <span className="text-snow-white font-bold">
            System Preferences &rarr; Security &amp; Privacy &rarr; General
          </span>{" "}
          and click{" "}
          <span className="text-snow-white font-bold">Allow</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mac3.png"
              alt="macOS blocked RustDesk prompt"
              width={667}
              height={570}
              className="w-full"
            />
          </div>
          <div className="glass-card rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mac4.png"
              alt="Security & Privacy — click Allow to unblock RustDesk"
              width={667}
              height={570}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Step 5 — Accessibility & Screen Recording */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={5} />
          <StepHeading>
            Grant Accessibility and Screen Recording Permissions
          </StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          RustDesk needs{" "}
          <span className="text-snow-white font-bold">Accessibility</span> and{" "}
          <span className="text-snow-white font-bold">Screen Recording</span>{" "}
          permissions for remote control. It will guide you to the settings
          window &mdash; follow the prompts.
        </p>
        <div className="bg-alpine-gold/5 border border-alpine-gold/20 rounded-lg p-4 mb-4">
          <p className="text-frost-gray text-sm leading-relaxed">
            <span className="text-alpine-gold font-bold">Note:</span> Due to
            macOS security policy, you must also enable{" "}
            <span className="text-snow-white font-bold">Input Monitoring</span>{" "}
            permission for keyboard and mouse control to work correctly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mac5.png"
              alt="Accessibility permission settings for RustDesk"
              width={218}
              height={301}
              className="w-full"
            />
          </div>
          <div className="glass-card rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mac7.png"
              alt="Screen Recording permission settings for RustDesk"
              width={666}
              height={571}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Step 6 — If RustDesk still shows a warning */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={6} />
          <StepHeading>If RustDesk Still Shows a Warning</StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          If RustDesk still warns after enabling permissions, remove RustDesk
          from the list using the{" "}
          <span className="text-snow-white font-bold">&minus;</span> button,
          click{" "}
          <span className="text-snow-white font-bold">+</span> and re-add it
          from Applications. A reboot may be required.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mac8.png"
              alt="Remove RustDesk from the permissions list"
              width={674}
              height={572}
              className="w-full"
            />
          </div>
          <div className="glass-card rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mac9.png"
              alt="Re-add RustDesk to the permissions list"
              width={799}
              height={449}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Step 7 — Confirm Screen Recording */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={7} />
          <StepHeading>Confirm Screen Recording Permission</StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          Repeat the same steps above for{" "}
          <span className="text-snow-white font-bold">Screen Recording</span>{" "}
          permission in{" "}
          <span className="text-snow-white font-bold">
            System Preferences &rarr; Privacy &rarr; Screen Recording
          </span>
          .
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mac10.png"
            alt="Screen Recording permission confirmed for RustDesk"
            width={665}
            height={582}
            className="w-full"
          />
        </div>
      </div>

      {/* Step 8 — Server Settings */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={8} />
          <StepHeading>Configure Server Settings</StepHeading>
        </div>
        <p className="text-frost-gray mb-4 leading-relaxed">
          Open RustDesk, click the menu button (
          <span className="text-vivid-teal font-bold inline-flex flex-col items-center leading-[0.4] text-lg align-middle mx-1" aria-hidden="true">
            &bull;<br />&bull;<br />&bull;
          </span>
          ) next to your ID, select{" "}
          <span className="text-snow-white font-bold">Network</span>, and enter
          the server details below. To copy: click the{" "}
          <span className="text-snow-white font-bold">Copy</span> button next to
          each value. To paste: click inside the box in the app, then press{" "}
          <span className="text-snow-white font-bold">⌘ + V</span> on your
          keyboard (hold down Command and tap V).
        </p>
        <ServerConfigBlock />
        <p className="text-frost-gray/60 text-sm mt-4 mb-4">
          Here&apos;s what it should look like when filled in:
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rustdesk-settings.png"
            alt="RustDesk server configuration screen with fields filled in"
            width={779}
            height={591}
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Step 9 — Call Us */}
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <StepNumber n={9} />
          <StepHeading>Call Us</StepHeading>
        </div>
        <CallUsBlock />
      </div>
    </div>
  );
}

function CallUsBlock() {
  return (
    <div className="glass-card rounded-xl p-8 flex flex-col items-center gap-4 text-center">
      <span
        className="material-symbols-outlined text-vivid-teal"
        style={{ fontSize: "64px", fontVariationSettings: "'FILL' 1" }}
        aria-hidden="true"
      >
        call
      </span>
      <a
        href="tel:+17198380435"
        className="font-heading font-black text-3xl md:text-4xl text-snow-white hover:text-vivid-teal transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy"
      >
        (719) 838-0435
      </a>
      <p className="text-frost-gray">
        That&apos;s it &mdash; call us and we&apos;ll take it from here.
      </p>
      <p className="text-frost-gray/60 text-sm">
        Having trouble? No worries &mdash; we&apos;ll walk you through it on
        the phone.
      </p>
    </div>
  );
}

export default function OsSetupTabs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(
    tabParam === "mac" ? "mac" : "windows"
  );

  function switchTab(tab) {
    setActiveTab(tab);
    const url = tab === "windows" ? "/remote-support" : "/remote-support?tab=mac";
    router.replace(url, { scroll: false });
  }

  return (
    <>
      {/* Tab buttons */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-xl glass-card p-1.5 gap-1.5">
          <button
            onClick={() => switchTab("windows")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-lg font-heading font-bold text-base transition-colors focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none ${
              activeTab === "windows"
                ? "bg-alpine-gold text-deep-navy"
                : "text-frost-gray hover:text-snow-white"
            }`}
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              desktop_windows
            </span>
            Windows
          </button>
          <button
            onClick={() => switchTab("mac")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-lg font-heading font-bold text-base transition-colors focus-visible:ring-2 focus-visible:ring-alpine-gold focus-visible:outline-none ${
              activeTab === "mac"
                ? "bg-alpine-gold text-deep-navy"
                : "text-frost-gray hover:text-snow-white"
            }`}
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              laptop_mac
            </span>
            Mac
          </button>
        </div>
      </div>

      {/* Tab content */}
      {activeTab === "windows" ? <WindowsSteps /> : <MacSteps />}
    </>
  );
}
