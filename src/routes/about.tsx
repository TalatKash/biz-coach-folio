import { createFileRoute, Link } from "@tanstack/react-router";
import aboutDesk from "@/assets/about-desk.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WebForge" },
      {
        name: "description",
        content:
          "Meet Talat Shakil, the freelance frontend developer behind WebForge — WordPress and WooCommerce specialist serving consultants, coaches and small businesses.",
      },
      { property: "og:title", content: "About — WebForge" },
      {
        property: "og:description",
        content:
          "Meet Talat Shakil, the freelance frontend developer behind WebForge — WordPress and WooCommerce specialist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const skills = [
  "HTML & CSS",
  "JavaScript / TypeScript",
  "React",
  "PHP (WordPress themes)",
  "Gutenberg & block themes",
  "WooCommerce architecture",
  "Shopify Liquid",
  "SEO fundamentals",
  "Core Web Vitals",
  "Accessibility (a11y)",
];

const values = [
  {
    title: "Honest advice first",
    desc: "If a $300 Squarespace site fits your stage better than a $2,000 custom build, I'll say so — and mean it.",
  },
  {
    title: "Fixed quotes, no surprises",
    desc: "Scope, timeline and price are agreed in writing before work starts. The number on the quote is the number you pay.",
  },
  {
    title: "You own everything",
    desc: "Hosting, domain, admin logins, code — they're all yours from day one. No lock-in, no hostage-taking.",
  },
  {
    title: "Support that doesn't vanish",
    desc: "Every project includes post-launch support, and I answer emails long after launch day.",
  },
];

export function About() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-clay">About</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">
            One developer, <span className="font-serif italic text-primary">fully</span> on your side.
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm Talat Shakil, a frontend web developer and the person behind
              WebForge. For the past six years I've been building websites
              freelance — mostly for business consultants, life coaches, small
              business owners and people who need a personal site or blog that
              actually earns its keep.
            </p>
            <p>
              My specialty is WordPress and WooCommerce: it powers most of the
              web, and done well it gives small businesses a site they can run
              themselves without paying me for every comma. When a project fits
              Shopify, Wix or Squarespace better, I build there instead — the
              platform is a tool, not a religion.
            </p>
            <p>
              I work directly with the person who owns the website. No account
              managers, no handoffs — you brief me, I build it, we launch it
              together.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-lift"
          >
            Work with me
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/70 shadow-lift">
          <img
            src={aboutDesk}
            alt="Talat at work in a calm, minimal studio"
            width={1280}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-bold">Toolbox</h2>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-clay">
          How I work
        </p>
        <h2 className="mt-2 text-3xl font-bold">Four promises, kept</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-border/70 bg-card p-6 shadow-soft"
            >
              <h3 className="font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
