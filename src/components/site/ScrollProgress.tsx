import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-brand transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
      {progress > 0.15 && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-5 left-5 z-40 grid size-10 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-secondary md:bottom-8 md:left-8"
        >
          <ArrowUp className="size-4" />
        </button>
      )}
    </>
  );
}