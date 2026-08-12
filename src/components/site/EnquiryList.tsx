import { Link } from "@tanstack/react-router";
import { ClipboardList, Check, Plus, Trash2, X, MessageCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import { useEnquiryCart, type EnquiryItem } from "@/lib/enquiry-cart";
import { company, hasContact, mailtoLink, whatsappLink } from "@/data/company";
import { pageImage } from "@/components/site/EnquiryButtons";

export function AddToEnquiry({ item, size = "md" }: { item: EnquiryItem; size?: "sm" | "md" }) {
  const { has, toggle } = useEnquiryCart();
  const active = has(item.id);
  const pad = size === "sm" ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm";

  return (
    <button
      type="button"
      onClick={() => {
        toggle(item);
        toast[active ? "info" : "success"](
          active ? `${item.name} removed from enquiry list` : `${item.name} added to enquiry list`,
        );
      }}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-sm border font-semibold transition-colors ${pad} ${
        active
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border bg-background text-foreground hover:bg-secondary"
      }`}
    >
      {active ? <Check className="size-4" aria-hidden /> : <Plus className="size-4" aria-hidden />}
      {active ? "In enquiry list" : "Add to enquiry"}
    </button>
  );
}

export function EnquiryListTrigger({ className = "" }: { className?: string }) {
  const { items, setOpen } = useEnquiryCart();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label={`Open enquiry list (${items.length} items)`}
      className={`relative inline-flex items-center gap-2 rounded-sm border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary ${className}`}
    >
      <ClipboardList className="size-4" aria-hidden />
      <span className="hidden lg:inline">Enquiry list</span>
      {items.length > 0 && (
        <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-gradient-brand text-[0.65rem] font-bold text-primary-foreground">
          {items.length}
        </span>
      )}
    </button>
  );
}

export function EnquiryListDrawer() {
  const { items, open, setOpen, remove, clear } = useEnquiryCart();

  const lines = items.map((i, n) => `${n + 1}. ${i.name}${i.model ? ` (${i.model})` : ""} — catalog page ${i.page}`);
  const message = `Hello ${company.brand}, I would like a quotation for the following fittings:\n\n${lines.join("\n")}\n\nPlease share pricing and availability.`;

  return (
    <>
      {items.length > 0 && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 md:bottom-8 md:right-8"
        >
          <ClipboardList className="size-4" aria-hidden />
          {items.length} in enquiry list
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <button
            type="button"
            aria-label="Close enquiry list"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-brand-deep/50 backdrop-blur-sm"
          />
          <aside className="relative flex h-full w-full max-w-md animate-slide-in-right flex-col border-l border-border bg-background shadow-lift">
            <header className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <h2 className="text-base font-semibold">Your enquiry list</h2>
                <p className="text-xs text-muted-foreground">{items.length} fitting{items.length === 1 ? "" : "s"} selected</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-sm p-2 text-muted-foreground hover:bg-secondary"
              >
                <X className="size-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="rounded-sm border border-dashed border-border p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Your list is empty. Add fittings from the products page and send them all in one enquiry.
                  </p>
                  <Link
                    to="/products"
                    onClick={() => setOpen(false)}
                    className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Browse products →
                  </Link>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map((i) => (
                    <li key={i.id} className="flex gap-3 rounded-sm border border-border p-3">
                      <img
                        src={pageImage(i.page)}
                        alt=""
                        loading="lazy"
                        className="size-16 shrink-0 rounded object-cover object-top"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">{i.name}</p>
                        {i.model && <p className="text-xs text-muted-foreground">Model {i.model}</p>}
                        <Link
                          to="/products/$productId"
                          params={{ productId: i.id }}
                          onClick={() => setOpen(false)}
                          className="text-xs font-medium text-primary hover:underline"
                        >
                          View details
                        </Link>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(i.id)}
                        aria-label={`Remove ${i.name}`}
                        className="self-start rounded p-1.5 text-muted-foreground hover:bg-secondary hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <footer className="space-y-2 border-t border-border px-5 py-4">
                {hasContact.whatsapp && (
                  <a
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    <MessageCircle className="size-4" aria-hidden /> Send list on WhatsApp
                  </a>
                )}
                {hasContact.email && (
                  <a
                    href={mailtoLink("Quotation request", message)}
                    className="flex w-full items-center justify-center gap-2 rounded-sm border border-border px-4 py-3 text-sm font-semibold"
                  >
                    <Mail className="size-4" aria-hidden /> Email the list
                  </a>
                )}
                {!hasContact.whatsapp && !hasContact.email && (
                  <button
                    type="button"
                    onClick={() => {
                      void navigator.clipboard?.writeText(message);
                      toast.success("Enquiry list copied to clipboard");
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    Copy list to clipboard
                  </button>
                )}
                <button
                  type="button"
                  onClick={clear}
                  className="w-full rounded-sm px-4 py-2 text-xs font-medium text-muted-foreground hover:bg-secondary"
                >
                  Clear list
                </button>
              </footer>
            )}
          </aside>
        </div>
      )}
    </>
  );
}