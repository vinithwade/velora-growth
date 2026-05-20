import { useState } from "react";
import { caseStudies } from "../data/content";
import { cn } from "../lib/cn";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function CaseStudies() {
  const [index, setIndex] = useState(0);
  const cs = caseStudies[index];
  const total = caseStudies.length;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <Section id="results">
      <Container size="xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="D2C results"
            title="Real Google Ads numbers"
            description="Representative D2C Google Ads outcomes — metrics only, no fabricated testimonials."
            className="mb-0 max-w-xl"
          />
          <div className="flex items-center gap-4 md:pb-1">
            <span className="font-stat text-sm font-medium text-muted">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-ink transition hover:bg-stone-50"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-dark"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <article className="card-elevated mt-10 overflow-hidden">
          <div className="grid lg:grid-cols-5">
            <div className="flex flex-col justify-between bg-gradient-to-br from-accent/10 to-stone-50 p-8 lg:col-span-2 lg:p-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {cs.category}
                </span>
                <p className="font-stat mt-8 text-5xl font-bold text-ink lg:text-6xl">
                  {cs.metric}
                </p>
                <p className="text-sm text-muted">{cs.metricLabel}</p>
              </div>
              <p className="mt-10 text-xl font-semibold text-ink">
                {cs.client}
              </p>
            </div>

            <div className="flex flex-col justify-between p-8 lg:col-span-3 lg:p-10">
              <div>
                <p className="leading-relaxed text-muted">{cs.desc}</p>
                <div className="mt-8 flex flex-wrap gap-10 border-y border-stone-200 py-6">
                  {cs.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-stat text-2xl font-bold text-accent">
                        {s.value}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 flex justify-center gap-2">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to case study ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-10 bg-accent" : "w-2 bg-stone-300",
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
