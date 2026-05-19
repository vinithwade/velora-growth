import { processSteps } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Process() {
  return (
    <Section variant="surface" className="py-16 md:py-20">
      <Container size="xl">
        <SectionHeader
          align="center"
          eyebrow="What happens next"
          title="No black box. You always know the next step."
          description="We designed the process to be honest before it's salesy."
          className="mx-auto"
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.step} className="relative">
              {i < processSteps.length - 1 && (
                <span
                  className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-border lg:block"
                  aria-hidden
                />
              )}
              <article className="card h-full p-6 text-center lg:text-left">
                <span className="font-stat text-sm font-bold text-teal">
                  {step.step}
                </span>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
