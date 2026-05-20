import { masteryIntro, googleAdsServices } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Services() {
  return (
    <Section id="services">
      <Container size="xl">
        <SectionHeader
          eyebrow="Google Ads mastery"
          title="Built for brands that are tired of wasting ad spend."
          description={masteryIntro}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {googleAdsServices.map((s, i) => (
            <article
              key={s.title}
              className="card group p-6 transition hover:border-accent/25 md:p-8"
            >
              <span className="font-stat text-3xl font-bold text-stone-200 transition group-hover:text-accent/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
