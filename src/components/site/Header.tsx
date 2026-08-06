import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { company, hasContact, telLink, whatsappLink } from "@/data/company";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/catalog", label: "Catalog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="text-2xl font-semibold tracking-tight text-gradient-brand">janet</span>
          <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.28em] text-muted-foreground sm:inline">
            {company.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {hasContact.phone && (
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="size-4" aria-hidden />
              {company.phone}
            </a>
          )}
          <a
            href={hasContact.whatsapp ? whatsappLink("Hello Janet, I would like to enquire about your lights.") : "/contact"}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" aria-hidden />
            Enquire
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-2 py-3">
              {hasContact.phone && (
                <a
                  href={telLink()}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium"
                >
                  <Phone className="size-4" aria-hidden /> Call
                </a>
              )}
              <a
                href={hasContact.whatsapp ? whatsappLink("Hello Janet, I would like to enquire about your lights.") : "/contact"}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="size-4" aria-hidden /> Enquire
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}