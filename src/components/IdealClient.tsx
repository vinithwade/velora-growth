import { idealFor, notForYou } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

export function IdealClient() {
  return (
    <Section id="ideal-client">
      <Container size="full">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card card-hover border-accent/20 bg-[#f0faf8] p-8 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-ink">
              Who this is for
            </h2>
            <ul className="mt-8 space-y-4">
              {idealFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                    ✓
                  </span>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card card-hover p-8 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-ink">
              Who this is not for
            </h2>
            <ul className="mt-8 space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-border text-xs text-muted">
                    ✕
                  </span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}
