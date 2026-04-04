import { useRef, useEffect } from "react";

interface ParallaxBgProps {
  imageUrl: string;
}

/**
 * Parallax background image that scrolls at ~60% of page scroll speed.
 * Uses a ref + direct style mutation to avoid React re-renders on every scroll event.
 * Parent must have position:relative and overflow:hidden.
 */
const ParallaxBg = ({ imageUrl }: ParallaxBgProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parent = el.parentElement;
    let rafId: number;

    const update = () => {
      if (!el || !parent) return;
      // Mobile: no parallax, no extension — keeps image at natural bg-cover scale.
      // Desktop (lg+): extend element and apply viewport-relative parallax shift.
      if (window.innerWidth < 1024) {
        el.style.top = "0";
        el.style.bottom = "0";
        el.style.transform = "none";
        return;
      }
      el.style.top = "-40%";
      el.style.bottom = "-40%";
      const rect = parent.getBoundingClientRect();
      el.style.transform = `translateY(${-rect.top * 0.15}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})`, willChange: "transform" }}
    />
  );
};

export default ParallaxBg;
