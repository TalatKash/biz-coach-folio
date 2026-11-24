import { createFileRoute, Link } from "@tanstack/react-router";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import { platforms, projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "webintent.studio — Websites that quietly grow your business",
      },
      {
        name: "description",
        content:
          "Talat Shakil builds WordPress and WooCommerce websites with AI-assisted design workflows using Lovable and Claude, alongside eight live client projects.",
      },
      {
        property: "og:title",
        content: "webintent.studio — Websites that quietly grow your business",
      },
      {
        property: "og:description",
        content:
          "WordPress and WooCommerce websites, AI-assisted design with Lovable and Claude, and real-world client projects by Talat Shakil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-[1.05fr_1fr] md:pt-20">
        <div>
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            Freelance web developer
          </p>
          <h1 className="animate-rise-delayed mt-5 text-4xl font-bold leading-[1.12] sm:text-5xl">
            Websites that quietly{" "}
            <span className="font-serif italic text-primary">grow</span> your
            business.
          </h1>
          <p className="animate-rise-delayed mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm Talat — a frontend developer specializing in WordPress and
            WooCommerce, also building on Shopify, Wix and Squarespace. Made for
            consultants, coaches and small business owners who want a site that
            just works.
          </p>
          <div className="animate-rise-late mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lift"
            >
              Start a project
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center rounded-lg border border-input bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View portfolio
            </Link>
          </div>

          <dl className="animate-rise-late mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border/70 pt-6">
            {[
              ["40+", "sites shipped"],
              ["5", "platforms covered"],
              ["6 yrs", "freelance experience"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-heading text-2xl font-semibold text-foreground">
                  {value}
                </dt>
                <dd className="mt-0.5 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-rise-delayed relative">
          <div className="overflow-hidden rounded-2xl border border-border/70 shadow-lift">
            <img
              src={heroWorkspace}
              alt="A calm, minimal web development workspace"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-6 hidden rounded-xl border border-border/70 bg-card px-4 py-3 shadow-lift sm:block">
            <p className="text-xs text-muted-foreground">Current availability</p>
            <p className="text-sm font-semibold text-primary">
              Open for projects this month
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-muted-foreground">
            {platforms.map((p) => (
              <li key={p.name} className="flex items-center gap-2">
                <span className="text-foreground">{p.name}</span>
                {p.flagship && (
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
                    {p.tag}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-clay">
              What I do
            </p>
            <h2 className="mt-2 text-3xl font-bold">Services, without the jargon</h2>
          </div>
          <Link
            to="/services"
            className="hidden shrink-0 text-sm font-semibold text-primary hover:underline sm:block"
          >
            All services →
          </Link>
        </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "WordPress & WooCommerce",
              desc: "Custom themes, fast builds and stores you can manage yourself, with AI-assisted design workflows using Lovable and Claude.",
            },
            {
              title: "Sites for people-first businesses",
              desc: "Consultants, coaches and personal brands — calm, trustworthy layouts that turn visitors into clients.",
            },
            {
              title: "Shops on any platform",
              desc: "Shopify, Wix or Squarespace — I match the platform to your budget and how you want to work.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border/70 bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="mt-6 inline-block text-sm font-semibold text-primary sm:hidden">
          All services →
        </Link>
      </section>

      {/* Featured work */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-clay">
                Recent work
              </p>
              <h2 className="mt-2 text-3xl font-bold">Quiet sites, loud results</h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden shrink-0 text-sm font-semibold text-primary hover:underline sm:block"
            >
              Full portfolio →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <a
                key={p.title}
                href={p.website}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${p.title} website (opens in a new tab)`}
                className="group overflow-hidden rounded-xl border border-border/70 bg-card shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <img
                    src={p.image}
                    alt={`${p.title} website preview`}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary shadow-soft transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-clay">
                    {p.clientType}
                  </p>
                  <h3 className="mt-1.5 font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
                </div>
              </a>
            ))}
          </div>
          <Link to="/portfolio" className="mt-6 inline-block text-sm font-semibold text-primary sm:hidden">
            Full portfolio →
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-clay">How we work</p>
        <h2 className="mt-2 text-3xl font-bold">A calm, predictable process</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Discover", "A short call to understand your business, audience and goals."],
            ["02", "Plan", "A clear scope, timeline and fixed price — before any work starts."],
            ["03", "Build", "You watch progress weekly and give feedback on a live staging link."],
            ["04", "Launch & support", "We go live, then I stay available for edits and upkeep."],
          ].map(([num, title, desc]) => (
            <div key={num} className="rounded-xl border border-border/70 bg-card p-6 shadow-soft">
              <span className="font-serif text-2xl italic text-clay">{num}</span>
              <h3 className="mt-3 font-bold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center sm:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Ready when you are.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/80">
            Tell me about your project in a few sentences. I'll reply within one
            business day with honest advice and a clear quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
