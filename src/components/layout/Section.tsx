import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const variants = {
  default: "bg-base",
  elevated: "border-y border-stone-200/60 bg-elevated",
  muted: "bg-stone-100/50",
  glow: "gradient-guarantee",
  dark: "bg-stone-100 text-ink",
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
        "scroll-mt-28 py-16 md:py-24 lg:py-28",
        variants[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}
