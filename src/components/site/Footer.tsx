import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Instagram, Facebook, Clock } from "lucide-react";
import { company, hasContact, mailtoLink, telLink, whatsappLink } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <span className="text-2xl font-semibold tracking-tight text-gradient-brand">janet</span>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {company.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A brand of {company.legalName}, {company.city}. Professional LED down lights, spot lights,
            track lights, panel lights and architectural lighting since {company.establishedYear}.
          </p>
          <div className="mt-4 flex gap-3">
            {company.instagram && (
              <a href={company.instagram} aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <Instagram className="size-5" />
              </a>
            )}
            {company.facebook && (
              <a href={company.facebook} aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <Facebook className="size-5" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/products", label: "All products" },
              { to: "/catalog", label: "Digital catalog" },
              { to: "/about", label: "About Janet" },
              { to: "/contact", label: "Contact & enquiry" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {hasContact.address && (
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span>{company.addressLines.join(", ")}</span>
              </li>
            )}
            {hasContact.phone && (
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <a className="hover:text-primary" href={telLink()}>
                  {company.phone}
                </a>
              </li>
            )}
            {hasContact.whatsapp && (
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <a className="hover:text-primary" href={whatsappLink("Hello Janet, I have an enquiry.")}>
                  WhatsApp us
                </a>
              </li>
            )}
            {hasContact.email && (
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <a className="hover:text-primary" href={mailtoLink("Product enquiry")}>
                  {company.email}
                </a>
              </li>
            )}
            {company.hours && (
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span>{company.hours}</span>
              </li>
            )}
            {!hasContact.address && !hasContact.phone && !hasContact.email && (
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact details coming soon — see the contact page
                </Link>
              </li>
            )}
          </ul>
          {company.gst && <p className="mt-4 text-xs text-muted-foreground">GSTIN: {company.gst}</p>}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {year} {company.legalName} · Janet Innovative Lights, {company.city}, Gujarat, India.
        </div>
      </div>
    </footer>
  );
}