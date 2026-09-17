import { createFileRoute, Link } from "@tanstack/react-router";
import { platforms } from "@/lib/projects";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — WebForge" },
      {
        name: "description",
        content:
          "WordPress and WooCommerce development, business and coaching sites, and stores on Shopify, Wix and Squarespace — by freelance frontend developer Talat Shakil.",
      },
      { property: "og:title", content: "Services — WebForge" },
      {
        property: "og:description",
        content:
          "WordPress and WooCommerce development, business and coaching sites, and stores on Shopify, Wix and Squarespace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  {
    title: "WordPress Development",
    flagship: true,
    desc: "My specialty. Custom, fast WordPress builds — no bloated page builders, just clean code you can maintain.",
    points: [
      "Custom theme or lightweight block theme",
      "Gutenberg blocks tailored to your content",
      "Blog, portfolio and booking setups",
      "Speed optimization and security hardening",
    ],
  },
  {
    title: "WooCommerce & E-commerce",
    flagship: true,
    desc: "Online stores designed around one goal: a checkout so smooth customers finish it.",
    points: [
      "Full store setup — products, shipping, taxes, payments",
      "Checkout and cart flow optimization",
      "Inventory and order management that makes sense",
      "Migration from Shopify, Wix or elsewhere",
    ],
  },
  {
    title: "Sites for Consultants & Coaches",
    flagship: true,
    desc: "For business consultants, life coaches and personal brands — calm, trustworthy sites that turn visitors into booked calls.",
    points: [
      "Positioning-first page structure",
      "Booking and discovery-call flows",
      "Email list and newsletter integration",
      "Easy self-editing after launch",
    ],
  },
  {
    title: "Shopify Stores",
    flagship: false,
    desc: "When Shopify is the right fit, I set up a storefront that feels custom without heavy app stacks.",
    points: [
      "Theme setup and customization",
      "Product pages built to convert",
      "App integrations and Shopify Payments",
    ],
  },
  {
    title: "Wix Websites",
    flagship: false,
    desc: "Great for small businesses that want to make their own day-to-day edits on a simple platform.",
    points: [
      "Design and build within Wix Studio",
      "Menus, galleries, forms and local SEO",
      "Handover so you can edit confidently",
    ],
  },
  {
    title: "Squarespace Sites",
    flagship: false,
    desc: "Elegant portfolios, blogs and personal sites with editorial layouts — set up and handed off clean.",
    points: [
      "Custom layout within Squarespace",
      "Blog and newsletter configuration",
      "Domain, DNS and launch support",
    ],
  },
];

const packages = [
  {
    name: "Starter Site",
    price: "from $600",
    for: "Personal sites, simple portfolios and blogs",
    includes: ["Up to 5 pages", "Mobile-first design", "Basic SEO setup", "2 rounds of revisions"],
  },
  {
    name: "Business Site",
    price: "from $1,200",
    for: "Consultants, coaches and service businesses",
    includes: ["Up to 10 pages", "Custom theme or block theme", "Booking or lead forms", "Analytics & Search Console", "30 days of post-launch support"],
  },
  {
    name: "Online Store",
    price: "from $1,800",
    for: "WooCommerce and Shopify stores",
    includes: ["Full store setup", "Payment, shipping & tax config", "Checkout optimization", "Team training session", "60 days of post-launch support"],
  },
];

export function Services() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-clay">Services</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          The right platform, built <span className="font-serif italic text-primary">properly</span>.
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          I'm platform-agnostic but WordPress-first. Below is what I build and
          when each tool is the right choice — no upselling, ever.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-xl border border-border/70 bg-card p-6 shadow-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">{s.title}</h2>
                {s.flagship && (
                  <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
                    Specialty
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-clay">
            Typical budgets
          </p>
          <h2 className="mt-2 text-3xl font-semibold">Simple, fixed pricing</h2>
          <p className="mt-3 max-w-lg text-sm text-muted-foreground">
            Every project gets a fixed quote after a short call — you always know
            the full cost before work begins.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`rounded-xl border bg-card p-6 shadow-soft ${
                  i === 1 ? "border-primary/50 shadow-lift" : "border-border/70"
                }`}
              >
                {i === 1 && (
                  <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="mt-3 font-semibold">{pkg.name}</h3>
                <p className="mt-1 font-heading text-2xl font-semibold text-primary">{pkg.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">{pkg.for}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay/70" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <h2 className="text-3xl font-semibold">Not sure which platform you need?</h2>
        <p className="mt-3 text-muted-foreground">
          Send me your goals and budget — I'll recommend honestly, even if the
          answer is a cheaper option than you expected.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-lift"
        >
          Ask for a recommendation
        </Link>
      </section>
    </>
  );
}
