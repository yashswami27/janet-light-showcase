/**
 * ---------------------------------------------------------------------------
 * JANET / JAY ENTERPRISE — CONTACT DETAILS
 * ---------------------------------------------------------------------------
 * Fill in the values below and the whole website (header, footer, contact page,
 * WhatsApp + email enquiry links, map, structured data) updates automatically.
 *
 * Anything left as an empty string "" is simply hidden from the website,
 * so it is safe to fill these in one at a time.
 * ---------------------------------------------------------------------------
 */
export const company = {
  brand: "Janet",
  tagline: "Innovative Lights",
  legalName: "Jay Enterprise",
  establishedYear: 2013,
  city: "Ahmedabad",

  /** Full shop address, one line per row. e.g. ["Shop 12, ABC Complex", "CG Road", "Ahmedabad, Gujarat 380009"] */
  addressLines: [] as string[],

  /** Display phone number, e.g. "+91 98765 43210" */
  phone: "",
  /** Second phone number (optional) */
  phoneAlt: "",
  /** WhatsApp number, digits with country code and no symbols, e.g. "919876543210" */
  whatsapp: "",
  /** Enquiry email, e.g. "sales@janetlights.com" */
  email: "",

  /** e.g. "Mon – Sat, 10:00 AM – 8:00 PM" */
  hours: "",
  /** e.g. "24ABCDE1234F1Z5" */
  gst: "",

  instagram: "",
  facebook: "",

  /** Google Maps embed URL (Share → Embed a map → copy the src="..." value) */
  mapEmbedUrl: "",
};

export const hasContact = {
  get address() {
    return company.addressLines.length > 0;
  },
  get phone() {
    return company.phone.length > 0;
  },
  get whatsapp() {
    return company.whatsapp.length > 0;
  },
  get email() {
    return company.email.length > 0;
  },
};

export function whatsappLink(message: string) {
  if (!company.whatsapp) return "";
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body?: string) {
  if (!company.email) return "";
  const params = new URLSearchParams({ subject, ...(body ? { body } : {}) });
  return `mailto:${company.email}?${params.toString()}`;
}

export function telLink() {
  if (!company.phone) return "";
  return `tel:${company.phone.replace(/[^\d+]/g, "")}`;
}