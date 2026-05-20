import type { ReactNode } from "react";
import { finalCta } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

function CheckIcon() {
  return (
    <svg className="h-3 w-3 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 8.2 6.4 11 12.5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChipIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    target: (
      <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    ),
    sprint: (
      <path
        d="M4 8h8M8 4v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
    shield: (
      <path
        d="M8 3l4 2v3c0 2.2-1.7 4-4 4.5C6.7 12 5 10.2 5 8V5l3-2z"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
      />
    ),
    brand: (
      <rect
        x="4"
        y="5"
        width="8"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
      />
    ),
  };
  return (
    <svg className="h-3 w-3 shrink-0 text-accent" viewBox="0 0 16 16" aria-hidden>
      {paths[type] ?? paths.target}
    </svg>
  );
}

function PassSeal() {
  return (
    <div className="audit-pass-seal" aria-hidden>
      <svg viewBox="0 0 48 48" className="h-full w-full">
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          opacity="0.35"
        />
        <circle cx="24" cy="24" r="16" fill="rgb(15 127 115 / 0.08)" />
        <path
          d="M16 24l5 5 11-12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="audit-pass-seal-text">Verified</span>
    </div>
  );
}

function QrDecor() {
  return (
    <div className="audit-pass-qr" aria-hidden>
      {Array.from({ length: 25 }).map((_, i) => (
        <span
          key={i}
          className={i % 3 === 0 || i % 7 === 0 ? "audit-pass-qr-cell--on" : ""}
        />
      ))}
    </div>
  );
}

export function CTA() {
  const { auditPass, floatingChips } = finalCta;

  return (
    <Section
      id="growth-audit-cta"
      className="growth-audit-section overflow-hidden py-12 md:py-20 lg:py-24"
    >
      <Container size="full" className="relative z-10">
        <div className="growth-audit-shell section-fade">
          <div className="growth-audit-shell-accent" aria-hidden />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-[72px]">
            <div className="text-left">
              <span className="growth-audit-badge">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_6px_rgb(15_127_115/0.5)]"
                  aria-hidden
                />
                {finalCta.badge}
              </span>

              <h2 className="font-heading mt-6 max-w-[650px] text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
                {finalCta.headlineBefore}
                <span className="growth-audit-headline-accent">
                  {finalCta.headlineHighlight}
                </span>
                {finalCta.headlineAfter}
              </h2>

              <p className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-muted md:text-[20px]">
                {finalCta.subheadline}
              </p>

              <ul className="growth-audit-perks mt-7">
                {["5-point ad account diagnosis", "Leak → fix roadmap", "No obligation after audit"].map(
                  (perk) => (
                    <li key={perk} className="growth-audit-perk">
                      <span className="growth-audit-perk-dot" aria-hidden />
                      {perk}
                    </li>
                  ),
                )}
              </ul>

              <div className="mt-9 flex flex-col items-stretch gap-3 sm:items-start">
                <a href="#audit" className="growth-audit-btn w-full sm:w-auto">
                  {finalCta.button}
                </a>
                <p className="max-w-md text-sm leading-relaxed text-muted">
                  {finalCta.microcopy}
                </p>
                <p className="text-xs font-medium tracking-wide text-muted/80">
                  {finalCta.exclusivityNote}
                </p>
              </div>
            </div>

            <div className="audit-pass-visual">
              <div className="audit-pass-orb audit-pass-orb--1" aria-hidden />
              <div className="audit-pass-orb audit-pass-orb--2" aria-hidden />
              <div className="audit-pass-glow" aria-hidden />

              <div className="audit-pass-chips-row">
                {(["tl", "tr"] as const).map((pos) => {
                  const chip = floatingChips.find((c) => c.position === pos);
                  return chip ? (
                    <span
                      key={chip.label}
                      className={`audit-pass-chip audit-pass-chip--${pos}`}
                    >
                      <ChipIcon type={chip.icon} />
                      {chip.label}
                    </span>
                  ) : null;
                })}
              </div>

              <div className="audit-pass-stack">
                <div className="audit-pass-envelope" aria-hidden />
                <div className="audit-pass-shadow-card" aria-hidden />

                <article className="audit-pass-card">
                  <div className="audit-pass-platinum-edge" aria-hidden />
                  <div className="audit-pass-shimmer" aria-hidden />
                  <div className="audit-pass-notch" aria-hidden />
                  <span className="audit-pass-ribbon">Complimentary</span>

                  <div className="audit-pass-meta">
                    <span className="audit-pass-id">PASS · VG-AUD-90</span>
                    <span className="audit-pass-type">Growth Audit</span>
                  </div>

                  <header className="audit-pass-header">
                    <div>
                      <p className="audit-pass-brand">{auditPass.brand}</p>
                      <h3 className="audit-pass-title">{auditPass.title}</h3>
                    </div>
                    <span className="audit-pass-stamp">{auditPass.stamp}</span>
                  </header>

                  <div className="audit-pass-holo-band" aria-hidden>
                    <span>Google Ads Command Preview</span>
                  </div>

                  <div className="audit-pass-roi-timeline" aria-label="ROI path">
                    {auditPass.roiPath.map((step, i) => (
                      <div
                        key={step}
                        className={`audit-pass-roi-milestone ${
                          i === auditPass.roiPath.length - 1
                            ? "audit-pass-roi-milestone--final"
                            : ""
                        }`}
                      >
                        <span className="audit-pass-roi-dot" />
                        <span className="audit-pass-roi-step">{step}</span>
                        {i < auditPass.roiPath.length - 1 && (
                          <span className="audit-pass-roi-connector" aria-hidden />
                        )}
                      </div>
                    ))}
                  </div>

                  <ul className="audit-pass-checklist">
                    {auditPass.checkpoints.map((item, index) => (
                      <li
                        key={item}
                        className="audit-pass-check-item"
                        style={{ animationDelay: `${index * 0.08}s` }}
                      >
                        <span className="audit-pass-check-icon">
                          <CheckIcon />
                        </span>
                        <span className="audit-pass-check-text">
                          <span className="audit-pass-check-index">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <footer className="audit-pass-outcome">
                    <PassSeal />
                    <div>
                      <span className="audit-pass-outcome-label">Outcome</span>
                      <p className="audit-pass-outcome-text">
                        {auditPass.footer.replace(/^Outcome:\s*/i, "")}
                      </p>
                    </div>
                    <QrDecor />
                  </footer>
                </article>
              </div>

              <div className="audit-pass-chips-row audit-pass-chips-row--bottom">
                {(["bl", "br"] as const).map((pos) => {
                  const chip = floatingChips.find((c) => c.position === pos);
                  return chip ? (
                    <span
                      key={chip.label}
                      className={`audit-pass-chip audit-pass-chip--${pos}`}
                    >
                      <ChipIcon type={chip.icon} />
                      {chip.label}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
