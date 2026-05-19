import { agency } from "../config/agency";
import { Button } from "./layout/Button";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";

export function CTA() {
  return (
    <Section className="pb-20 pt-8 md:pb-28">
      <Container size="md">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal via-teal to-teal-light px-8 py-14 text-center text-white md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, white 0%, transparent 45%)",
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              One last thing
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">
              If we can't double your revenue, we'll tell you on the call.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-white/85 md:text-lg">
              No nurture sequences. No follow-up funnels. One honest 30-minute
              conversation with a partner.
            </p>
            <Button href="#qualify" variant="accent" className="mt-10">
              Apply to work together
            </Button>
            <p className="mt-5 text-sm text-white/75">
              If we don't deliver a measurable uplift, you don't pay. Simple.
            </p>
            <p className="mt-4 text-xs text-white/55">
              No spam. No pressure. If we're not the right fit, we'll tell you on
              the call.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-white/55">
              {agency.cohortSpots} spots remaining · {agency.cohortLabel}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
