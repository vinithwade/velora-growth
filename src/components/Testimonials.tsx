import { featuredTestimonials } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Testimonials() {
  return (
    <Section>
      <Container size="xl">
        <SectionHeader
          align="center"
          eyebrow="Client voices"
          title="Founders who bet on systems, not hacks"
          description="Real quotes from brands we've partnered with across India."
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featuredTestimonials.map((t) => (
            <blockquote
              key={t.author}
              className="card flex flex-col p-8"
            >
              <div className="flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} aria-hidden>
                    {star}
                  </span>
                ))}
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-ink/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-sm font-bold text-teal"
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-sm">
                    {t.author}
                  </cite>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}
