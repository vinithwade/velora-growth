import { useState } from "react";
import { faqs } from "../data/content";
import { cn } from "../lib/cn";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container size="full">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="FAQs"
              title="Straight answers"
              description="Scope, guarantee, ad spend, and who qualifies — no vague marketing speak."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="card-elevated divide-y divide-border overflow-hidden rounded-[26px]">
              {faqs.map((faq, i) => (
                <div key={faq.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition hover:bg-[#f7f6f1] md:px-8 md:py-6"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span className="pr-2 font-semibold leading-snug text-ink">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-lg text-muted transition",
                        open === i &&
                          "rotate-45 border-accent/30 bg-accent/10 text-accent",
                      )}
                    >
                      +
                    </span>
                  </button>
                  {open === i && (
                    <p className="border-t border-border px-6 pb-6 text-sm leading-relaxed text-muted md:px-8">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
