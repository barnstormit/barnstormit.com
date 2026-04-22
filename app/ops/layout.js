export const metadata = {
  title: "Ops",
  robots: { index: false, follow: false },
};

export default function OpsLayout({ children }) {
  return (
    <>
      <div className="border-b border-alpine-gold/30 bg-alpine-gold/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-2 flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-alpine-gold flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-alpine-gold"
            />
            Internal · Private Area
          </span>
          <a
            href="/ops"
            className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-frost-gray hover:text-snow-white transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none rounded px-1"
          >
            /ops home
          </a>
        </div>
      </div>
      {children}
    </>
  );
}
