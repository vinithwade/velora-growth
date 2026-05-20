import { agency } from "../config/agency";
import { finalCta } from "../data/content";
import { Button } from "./layout/Button";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

export function CTA() {
  return (
    <Section className="pb-20 pt-8 md:pb-28">
      <Container size="md">
        <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-gradient-to-br from-accent/10 via-surface to-elevated px-8 py-14 text-center shadow-lg shadow-stone-200/40 md:px-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Final step
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            {finalCta.subheadline}
          </p>
          <Button href="#audit" className="mt-10">
            {finalCta.button}
          </Button>
          <p className="mt-5 text-sm font-medium text-ink/80">
            {agency.guarantee}
          </p>
          <p className="mt-2 text-xs text-muted">{agency.trustLine}</p>
        </div>
      </Container>
    </Section>
  );
}
