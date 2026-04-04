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

    // Compute the section's static offset from the document top once.
    // Using scrollY + getBoundingClientRect gives the true document offset
    // regardless of where in the page the section sits.
    const parent = el.parentElement;
    const sectionTop = parent
      ? parent.getBoundingClientRect().top + window.scrollY
      : 0;

    let rafId: number;

    const update = () => {
      if (el) el.style.transform = `translateY(${(window.scrollY - sectionTop) * 0.4}px)`;
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
      style={{ backgroundImage: `url(${imageUrl})`, willChange: "transform", top: "-30%", bottom: "-30%" }}
    />
  );
};

export default ParallaxBg;
