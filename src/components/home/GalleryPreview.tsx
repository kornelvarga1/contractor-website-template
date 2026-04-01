import { Link } from "react-router-dom";

const PREVIEW_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&q=80",
    alt: "Full tile roof replacement",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    alt: "Completed roofing project",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Storm damage repair",
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    alt: "Standing seam metal roof",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    alt: "Commercial flat roof",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Residential roof repair",
  },
];

const GalleryPreview = () => {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
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

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_IMAGES.map((img) => (
            <Link key={img.src} to="/gallery" className="group block overflow-hidden rounded-sm">
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
