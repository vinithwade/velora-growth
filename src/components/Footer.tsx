import { agency } from "../config/agency";
import { Container } from "./layout/Container";
import { Logo } from "./Logo";

const links = [
  { label: "Free audit", href: "#audit" },
  { label: "Services", href: "#services" },
  { label: "First 90 days", href: "#process" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "Contact", href: `mailto:${agency.email}` },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-elevated">
      <Container size="full" className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a href="#" className="inline-block">
              <Logo size="lg" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {agency.taglineBefore}
              <span className="font-medium text-ink">{agency.taglineHighlight}</span>
              {agency.taglineAfter} {agency.location}.
            </p>
            <p className="mt-2 text-xs text-muted/70">{agency.legalName}</p>
          </div>

          <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:col-span-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-muted transition hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="lg:col-span-3 lg:text-right">
            <p className="text-sm font-medium text-ink">Get in touch</p>
            <a
              href={`mailto:${agency.email}`}
              className="mt-2 block text-sm text-accent hover:underline"
            >
              {agency.email}
            </a>
            <a
              href={`tel:${agency.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-sm text-muted hover:text-ink"
            >
              {agency.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {agency.name}. Google Ads for D2C only.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">
              Privacy
            </a>
            <a href="#" className="hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
