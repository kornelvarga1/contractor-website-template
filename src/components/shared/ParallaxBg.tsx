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

    // Capture section offset once (stable — section doesn't move in normal flow).
    const getSectionTop = () =>
      parent ? parent.getBoundingClientRect().top + window.scrollY : 0;
    let sectionTop = getSectionTop();

    const update = () => {
      if (!el || !parent) return;

      // Mobile: static bg, no extension, no parallax — prevents bg-cover zoom.
      if (window.innerWidth < 1024) {
        el.style.top = "0";
        el.style.bottom = "0";
        el.style.transform = "none";
        return;
      }

      // Desktop: extend element vertically so there's room to shift.
      el.style.top = "-40%";
      el.style.bottom = "-40%";

      // Clamp the shift to ±40% of the section height so the image never
      // drifts outside the extended area — no white gaps, no matter the scroll position.
      const maxShift = parent.offsetHeight * 0.4;
      const raw = (window.scrollY - sectionTop) * 0.3;
      const shift = Math.max(-maxShift, Math.min(maxShift, raw));
      el.style.transform = `translateY(${shift}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    // Re-measure sectionTop on resize (layout may reflow).
    const onResize = () => {
      sectionTop = getSectionTop();
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
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
