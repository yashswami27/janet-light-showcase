import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, products } from "@/data/products";
import { EnquiryButtons, pageImage } from "@/components/site/EnquiryButtons";

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

function ProductsPage() {
  const { category: initialCategory, q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(q ?? "");
  const activeCategory = initialCategory ?? "all";

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return products.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (!needle) return true;
      const haystack = [p.name, p.model ?? "", p.description, p.tags.join(" "), p.variants.flat().join(" ")]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [activeCategory, query]);

  const setCategory = (id: string) =>
    navigate({
      search: (prev: ProductSearch): ProductSearch => {
        const next: ProductSearch = {};
        if (prev.q) next.q = prev.q;
        if (id !== "all") next.category = id;
        return next;
      },
    });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Products</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The complete Janet 2026 range — {products.length} fittings across {categories.length} families. Every
          listing shows wattage, size, lumens, colour temperature and finish exactly as printed in our catalog.
        </p>
      </header>

      <div className="sticky top-16 z-30 -mx-4 mt-8 border-y border-border bg-background/90 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-xl sm:border sm:px-5">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <span className="sr-only">Search products</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, model, wattage or finish…"
            className="w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring"
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
      </div>

      <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
        {filtered.length} product{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            No products match that search. Try a wattage like “12W”, a name like “COB”, or reset the filters.
          </p>
        </div>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <Link to="/products/$productId" params={{ productId: p.id }} className="block">
                <div className="aspect-4/3 overflow-hidden bg-surface">
                  <img
                    src={pageImage(p.page)}
                    alt={`${p.name} in the Janet catalog`}
                    loading="lazy"
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
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
                  {p.variants.slice(0, 4).map((v, i) => (
                    <span key={i} className="rounded border border-border px-2 py-0.5 text-[0.7rem] text-muted-foreground">
                      {v[0]}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  <EnquiryButtons subject={`${p.name}${p.model ? ` (${p.model})` : ""}`} size="sm" />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}