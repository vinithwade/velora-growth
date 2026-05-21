import { googleAdsServices } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./layout/SectionHeader";

const platforms = [
  { src: "/adslogo.png", alt: "Google Ads" },
  { src: "/ga.png", alt: "Google Analytics" },
  { src: "/yt.webp", alt: "YouTube" },
];

export function Services() {
  return (
    <Section id="services" className="services-section overflow-hidden">
      <div className="services-atmosphere" aria-hidden>
        <div className="services-wash" />
        <svg
          className="services-wave"
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="servicesWaveFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(15 127 115 / 0.07)" />
              <stop offset="100%" stopColor="rgb(15 127 115 / 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0 0H1440V120C1200 200 960 40 720 120C480 200 240 40 0 120V0Z"
            fill="url(#servicesWaveFill)"
          />
          <path
            d="M0 90C280 30 480 150 720 80C960 10 1160 130 1440 70"
            stroke="rgb(15 127 115 / 0.14)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <Container size="full" className="relative z-10">
        <div className="services-header-row">
          <SectionHeader
            eyebrow="What we manage"
            title="The full Google Ads system, handled end-to-end."
            description="Everything required to run profitable Google Ads for a D2C catalog — one channel, one system, measured by ROI."
          />
          <div className="services-platforms">
            <p className="services-platforms-label">Google stack we run</p>
            <div className="services-platforms-logos">
              {platforms.map((logo) => (
                <div key={logo.src} className="services-platform-logo">
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="services-grid">
          {googleAdsServices.map((s, i) => (
            <article key={s.title} className="services-card">
              <div className="services-card-topbar" aria-hidden />
              <div className="services-card-head">
                <span className="services-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="services-card-dot" aria-hidden />
              </div>
              <h3 className="services-card-title">{s.title}</h3>
              <p className="services-card-body">{s.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
