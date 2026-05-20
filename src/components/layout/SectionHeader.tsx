import { cn } from "../../lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = true,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <header
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-3xl",
        className,
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.28em]",
          dark ? "text-highlight" : "text-teal",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-heading mt-3 text-3xl font-semibold md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]",
          dark && "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg",
            dark ? "text-muted" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
