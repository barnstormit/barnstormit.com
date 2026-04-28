"use client";

import { useState, useRef, useEffect } from "react";

const ALLOWED_EXTENSIONS = ["stl", "step", "stp", "3mf", "obj"];
const MAX_FILE_SIZE = 4 * 1024 * 1024;

const inputClass =
  "w-full bg-deep-navy/50 border border-frost-gray/20 rounded-lg px-4 py-3 text-snow-white placeholder:text-frost-gray/40 focus:border-vivid-teal focus:outline-none focus:ring-2 focus:ring-vivid-teal/30";
const labelClass =
  "block text-[10px] font-mono uppercase tracking-[0.2em] text-frost-gray mb-2";

function validateFile(f) {
  if (!f) return "Please select a file.";
  const ext = f.name.split(".").pop()?.toLowerCase() || "";
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return "File must be .stl, .step, .stp, .3mf, or .obj.";
  }
  if (f.size > MAX_FILE_SIZE) {
    return "File must be 4MB or smaller.";
  }
  return null;
}

export default function QuoteForm() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const formLoadedAt = useRef(0);

  useEffect(() => {
    formLoadedAt.current = Date.now();
  }, []);

  function selectFile(f) {
    const err = validateFile(f);
    if (err) {
      setStatus("error");
      setErrorMessage(err);
      return;
    }
    setFile(f);
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }
  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }
  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) selectFile(f);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!file) {
      setStatus("error");
      setErrorMessage("Please select a file.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const fd = new FormData(e.currentTarget);
    fd.set("file", file);
    fd.set("form_loaded_at", String(formLoadedAt.current));

    try {
      const res = await fetch("/api/3d-quote", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send quote request. Please try again.");
        return;
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage("Failed to send quote request. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <span
          className="material-symbols-outlined text-vivid-teal text-6xl mb-4 inline-block"
          aria-hidden="true"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-snow-white mb-3">
          Quote request sent
        </h3>
        <p className="text-frost-gray">
          We&apos;ll review your file and reply with a quote — usually within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="qf-name" className={labelClass}>
            Name <span className="text-vivid-teal">*</span>
          </label>
          <input id="qf-name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="qf-email" className={labelClass}>
            Email <span className="text-vivid-teal">*</span>
          </label>
          <input id="qf-email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="qf-phone" className={labelClass}>
          Phone <span className="text-frost-gray/60 normal-case tracking-normal font-sans">(optional)</span>
        </label>
        <input id="qf-phone" name="phone" type="tel" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>
          File <span className="text-vivid-teal">*</span>
        </label>
        <label
          htmlFor="qf-file"
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`block relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-vivid-teal bg-vivid-teal/5"
              : "border-frost-gray/30 hover:border-vivid-teal/50"
          }`}
        >
          <input
            id="qf-file"
            type="file"
            accept=".stl,.step,.stp,.3mf,.obj"
            onChange={(e) => selectFile(e.target.files?.[0])}
            className="sr-only"
          />
          {file ? (
            <div>
              <span
                className="material-symbols-outlined text-vivid-teal text-4xl mb-2 inline-block"
                aria-hidden="true"
              >
                description
              </span>
              <p className="text-snow-white font-medium break-all">{file.name}</p>
              <p className="text-frost-gray text-sm mt-1">
                {(file.size / 1024 / 1024).toFixed(2)} MB &middot; click to replace
              </p>
            </div>
          ) : (
            <div>
              <span
                className="material-symbols-outlined text-frost-gray text-4xl mb-2 inline-block"
                aria-hidden="true"
              >
                cloud_upload
              </span>
              <p className="text-snow-white font-medium">
                Drop your file here, or click to browse
              </p>
              <p className="text-frost-gray text-sm mt-1">
                .stl &middot; .step &middot; .stp &middot; .3mf &middot; .obj &mdash; max 4MB
              </p>
            </div>
          )}
        </label>
        <p className="text-frost-gray/70 text-xs mt-2">
          File over 4MB? No problem &mdash; email it to{" "}
          <a
            href="mailto:3d@barnstormit.com"
            className="text-vivid-teal hover:underline"
          >
            3d@barnstormit.com
          </a>{" "}
          with your name, material, color, and quantity so we can get your
          quote started.
        </p>
      </div>

      <div>
        <label htmlFor="qf-material" className={labelClass}>
          Material preference
        </label>
        <select
          id="qf-material"
          name="material"
          defaultValue="No preference"
          className={inputClass}
        >
          <option>No preference</option>
          <option>PLA</option>
          <option>PETG</option>
          <option>ABS</option>
          <option>TPU (flexible)</option>
          <option>ASA (outdoor/UV)</option>
          <option>Nylon</option>
          <option>Not sure — help me choose</option>
        </select>
      </div>

      <div>
        <label htmlFor="qf-colors" className={labelClass}>
          Colors
        </label>
        <textarea
          id="qf-colors"
          name="colors"
          rows={2}
          placeholder="e.g. Black, or Red and White for dual-color, or 3x Black + 1x Red"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="qf-quantity" className={labelClass}>
            Quantity
          </label>
          <input
            id="qf-quantity"
            name="quantity"
            type="number"
            defaultValue={1}
            min={1}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="qf-timeline" className={labelClass}>
            Timeline
          </label>
          <select
            id="qf-timeline"
            name="timeline"
            defaultValue="No rush"
            className={inputClass}
          >
            <option>No rush</option>
            <option>Within a week</option>
            <option>ASAP — rush</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="qf-notes" className={labelClass}>
          Notes <span className="text-frost-gray/60 normal-case tracking-normal font-sans">(optional)</span>
        </label>
        <textarea id="qf-notes" name="notes" rows={4} className={inputClass} />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full md:w-auto bg-vivid-teal text-deep-navy px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-[filter,transform] hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none"
      >
        {status === "submitting" ? (
          <>
            <span
              className="material-symbols-outlined animate-spin"
              aria-hidden="true"
            >
              progress_activity
            </span>
            Sending...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined" aria-hidden="true">
              send
            </span>
            Submit quote request
          </>
        )}
      </button>
    </form>
  );
}
