import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WebForge" },
      {
        name: "description",
        content:
          "Start a website project with WebForge. Tell Talat about your WordPress, WooCommerce, Shopify, Wix or Squarespace project and get a fixed quote within one business day.",
      },
      { property: "og:title", content: "Contact — WebForge" },
      {
        property: "og:description",
        content:
          "Start a website project with WebForge — get a fixed quote within one business day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-clay">
              Contact
            </p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">
              Let's talk about your{" "}
              <span className="font-serif italic text-primary">project</span>.
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A few sentences about what you need is plenty. I'll reply within
              one business day with honest advice, a timeline and a fixed
              price.
            </p>

            <div className="mt-10 space-y-5 border-t border-border/70 pt-8 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Email
                </p>
                <p className="mt-1 font-semibold">hello@webforge.studio</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Working hours
                </p>
                <p className="mt-1 font-semibold">
                  Mon – Fri, flexible across time zones
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Response time
                </p>
                <p className="mt-1 font-semibold">Within 24 hours on business days</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-soft sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent-foreground"
                    />
                  </svg>
                </div>
                <h2 className="mt-5 text-xl font-semibold">Message received</h2>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. You'll hear back from me within one
                  business day — usually sooner.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Name</span>
                    <input required name="name" placeholder="Jane Cooper" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Platform</span>
                    <select name="platform" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Choose one
                      </option>
                      <option>Not sure yet — recommend one</option>
                      <option>WordPress / WooCommerce</option>
                      <option>Shopify</option>
                      <option>Wix</option>
                      <option>Squarespace</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Budget</span>
                    <select name="budget" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Choose one
                      </option>
                      <option>Under $500</option>
                      <option>$500 – $1,200</option>
                      <option>$1,200 – $3,000</option>
                      <option>$3,000+</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Project details</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="What does your business do, and what should the website achieve?"
                    className={`${inputClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lift"
                >
                  Send message
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  No spam, no newsletter — just a reply about your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
