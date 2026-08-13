import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  IndianRupee,
  Lightbulb,
  Quote,
  BookOpen,
  Ruler,
  Truck,
  Star,
} from "lucide-react";
import trackImage from "@/assets/showcase-track.jpg";
import outdoorImage from "@/assets/showcase-outdoor.jpg";
import { categories, products, categoryImage } from "@/data/products";
import { company } from "@/data/company";
import { EnquiryButtons, pageImage } from "@/components/site/EnquiryButtons";
import { Reveal, CountUp } from "@/components/site/Reveal";
import { HeroSlider, defaultSlides } from "@/components/site/HeroSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const chipBrands = ["OSRAM", "CREE", "PHILIPS", "BRIDGELUX", "SAMSUNG LED", "EPISTAR", "MEAN WELL"];

const applications = [
  { title: "Residential", text: "Living rooms, bedrooms, false-ceiling coves and wardrobes.", page: 11 },
  { title: "Retail & showroom", text: "Magnetic track and COB spots with crisp beam control.", page: 6 },
  { title: "Office & workspace", text: "Panel, surface and linear fittings with low-glare optics.", page: 17 },
  { title: "Hospitality", text: "Warm, dimmable and colour-tunable layered lighting.", page: 4 },
  { title: "Outdoor & facade", text: "Bollards, spike lights, wall washers and bulkheads.", page: 33 },
  { title: "Architectural detail", text: "Silicon and aluminium profiles for seamless strip lighting.", page: 49 },
];

const process = [
  { icon: BookOpen, title: "Share your plan", text: "Send the room layout or ceiling drawing on WhatsApp or email." },
  { icon: Ruler, title: "Get a lighting layout", text: "We suggest fittings, beam angles and colour temperature for each area." },
  { icon: IndianRupee, title: "Receive a quotation", text: "Itemised pricing with dealer, architect and project rates." },
  { icon: Truck, title: "Delivered & supported", text: "Packed, dispatched and backed by our 2-year replacement warranty." },
];

const testimonials = [
  {
    quote:
      "We have specified Janet fittings on nearly every residential project for the last four years. The beam quality is consistent and replacements are never a problem.",
    name: "Interior design studio",
    role: "Ahmedabad",
  },
  {
    quote:
      "The magnetic track range transformed our showroom. They helped us plan the whole layout before we bought a single fitting.",
    name: "Retail store owner",
    role: "Gujarat",
  },
  {
    quote:
      "Straightforward pricing, genuine LED chips and quick support. Exactly what a contractor needs on site.",
    name: "Electrical contractor",
    role: "Ahmedabad",
  },
];

const faqs = [
  {
    q: "Do you supply to architects, contractors and dealers?",
    a: "Yes. We work with homeowners, interior designers, architects, electrical contractors and dealers, with project pricing available for bulk requirements.",
  },
  {
    q: "What warranty do Janet fittings carry?",
    a: "Most fittings carry a 2-year replacement warranty against manufacturing defects, subject to correct installation and voltage conditions.",
  },
  {
    q: "Can I get help choosing wattage and colour temperature?",
    a: "Absolutely. Share your room dimensions or ceiling layout and we will recommend wattage, beam angle, cut-out size and CCT for each area.",
  },
  {
    q: "Do you deliver outside Ahmedabad?",
    a: "Yes, we regularly dispatch across Gujarat and the rest of India. Send your list through the enquiry form and we will confirm freight and timelines.",
  },
  {
    q: "Can I see the complete catalog?",
    a: "The full 54-page 2026 catalog is available to read online in the Catalog section, and every product page lists the exact specifications printed in it.",
  },
];

function HomePage() {
  const featured = categories.slice(0, 6);

  return (
    <>
      {/* ---------------- Hero slider ---------------- */}
      <HeroSlider slides={defaultSlides} />

      {/* ---------------- Stats band ---------------- */}
      <section className="border-b border-border bg-background">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { label: "Years in lighting", value: new Date().getFullYear() - company.establishedYear, suffix: "+" },
            { label: "Fittings in range", value: products.length, suffix: "+" },
            { label: "Product families", value: categories.length, suffix: "" },
            { label: "Year warranty", value: 2, suffix: "" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-5xl font-light text-foreground">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <p className="eyebrow mt-3 text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ---------------- Chip brand marquee ---------------- */}
      <section aria-label="LED chips we use" className="overflow-hidden border-y border-border bg-surface py-4">
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...chipBrands, ...chipBrands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground/70"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- Highlights ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 90}>
              <div className="card-hover h-full rounded-sm border border-border bg-card p-6 shadow-soft">
                <span className="inline-grid size-11 place-items-center rounded-sm bg-gradient-brand text-primary-foreground">
                  <h.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold text-card-foreground">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Categories ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <h2 className="text-4xl font-light sm:text-5xl">Browse the range</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              {categories.length} lighting families, {products.length} fittings — every product from our 2026
              catalog with full technical specifications.
            </p>
          </Reveal>
          <Link to="/products" className="text-sm font-semibold text-primary hover:underline">
            View all products →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 3) * 90}>
              <Link
                to="/products"
                search={{ category: cat.id }}
                className="group card-hover block h-full overflow-hidden rounded-sm border border-border bg-card shadow-soft"
              >
                <div className="aspect-4/3 overflow-hidden bg-surface">
                  <img
                    src={categoryImage(cat.id)}
                    alt={`${cat.name} page from the Janet catalog`}
                    loading="lazy"
                    className="size-full bg-gradient-night object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary">{cat.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{cat.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Explore <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Applications ---------------- */}
      <section className="mt-10 bg-gradient-night py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              Lighting for every kind of space
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
              From a single bedroom cove to a full retail rollout — tell us the space and we will build the layer plan.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <article className="group relative h-full overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur transition-colors hover:border-primary-foreground/35">
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={pageImage(a.page)}
                      alt={`${a.title} lighting from the Janet catalog`}
                      loading="lazy"
                      className="size-full object-cover object-top opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-primary-foreground">{a.title}</h3>
                    <p className="mt-1 text-sm text-primary-foreground/70">{a.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Motto / about ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-4">
            <img
              src={trackImage}
              alt="Black magnetic track spotlights"
              loading="lazy"
              width={1200}
              height={900}
              className="h-64 w-full rounded-sm object-cover shadow-soft"
            />
            <img
              src={outdoorImage}
              alt="Outdoor bollard and wall lighting on a villa facade"
              loading="lazy"
              width={1200}
              height={900}
              className="mt-8 h-64 w-full rounded-sm object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              <Lightbulb className="size-3.5" aria-hidden /> Our motto
            </span>
            <h2 className="mt-5 text-4xl font-light sm:text-5xl">
              Quality is our lifeline. Service is the reason we are here.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Established in {company.establishedYear}, Janet has served the lighting industry for more than a
              decade from {company.city}. From a single room to a full commercial project, we help you pick the
              right beam angle, colour temperature and finish — and we stand behind every fitting we sell.
            </p>
            <EnquiryButtons subject="general enquiry" className="mt-7" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl font-light sm:text-5xl">How an enquiry works</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Four simple steps from your first message to fittings on site.
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <li className="relative h-full rounded-sm border border-border bg-card p-6 shadow-soft">
                  <span className="font-display text-4xl font-semibold text-primary/15">0{i + 1}</span>
                  <s.icon className="mt-2 size-5 text-primary" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl font-light sm:text-5xl">Trusted on site and on paper</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="card-hover h-full rounded-sm border border-border bg-card p-6 shadow-soft">
                <Quote className="size-6 text-primary/40" aria-hidden />
                <blockquote className="mt-4 text-sm leading-relaxed text-card-foreground">{t.quote}</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.name}</span> · {t.role}
                  <span className="mt-2 flex gap-0.5 text-brand-warm">
                    {Array.from({ length: 5 }).map((_, n) => (
                      <Star key={n} className="size-3.5 fill-current" aria-hidden />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl font-light sm:text-5xl">Frequently asked</h2>
        </Reveal>
        <Reveal delay={90}>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-gradient-brand px-6 py-14 text-center sm:px-12">
            <div aria-hidden className="animate-float absolute -left-10 -top-10 size-52 rounded-full bg-primary-foreground/10 blur-2xl" />
            <h2 className="relative text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              Planning a space? Let's light it well.
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85">
              Share your requirement and get a fitting-by-fitting recommendation with pricing — usually the same day.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Start an enquiry <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Build an enquiry list
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
