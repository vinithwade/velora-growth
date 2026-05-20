import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-accent font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent-dark",
  secondary:
    "border border-stone-300 bg-surface text-ink hover:border-stone-400 hover:bg-stone-50",
  accent:
    "bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-dark",
  ghost: "text-muted hover:bg-stone-100 hover:text-ink",
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
