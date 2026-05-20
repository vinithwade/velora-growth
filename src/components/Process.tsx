import { processPhases, processSection } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Process() {
  return (
    <Section id="process" variant="muted">
      <Container size="full">
        <SectionHeader
          align="center"
          eyebrow={processSection.eyebrow}
          title={processSection.title}
          description={processSection.subtitle}
          className="mx-auto max-w-3xl"
        />

        <div className="mt-14 space-y-6">
          {processPhases.map((phase, i) => (
            <article
              key={phase.phase}
              className="card card-hover grid gap-6 p-6 md:grid-cols-12 md:p-8 lg:p-10"
            >
              <div className="md:col-span-4 lg:col-span-3">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  {phase.phase}
                </p>
                <p className="mt-1 font-stat text-sm font-semibold text-muted">
                  {phase.days}
                </p>
                <h3 className="font-heading mt-4 text-xl font-bold leading-snug text-ink md:text-2xl">
                  {phase.title}
                </h3>
                <span className="mt-4 hidden font-stat text-4xl font-bold text-border/80 md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="md:col-span-8 lg:col-span-9">
                <p className="text-base leading-[1.6] text-muted md:text-[17px]">
                  {phase.intro}
                </p>
                <p className="mt-5 text-sm font-semibold text-ink">
                  You&apos;ll know:
                </p>
                <ul className="mt-3 space-y-2.5">
                  {phase.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
