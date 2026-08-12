import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, X, LayoutGrid, Rows3, Eye, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, products, type Product } from "@/data/products";
import { EnquiryButtons, pageImage } from "@/components/site/EnquiryButtons";
import { AddToEnquiry } from "@/components/site/EnquiryList";
import { Reveal } from "@/components/site/Reveal";

type ProductSearch = { category?: string; q?: string };

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const out: ProductSearch = {};
    if (typeof search["category"] === "string") out.category = search["category"];
    if (typeof search["q"] === "string") out.q = search["q"];
    return out;
  },
  head: () => ({
    meta: [
      { title: "LED Lighting Products | Janet Innovative Lights, Ahmedabad" },
      {
        name: "description",
        content:
          "Full Janet product range — magnetic track, COB spot, down lights, panel, surface, outdoor, mirror, tube, cabinet and profile lighting with complete specifications.",
      },
      { property: "og:title", content: "LED Lighting Products | Janet Innovative Lights" },
      {
        property: "og:description",
        content: "Search and filter the complete Janet 2026 LED lighting catalog by category, wattage and finish.",
      },
    ],
  }),
  component: ProductsPage,
});

const wattBands = [
  { id: "all", label: "Any wattage", test: () => true },
  { id: "0-10", label: "Up to 10W", test: (w: number) => w > 0 && w <= 10 },
  { id: "10-25", label: "10 – 25W", test: (w: number) => w > 10 && w <= 25 },
  { id: "25-50", label: "25 – 50W", test: (w: number) => w > 25 && w <= 50 },
  { id: "50+", label: "50W and above", test: (w: number) => w > 50 },
] as const;

const sorts = [
  { id: "catalog", label: "Catalog order" },
  { id: "name", label: "Name A–Z" },
  { id: "variants", label: "Most variants" },
] as const;

function productWatts(p: Product): number[] {
  const text = p.variants.flat().join(" ");
  return [...text.matchAll(/(\d+(?:\.\d+)?)\s*W\b/gi)].map((m) => Number(m[1])).filter((n) => !Number.isNaN(n));
}

function ProductsPage() {
  const { category: initialCategory, q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(q ?? "");
  const [watt, setWatt] = useState<string>("all");
  const [sort, setSort] = useState<string>("catalog");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [quick, setQuick] = useState<Product | null>(null);
  const activeCategory = initialCategory ?? "all";

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const band = wattBands.find((b) => b.id === watt) ?? wattBands[0];
    const out = products.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (band.id !== "all") {
        const watts = productWatts(p);
        if (!watts.some((w) => (band.test as (n: number) => boolean)(w))) return false;
      }
      if (!needle) return true;
      const haystack = [p.name, p.model ?? "", p.description, p.tags.join(" "), p.variants.flat().join(" ")]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
    if (sort === "name") out.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "variants") out.sort((a, b) => b.variants.length - a.variants.length);
    return out;
  }, [activeCategory, query, watt, sort]);

  const setCategory = (id: string) =>
    navigate({
      search: (prev: ProductSearch): ProductSearch => {
        const next: ProductSearch = {};
        if (prev.q) next.q = prev.q;
        if (id !== "all") next.category = id;
        return next;
      },
    });

  const resetAll = () => {
    setQuery("");
    setWatt("all");
    setSort("catalog");
    setCategory("all");
  };

  const filtersActive = query.trim() !== "" || watt !== "all" || activeCategory !== "all";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Products</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The complete Janet 2026 range — {products.length} fittings across {categories.length} families. Every
          listing shows wattage, size, lumens, colour temperature and finish exactly as printed in our catalog.
        </p>
      </header>

      <div className="sticky top-16 z-30 -mx-4 mt-8 border-y border-border bg-background/90 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-sm sm:border sm:px-5">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <span className="sr-only">Search products</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, model, wattage or finish…"
            className="w-full rounded-sm border border-input bg-background py-2.5 pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:bg-secondary"
            >
              <X className="size-4" />
            </button>
          )}
        </label>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {[{ id: "all", name: "All" }, ...categories].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                activeCategory === cat.id
                  ? "border-transparent bg-gradient-brand text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:bg-secondary"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3">
          <SlidersHorizontal className="size-4 text-muted-foreground" aria-hidden />
          <label className="sr-only" htmlFor="watt">Wattage</label>
          <select
            id="watt"
            value={watt}
            onChange={(e) => setWatt(e.target.value)}
            className="rounded-sm border border-input bg-background px-3 py-1.5 text-xs font-medium outline-none focus:ring-2 focus:ring-ring"
          >
            {wattBands.map((b) => (
              <option key={b.id} value={b.id}>{b.label}</option>
            ))}
          </select>

          <label className="sr-only" htmlFor="sort">Sort</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-sm border border-input bg-background px-3 py-1.5 text-xs font-medium outline-none focus:ring-2 focus:ring-ring"
          >
            {sorts.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>

          {filtersActive && (
            <button
              type="button"
              onClick={resetAll}
              className="rounded-sm px-3 py-1.5 text-xs font-semibold text-primary hover:bg-secondary"
            >
              Reset filters
            </button>
          )}

          <div className="ml-auto hidden items-center gap-1 rounded-sm border border-border p-0.5 sm:flex">
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              className={`rounded p-1.5 ${view === "grid" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"}`}
            >
              <LayoutGrid className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              aria-label="List view"
              aria-pressed={view === "list"}
              className={`rounded p-1.5 ${view === "list" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"}`}
            >
              <Rows3 className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
        {filtered.length} product{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-sm border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            No products match that search. Try a wattage like “12W”, a name like “COB”, or reset the filters.
          </p>
          <button type="button" onClick={resetAll} className="mt-4 text-sm font-semibold text-primary hover:underline">
            Reset filters
          </button>
        </div>
      ) : (
        <div className={view === "grid" ? "mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "mt-4 flex flex-col gap-4"}>
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 6) * 60} className="h-full">
              <article
                className={`card-hover group flex h-full overflow-hidden rounded-sm border border-border bg-card shadow-soft ${
                  view === "grid" ? "flex-col" : "flex-col sm:flex-row"
                }`}
              >
                <div className={view === "grid" ? "relative" : "relative sm:w-64 sm:shrink-0"}>
                  <Link to="/products/$productId" params={{ productId: p.id }} className="block">
                    <div className={`overflow-hidden bg-surface ${view === "grid" ? "aspect-4/3" : "h-44 sm:h-full"}`}>
                      <img
                        src={pageImage(p.page)}
                        alt={`${p.name} in the Janet catalog`}
                        loading="lazy"
                        className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setQuick(p)}
                    className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground opacity-0 shadow-soft backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                  >
                    <Eye className="size-3.5" aria-hidden /> Quick view
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-base font-semibold leading-snug text-card-foreground">
                      <Link to="/products/$productId" params={{ productId: p.id }} className="hover:text-primary">
                        {p.name}
                      </Link>
                    </h2>
                    {p.model && (
                      <span className="shrink-0 rounded bg-secondary px-2 py-0.5 text-[0.65rem] font-semibold text-secondary-foreground">
                        {p.model}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.variants.slice(0, 4).map((v, n) => (
                      <span key={n} className="rounded border border-border px-2 py-0.5 text-[0.7rem] text-muted-foreground">
                        {v[0]}
                      </span>
                    ))}
                    {p.variants.length > 4 && (
                      <span className="rounded border border-dashed border-border px-2 py-0.5 text-[0.7rem] text-muted-foreground">
                        +{p.variants.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    <AddToEnquiry item={{ id: p.id, name: p.name, ...(p.model ? { model: p.model } : {}), page: p.page }} size="sm" />
                    <EnquiryButtons subject={`${p.name}${p.model ? ` (${p.model})` : ""}`} size="sm" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}

      {quick && (
        <div className="fixed inset-0 z-[65] grid place-items-center p-4">
          <button
            type="button"
            aria-label="Close quick view"
            onClick={() => setQuick(null)}
            className="absolute inset-0 bg-brand-deep/60 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${quick.name} quick view`}
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-sm border border-border bg-background shadow-lift"
          >
            <button
              type="button"
              onClick={() => setQuick(null)}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-sm bg-background/80 p-2 text-muted-foreground backdrop-blur hover:bg-secondary"
            >
              <X className="size-5" />
            </button>
            <div className="grid gap-6 p-6 sm:grid-cols-2">
              <img
                src={pageImage(quick.page)}
                alt={`${quick.name} catalog page`}
                className="w-full rounded-sm border border-border object-cover object-top"
              />
              <div>
                <h2 className="text-xl font-semibold">{quick.name}</h2>
                {quick.model && <p className="mt-1 text-xs text-muted-foreground">Model {quick.model}</p>}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{quick.description}</p>
                <div className="mt-4 overflow-x-auto rounded-sm border border-border">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-surface">
                      <tr>
                        {quick.specColumns.map((c) => (
                          <th key={c} className="whitespace-nowrap px-3 py-2 font-semibold uppercase tracking-wider text-muted-foreground">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {quick.variants.slice(0, 6).map((row, r) => (
                        <tr key={r} className="border-t border-border">
                          {quick.specColumns.map((_, c) => (
                            <td key={c} className="whitespace-nowrap px-3 py-2">{row[c] ?? "—"}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <AddToEnquiry item={{ id: quick.id, name: quick.name, ...(quick.model ? { model: quick.model } : {}), page: quick.page }} size="sm" />
                  <Link
                    to="/products/$productId"
                    params={{ productId: quick.id }}
                    className="inline-flex items-center gap-2 rounded-sm bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    Full details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
