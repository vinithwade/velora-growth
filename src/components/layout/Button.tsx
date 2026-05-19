import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-teal text-white shadow-md shadow-teal/15 hover:bg-teal-light",
  secondary:
    "border border-border bg-surface text-ink hover:border-stone-400 hover:bg-white",
  accent:
    "bg-saffron text-white shadow-md shadow-saffron/20 hover:bg-saffron-dark",
  ghost: "text-ink hover:bg-stone-200/60",
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
        "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
