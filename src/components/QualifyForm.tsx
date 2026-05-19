import { useState } from "react";
import type { QualifyFormData } from "../data/content";
import {
  adSpendOptions,
  helpOptions,
  industries,
  qualifySteps,
  revenueOptions,
  timelineOptions,
} from "../data/content";
import {
  SheetsNotConfiguredError,
  submitToGoogleSheets,
} from "../lib/submitToGoogleSheets";

const empty: QualifyFormData = {
  name: "",
  email: "",
  company: "",
  website: "",
  industry: "",
  revenue: "",
  helpWith: [],
  adSpend: "",
  timeline: "",
  phone: "",
  notes: "",
};

export function QualifyForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QualifyFormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const total = qualifySteps.length;
  const current = qualifySteps[step];
  const progress = ((step + 1) / total) * 100;

  const update = <K extends keyof QualifyFormData>(
    key: K,
    value: QualifyFormData[K],
  ) => setData((d) => ({ ...d, [key]: value }));

  const toggleHelp = (item: string) => {
    setData((d) => ({
      ...d,
      helpWith: d.helpWith.includes(item)
        ? d.helpWith.filter((h) => h !== item)
        : [...d.helpWith, item],
    }));
  };

  const canContinue = (): boolean => {
    switch (step) {
      case 0:
        return data.name.trim().length > 1 && data.email.includes("@");
      case 1:
        return data.company.trim().length > 1;
      case 2:
        return !!data.industry;
      case 3:
        return !!data.revenue;
      case 4:
        return data.helpWith.length > 0;
      case 5:
        return !!data.adSpend;
      case 6:
        return !!data.timeline;
      case 7:
        return data.phone.trim().length >= 10;
      default:
        return true;
    }
  };

  const next = async () => {
    if (step < total - 1) {
      setStep((s) => s + 1);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      await submitToGoogleSheets(data);
      setSubmitted(true);
    } catch (err) {
      if (err instanceof SheetsNotConfiguredError) {
        setSubmitError(
          "Form is not connected to Google Sheets yet. Ask your developer to add VITE_GOOGLE_SHEETS_URL — see google-apps-script/README.md",
        );
      } else {
        setSubmitError(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  if (submitted) {
    return (
      <section id="qualify" className="scroll-mt-24 px-5 py-20">
        <div className="mx-auto max-w-xl rounded-3xl border border-border bg-surface p-10 text-center shadow-xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-2xl">
            ✓
          </div>
          <h2 className="font-display text-2xl font-semibold">
            Application received
          </h2>
          <p className="mt-3 text-muted">
            Thanks, {data.name.split(" ")[0]}. If we're a fit, a partner will
            reach out within 24 hours to book your strategy call.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="qualify" className="scroll-mt-28 border-b border-stone-800 bg-ink py-16 text-cream md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-32">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-saffron">
            Apply now
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-cream md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            See if you're eligible below
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70 md:text-lg">
            Tell us about your business. If we're a fit, you'll get a strategy
            call with a partner.
          </p>
          <ul className="mt-8 hidden space-y-3 text-sm text-cream/60 lg:block">
            <li className="flex gap-3">
              <span className="text-teal-light">✓</span> Free 30-minute strategy call
            </li>
            <li className="flex gap-3">
              <span className="text-teal-light">✓</span> No retainers or lock-ins
            </li>
            <li className="flex gap-3">
              <span className="text-teal-light">✓</span> Response within 24 hours
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-surface p-6 text-ink shadow-2xl md:p-8 lg:p-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
            Step {step + 1} of {total}
          </span>
          <div className="h-1.5 flex-1 max-w-[140px] overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-saffron transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-ink">{current.title}</h3>

        <div className="mt-6 space-y-4">
          {step === 0 && (
            <>
              <Field
                label="Your name"
                value={data.name}
                onChange={(v) => update("name", v)}
                placeholder="Your name"
              />
              <Field
                label="Work email"
                type="email"
                value={data.email}
                onChange={(v) => update("email", v)}
                placeholder="you@company.com"
              />
            </>
          )}
          {step === 1 && (
            <>
              <Field
                label="Company name"
                value={data.company}
                onChange={(v) => update("company", v)}
                placeholder="Your company"
              />
              <Field
                label="Website (optional)"
                value={data.website}
                onChange={(v) => update("website", v)}
                placeholder="https://"
              />
            </>
          )}
          {step === 2 && (
            <SelectField
              label="Industry"
              value={data.industry}
              options={industries}
              onChange={(v) => update("industry", v)}
            />
          )}
          {step === 3 && (
            <RadioGroup
              options={revenueOptions}
              value={data.revenue}
              onChange={(v) => update("revenue", v)}
            />
          )}
          {step === 4 && (
            <CheckboxGroup
              options={helpOptions}
              selected={data.helpWith}
              onToggle={toggleHelp}
            />
          )}
          {step === 5 && (
            <RadioGroup
              options={adSpendOptions}
              value={data.adSpend}
              onChange={(v) => update("adSpend", v)}
            />
          )}
          {step === 6 && (
            <RadioGroup
              options={timelineOptions}
              value={data.timeline}
              onChange={(v) => update("timeline", v)}
            />
          )}
          {step === 7 && (
            <Field
              label="Phone / WhatsApp"
              type="tel"
              value={data.phone}
              onChange={(v) => update("phone", v)}
              placeholder="+91 98765 43210"
            />
          )}
          {step === 8 && (
            <textarea
              className="w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
              rows={4}
              placeholder="Goals, challenges, or anything else..."
              value={data.notes}
              onChange={(e) => update("notes", e.target.value)}
            />
          )}
        </div>

        {submitError && (
          <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {submitError}
          </p>
        )}

        <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted">
          <span aria-hidden>🔒</span>
          <span>
            Your information stays private. We use it only to review your
            application and will never sell or share it with third parties.
          </span>
        </p>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={back}
            disabled={step === 0 || submitting}
            className="text-sm text-muted transition hover:text-ink disabled:opacity-30"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={() => void next()}
            disabled={!canContinue() || submitting}
            className="rounded-full bg-saffron px-8 py-3 text-sm font-semibold text-white transition hover:bg-saffron-dark disabled:opacity-40"
          >
            {submitting
              ? "Submitting…"
              : step === total - 1
                ? "Submit application"
                : "Continue"}
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? label}
        className="w-full rounded-xl border border-border bg-cream/50 px-4 py-3.5 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-border bg-cream/50 px-4 py-3.5 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
    >
      <option value="">{label}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      {options.map((o) => (
        <label
          key={o}
          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
            value === o
              ? "border-teal bg-teal/5 font-medium"
              : "border-border hover:border-teal/40"
          }`}
        >
          <input
            type="radio"
            name="radio"
            checked={value === o}
            onChange={() => onChange(o)}
            className="accent-teal"
          />
          {o}
        </label>
      ))}
    </div>
  );
}

function CheckboxGroup({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (item: string) => void;
}) {
  return (
    <div className="space-y-2">
      {options.map((o) => (
        <label
          key={o}
          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
            selected.includes(o)
              ? "border-teal bg-teal/5 font-medium"
              : "border-border hover:border-teal/40"
          }`}
        >
          <input
            type="checkbox"
            checked={selected.includes(o)}
            onChange={() => onToggle(o)}
            className="accent-teal"
          />
          {o}
        </label>
      ))}
    </div>
  );
}
