"use client";

import { useState } from "react";

export default function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-frost-gray/60 font-mono text-sm shrink-0 w-28">
        {label}
      </span>
      <div className="flex-1 flex items-center justify-between gap-3 bg-deep-navy rounded-lg px-4 py-3 border border-steel-blue/30">
        <span className="font-mono text-sm text-alpine-gold break-all select-all">
          {value}
        </span>
        <button
          onClick={handleCopy}
          className="shrink-0 flex items-center gap-1.5 text-frost-gray/50 hover:text-alpine-gold transition-colors"
          aria-label={`Copy ${label}`}
        >
          {copied ? (
            <>
              <span
                className="material-symbols-outlined text-lg text-alpine-gold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="font-mono text-xs text-alpine-gold">
                Copied!
              </span>
            </>
          ) : (
            <span className="material-symbols-outlined text-lg">
              content_copy
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
