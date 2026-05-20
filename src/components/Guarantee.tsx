import { agency } from "../config/agency";
import { guaranteeCopy } from "../data/content";
import { Button } from "./layout/Button";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

export function Guarantee() {
  return (
    <Section id="guarantee" variant="glow">
      <Container size="md">
        <div className="card-elevated overflow-hidden">
          <div className="border-b border-border bg-[#f0faf8] px-6 py-10 text-center md:px-12 md:py-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
              Transparent guarantee
            </p>
            <h2 className="font-heading mt-5 text-2xl font-bold leading-tight text-ink md:text-4xl">
              {guaranteeCopy.headline}
            </h2>
          </div>
          <div className="space-y-6 px-6 py-10 md:px-12 md:py-12">
            <p className="text-center text-base leading-[1.6] text-muted md:text-[17px]">
              {guaranteeCopy.subcopy}
            </p>
            <p className="rounded-[20px] border border-border bg-[#f7f6f1] px-5 py-4 text-center text-sm leading-relaxed text-muted">
              {guaranteeCopy.disclaimer}
            </p>
            <div className="flex justify-center pt-2">
              <Button href="#audit">{agency.primaryCta}</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
