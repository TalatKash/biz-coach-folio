import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — WebIntent Studio" },
      {
        name: "description",
        content:
          "Selected live websites by Talat Shakil for education, wellness, healthcare, professional services, home services and e-commerce clients.",
      },
      { property: "og:title", content: "Portfolio — WebIntent Studio" },
      {
        property: "og:description",
        content:
          "Explore eight real websites built for education, wellness, healthcare, legal, carpentry and fulfilment businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

export function Portfolio() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-clay">Portfolio</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          Recent <span className="font-serif italic text-primary">work</span>.
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          A selection of live websites I’ve built for real businesses. Visit each
          site to explore the finished work.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${p.title} website (opens in a new tab)`}
              className="group overflow-hidden rounded-xl border border-border/70 bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={`${p.title} website preview`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary shadow-soft transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{p.clientType}</span>
                <h2 className="mt-3 text-lg font-bold">{p.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <p className="mt-4 border-t border-border/70 pt-3 text-sm font-semibold text-primary">Visit live website ↗</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-clay">Selected work</p>
          <h2 className="mt-2 text-3xl font-bold">Built for very different businesses</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From tutoring and healthcare to professional services and e-commerce,
            each website is shaped around the people it needs to reach.
          </p>
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
