import { processPhases } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Process() {
  return (
    <Section id="process">
      <Container size="xl">
        <SectionHeader
          align="center"
          eyebrow="The Velora Growth system"
          title="Our 90-Day Google Ads ROI System"
          description="A structured sprint toward doubling marketing ROI — not random campaign tweaks."
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {processPhases.map((phase, i) => (
            <article
              key={phase.days}
              className="card relative flex flex-col p-6 lg:p-8"
            >
              {i < processPhases.length - 1 && (
                <span
                  className="absolute top-12 -right-3 hidden h-px w-6 bg-stone-300 lg:block"
                  aria-hidden
                />
              )}
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                {phase.days}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {phase.title}
              </h3>
              <ul className="mt-4 flex-1 space-y-2">
                {phase.tasks.map((t) => (
                  <li
                    key={t}
                    className="flex gap-2 text-sm text-muted before:shrink-0 before:text-accent before:content-['•']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
