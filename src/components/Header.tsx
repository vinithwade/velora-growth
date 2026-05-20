import { useEffect, useRef, useState } from "react";
import { agency } from "../config/agency";
import { cn } from "../lib/cn";
import { Container } from "./layout/Container";
import { Logo } from "./Logo";

const nav = [
  { label: "How It Works", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#audit-focus" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "FAQs", href: "#faq" },
];

const CTA_SECTION_ID = "growth-audit-cta";

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ctaInView = useRef(false);

  useEffect(() => {
    const ctaSection = document.getElementById(CTA_SECTION_ID);
    if (!ctaSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        ctaInView.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          setHidden(false);
        }
      },
      { threshold: 0.12, rootMargin: "-72px 0px 0px 0px" },
    );

    observer.observe(ctaSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ctaInView.current) {
        lastScrollY.current = window.scrollY;
        return;
      }

      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (delta > 8) {
        setHidden(true);
        setOpen(false);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastScrollY.current = y;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-base/95 backdrop-blur-md transition-transform duration-300 ease-out will-change-transform",
        hidden && "-translate-y-full",
      )}
    >
      <div className="overflow-hidden border-b border-border bg-elevated py-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[agency.audienceTicker, agency.audienceTicker].map((text, i) => (
            <span
              key={i}
              className="mx-10 text-[11px] font-medium tracking-wide text-muted"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <Container size="full" className="flex items-center justify-between py-4">
        <a href="#" className="shrink-0">
          <Logo size="md" />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#audit"
            className="btn-lift rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark sm:px-5"
          >
            {agency.primaryCta}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
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
          "border-t border-border bg-surface lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container size="full" className="space-y-1 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted"
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
