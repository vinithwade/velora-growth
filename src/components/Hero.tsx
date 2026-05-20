import { agency } from "../config/agency";
import { heroCopy, heroStats, heroWideCard } from "../data/content";
import { Button } from "./layout/Button";
import { Container } from "./layout/Container";

export function Hero() {
  return (
    <section className="gradient-hero border-b border-border">
      <Container size="full" className="pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Google Ads ROI partner · D2C only
            </p>

            <h1 className="hero-title mt-5 max-w-3xl text-ink">
              {heroCopy.headlineBefore}
              <span className="text-gradient-accent">
                {heroCopy.headlineHighlight}
              </span>
              {heroCopy.headlineAfter}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-[1.6] text-muted md:text-[18px]">
              {heroCopy.subheadline}
            </p>

            <div className="mt-7 rounded-[24px] border border-border bg-surface px-6 py-5 md:px-8 md:py-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                Our offer
              </p>
              <p className="mt-3 font-heading text-lg font-bold leading-snug text-ink md:text-xl">
                {agency.guarantee}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {agency.trustLine}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#audit">{agency.primaryCta}</Button>
              <Button href="#process" variant="secondary">
                {agency.secondaryCta}
              </Button>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
              {agency.heroMicrocopy}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {heroStats.map((stat) => (
                <article
                  key={stat.label}
                  className="card card-hover p-4 md:p-5"
                >
                  <p className="font-stat text-xl font-bold text-accent md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-ink">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {stat.sub}
                  </p>
                </article>
              ))}
            </div>
            <article className="card card-hover mt-3 px-5 py-4 md:px-6 md:py-5">
              <p className="font-heading text-base font-bold text-ink md:text-lg">
                {heroWideCard.title}
              </p>
              <p className="mt-1 text-sm text-muted">{heroWideCard.sub}</p>
            </article>
            <div className="card mt-3 flex items-center justify-center gap-6 px-5 py-6 sm:gap-10 sm:px-8 md:gap-12">
              {[
                { src: "/adslogo.png", alt: "Google Ads" },
                { src: "/ga.png", alt: "Google Analytics" },
                { src: "/yt.webp", alt: "YouTube" },
              ].map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto max-w-[34%] flex-1 object-contain sm:h-14 md:h-16"
                  loading="eager"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
