import { forYou, notForYou } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Filter() {
  return (
    <Section variant="dark">
      <Container size="xl">
        <SectionHeader
          dark
          eyebrow="Honest filter"
          title="We're not for everyone, and that's the point."
          className="max-w-2xl"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h3 className="text-lg font-semibold text-teal-light">
              Who this IS for
            </h3>
            <ul className="mt-8 space-y-5">
              {forYou.map((item) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/20 text-xs text-teal-light">
                    ✓
                  </span>
                  <span className="text-cream/90">{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h3 className="text-lg font-semibold text-orange-300">
              Who this is NOT for
            </h3>
            <ul className="mt-8 space-y-5">
              {notForYou.map((item) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron/20 text-xs text-orange-300">
                    ✕
                  </span>
                  <span className="text-cream/75">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}
