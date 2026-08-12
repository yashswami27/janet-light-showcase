import { MessageCircle, Mail, Phone } from "lucide-react";
import { company, hasContact, mailtoLink, telLink, whatsappLink } from "@/data/company";

export function pageImage(page: number) {
  return `/catalog/page-${String(page).padStart(2, "0")}.jpg`;
}

export function EnquiryButtons({
  subject,
  className = "",
  size = "md",
  hideWhenEmpty = false,
}: {
  subject: string;
  className?: string;
  size?: "sm" | "md";
  hideWhenEmpty?: boolean;
}) {
  const message = `Hello ${company.brand}, I would like to enquire about: ${subject}`;
  const pad = size === "sm" ? "px-3 py-2 text-xs" : "px-5 py-3 text-sm";
  const anyChannel = hasContact.whatsapp || hasContact.email || hasContact.phone;

  if (!anyChannel) {
    if (hideWhenEmpty) return null;
    return (
      <p className={`text-xs text-muted-foreground ${className}`}>
        Enquiry channels will appear here once contact details are added.
      </p>
    );
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {hasContact.whatsapp && (
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-2 rounded-sm bg-gradient-brand font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90 ${pad}`}
        >
          <MessageCircle className="size-4" aria-hidden /> WhatsApp enquiry
        </a>
      )}
      {hasContact.email && (
        <a
          href={mailtoLink(`Enquiry: ${subject}`, message)}
          className={`inline-flex items-center gap-2 rounded-sm border border-border bg-background font-semibold text-foreground transition-colors hover:bg-secondary ${pad}`}
        >
          <Mail className="size-4" aria-hidden /> Email enquiry
        </a>
      )}
      {hasContact.phone && (
        <a
          href={telLink()}
          className={`inline-flex items-center gap-2 rounded-sm border border-border bg-background font-semibold text-foreground transition-colors hover:bg-secondary ${pad}`}
        >
          <Phone className="size-4" aria-hidden /> Call
        </a>
      )}
    </div>
  );
}