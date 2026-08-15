import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Download, Expand, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { EnquiryButtons, pageImage } from "@/components/site/EnquiryButtons";
import { company } from "@/data/company";
import catalogPdf from "@/assets/janet-catalog.pdf.asset.json";

const TOTAL_PAGES = 54;
const PAGES = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

const chapters = [
  { label: "Cover", page: 1 },
  { label: "Down lights", page: 6 },
  { label: "Spot & track", page: 16 },
  { label: "Panel & surface", page: 26 },
  { label: "Outdoor", page: 36 },
  { label: "Profiles", page: 46 },
];

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Download the 2026 Catalogue | Janet Innovative Lights" },
      {
        name: "description",
        content:
          "Swipe through the Janet 2026 LED lighting catalogue or download the full PDF — track, spot, panel, surface, outdoor and profile lighting by Jay Enterprise, Ahmedabad.",
      },
      { property: "og:title", content: "Janet Catalogue 2026 — download the PDF" },
      { property: "og:description", content: "Swipe the full Janet LED lighting catalogue online or download the PDF." },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState<number | null>(null);

  const goTo = useCallback((n: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[n - 1] as HTMLElement | undefined;
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / (track.clientWidth || 1));
      setPage(Math.min(TOTAL_PAGES, Math.max(1, idx + 1)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(Math.min(TOTAL_PAGES, page + 1));
      if (e.key === "ArrowLeft") goTo(Math.max(1, page - 1));
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page, goTo]);

  return (
    <div>
      <section className="border-b border-border bg-brand-deep text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary-foreground/55">{company.legalName} · {company.city}</p>
            <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Catalogue 2026</h1>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Swipe or drag through all {TOTAL_PAGES} pages — or take the full high-resolution PDF with you.
            </p>
          </div>
          <a
            href={catalogPdf.url}
            download="Janet-Catalogue-2026.pdf"
            className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary-foreground px-7 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-deep transition-transform hover:-translate-y-0.5"
          >
            <Download className="size-4" aria-hidden /> Download catalogue
          </a>
        </div>
      </section>

      {/* chapter chips */}
      <div className="sticky top-[6.5rem] z-30 border-b border-border bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {chapters.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={() => goTo(c.page)}
              className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                page >= c.page ? "border-brand bg-brand text-primary-foreground" : "border-border text-muted-foreground hover:border-brand"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PAGES.map((n) => (
              <div key={n} className="w-full shrink-0 snap-center px-1 sm:px-3">
                <button
                  type="button"
                  onClick={() => setZoom(n)}
                  className="group relative block w-full overflow-hidden rounded-sm border border-border bg-surface shadow-soft"
                  aria-label={`Zoom catalogue page ${n}`}
                >
                  <img
                    src={pageImage(n)}
                    alt={`Janet catalogue page ${n} of ${TOTAL_PAGES}`}
                    loading={n <= 2 ? "eager" : "lazy"}
                    className="mx-auto w-full max-w-3xl transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <span className="absolute bottom-3 right-3 hidden items-center gap-2 rounded-sm bg-brand-deep/80 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground group-hover:flex">
                    <Expand className="size-3" aria-hidden /> Zoom
                  </span>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(Math.max(1, page - 1))}
            disabled={page === 1}
            aria-label="Previous page"
            className="absolute left-0 top-1/2 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 shadow-soft transition-opacity disabled:opacity-30 md:grid"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => goTo(Math.min(TOTAL_PAGES, page + 1))}
            disabled={page === TOTAL_PAGES}
            aria-label="Next page"
            className="absolute right-0 top-1/2 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 shadow-soft transition-opacity disabled:opacity-30 md:grid"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {String(page).padStart(2, "0")} / {TOTAL_PAGES}
          </span>
          <input
            type="range"
            min={1}
            max={TOTAL_PAGES}
            value={page}
            onChange={(e) => goTo(Number(e.target.value))}
            aria-label="Jump to catalogue page"
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--brand)]"
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Swipe on mobile · drag or use ← → keys on desktop · tap a page to zoom.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-sm border border-border bg-card p-6 shadow-soft">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Download className="size-5 text-primary" aria-hidden /> Need dealer or project pricing?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Download the catalogue above, then send us a message and we will share the latest price list.
          </p>
          <EnquiryButtons subject="catalogue and price list" className="mt-5" />
        </div>
      </section>

      {zoom !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center overflow-auto bg-brand-deep/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoom(null)}
        >
          <button
            type="button"
            aria-label="Close zoom"
            onClick={() => setZoom(null)}
            className="fixed right-4 top-4 grid size-11 place-items-center rounded-full bg-background text-foreground shadow-lift"
          >
            <X className="size-5" aria-hidden />
          </button>
          <img
            src={pageImage(zoom)}
            alt={`Janet catalogue page ${zoom} enlarged`}
            className="max-w-none rounded-sm sm:w-[min(1400px,150%)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
