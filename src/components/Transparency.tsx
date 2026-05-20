import { transparencyCards, transparencyIntro } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Transparency() {
  return (
    <Section id="transparency" variant="muted">
      <Container size="full">
        <SectionHeader
          eyebrow="How we work"
          title="Transparent from day one."
          description={transparencyIntro}
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transparencyCards.map((card) => (
            <article
              key={card.title}
              className="card card-hover p-6 md:p-7"
            >
              <h3 className="font-heading text-lg font-bold text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
