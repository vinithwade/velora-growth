import { agency } from "../config/agency";
import { heroStats, clients } from "../data/content";
import { Button } from "./layout/Button";
import { Container } from "./layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgb(15 76 92 / 0.08), transparent)",
        }}
      />

      <Container size="xl" className="relative pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Based in {agency.location}
            </p>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {agency.guarantee}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted">
              We fix bottlenecks in your acquisition and sales systems so you
              generate more revenue from the leads you already have.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#qualify">Apply to work together</Button>
              <Button href="#case-studies" variant="secondary">
                See client results
              </Button>
            </div>

            <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {[
                "No retainers or lock-ins",
                "Free 30-min strategy call",
                "ROI guarantee in writing",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal/10 text-[10px] text-teal">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {heroStats.map((stat) => (
                <article
                  key={stat.label}
                  className="card p-5 transition hover:shadow-md md:p-6"
                >
                  <p className="font-stat text-2xl font-bold text-teal md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{stat.sub}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-border bg-surface/80 py-8">
        <Container size="xl">
          <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
            Trusted by ambitious Indian brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {clients.slice(0, 8).map((c) => (
              <span
                key={c}
                className="text-sm font-medium tracking-wide text-stone-500"
              >
                {c}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
