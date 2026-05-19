import { useState } from "react";
import { faqs } from "../data/content";
import { cn } from "../lib/cn";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" variant="muted">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <SectionHeader
              eyebrow="FAQs"
              title="Questions worth asking"
              description="Don't see yours? Bring it to the strategy call."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="card-elevated divide-y divide-border overflow-hidden">
              {faqs.map((faq, i) => (
                <div key={faq.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition hover:bg-stone-50 md:px-8 md:py-6"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span className="pr-2 font-medium leading-snug">{faq.q}</span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-lg text-muted transition",
                        open === i && "rotate-45 border-teal/30 bg-teal/5 text-teal",
                      )}
                    >
                      +
                    </span>
                  </button>
                  {open === i && (
                    <p className="border-t border-border/80 px-6 pb-6 text-sm leading-relaxed text-teal md:px-8">
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
