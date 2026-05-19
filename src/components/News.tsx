import { news } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function News() {
  return (
    <Section id="news" variant="surface">
      <Container size="xl">
        <SectionHeader
          eyebrow="From the newsroom"
          title="Latest insights & updates"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((post) => (
            <article
              key={post.title}
              className="card group flex flex-col p-8 transition hover:border-teal/25 hover:shadow-md"
            >
              <time className="text-xs font-semibold uppercase tracking-wide text-saffron">
                {post.date}
              </time>
              <h3 className="mt-4 flex-1 text-xl font-semibold leading-snug group-hover:text-teal">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal">
                Read more
                <span aria-hidden>→</span>
              </span>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
