import { problems } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

export function Problem() {
  return (
    <Section id="problem" className="problem-section overflow-hidden">
      <div className="problem-atmosphere" aria-hidden>
        <div className="problem-wash" />
        <svg
          className="problem-wave"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="problemWaveFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(15 127 115 / 0.06)" />
              <stop offset="100%" stopColor="rgb(15 127 115 / 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0 160C240 80 480 240 720 160C960 80 1200 240 1440 160V320H0V160Z"
            fill="url(#problemWaveFill)"
          />
          <path
            d="M0 200C360 120 540 280 900 200C1080 140 1260 260 1440 220"
            stroke="rgb(15 127 115 / 0.12)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <Container size="full" className="relative z-10">
        <SectionHeader
          eyebrow="The real problem"
          title="Most D2C brands don't have a traffic problem. They have a Google Ads system problem."
        />

        <div className="problem-grid">
          {problems.map((p, i) => (
            <article key={p.title} className="problem-card">
              <div className="problem-card-bar" aria-hidden />
              <div className="problem-card-top">
                <span className="problem-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="problem-card-line" aria-hidden />
              </div>
              <h3 className="problem-card-title">{p.title}</h3>
              <p className="problem-card-body">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
