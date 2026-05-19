import { cn } from "../../lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
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
          dark ? "text-saffron" : "text-teal",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]",
          dark && "text-cream",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg",
            dark ? "text-cream/75" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
