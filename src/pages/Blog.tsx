import { Link } from "react-router-dom";
import { client } from "@/config/client";

const Blog = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Tips, project updates, and expert advice from {client.companyName}.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {client.blogPosts.map((post) => (
              <div key={post.slug} className="flex flex-col rounded-sm border border-border bg-card shadow-sm">
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

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Have a question? Get a free quote today.
          </h2>
          <Link
            to="/quote"
            className="mt-6 inline-flex h-11 items-center rounded-sm bg-accent px-10 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
