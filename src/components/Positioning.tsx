import { positioning } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

export function Positioning() {
  return (
    <Section id="positioning" variant="elevated">
      <Container size="full">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
            Category positioning
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-ink md:text-4xl">
            {positioning.headline}
          </h2>
          <p className="mt-5 text-base leading-[1.6] text-muted md:text-[18px]">
            {positioning.explanation}
          </p>
          <p className="mt-6 font-heading text-lg font-semibold text-ink">
            {positioning.categoryLine}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {positioning.pillars.map((p) => (
            <article
              key={p.title}
              className="card card-hover p-6 text-center md:p-8"
            >
              <p className="font-heading text-xl font-bold text-accent">
                {p.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
