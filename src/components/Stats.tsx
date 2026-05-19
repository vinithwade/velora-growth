import { stats } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Stats() {
  return (
    <Section variant="surface" className="py-14 md:py-16">
      <Container size="xl">
        <SectionHeader
          align="center"
          eyebrow="Our statistics"
          title="Better, smarter, faster growth"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <article
              key={s.label}
              className="flex flex-col items-center bg-surface px-6 py-10 text-center"
            >
              <p className="font-stat text-4xl font-bold text-teal">{s.value}</p>
              <p className="mt-3 text-base font-semibold">{s.label}</p>
              <p className="mt-1 max-w-[12rem] text-sm text-muted">{s.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
