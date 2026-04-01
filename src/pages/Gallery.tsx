import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { client } from "@/config/client";

// ── Gallery Data ─────────────────────────────────────────────
// Replace these with real project photos. Each entry = one completed job.
const PROJECTS = [
  {
    id: 1,
    title: "Full Tile Roof Replacement",
    location: "Scottsdale, AZ",
    category: "Roof Replacement",
    images: [
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "Storm Damage Emergency Repair",
    location: "Mesa, AZ",
    category: "Storm Damage",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "Standing Seam Metal Roof",
    location: "Phoenix, AZ",
    category: "Metal Roofing",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "Commercial Flat Roof Installation",
    location: "Tempe, AZ",
    category: "Commercial",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    ],
  },
  {
    id: 5,
    title: "Shingle Roof Repair & Patch",
    location: "Chandler, AZ",
    category: "Roof Repair",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
  },
  {
    id: 6,
    title: "Flat Roof Coating & Seal",
    location: "Glendale, AZ",
    category: "Flat Roof",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ projectIdx: number; imgIdx: number } | null>(null);

  const filtered = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const openLightbox = (projectIdx: number, imgIdx: number) =>
    setLightbox({ projectIdx, imgIdx });

  const closeLightbox = () => setLightbox(null);

  const navigateLightbox = (dir: -1 | 1) => {
    if (!lightbox) return;
    const project = filtered[lightbox.projectIdx];
    const nextImg = lightbox.imgIdx + dir;
    if (nextImg >= 0 && nextImg < project.images.length) {
      setLightbox({ ...lightbox, imgIdx: nextImg });
    } else if (dir === 1 && lightbox.projectIdx < filtered.length - 1) {
      setLightbox({ projectIdx: lightbox.projectIdx + 1, imgIdx: 0 });
    } else if (dir === -1 && lightbox.projectIdx > 0) {
      const prevProject = filtered[lightbox.projectIdx - 1];
      setLightbox({ projectIdx: lightbox.projectIdx - 1, imgIdx: prevProject.images.length - 1 });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl" style={{ lineHeight: 1.1 }}>
            Our <span className="text-accent">Completed</span> Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/70 md:text-lg" style={{ textWrap: "balance" as any }}>
            Browse real roofing jobs we've completed across the Phoenix metro area.
            Quality craftsmanship you can see.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border bg-background sticky top-16 z-30">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 lg:px-6 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, pIdx) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-sm bg-card shadow-md hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(pIdx, 0)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {project.images.length > 1 && (
                    <span className="absolute bottom-2 right-2 rounded-sm bg-primary/80 px-2 py-0.5 text-xs font-medium text-primary-foreground">
                      +{project.images.length - 1} more
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
                  <span className="mt-2 inline-block rounded-sm bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent-foreground">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl" style={{ lineHeight: 1.15 }}>
            Ready to Start Your Project?
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            Get a free estimate and see why Phoenix homeowners trust us with their roofs.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/quote"
              className="inline-flex h-11 items-center rounded-sm bg-accent px-8 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors active:scale-[0.97]"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${client.phoneTel}`}
              className="inline-flex h-11 items-center gap-2 rounded-sm border border-primary-foreground/20 px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/5 transition-colors active:scale-[0.97]"
            >
              <Phone className="h-4 w-4 text-accent" />
              {client.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <img
            src={filtered[lightbox.projectIdx].images[lightbox.imgIdx]}
            alt={filtered[lightbox.projectIdx].title}
            className="max-h-[85vh] max-w-full rounded-sm object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-sm font-semibold">{filtered[lightbox.projectIdx].title}</p>
            <p className="text-xs text-white/60">{filtered[lightbox.projectIdx].location}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
