import { cn } from "../../lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
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
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-heading mt-4 text-3xl font-bold leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-[1.6] text-muted md:text-[17px]">
          {description}
        </p>
      )}
    </header>
  );
}
