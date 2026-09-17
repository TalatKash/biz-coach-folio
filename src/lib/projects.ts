import meridian from "@/assets/work-meridian.jpg";
import haven from "@/assets/work-haven.jpg";
import bloom from "@/assets/work-bloom.jpg";
import atlas from "@/assets/work-atlas.jpg";
import copperKettle from "@/assets/work-copperkettle.jpg";
import fieldNotes from "@/assets/work-fieldnotes.jpg";

export type Project = {
  title: string;
  clientType: string;
  platform: "WordPress" | "WooCommerce" | "Shopify" | "Wix" | "Squarespace";
  summary: string;
  image: string;
  result: string;
};

export const projects: Project[] = [
  {
    title: "Meridian Consulting",
    clientType: "Business consultancy",
    platform: "WordPress",
    summary:
      "A custom WordPress theme with editable case studies and a lead-focused layout for a strategy consultancy.",
    image: meridian,
    result: "+58% enquiries in 3 months",
  },
  {
    title: "Haven & Hearth",
    clientType: "Home goods store",
    platform: "WooCommerce",
    summary:
      "A WooCommerce storefront with curated collections, simplified checkout and inventory the owner manages herself.",
    image: haven,
    result: "2.1× online revenue in 6 months",
  },
  {
    title: "Bloom Coaching",
    clientType: "Life coach",
    platform: "WordPress",
    summary:
      "A serene WordPress site with a booking flow, email capture and a blog the coach updates without help.",
    image: bloom,
    result: "120+ discovery calls booked",
  },
  {
    title: "Atlas Apparel",
    clientType: "Fashion brand",
    platform: "Shopify",
    summary:
      "A Shopify build with a fast product page, lookbook sections and Shopify Payments configured end to end.",
    image: atlas,
    result: "1.9s average page load",
  },
  {
    title: "Copper Kettle Café",
    clientType: "Neighborhood café",
    platform: "Wix",
    summary:
      "A warm Wix site with menus, online ordering links and local SEO so regulars find it first on Google Maps.",
    image: copperKettle,
    result: "Top 3 local map ranking",
  },
  {
    title: "Field Notes Journal",
    clientType: "Travel writer",
    platform: "Squarespace",
    summary:
      "An editorial Squarespace blog with a custom article layout and a subscriber newsletter wired up.",
    image: fieldNotes,
    result: "900+ newsletter subscribers",
  },
];

export const platforms = [
  {
    name: "WordPress",
    tag: "Specialty",
    blurb:
      "Custom themes, Gutenberg blocks, and sites you can edit yourself — no page-builder bloat.",
    flagship: true,
  },
  {
    name: "WooCommerce",
    tag: "Specialty",
    blurb:
      "Online stores with clean checkout flows, sensible shipping rules and easy product management.",
    flagship: true,
  },
  {
    name: "Shopify",
    tag: "Also offered",
    blurb: "Polished storefronts, app integrations and conversion-focused product pages.",
    flagship: false,
  },
  {
    name: "Wix",
    tag: "Also offered",
    blurb: "Quick, good-looking sites for small businesses that want simple ongoing edits.",
    flagship: false,
  },
  {
    name: "Squarespace",
    tag: "Also offered",
    blurb: "Elegant portfolios, blogs and personal sites with editorial layouts.",
    flagship: false,
  },
];
