import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import heroImage from "@/assets/hero-lighting.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: { label: string; to: "/products" | "/catalog" | "/contact" };
};

export function HeroSlider({ slides }: { slides?: Slide[] }) {
  const items: Slide[] = slides ?? [];
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, [items.length]);

  const active = items[index] ?? items[0];
  if (!active) return null;

  return (
    <section className="relative isolate h-[78vh] min-h-[520px] w-full overflow-hidden bg-brand-deep">
      {items.map((s, i) => (
        <div
          key={s.title}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt={s.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            className={`size-full object-cover ${i === index ? "animate-ken-burns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/45 to-brand-deep/40" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p key={`e${index}`} className="eyebrow animate-fade-up text-primary-foreground/70">
          {active.eyebrow}
        </p>
        <h1
          key={`t${index}`}
          className="animate-fade-up mt-5 text-4xl font-light leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {active.title}
        </h1>
        <p
          key={`s${index}`}
          className="animate-fade-up mt-5 max-w-xl text-base italic text-primary-foreground/80 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {active.subtitle}
        </p>
        <Link
          key={`c${index}`}
          to={active.cta.to}
          className="animate-fade-up mt-9 inline-flex items-center gap-2 rounded-sm bg-primary-foreground px-8 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-deep transition-transform hover:-translate-y-0.5"
          style={{ animationDelay: "240ms" }}
        >
          {active.cta.label} <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:left-8"
          >
            <ChevronLeft className="size-8" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:right-8"
          >
            <ChevronRight className="size-8" aria-hidden />
          </button>
          <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
            {items.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-[3px] rounded-full transition-all ${i === index ? "w-10 bg-primary-foreground" : "w-5 bg-primary-foreground/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export const defaultSlides: Slide[] = [
  {
    image: heroImage,
    alt: "Modern interior illuminated with Janet LED track and profile lighting",
    eyebrow: "Jay Enterprise · Ahmedabad",
    title: "The art of lighting",
    subtitle: "Every fixture designed to blend craft with technology.",
    cta: { label: "Explore all products", to: "/products" },
  },
  {
    image: slide2,
    alt: "Living room lit with recessed spot lights and a linear profile light",
    eyebrow: "Residential & architectural",
    title: "Light that shapes a space",
    subtitle: "Down lights, coves and profiles planned room by room.",
    cta: { label: "View the catalogue", to: "/catalog" },
  },
  {
    image: slide3,
    alt: "Retail showroom lit with black magnetic track spotlights",
    eyebrow: "Retail & commercial",
    title: "Precision for every project",
    subtitle: "Magnetic track and COB systems with true beam control.",
    cta: { label: "Start an enquiry", to: "/contact" },
  },
];
