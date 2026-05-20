import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const widths = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-[1440px]",
} as const;

export function Container({
  children,
  size = "full",
  className,
}: {
  children: ReactNode;
  size?: keyof typeof widths;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8 lg:px-10",
        widths[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
