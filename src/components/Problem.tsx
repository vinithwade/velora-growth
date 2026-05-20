import { problems } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Problem() {
  return (
    <Section id="problem" variant="muted">
      <Container size="xl">
        <SectionHeader
          eyebrow="The real problem"
          title="Most D2C brands don't have a traffic problem. They have a Google Ads system problem."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <article key={p.title} className="card flex flex-col p-6 md:p-8">
              <span className="font-stat text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
