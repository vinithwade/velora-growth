import { agency } from "../config/agency";
import { recognitions, trustPillars } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

function ShieldIcon() {
  return (
    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

const signals = [
  { icon: ShieldIcon, label: "90-day ROI guarantee", sub: "In writing before we start" },
  { icon: LockIcon, label: "Private & secure", sub: "Your data is never sold or shared" },
  { icon: ClockIcon, label: "Reply within 24 hours", sub: "If we're a fit, a partner reaches out" },
  { icon: PinIcon, label: agency.location, sub: "Registered Indian agency" },
];

export function TrustBar() {
  return (
    <div className="border-b border-border bg-surface">
      <Container size="xl" className="py-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s) => (
            <div
              key={s.label}
              className="flex items-start gap-3 rounded-xl border border-border/80 bg-cream/50 px-4 py-3"
            >
              <s.icon />
              <div>
                <p className="text-sm font-semibold text-ink">{s.label}</p>
                <p className="text-xs text-muted">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export function TrustSection() {
  return (
    <Section variant="muted">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why founders trust us"
              title="Built for brands that take growth seriously"
              description={`${agency.clientsServed} Indian companies since ${agency.foundedYear}. We only work with businesses ready to fix systems, not chase hacks.`}
            />
            <article className="card mt-10 flex gap-5 p-6">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal text-lg font-bold text-white"
                aria-hidden
              >
                {agency.founder.initials}
              </div>
              <div>
                <p className="font-semibold">{agency.founder.name}</p>
                <p className="text-sm text-teal">{agency.founder.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {agency.founder.bio}
                </p>
              </div>
            </article>
            <div className="mt-6 flex flex-wrap gap-2">
              {recognitions.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {trustPillars.map((p) => (
              <article key={p.title} className="card p-6">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
