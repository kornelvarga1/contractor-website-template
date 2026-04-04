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

    // Viewport-relative approach: offset = -(section top from viewport) * speed.
    // This keeps the displacement bounded to ~±(viewportHeight * speed) regardless
    // of where the section sits on the page — no white-gap risk.
    const parent = el.parentElement;
    let rafId: number;

    const update = () => {
      if (!el || !parent) return;
      const rect = parent.getBoundingClientRect();
      el.style.transform = `translateY(${-rect.top * 0.15}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update(); // set initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-x-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})`, willChange: "transform", top: "-50%", bottom: "-50%" }}
    />
  );
};

export default ParallaxBg;
