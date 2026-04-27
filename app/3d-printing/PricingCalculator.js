"use client";

import { useMemo, useState } from "react";

const MATERIALS = [
  { id: "pla", label: "PLA", rate: 0.15, blurb: "Standard prototypes & decorative" },
  { id: "petg", label: "PETG", rate: 0.18, blurb: "Functional parts" },
  { id: "abs", label: "ABS / ASA", rate: 0.22, blurb: "Heat & UV resistant" },
  { id: "tpu", label: "TPU", rate: 0.28, blurb: "Flexible, rubber-like" },
  { id: "cf", label: "PLA-CF / PETG-CF", rate: 0.35, blurb: "Carbon fiber reinforced" },
];

const SIZE_PRESETS = [
  { id: "small", label: "Small", desc: "Fits in your hand", weight: 20, hours: 1 },
  { id: "medium", label: "Medium", desc: "Fits on a desk", weight: 80, hours: 3 },
  { id: "large", label: "Large", desc: "Fills a dinner plate", weight: 200, hours: 8 },
];

const COLOR_OPTIONS = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4+" },
];

const TURNAROUND_OPTIONS = [
  { id: "standard", label: "Standard", sub: "3–5 business days", multiplier: 1.0 },
  { id: "rush", label: "Rush", sub: "24–48 hr (+50%)", multiplier: 1.5 },
  { id: "sameday", label: "Same-Day", sub: "When available (+100%)", multiplier: 2.0 },
];

const MACHINE_RATE_PER_HOUR = 2;
const MIN_CHARGE = 20;

function colorMultiplier(colors) {
  if (colors <= 2) return 1.0;
  if (colors === 3) return 1.1;
  return 1.2;
}

function fmt(n) {
  return `$${n.toFixed(2)}`;
}

export default function PricingCalculator() {
  const [mode, setMode] = useState("specs");
  const [materialId, setMaterialId] = useState("pla");
  const [weight, setWeight] = useState("");
  const [hours, setHours] = useState("");
  const [colors, setColors] = useState(1);
  const [turnaround, setTurnaround] = useState("standard");
  const [activePreset, setActivePreset] = useState(null);

  const material = MATERIALS.find((m) => m.id === materialId) ?? MATERIALS[0];
  const turn = TURNAROUND_OPTIONS.find((t) => t.id === turnaround) ?? TURNAROUND_OPTIONS[0];

  const weightNum = Math.max(0, parseFloat(weight) || 0);
  const hoursNum = Math.max(0, parseFloat(hours) || 0);
  const cMult = colorMultiplier(colors);

  const breakdown = useMemo(() => {
    const materialCost = weightNum * material.rate * cMult;
    const machineCost = hoursNum * MACHINE_RATE_PER_HOUR;
    const baseSubtotal = materialCost + machineCost;
    const rushAdd = baseSubtotal * (turn.multiplier - 1);
    const subtotal = baseSubtotal + rushAdd;
    const minApplied = subtotal > 0 && subtotal < MIN_CHARGE;
    const final = subtotal === 0 ? 0 : Math.max(MIN_CHARGE, subtotal);
    return { materialCost, machineCost, rushAdd, subtotal, final, minApplied };
  }, [weightNum, hoursNum, material.rate, cMult, turn.multiplier]);

  function applyPreset(preset) {
    setActivePreset(preset.id);
    setWeight(String(preset.weight));
    setHours(String(preset.hours));
  }

  function switchMode(next) {
    setMode(next);
    setActivePreset(null);
  }

  const hasInput = weightNum > 0 || hoursNum > 0;

  return (
    <div className="glass-card rounded-xl p-6 sm:p-8 md:p-10">
      {/* Mode Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-xl bg-deep-navy/60 border border-vivid-teal/20 p-1.5 gap-1.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => switchMode("specs")}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg font-heading font-bold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none ${
              mode === "specs"
                ? "bg-vivid-teal text-deep-navy"
                : "text-frost-gray hover:text-snow-white"
            }`}
          >
            I know my specs
          </button>
          <button
            type="button"
            onClick={() => switchMode("estimate")}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg font-heading font-bold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none ${
              mode === "estimate"
                ? "bg-vivid-teal text-deep-navy"
                : "text-frost-gray hover:text-snow-white"
            }`}
          >
            Help me estimate
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_360px] gap-8 lg:gap-10">
        {/* INPUTS */}
        <div className="space-y-7">
          {/* Material */}
          <div>
            <label htmlFor="calc-material" className="block font-heading text-sm font-bold text-snow-white mb-2">
              Material
            </label>
            <select
              id="calc-material"
              value={materialId}
              onChange={(e) => setMaterialId(e.target.value)}
              className="w-full bg-deep-navy/80 border border-vivid-teal/25 rounded-lg px-4 py-3 text-snow-white font-body focus:border-vivid-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-vivid-teal"
            >
              {MATERIALS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label} — ${m.rate.toFixed(2)}/g · {m.blurb}
                </option>
              ))}
            </select>
          </div>

          {/* Estimate mode presets */}
          {mode === "estimate" && (
            <div>
              <span className="block font-heading text-sm font-bold text-snow-white mb-2">
                Pick a size
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SIZE_PRESETS.map((p) => {
                  const active = activePreset === p.id;
                  return (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => applyPreset(p)}
                      className={`text-left rounded-lg border px-4 py-3 transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none ${
                        active
                          ? "border-vivid-teal bg-vivid-teal/10"
                          : "border-vivid-teal/20 bg-deep-navy/60 hover:border-vivid-teal/60"
                      }`}
                    >
                      <span className="block font-heading font-bold text-snow-white">
                        {p.label}
                      </span>
                      <span className="block text-xs text-frost-gray mt-0.5">
                        {p.desc}
                      </span>
                      <span className="block font-mono text-[11px] text-vivid-teal mt-1">
                        ~{p.weight}g · ~{p.hours}hr
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Weight + Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="calc-weight" className="block font-heading text-sm font-bold text-snow-white mb-2">
                Weight (grams)
              </label>
              <input
                id="calc-weight"
                type="number"
                inputMode="decimal"
                min="0"
                step="1"
                value={weight}
                onChange={(e) => { setWeight(e.target.value); setActivePreset(null); }}
                placeholder="e.g. 80"
                className="w-full bg-deep-navy/80 border border-vivid-teal/25 rounded-lg px-4 py-3 text-snow-white font-body tabular-nums focus:border-vivid-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-vivid-teal"
              />
            </div>
            <div>
              <label htmlFor="calc-hours" className="block font-heading text-sm font-bold text-snow-white mb-2">
                Print time (hours)
              </label>
              <input
                id="calc-hours"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.1"
                value={hours}
                onChange={(e) => { setHours(e.target.value); setActivePreset(null); }}
                placeholder="e.g. 3.5"
                className="w-full bg-deep-navy/80 border border-vivid-teal/25 rounded-lg px-4 py-3 text-snow-white font-body tabular-nums focus:border-vivid-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-vivid-teal"
              />
            </div>
          </div>

          {mode === "specs" && (
            <p className="text-xs text-frost-gray -mt-3">
              You can find these numbers in your slicer software (Cura, BambuStudio, PrusaSlicer) after slicing your model.
            </p>
          )}

          {/* Colors */}
          <div>
            <span className="block font-heading text-sm font-bold text-snow-white mb-2">
              Number of colors
            </span>
            <div
              role="radiogroup"
              aria-label="Number of colors"
              className="inline-flex rounded-lg bg-deep-navy/60 border border-vivid-teal/20 p-1 gap-1"
            >
              {COLOR_OPTIONS.map((c) => {
                const active = colors === c.value;
                return (
                  <button
                    type="button"
                    role="radio"
                    aria-checked={active}
                    key={c.value}
                    onClick={() => setColors(c.value)}
                    className={`min-w-[48px] px-4 py-2 rounded-md font-heading font-bold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none ${
                      active
                        ? "bg-vivid-teal text-deep-navy"
                        : "text-frost-gray hover:text-snow-white"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-frost-gray mt-2">
              {colors <= 2 && "1–2 colors included with our dual-nozzle setup."}
              {colors === 3 && "+10% on material cost for 3-color prints."}
              {colors >= 4 && "+20% on material cost for 4+ color prints."}
            </p>
          </div>

          {/* Turnaround */}
          <div>
            <span className="block font-heading text-sm font-bold text-snow-white mb-2">
              Turnaround
            </span>
            <div role="radiogroup" aria-label="Turnaround" className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {TURNAROUND_OPTIONS.map((t) => {
                const active = turnaround === t.id;
                return (
                  <button
                    type="button"
                    role="radio"
                    aria-checked={active}
                    key={t.id}
                    onClick={() => setTurnaround(t.id)}
                    className={`text-left rounded-lg border px-4 py-3 transition-colors focus-visible:ring-2 focus-visible:ring-vivid-teal focus-visible:outline-none ${
                      active
                        ? "border-vivid-teal bg-vivid-teal/10"
                        : "border-vivid-teal/20 bg-deep-navy/60 hover:border-vivid-teal/60"
                    }`}
                  >
                    <span className="block font-heading font-bold text-snow-white">
                      {t.label}
                    </span>
                    <span className="block text-xs text-frost-gray mt-0.5">
                      {t.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider on lg+ */}
        <div className="hidden lg:block w-px bg-vivid-teal/15" aria-hidden="true" />

        {/* OUTPUT */}
        <aside
          className="rounded-xl border border-alpine-gold/30 bg-alpine-gold/5 p-6 sm:p-7 self-start"
          aria-live="polite"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-alpine-gold block mb-3">
            Estimated Price
          </span>
          <div className="font-heading text-5xl sm:text-6xl font-black text-snow-white tabular-nums tracking-tighter leading-none">
            {fmt(breakdown.final)}
          </div>

          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between gap-4 text-frost-gray">
              <dt>Material ({material.label})</dt>
              <dd className="tabular-nums text-snow-white">{fmt(breakdown.materialCost)}</dd>
            </div>
            <div className="flex justify-between gap-4 text-frost-gray">
              <dt>Machine time ({hoursNum || 0} hr × $2)</dt>
              <dd className="tabular-nums text-snow-white">{fmt(breakdown.machineCost)}</dd>
            </div>
            {breakdown.rushAdd > 0 && (
              <div className="flex justify-between gap-4 text-frost-gray">
                <dt>Rush ({turn.label})</dt>
                <dd className="tabular-nums text-snow-white">+{fmt(breakdown.rushAdd)}</dd>
              </div>
            )}
            <div className="border-t border-vivid-teal/15 pt-2 mt-2 flex justify-between gap-4">
              <dt className="font-heading font-bold text-snow-white">Subtotal</dt>
              <dd className="tabular-nums font-heading font-bold text-snow-white">
                {fmt(breakdown.subtotal)}
              </dd>
            </div>
          </dl>

          {breakdown.minApplied && (
            <p className="mt-4 text-xs text-alpine-gold flex items-start gap-1.5">
              <span className="material-symbols-outlined text-base leading-none mt-px" aria-hidden="true">
                info
              </span>
              Minimum charge of $20 applied.
            </p>
          )}

          {!hasInput && (
            <p className="mt-4 text-xs text-frost-gray">
              Enter a weight and print time to see your estimate.
            </p>
          )}

          <p className="mt-5 pt-5 border-t border-vivid-teal/15 text-xs text-frost-gray leading-relaxed">
            This is an estimate. Final pricing may vary based on print
            complexity, supports needed, and file review.
          </p>
        </aside>
      </div>
    </div>
  );
}
