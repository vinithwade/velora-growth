import { agency } from "../config/agency";
import { heroCopy, heroStats } from "../data/content";
import { Button } from "./layout/Button";
import { Container } from "./layout/Container";

export function Hero() {
  const gridStats = heroStats.slice(0, 3);
  const bottomStat = heroStats[3];

  return (
    <section className="gradient-hero border-b border-stone-200/60">
      <Container size="xl" className="relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-surface px-4 py-1.5 text-xs font-medium text-muted shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Google Ads ROI partner · D2C only
            </p>

            <h1 className="hero-title mt-6 max-w-3xl text-4xl font-semibold text-ink md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {heroCopy.headlineBefore}
              <span className="text-gradient-accent">
                {heroCopy.headlineHighlight}
              </span>
              {heroCopy.headlineAfter}
            </h1>

            <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 px-6 py-5 md:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Our offer
              </p>
              <p className="mt-2 font-heading text-xl font-semibold text-ink md:text-2xl">
                {agency.guarantee}
              </p>
              <p className="mt-3 text-sm text-muted">{agency.trustLine}</p>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {heroCopy.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#audit">{agency.primaryCta}</Button>
              <Button href="#process" variant="secondary">
                {agency.secondaryCta}
              </Button>
            </div>

            <p className="mt-5 text-sm font-medium text-black">
              {heroCopy.microcopy}
            </p>
            <p className="mt-3 max-w-xl text-sm text-black">
              {agency.categoryLine}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {gridStats.map((stat) => (
                <article
                  key={stat.label}
                  className="card p-5 transition hover:border-accent/20 hover:shadow-md md:p-6"
                >
                  <p className="font-stat text-2xl font-bold text-accent md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{stat.sub}</p>
                </article>
              ))}
              <article className="card flex min-h-[148px] items-center justify-center p-4 md:min-h-[168px] md:p-6">
                <img
                  src="/adslogo.png"
                  alt="Google Ads — Search, Shopping, Performance Max, and more"
                  className="h-auto w-full max-h-[120px] object-contain md:max-h-[140px]"
                  width={280}
                  height={140}
                  loading="eager"
                />
              </article>
            </div>
            {bottomStat && (
              <article className="card mt-3 flex items-center gap-4 p-4 sm:gap-6 sm:p-5">
                <p className="font-stat shrink-0 text-2xl font-bold text-accent md:text-3xl">
                  {bottomStat.value}
                </p>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {bottomStat.label}
                  </p>
                  <p className="text-xs text-muted">{bottomStat.sub}</p>
                </div>
              </article>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
