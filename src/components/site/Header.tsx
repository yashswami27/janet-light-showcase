import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { company, hasContact, telLink, whatsappLink } from "@/data/company";
import { EnquiryListTrigger } from "@/components/site/EnquiryList";
import { categories } from "@/data/products";
import janetLogo from "@/assets/janet-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/catalog", label: "Catalogue" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const ticker = [
  `${company.legalName} · ${company.city}`,
  `Innovative Lights since ${company.establishedYear}`,
  "BIS approved · 2-year replacement warranty",
  "Dealer, architect & project pricing",
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* announcement ticker */}
      <div className="overflow-hidden bg-brand-deep py-2">
        <div className="flex w-max animate-marquee gap-10 px-6">
          {[...ticker, ...ticker, ...ticker].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.32em] text-primary-foreground/75"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="border-b border-border bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
            <img
              src={janetLogo.url}
              alt={`${company.brand} ${company.tagline} logo`}
              className="h-11 w-auto sm:h-12"
              width={200}
              height={120}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) =>
              item.label === "Products" ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setMenuOpen(true)}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <Link
                    to={item.to}
                    activeProps={{ className: "text-foreground" }}
                    className="flex items-center gap-1 py-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown className="size-3" aria-hidden />
                  </Link>
                  {menuOpen && (
                    <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 rounded-sm border border-border bg-card p-5 shadow-lift">
                      <p className="eyebrow text-muted-foreground">Collections</p>
                      <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1">
                        {categories.map((c) => (
                          <Link
                            key={c.id}
                            to="/products"
                            search={{ category: c.id }}
                            onClick={() => setMenuOpen(false)}
                            className="truncate border-b border-border/50 py-2 text-sm text-muted-foreground transition-colors hover:text-brand"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/products"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand hover:underline"
                      >
                        View all products →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-foreground" }}
                  className="py-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/products"
              aria-label="Search products"
              className="grid size-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <Search className="size-4" aria-hidden />
            </Link>
            <EnquiryListTrigger />
            {hasContact.phone && (
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand"
              >
                <Phone className="size-4" aria-hidden />
                {company.phone}
              </a>
            )}
            <a
              href={hasContact.whatsapp ? whatsappLink("Hello Janet, I would like to enquire about your lights.") : "/contact"}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-brand"
            >
              <MessageCircle className="size-3.5" aria-hidden />
              Enquire
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <EnquiryListTrigger />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-brand" }}
                  className="border-b border-border/60 px-1 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-wrap gap-2 py-4">
                {hasContact.phone && (
                  <a
                    href={telLink()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-border px-4 py-3 text-sm font-medium"
                  >
                    <Phone className="size-4" aria-hidden /> Call
                  </a>
                )}
                <a
                  href={hasContact.whatsapp ? whatsappLink("Hello Janet, I would like to enquire about your lights.") : "/contact"}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <MessageCircle className="size-4" aria-hidden /> Enquire
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
