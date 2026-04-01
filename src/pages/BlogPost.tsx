import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { client } from "@/config/client";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = client.blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  useEffect(() => {
    document.title = `${post.title} | ${client.companyName}`;
  }, [post]);

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <span className="inline-block rounded-sm bg-accent/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {post.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-primary-foreground/60">
            {post.date} &nbsp;·&nbsp; {post.readTime}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/80">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="text-2xl font-bold text-foreground">Related Services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {client.services.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-sm border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent"
              >
                <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-3 text-primary-foreground/70">{client.heroCtaText}</p>
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

export default BlogPost;
