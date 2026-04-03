"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send. Please try calling us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card rounded-xl p-8 md:p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
        <span
          className="material-symbols-outlined text-vivid-teal mb-4"
          style={{
            fontSize: "64px",
            fontVariationSettings: "'FILL' 1",
          }}
        >
          check_circle
        </span>
        <h3 className="font-heading text-2xl font-bold text-snow-white mb-3">
          Message Sent
        </h3>
        <p className="text-frost-gray leading-relaxed">
          We&apos;ll get back to you shortly. If it&apos;s urgent, call us at{" "}
          <a
            href="tel:+17198380435"
            className="text-vivid-teal hover:underline font-bold"
          >
            (719) 838-0435
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-frost-gray/60 mb-2 block"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full bg-deep-navy border border-steel-blue/30 rounded-lg px-4 py-3 text-snow-white placeholder:text-frost-gray/30 focus:outline-none focus:border-vivid-teal transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-frost-gray/60 mb-2 block"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full bg-deep-navy border border-steel-blue/30 rounded-lg px-4 py-3 text-snow-white placeholder:text-frost-gray/30 focus:outline-none focus:border-vivid-teal transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-frost-gray/60 mb-2 block"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(555) 555-5555"
            className="w-full bg-deep-navy border border-steel-blue/30 rounded-lg px-4 py-3 text-snow-white placeholder:text-frost-gray/30 focus:outline-none focus:border-vivid-teal transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-frost-gray/60 mb-2 block"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Describe your issue or question..."
            className="w-full bg-deep-navy border border-steel-blue/30 rounded-lg px-4 py-3 text-snow-white placeholder:text-frost-gray/30 focus:outline-none focus:border-vivid-teal transition-colors resize-none"
          />
        </div>

        {status === "error" && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-vivid-teal text-deep-navy px-8 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Submit Request"}
        </button>
      </form>

      <p className="text-frost-gray/50 text-sm mt-6 text-center leading-relaxed">
        Prefer to just call? Most people do. We&apos;ll pick up or call back
        within the hour.
      </p>
    </div>
  );
}
