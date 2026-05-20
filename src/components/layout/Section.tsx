import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const variants = {
  default: "bg-base",
  elevated: "border-y border-border bg-elevated",
  muted: "bg-[#f3f1eb]",
  glow: "gradient-guarantee",
} as const;

export function Section({
  id,
  variant = "default",
  className,
  children,
}: {
  id?: string;
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-fade scroll-mt-24 py-12 md:py-[72px] lg:py-24 lg:scroll-mt-28",
        variants[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}
