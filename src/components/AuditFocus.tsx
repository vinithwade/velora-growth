import { auditFocusItems } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function AuditFocus() {
  return (
    <Section id="audit-focus" variant="elevated">
      <Container size="full">
        <SectionHeader
          eyebrow="Free growth audit"
          title="What we look for in your free audit"
          description="No fake case studies — just a clear checklist of what we review before we agree to work together."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {auditFocusItems.map((item) => (
            <article
              key={item.title}
              className="card card-hover p-5 md:p-6"
            >
              <h3 className="font-heading text-base font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
