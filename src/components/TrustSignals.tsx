import { agency } from "../config/agency";
import { Container } from "./layout/Container";

const signals = [
  { label: "D2C product brands only", sub: "Not services · Not B2B" },
  { label: "Google Ads specialists", sub: "Shopping · PMax · Search · Feeds" },
  { label: "Measured by ROI", sub: agency.guarantee },
  { label: "Free audit first", sub: agency.trustLine },
];

export function TrustBar() {
  return (
    <div className="border-b border-stone-200/60 bg-elevated">
      <Container size="xl" className="py-6 md:py-8">
        <div className="mx-auto mb-6 max-w-3xl rounded-xl border border-stone-300 bg-white px-6 py-4 shadow-sm">
          <p
            className="text-center text-base font-semibold leading-relaxed md:text-lg"
            style={{ color: "#000000" }}
          >
            {agency.taglineBefore}
            <span style={{ color: "#0f766e" }}>{agency.taglineHighlight}</span>
            {agency.taglineAfter}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-stone-200/80 bg-surface px-4 py-3 shadow-sm"
            >
              <p className="text-sm font-semibold text-black">{s.label}</p>
              <p className="text-xs text-stone-600">{s.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
