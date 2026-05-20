import { googleAdsServices } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Services() {
  return (
    <Section id="services" variant="muted">
      <Container size="full">
        <SectionHeader
          eyebrow="What we manage"
          title="The full Google Ads system, handled end-to-end."
          description="Everything required to run profitable Google Ads for a D2C catalog — one channel, one system, measured by ROI."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {googleAdsServices.map((s, i) => (
            <article
              key={s.title}
              className="card card-hover p-5 md:p-6"
            >
              <span className="font-stat text-2xl font-bold text-border">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-base font-bold leading-snug text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
