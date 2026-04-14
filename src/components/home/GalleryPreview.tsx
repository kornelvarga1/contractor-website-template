import { Link } from "react-router-dom";
import { client } from "@/config/client";
import ScrollReveal from "@/components/ScrollReveal";

const GalleryPreview = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Work
            </h2>
            <Link
              to="/gallery"
              className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              See All Photos →
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {client.galleryPreview.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 0.08}>
              <Link to="/gallery" className="group block overflow-hidden rounded-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
