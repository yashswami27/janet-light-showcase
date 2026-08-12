import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Building2, Users, Wrench } from "lucide-react";
import showcase from "@/assets/showcase-track.jpg";
import { company } from "@/data/company";
import { categories, products } from "@/data/products";
import { EnquiryButtons } from "@/components/site/EnquiryButtons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Janet | Jay Enterprise, Ahmedabad Lighting Since 2013" },
      {
        name: "description",
        content:
          "Janet Innovative Lights is a brand of Jay Enterprise, Ahmedabad — over a decade of energy-efficient, BIS approved LED lighting with a 2-year warranty.",
      },
      { property: "og:title", content: "About Janet Innovative Lights" },
      {
        property: "og:description",
        content: "Lighting Ahmedabad homes, showrooms and offices since 2013 — quality, stability, innovation and service.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: BadgeCheck, title: "Quality", text: "Our lifeline — BIS approved fittings with a 2-year warranty." },
  { icon: Building2, title: "Stability", text: "Our foundation — more than a decade serving the lighting industry." },
  { icon: Wrench, title: "Innovation", text: "Our support to go on — dimmable, tunable and smart app-controlled ranges." },
  { icon: Users, title: "Service", text: "The reason we are here — guidance from selection to installation." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Company profile</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          An efficient solution for all light fixtures, under one roof.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {company.brand}, established in {company.establishedYear} and run by {company.legalName} in{" "}
          {company.city}, has been serving the lighting industry successfully for more than a decade. We deal in
          professional LED down lights, spot lights, track lights, panel lights and a wide range of decorative
          and architectural fittings.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-sm border border-border bg-card p-6 shadow-soft">
              <v.icon className="size-6 text-primary" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">{v.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
        <img
          src={showcase}
          alt="Janet magnetic track spotlights"
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full rounded-sm object-cover shadow-soft"
        />
      </div>

      <div className="mt-14 grid gap-6 rounded-sm bg-gradient-brand p-8 text-primary-foreground sm:grid-cols-3">
        <div>
          <p className="text-4xl font-semibold">{new Date().getFullYear() - company.establishedYear}+</p>
          <p className="mt-1 text-sm opacity-85">years in lighting</p>
        </div>
        <div>
          <p className="text-4xl font-semibold">{products.length}+</p>
          <p className="mt-1 text-sm opacity-85">fittings in the current range</p>
        </div>
        <div>
          <p className="text-4xl font-semibold">{categories.length}</p>
          <p className="mt-1 text-sm opacity-85">product families</p>
        </div>
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">Why customers choose Janet</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li>• Energy efficient, long lasting fixtures built around OSRAM, Cree, Philips and Bridgelux LEDs.</li>
          <li>• BIS approved products supported by a 2-year warranty.</li>
          <li>• Fair pricing for homeowners, interior designers, architects and contractors alike.</li>
          <li>• Dimmable, tunable and Tuya Smart Life app-controlled options across key ranges.</li>
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Browse the <Link to="/products" className="font-semibold text-primary hover:underline">full product range</Link>{" "}
          or flip through the <Link to="/catalog" className="font-semibold text-primary hover:underline">2026 catalog</Link>.
        </p>
        <EnquiryButtons subject="working with Janet" className="mt-7" />
      </section>
    </div>
  );
}