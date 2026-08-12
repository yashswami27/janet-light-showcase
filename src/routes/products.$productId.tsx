import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { categories, products, type Category } from "@/data/products";
import { EnquiryButtons, pageImage } from "@/components/site/EnquiryButtons";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found | Janet Lights" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name}${product.model ? ` (${product.model})` : ""} | Janet Lights`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: ProductNotFound,
});

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold">Product not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">This fitting may have been renamed or discontinued.</p>
      <Link to="/products" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
        Back to all products
      </Link>
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const category = categories.find((c: Category) => c.id === product.category);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="size-4" aria-hidden /> All products
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-sm border border-border bg-surface">
          <img
            src={pageImage(product.page)}
            alt={`Catalog page ${product.page} showing ${product.name}`}
            className="w-full object-cover"
          />
        </div>

        <div>
          {category && (
            <Link
              to="/products"
              search={{ category: category.id }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
          {product.model && <p className="mt-1 text-sm text-muted-foreground">Model {product.model}</p>}
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          {product.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((t: string) => (
                <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          )}

          <EnquiryButtons subject={`${product.name}${product.model ? ` (${product.model})` : ""}`} className="mt-7" />

          <div className="mt-9 overflow-x-auto rounded-sm border border-border">
            <table className="w-full min-w-[520px] text-left text-sm">
              <caption className="sr-only">Technical specifications for {product.name}</caption>
              <thead className="bg-surface">
                <tr>
                  {product.specColumns.map((c: string) => (
                    <th key={c} scope="col" className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.variants.map((row: string[], i: number) => (
                  <tr key={i} className="border-t border-border">
                    {product.specColumns.map((_: string, j: number) => (
                      <td key={j} className="whitespace-nowrap px-4 py-3 text-foreground">
                        {row[j] ?? "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Catalog page {product.page} · Specifications may change without notice.</p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">More from {category?.name ?? "this range"}</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                to="/products/$productId"
                params={{ productId: p.id }}
                className="group overflow-hidden rounded-sm border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="aspect-4/3 overflow-hidden bg-surface">
                  <img src={pageImage(p.page)} alt={p.name} loading="lazy" className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold group-hover:text-primary">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}