import { Link } from "react-router-dom";
import { client } from "@/config/client";
import PageBottomStack from "@/components/shared/PageBottomStack";
import { WaveDivider } from "@/components/shared/Dividers";

const Blog = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[500px] flex items-center justify-center pb-20 pt-40 -mt-20"
        style={{ backgroundImage: `url(${client.images.hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Check Out Our Blog</p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Tips, project updates, and expert advice from {client.companyName}.
          </p>
        </div>
        <WaveDivider />
      </section>

      {/* Posts grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {client.blogPosts.map((post, i) => (
              <div key={post.slug} className="flex flex-col rounded-sm border border-border bg-card shadow-sm" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="flex flex-col flex-1 p-6">
                  <span className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-base font-bold text-card-foreground leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageBottomStack />
    </>
  );
};

export default Blog;
