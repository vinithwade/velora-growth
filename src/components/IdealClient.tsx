import { idealFor, notForYou } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function IdealClient() {
  return (
    <Section id="ideal-client" variant="muted">
      <Container size="xl">
        <SectionHeader
          eyebrow="Fit check"
          title="We only work with brands we can actually help"
          description="The 90-day ROI guarantee applies to qualified D2C brands — not everyone."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="card border-accent/20 bg-accent/5 p-8 md:p-10">
            <h3 className="text-xl font-semibold text-ink">Who this is for</h3>
            <ul className="mt-8 space-y-5">
              {idealFor.map((item) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs text-accent">
                    ✓
                  </span>
                  <span className="text-ink/90">{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card p-8 md:p-10">
            <h3 className="text-xl font-semibold text-ink">
              Who this is not for
            </h3>
            <ul className="mt-8 space-y-5">
              {notForYou.map((item) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs text-muted">
                    ✕
                  </span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}
