import { stats } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

export function Stats() {
  return (
    <Section variant="elevated" className="py-14 md:py-16">
      <Container size="xl">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-100/50 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <article
              key={s.label}
              className="flex flex-col items-center bg-surface px-6 py-10 text-center"
            >
              <p className="font-stat text-4xl font-bold text-accent">
                {s.value}
              </p>
              <p className="mt-3 text-base font-semibold text-ink">
                {s.label}
              </p>
              <p className="mt-1 max-w-[12rem] text-sm text-muted">{s.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
