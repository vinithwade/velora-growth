import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const variants = {
  default: "bg-cream",
  surface: "border-y border-border bg-surface",
  muted: "bg-stone-100/60",
  dark: "bg-ink text-cream",
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
