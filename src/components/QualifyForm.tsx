import { useState } from "react";
import { agency } from "../config/agency";
import type { QualifyFormData } from "../data/content";
import {
  adSpendOptions,
  d2cCategories,
  googleAdsStatusOptions,
  helpOptions,
  platforms,
  qualifySteps,
  revenueOptions,
  timelineOptions,
} from "../data/content";
import {
  SheetsNotConfiguredError,
  submitToGoogleSheets,
} from "../lib/submitToGoogleSheets";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

const empty: QualifyFormData = {
  name: "",
  email: "",
  brand: "",
  storeUrl: "",
  platform: "",
  category: "",
  monthlyRevenue: "",
  googleAdsStatus: "",
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
        return data.brand.trim().length > 1;
      case 2:
        return !!data.platform;
      case 3:
        return !!data.category;
      case 4:
        return !!data.monthlyRevenue;
      case 5:
        return !!data.googleAdsStatus;
      case 6:
        return data.helpWith.length > 0;
      case 7:
        return !!data.adSpend;
      case 8:
        return !!data.timeline;
      case 9:
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
          import.meta.env.PROD
            ? "Form is not connected. In Vercel: Settings → Environment Variables → add VITE_GOOGLE_SHEETS_URL, then redeploy."
            : "Add VITE_GOOGLE_SHEETS_URL to your .env file — see google-apps-script/README.md",
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
      <Section id="audit" className="py-20">
        <Container size="sm">
          <div className="card-elevated p-10 text-center md:p-12">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-2xl text-accent">
              ✓
            </div>
            <h2 className="text-2xl font-semibold text-ink">
              Audit request received
            </h2>
            <p className="mt-3 text-muted">
              Thanks, {data.name.split(" ")[0]}. If {data.brand} is a fit,
              we&apos;ll reach out within 24 hours to book your free growth
              audit.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="audit" variant="elevated" className="py-16 md:py-24">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Free growth audit
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Book your free Google Ads audit
            </h2>
            <p className="mt-5 max-w-md text-muted">
              Tell us about your D2C brand. We review every request — if
              we&apos;re confident we can move your ROI, you&apos;ll get a call
              with a senior operator.
            </p>
            <div className="mt-6 rounded-xl border border-accent/25 bg-accent/5 px-5 py-4">
              <p className="text-sm font-semibold text-ink">
                {agency.guarantee}
              </p>
              <p className="mt-2 text-xs text-muted">{agency.trustLine}</p>
            </div>
            <ul className="mt-8 hidden space-y-3 text-sm text-muted lg:block">
              <li className="flex gap-3">
                <span className="text-accent">✓</span> No obligation after the
                audit
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span> Honest fit check — we
                decline if we can&apos;t help
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span> Reply within 24 hours
              </li>
            </ul>
          </div>

          <div className="card-elevated p-6 md:p-8 lg:p-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                Step {step + 1} of {total}
              </span>
              <div className="h-1.5 flex-1 max-w-[140px] overflow-hidden rounded-full bg-stone-200">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-ink">
              {current.title}
            </h3>

            <div className="mt-6 space-y-4">
              {step === 0 && (
                <>
                  <Field
                    label="Your name"
                    value={data.name}
                    onChange={(v) => update("name", v)}
                  />
                  <Field
                    label="Work email"
                    type="email"
                    value={data.email}
                    onChange={(v) => update("email", v)}
                    placeholder="you@brand.com"
                  />
                </>
              )}
              {step === 1 && (
                <>
                  <Field
                    label="Brand name"
                    value={data.brand}
                    onChange={(v) => update("brand", v)}
                  />
                  <Field
                    label="Store URL"
                    value={data.storeUrl}
                    onChange={(v) => update("storeUrl", v)}
                    placeholder="https://yourstore.com"
                  />
                </>
              )}
              {step === 2 && (
                <SelectField
                  label="Platform"
                  value={data.platform}
                  options={platforms}
                  onChange={(v) => update("platform", v)}
                />
              )}
              {step === 3 && (
                <SelectField
                  label="Category"
                  value={data.category}
                  options={d2cCategories}
                  onChange={(v) => update("category", v)}
                />
              )}
              {step === 4 && (
                <RadioGroup
                  options={revenueOptions}
                  value={data.monthlyRevenue}
                  onChange={(v) => update("monthlyRevenue", v)}
                />
              )}
              {step === 5 && (
                <RadioGroup
                  options={googleAdsStatusOptions}
                  value={data.googleAdsStatus}
                  onChange={(v) => update("googleAdsStatus", v)}
                />
              )}
              {step === 6 && (
                <CheckboxGroup
                  options={helpOptions}
                  selected={data.helpWith}
                  onToggle={toggleHelp}
                />
              )}
              {step === 7 && (
                <RadioGroup
                  options={adSpendOptions}
                  value={data.adSpend}
                  onChange={(v) => update("adSpend", v)}
                />
              )}
              {step === 8 && (
                <RadioGroup
                  options={timelineOptions}
                  value={data.timeline}
                  onChange={(v) => update("timeline", v)}
                />
              )}
              {step === 9 && (
                <Field
                  label="Phone / WhatsApp"
                  type="tel"
                  value={data.phone}
                  onChange={(v) => update("phone", v)}
                  placeholder="+91 98765 43210"
                />
              )}
              {step === 10 && (
                <textarea
                  className="w-full rounded-xl border border-stone-200 bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  rows={4}
                  placeholder="Current ROAS, feed issues, goals..."
                  value={data.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              )}
            </div>

            {submitError && (
              <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700">
                {submitError}
              </p>
            )}

            <p className="mt-6 text-xs leading-relaxed text-muted">
              Your information stays private. Used only to review your audit
              request — never sold or shared.
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
                className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark disabled:opacity-40"
              >
                {submitting
                  ? "Submitting…"
                  : step === total - 1
                    ? "Book My Free Growth Audit"
                    : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
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
        className="w-full rounded-xl border border-stone-200 bg-surface px-4 py-3.5 text-sm text-ink outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
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
      className="w-full rounded-xl border border-stone-200 bg-surface px-4 py-3.5 text-sm text-ink outline-none focus:border-accent/50"
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
              ? "border-accent/50 bg-accent/10 font-medium text-ink"
              : "border-stone-200 text-muted hover:border-stone-300"
          }`}
        >
          <input
            type="radio"
            checked={value === o}
            onChange={() => onChange(o)}
            className="accent-accent"
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
              ? "border-accent/50 bg-accent/10 font-medium text-ink"
              : "border-stone-200 text-muted hover:border-stone-300"
          }`}
        >
          <input
            type="checkbox"
            checked={selected.includes(o)}
            onChange={() => onToggle(o)}
            className="accent-accent"
          />
          {o}
        </label>
      ))}
    </div>
  );
}
