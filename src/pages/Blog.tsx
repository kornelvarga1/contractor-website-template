import { Link } from "react-router-dom";
import { client } from "@/config/client";
import PageBottomStack from "@/components/shared/PageBottomStack";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxBg from "@/components/shared/ParallaxBg";

const Blog = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center pb-20 pt-40 -mt-20">
        <ParallaxBg imageUrl={client.images.hero} />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/40 to-transparent" aria-hidden="true" />
        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-white/70">Check Out Our Blog</p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Tips, project updates, and expert advice from {client.companyName}.
          </p>
        </ScrollReveal>
      </section>

      {/* Posts grid */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {client.blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
              <div className="flex flex-col rounded-sm border border-border bg-card shadow-sm">
                <div className="flex flex-col flex-1 p-6">
                  <span className="inline-block rounded-sm bg-muted px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-base font-bold text-card-foreground leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-foreground/70 transition-colors">
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
                    className="mt-4 text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PageBottomStack />
    </>
  );
};

export default Blog;
