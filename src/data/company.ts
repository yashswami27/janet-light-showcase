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

  /** Full shop address, one line per row. */
  addressLines: [
    "1895, Gandhi Rd",
    "Near Pada Pola, Old City",
    "Tankshal, Kalupur",
    "Ahmedabad, Gujarat 380001",
  ] as string[],

  /** Display phone number */
  phone: "+91 76003 68576",
  /** Second phone number (optional) */
  phoneAlt: "",
  /** WhatsApp number, digits with country code and no symbols */
  whatsapp: "917600368576",
  /** Enquiry email */
  email: "jayenterprise1895@yahoo.in",

  /** Working hours — shown in a concise, professional format. */
  hours: "Mon – Sat: 10:30 AM – 8:00 PM  ·  Sunday: Closed",
  /** e.g. "24ABCDE1234F1Z5" */
  gst: "",

  instagram: "https://www.instagram.com/jayenterprise4214/",
  facebook: "",

  /** Google Maps embed URL (Share → Embed a map → copy the src="..." value) */
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8!2d72.5938471!3d23.0250095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8449fc03d933%3A0x7039e12bb885ea61!2sJay%20Enterprise!5e0!3m2!1sen!2sin!4v1692000000000!5m2!1sen!2sin",
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