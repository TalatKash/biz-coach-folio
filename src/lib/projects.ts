import cohortTuition from "@/assets/work-cohort-tuition.webp.asset.json";
import wellthySoul from "@/assets/work-wellthy-soul.webp.asset.json";
import suppliesControl from "@/assets/work-supplies-control.webp.asset.json";
import northEastPsychiatry from "@/assets/work-north-east-psychiatry.webp.asset.json";
import vectaHealthcare from "@/assets/work-vecta-healthcare.webp.asset.json";
import robertAustrian from "@/assets/work-robert-austrian.webp.asset.json";
import cflCustomCarpentry from "@/assets/work-cfl-custom-carpentry.webp.asset.json";
import pickpackFulfilment from "@/assets/work-pickpack-fulfilment.webp.asset.json";

export type Project = {
  title: string;
  clientType: string;
  summary: string;
  website: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Cohort Tuition",
    clientType: "Education · Tutoring",
    summary:
      "A welcoming tuition website for families, highlighting tailored learning, experienced tutors and free consultations.",
    website: "https://www.cohorttuition.co.uk/",
    image: cohortTuition.url,
  },
  {
    title: "Wellthy Soul",
    clientType: "Wellness · Coaching",
    summary:
      "A wellness and nutrition website presenting programs, mindful living resources and support for women’s health.",
    website: "https://www.wellthysoul.com/",
    image: wellthySoul.url,
  },
  {
    title: "Supplies Control",
    clientType: "Business · Procurement",
    summary:
      "A clear business platform website focused on purchasing efficiency, spend visibility and supply control.",
    website: "https://suppliescontrol.co.uk/",
    image: suppliesControl.url,
  },
  {
    title: "North East Psychiatry",
    clientType: "Healthcare · Psychiatry",
    summary:
      "A reassuring mental healthcare website introducing personalized psychiatric support and confidential appointments.",
    website: "https://northeastpsychiatry.com/",
    image: northEastPsychiatry.url,
  },
  {
    title: "Vecta Healthcare",
    clientType: "Healthcare · Patient transport",
    summary:
      "A service-led website making private patient transport and event medical cover easier to understand and book.",
    website: "https://vectahealthcare.co.uk/",
    image: vectaHealthcare.url,
  },
  {
    title: "Robert Austrian",
    clientType: "Professional services · Law",
    summary:
      "A professional law firm website explaining personal injury services and helping prospective clients get in touch.",
    website: "https://robertaustrian.com/",
    image: robertAustrian.url,
  },
  {
    title: "CFL Custom Carpentry",
    clientType: "Home · Custom carpentry",
    summary:
      "A polished showcase for custom interior woodwork, with project-focused messaging and consultation calls to action.",
    website: "https://cflcustomcarpentry.com/",
    image: cflCustomCarpentry.url,
  },
  {
    title: "PickPack Fulfilment",
    clientType: "E-commerce · Fulfilment",
    summary:
      "A fulfilment services website introducing flexible pick-and-pack support for growing e-commerce businesses.",
    website: "https://pickpackfulfilment.co.uk/",
    image: pickpackFulfilment.url,
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