import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { client } from "@/config/client";
import CtaBanner from "@/components/home/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxBg from "@/components/shared/ParallaxBg";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = client.blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | ${client.companyName}`;
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center pb-20 pt-40 -mt-20">
        <ParallaxBg imageUrl={client.images.hero} />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/40 to-transparent" aria-hidden="true" />
        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-6">
          <span className="inline-block rounded-sm bg-white/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
            {post.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-white/60">
            {post.date} &nbsp;·&nbsp; {post.readTime}
          </p>
        </ScrollReveal>
      </section>

      {/* Article body */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <ScrollReveal>
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/80">
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground">Related Services</h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {client.services.slice(0, 3).map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.1}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block rounded-sm border border-border bg-card p-5 shadow-sm transition-colors hover:border-foreground/30"
                >
                  <h3 className="font-semibold text-card-foreground group-hover:text-foreground/70 transition-colors">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default BlogPost;
