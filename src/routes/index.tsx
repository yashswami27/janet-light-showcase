import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap, IndianRupee, Sparkles, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-lighting.jpg";
import trackImage from "@/assets/showcase-track.jpg";
import outdoorImage from "@/assets/showcase-outdoor.jpg";
import { categories, products } from "@/data/products";
import { company } from "@/data/company";
import { EnquiryButtons, pageImage } from "@/components/site/EnquiryButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Janet Lights Ahmedabad | LED Lighting by Jay Enterprise" },
      {
        name: "description",
        content:
          "Janet Innovative Lights by Jay Enterprise, Ahmedabad — LED down lights, COB spot lights, magnetic track, panel, surface and outdoor lighting. BIS approved, 2-year warranty.",
      },
      { property: "og:title", content: "Janet Lights Ahmedabad | LED Lighting by Jay Enterprise" },
      {
        property: "og:description",
        content:
          "Explore the full Janet 2026 LED lighting catalog — track, spot, panel, surface, outdoor and profile lighting from Ahmedabad.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: Zap, title: "Energy efficient", text: "High-efficacy OSRAM, Cree, Philips and Bridgelux LEDs across the range." },
  { icon: ShieldCheck, title: "BIS approved", text: "Certified fittings backed by a 2-year replacement warranty." },
  { icon: IndianRupee, title: "Fair trade pricing", text: "Dealer, architect and project pricing straight from our Ahmedabad store." },
  { icon: Sparkles, title: "One-roof solution", text: "Over a decade of lighting every kind of home, retail and office space." },
];

function HomePage() {
  const featured = categories.slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Modern interior illuminated with Janet LED track and profile lighting"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/80 to-brand-deep/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground/80">
            {company.legalName} · {company.city} · Since {company.establishedYear}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Light that shapes the way a space feels.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Janet is an efficient solution for all light fixtures under one roof — professional LED down
            lights, spot lights, magnetic track systems, panels and architectural outdoor lighting.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Explore {products.length}+ products <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Enquire now
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <h.icon className="size-6 text-primary" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-card-foreground">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Browse the range</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              {categories.length} lighting families, {products.length} fittings — every product from our 2026
              catalog with full technical specifications.
            </p>
          </div>
          <Link to="/products" className="text-sm font-semibold text-primary hover:underline">
            View all products →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              search={{ category: cat.id }}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="aspect-4/3 overflow-hidden bg-surface">
                <img
                  src={pageImage(cat.pages[0] ?? 3)}
                  alt={`${cat.name} page from the Janet catalog`}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground">{cat.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={trackImage}
              alt="Black magnetic track spotlights"
              loading="lazy"
              width={1200}
              height={900}
              className="h-64 w-full rounded-xl object-cover shadow-soft"
            />
            <img
              src={outdoorImage}
              alt="Outdoor bollard and wall lighting on a villa facade"
              loading="lazy"
              width={1200}
              height={900}
              className="mt-8 h-64 w-full rounded-xl object-cover shadow-soft"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              <Lightbulb className="size-3.5" aria-hidden /> Our motto
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Quality is our lifeline. Service is the reason we are here.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Established in {company.establishedYear}, Janet has served the lighting industry for more than a
              decade from {company.city}. From a single room to a full commercial project, we help you pick the
              right beam angle, colour temperature and finish — and we stand behind every fitting we sell.
            </p>
            <EnquiryButtons subject="general enquiry" className="mt-7" />
          </div>
        </div>
      </section>
    </>
  );
}