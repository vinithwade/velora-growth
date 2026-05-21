import { transparencyCards, transparencyIntro } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Transparency() {
  return (
    <Section id="transparency" className="work-section overflow-hidden">
      <div className="work-atmosphere" aria-hidden>
        <div className="work-wash" />
      </div>

      <Container size="full" className="relative z-10">
        <div className="work-layout">
          <div className="work-intro">
            <SectionHeader
              eyebrow="How we work"
              title="Transparent from day one."
              description={transparencyIntro}
            />
            <ul className="work-points">
              <li>No hidden agency tricks</li>
              <li>ROI measured before we scale</li>
              <li>Clear reporting every week</li>
            </ul>
          </div>

          <div className="work-grid">
            {transparencyCards.map((card, i) => (
              <article key={card.title} className="problem-card">
                <div className="problem-card-bar" aria-hidden />
                <div className="problem-card-top">
                  <span className="problem-card-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="problem-card-line" aria-hidden />
                </div>
                <h3 className="problem-card-title">{card.title}</h3>
                <p className="problem-card-body">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
