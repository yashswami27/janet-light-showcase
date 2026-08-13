import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Instagram, Facebook, Clock, ArrowRight } from "lucide-react";
import { company, hasContact, mailtoLink, telLink, whatsappLink } from "@/data/company";
import { categories } from "@/data/products";
import janetLogo from "@/assets/janet-logo-dark.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-brand-deep text-primary-foreground">
      {/* CTA strip */}
      <div className="border-b border-primary-foreground/12">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="eyebrow text-primary-foreground/55">Start your lighting journey</p>
            <h2 className="mt-3 max-w-xl text-3xl leading-tight sm:text-4xl">
              From concept to completion, we help you light every space beautifully.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-sm bg-primary-foreground px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-deep transition-transform hover:-translate-y-0.5"
            >
              View catalogue
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/35 px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Book a call <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <img
            src={janetLogo.url}
            alt={`${company.brand} ${company.tagline} logo`}
            className="h-14 w-auto"
            width={240}
            height={144}
            loading="lazy"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
            A brand of {company.legalName}, {company.city}. Professional LED down lights, spot lights,
            track, panel and architectural lighting since {company.establishedYear}.
          </p>
          <div className="mt-5 flex gap-3">
            {company.instagram && (
              <a href={company.instagram} aria-label="Instagram" className="text-primary-foreground/60 hover:text-primary-foreground">
                <Instagram className="size-5" />
              </a>
            )}
            {company.facebook && (
              <a href={company.facebook} aria-label="Facebook" className="text-primary-foreground/60 hover:text-primary-foreground">
                <Facebook className="size-5" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-primary-foreground/55">Explore</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              { to: "/products", label: "All products" },
              { to: "/catalog", label: "Digital catalogue" },
              { to: "/about", label: "About Janet" },
              { to: "/contact", label: "Contact & enquiry" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/65 transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-primary-foreground/55">Collections</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {categories.slice(0, 7).map((c) => (
              <li key={c.id}>
                <Link
                  to="/products"
                  search={{ category: c.id }}
                  className="text-primary-foreground/65 transition-colors hover:text-primary-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-primary-foreground/55">Get in touch</h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/65">
            {hasContact.address && (
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-warm" aria-hidden />
                <span>{company.addressLines.join(", ")}</span>
              </li>
            )}
            {hasContact.phone && (
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-warm" aria-hidden />
                <a className="hover:text-primary-foreground" href={telLink()}>
                  {company.phone}
                </a>
              </li>
            )}
            {hasContact.whatsapp && (
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-brand-warm" aria-hidden />
                <a className="hover:text-primary-foreground" href={whatsappLink("Hello Janet, I have an enquiry.")}>
                  WhatsApp us
                </a>
              </li>
            )}
            {hasContact.email && (
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-warm" aria-hidden />
                <a className="hover:text-primary-foreground" href={mailtoLink("Product enquiry")}>
                  {company.email}
                </a>
              </li>
            )}
            {company.hours && (
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-warm" aria-hidden />
                <span>{company.hours}</span>
              </li>
            )}
            {!hasContact.address && !hasContact.phone && !hasContact.email && (
              <li>
                <Link to="/contact" className="hover:text-primary-foreground">
                  Contact details coming soon — see the contact page
                </Link>
              </li>
            )}
          </ul>
          {company.gst && <p className="mt-4 text-xs text-primary-foreground/50">GSTIN: {company.gst}</p>}
        </div>
      </div>

      <div className="border-t border-primary-foreground/12">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-primary-foreground/50 sm:px-6 lg:px-8">
          © {year} {company.legalName} · Janet Innovative Lights, {company.city}, Gujarat, India.
        </div>
      </div>
    </footer>
  );
}
