import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — WebForge" },
      {
        name: "description",
        content:
          "Selected projects by WebForge: WordPress sites for consultants and coaches, WooCommerce and Shopify stores, and Wix and Squarespace builds for small businesses.",
      },
      { property: "og:title", content: "Portfolio — WebForge" },
      {
        property: "og:description",
        content:
          "WordPress, WooCommerce, Shopify, Wix and Squarespace projects for consultants, coaches, stores and small businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const testimonials = [
  {
    quote:
      "Talat rebuilt our WooCommerce store in three weeks. Checkout is simpler, sales are up, and I haven't needed to call him once.",
    name: "Ayesha K.",
    role: "Owner, Haven & Hearth",
  },
  {
    quote:
      "He translated a vague idea into a site that actually sounds like me. Clients keep mentioning how professional it feels.",
    name: "Daniel M.",
    role: "Business consultant",
  },
  {
    quote:
      "Fast, honest and calm under pressure. The Shopify build was exactly what he quoted, on exactly the day he promised.",
    name: "Priya S.",
    role: "Founder, Atlas Apparel",
  },
];

export function Portfolio() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-clay">Portfolio</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          Recent <span className="font-serif italic text-primary">work</span>.
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          A selection across WordPress, WooCommerce, Shopify, Wix and
          Squarespace — each one built around a real business goal.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-xl border border-border/70 bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} website`}
                  width={1280}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold text-accent-foreground">
                    {p.platform}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.clientType}</span>
                </div>
                <h2 className="mt-3 text-lg font-bold">{p.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <p className="mt-4 border-t border-border/70 pt-3 text-sm font-semibold text-primary">
                  {p.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-clay">
            Kind words
          </p>
          <h2 className="mt-2 text-3xl font-bold">What clients say</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-xl border border-border/70 bg-card p-6 shadow-soft"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <h2 className="text-3xl font-bold">Your project could be next.</h2>
        <p className="mt-3 text-muted-foreground">
          Tell me what you're building — I'll come back with a plan and a fixed
          price within one business day.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-lift"
        >
          Start a project
        </Link>
      </section>
    </>
  );
}
