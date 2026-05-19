import { problems, services } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Mechanism() {
  return (
    <>
      <Section variant="surface" className="py-16 md:py-20">
        <Container size="xl">
          <SectionHeader
            eyebrow="Why most marketing doesn't work"
            title="The problem isn't your ads. It's the system around them."
            className="max-w-2xl"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <article key={p.title} className="card flex flex-col p-8">
                <span className="font-stat text-sm font-semibold text-teal">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="mechanism">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <SectionHeader
                eyebrow="What we actually do"
                title="Three levers. One revenue system."
              />
            </div>
            <div className="space-y-4 lg:col-span-8">
              {services.map((s) => (
                <article
                  key={s.num}
                  className="card grid gap-4 p-8 md:grid-cols-[4rem_1fr] md:items-start md:gap-8"
                >
                  <span className="font-stat text-4xl font-semibold text-teal/35">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">{s.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
