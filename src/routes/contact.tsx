import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/products";
import { company, hasContact, mailtoLink, telLink, whatsappLink } from "@/data/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Janet Lights | Enquiries in Ahmedabad" },
      {
        name: "description",
        content:
          "Contact Janet Innovative Lights (Jay Enterprise), Ahmedabad. Send a WhatsApp or email enquiry about LED down lights, track, panel and outdoor lighting.",
      },
      { property: "og:title", content: "Contact Janet Innovative Lights, Ahmedabad" },
      { property: "og:description", content: "WhatsApp, call or email us for product enquiries, pricing and project lighting advice." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const composed = [
    `Hello ${company.brand},`,
    name ? `My name is ${name}.` : "",
    interest ? `I am interested in: ${interest}.` : "",
    message,
  ]
    .filter(Boolean)
    .join(" ");

  const details = [
    hasContact.address && { icon: MapPin, label: "Showroom", value: company.addressLines.join(", "), href: "" },
    hasContact.phone && { icon: Phone, label: "Phone", value: company.phone, href: telLink() },
    hasContact.email && { icon: Mail, label: "Email", value: company.email, href: mailtoLink("Product enquiry") },
    company.hours && { icon: Clock, label: "Hours", value: company.hours, href: "" },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string; href: string }[];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Contact &amp; enquiry</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Tell us what you are looking for and we will reply with availability, specifications and pricing.
          Write your enquiry below and send it straight to us on WhatsApp or by email.
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <section className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <h2 className="text-lg font-semibold">Send an enquiry</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Your name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g. Rahul Shah"
              />
            </div>
            <div>
              <label htmlFor="interest" className="text-sm font-medium">Interested in</label>
              <select
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a range (optional)</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
                <option value="Project / bulk lighting">Project / bulk lighting</option>
                <option value="Dealer enquiry">Dealer enquiry</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">Your message</label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Quantities, wattage, finish, site location…"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {hasContact.whatsapp ? (
              <a
                href={whatsappLink(composed)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" aria-hidden /> Send on WhatsApp
              </a>
            ) : null}
            {hasContact.email ? (
              <a
                href={mailtoLink(interest ? `Enquiry: ${interest}` : "Product enquiry", composed)}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Send className="size-4" aria-hidden /> Send by email
              </a>
            ) : null}
            {!hasContact.whatsapp && !hasContact.email && (
              <p className="rounded-md bg-secondary px-4 py-3 text-sm text-secondary-foreground">
                Our WhatsApp and email enquiry buttons will appear here as soon as the contact details are added.
              </p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Visit or call us</h2>
          {details.length > 0 ? (
            <ul className="mt-5 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <d.icon className="size-5 text-primary" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-sm font-medium hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-5 space-y-4">
              {["Showroom address", "Phone / WhatsApp", "Email", "Opening hours"].map((label) => (
                <div key={label} className="rounded-lg border border-dashed border-border p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">To be added</p>
                </div>
              ))}
              <p className="text-xs text-muted-foreground">
                {company.legalName}, {company.city}, Gujarat, India.
              </p>
            </div>
          )}

          {company.mapEmbedUrl && (
            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                title={`Map to ${company.brand} showroom`}
                src={company.mapEmbedUrl}
                loading="lazy"
                className="h-72 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}