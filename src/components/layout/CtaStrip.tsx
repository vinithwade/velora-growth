import { agency } from "../../config/agency";
import { Button } from "./Button";
import { Container } from "./Container";

export function CtaStrip({
  title = "Ready to see if your Google Ads can 2× ROI in 90 days?",
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <section className={className ?? "py-10 md:py-14"}>
      <Container size="md">
        <div className="rounded-2xl border border-accent/20 bg-white px-6 py-8 text-center shadow-lg shadow-stone-300/20 md:px-10 md:py-10">
          <p className="font-heading text-xl font-bold leading-snug text-black md:text-2xl">
            {title}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-stone-600">
            {agency.trustLine}
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="#audit">{agency.primaryCta}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
