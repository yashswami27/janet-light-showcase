import { Download, MessageCircle } from "lucide-react";
import { company, hasContact, whatsappLink } from "@/data/company";
import catalogPdf from "@/assets/janet-catalog.pdf.asset.json";

export function FloatingActions() {
  return (
    <>
      <a
        href={catalogPdf.url}
        download="Janet-Catalogue-2026.pdf"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-2 rounded-l-sm bg-brand-deep px-3 py-5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-primary-foreground shadow-lift transition-colors hover:bg-brand lg:flex"
        style={{ writingMode: "vertical-rl" }}
      >
        <Download className="size-3.5 rotate-90" aria-hidden />
        Download Catalogue
      </a>

      <a
        href={hasContact.whatsapp ? whatsappLink(`Hello ${company.brand}, I would like to enquire about your lights.`) : "/contact"}
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-24 right-4 z-40 grid size-13 place-items-center rounded-full bg-[oklch(0.65_0.17_150)] text-white shadow-lift transition-transform hover:scale-105 sm:bottom-28 sm:right-6"
      >
        <MessageCircle className="size-6" aria-hidden />
      </a>
    </>
  );
}
