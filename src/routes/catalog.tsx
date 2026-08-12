import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useState } from "react";
import { EnquiryButtons, pageImage } from "@/components/site/EnquiryButtons";

const TOTAL_PAGES = 54;

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Digital Product Catalog 2026 | Janet Innovative Lights" },
      {
        name: "description",
        content:
          "Flip through the complete Janet 2026 LED lighting catalog — all 54 pages of track, spot, panel, surface, outdoor and profile lighting.",
      },
      { property: "og:title", content: "Janet Product Catalog 2026" },
      { property: "og:description", content: "Browse all 54 pages of the Janet LED lighting catalog online." },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const [page, setPage] = useState(1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Catalog 2026</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The complete printed Janet catalog, page by page. Tap any thumbnail to open it full width.
        </p>
      </header>

      <div className="mt-8 overflow-hidden rounded-sm border border-border bg-surface">
        <img
          src={pageImage(page)}
          alt={`Janet catalog page ${page} of ${TOTAL_PAGES}`}
          className="mx-auto w-full max-w-3xl"
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          <ChevronLeft className="size-4" aria-hidden /> Previous
        </button>
        <span className="text-sm text-muted-foreground">
          Page {page} / {TOTAL_PAGES}
        </span>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          disabled={page === TOTAL_PAGES}
          className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          Next <ChevronRight className="size-4" aria-hidden />
        </button>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-8">
        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setPage(n)}
            aria-label={`Go to catalog page ${n}`}
            aria-current={page === n}
            className={`overflow-hidden rounded-sm border transition-colors ${
              page === n ? "border-primary ring-2 ring-ring" : "border-border hover:border-primary"
            }`}
          >
            <img src={pageImage(n)} alt="" loading="lazy" className="w-full" />
          </button>
        ))}
      </div>

      <div className="mt-12 rounded-sm border border-border bg-card p-6 shadow-soft">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <Download className="size-5 text-primary" aria-hidden /> Need the PDF or a price list?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Send us a message and we will share the latest catalog PDF and dealer pricing.
        </p>
        <EnquiryButtons subject="catalog PDF and price list" className="mt-5" />
      </div>
    </div>
  );
}