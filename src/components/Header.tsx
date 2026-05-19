import { useState } from "react";
import { agency } from "../config/agency";
import { clients } from "../data/content";
import { cn } from "../lib/cn";
import { Container } from "./layout/Container";
import { Logo } from "./Logo";

const nav = [
  { label: "How It Works", href: "#mechanism" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQs", href: "#faq" },
  { label: "Insights", href: "#news" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur-md">
      <div className="overflow-hidden border-b border-border/60 bg-stone-900/[0.03] py-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="mx-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted/80"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <Container size="xl" className="flex items-center justify-between py-4 md:py-5">
        <a href="#" className="transition opacity-90 hover:opacity-100">
          <Logo size="md" />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition hover:bg-surface hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-muted lg:block">{agency.location}</span>
          <a
            href="#qualify"
            className="rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-saffron-dark"
          >
            Apply
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <nav
        className={cn(
          "border-t border-border md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container size="xl" className="space-y-1 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </Container>
      </nav>
    </header>
  );
}
