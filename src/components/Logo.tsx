import { agency } from "../config/agency";
import { cn } from "../lib/cn";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const [brand, suffix] = splitName(agency.name);

  const sizeClass = {
    sm: "text-lg",
    md: "text-[1.35rem] md:text-[1.5rem]",
    lg: "text-2xl md:text-[1.75rem]",
  }[size];

  return (
    <span
      className={cn(
        "logo-wordmark inline-block leading-none",
        sizeClass,
        className,
      )}
    >
      <span className="font-semibold text-accent">{brand}</span>
      {suffix ? (
        <span className="font-medium text-ink">{suffix}</span>
      ) : null}
    </span>
  );
}

function splitName(name: string): [string, string] {
  const i = name.indexOf(" ");
  if (i === -1) return [name, ""];
  return [name.slice(0, i), name.slice(i)];
}
