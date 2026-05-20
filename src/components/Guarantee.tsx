import { agency } from "../config/agency";
import { guaranteeCopy } from "../data/content";
import { Button } from "./layout/Button";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

export function Guarantee() {
  return (
    <Section id="guarantee" variant="glow" className="py-16 md:py-24">
      <Container size="lg">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-xl shadow-stone-300/25">
          <div className="border-b border-stone-100 bg-gradient-to-b from-accent/[0.07] to-white px-6 py-10 text-center md:px-12 md:py-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Our promise
            </p>
            <h2 className="font-heading text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl md:leading-[1.15]">
              {guaranteeCopy.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm font-medium text-stone-600">
              {agency.trustLine}
            </p>
          </div>

          <div className="space-y-8 px-6 py-10 md:px-12 md:py-12">
            <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-stone-700 md:text-lg">
              {guaranteeCopy.subcopy}
            </p>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-6 py-5 md:px-8">
              <p className="text-center text-sm leading-relaxed text-stone-600">
                {guaranteeCopy.disclaimer}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 pt-2">
              <Button href="#audit">{agency.primaryCta}</Button>
              <p className="text-center text-xs text-stone-500">
                {agency.taglineBefore}
                <span className="font-semibold text-accent">
                  {agency.taglineHighlight}
                </span>
                {agency.taglineAfter}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
