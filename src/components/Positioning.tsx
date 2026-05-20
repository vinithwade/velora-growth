import { agency } from "../config/agency";
import { positioning } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

export function Positioning() {
  return (
    <Section id="positioning" variant="elevated" className="py-20 md:py-28">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Category positioning
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-ink md:text-5xl md:leading-[1.1]">
              {positioning.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {positioning.explanation}
            </p>
            <p className="mt-6 text-base font-medium text-ink">
              {positioning.focus}
            </p>
          </div>

          <div className="space-y-4">
            {positioning.notTypes.map((item) => (
              <div
                key={item}
                className="card border-stone-200/80 px-6 py-5 md:px-8"
              >
                <p className="text-base font-semibold text-ink">{item}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-accent/25 bg-accent/5 px-6 py-6 md:px-8">
              <p className="font-heading text-lg font-semibold leading-snug text-ink md:text-xl">
                {agency.categoryLine}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
