import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { client } from "@/config/client";
import PageBottomStack from "@/components/shared/PageBottomStack";
import { WaveDivider } from "@/components/shared/Dividers";
import { useQuoteModal } from "@/hooks/useQuoteModal";

// ── Gallery Data ─────────────────────────────────────────────
// Replace these with real project photos. Each entry = one completed job.
const PROJECTS = [
  {
    id: 1,
    title: "Complete System Replacement",
    location: `${client.address.city}, ${client.address.state}`,
    category: "Replacement",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "Emergency Repair",
    location: `${client.address.city}, ${client.address.state}`,
    category: "Repair",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "New Installation",
    location: `${client.address.city}, ${client.address.state}`,
    category: "Installation",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "Commercial Project",
    location: `${client.address.city}, ${client.address.state}`,
    category: "Commercial",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    ],
  },
  {
    id: 5,
    title: "Repair & Restoration",
    location: `${client.address.city}, ${client.address.state}`,
    category: "Repair",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    ],
  },
  {
    id: 6,
    title: "Maintenance Service",
    location: `${client.address.city}, ${client.address.state}`,
    category: "Maintenance",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    ],
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ projectIdx: number; imgIdx: number } | null>(null);
  const { openModal } = useQuoteModal();

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
      <section
        className="relative overflow-hidden min-h-[500px] flex items-center justify-center py-20"
        style={{ backgroundImage: `url(${client.images.hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Our Work</p>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl" style={{ lineHeight: 1.1 }}>
            Our <span className="text-accent">Completed</span> Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Browse real jobs we've completed across {client.address.city} and surrounding areas.
            Quality craftsmanship you can see.
          </p>
          <div className="mt-6">
            <button onClick={openModal} className="inline-flex h-11 items-center justify-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Get a Free Quote
            </button>
          </div>
        </div>
        <WaveDivider />
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
      <section className="bg-white py-12 md:py-16">
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

      <PageBottomStack />

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
