import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "btn-lift bg-accent font-semibold text-white shadow-md shadow-accent/15 hover:bg-accent-dark",
  secondary:
    "btn-lift border border-border bg-surface text-ink hover:border-accent/30 hover:bg-elevated",
  accent:
    "btn-lift bg-accent text-white shadow-md hover:bg-accent-dark",
  ghost: "text-muted hover:bg-[#f3f1eb] hover:text-ink",
} as const;

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
