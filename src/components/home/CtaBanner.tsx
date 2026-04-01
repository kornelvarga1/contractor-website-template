import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          READY TO TAKE THE NEXT STEP?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Get a Free Quote Today!
        </p>
        <Link
          to="/quote"
          className="mt-8 inline-flex h-12 items-center rounded-sm bg-accent px-10 text-base font-bold text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
