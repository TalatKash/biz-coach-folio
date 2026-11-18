export type Project = {
  title: string;
  clientType: string;
  summary: string;
  website: string;
};

export const projects: Project[] = [
  {
    title: "Cohort Tuition",
    clientType: "Education · Tutoring",
    summary:
      "A welcoming tuition website for families, highlighting tailored learning, experienced tutors and free consultations.",
    website: "https://www.cohorttuition.co.uk/",
  },
  {
    title: "Wellthy Soul",
    clientType: "Wellness · Coaching",
    summary:
      "A wellness and nutrition website presenting programs, mindful living resources and support for women’s health.",
    website: "https://www.wellthysoul.com/",
  },
  {
    title: "Supplies Control",
    clientType: "Business · Procurement",
    summary:
      "A clear business platform website focused on purchasing efficiency, spend visibility and supply control.",
    website: "https://suppliescontrol.co.uk/",
  },
  {
    title: "North East Psychiatry",
    clientType: "Healthcare · Psychiatry",
    summary:
      "A reassuring mental healthcare website introducing personalized psychiatric support and confidential appointments.",
    website: "https://northeastpsychiatry.com/",
  },
  {
    title: "Vecta Healthcare",
    clientType: "Healthcare · Patient transport",
    summary:
      "A service-led website making private patient transport and event medical cover easier to understand and book.",
    website: "https://vectahealthcare.co.uk/",
  },
  {
    title: "Robert Austrian",
    clientType: "Professional services · Law",
    summary:
      "A professional law firm website explaining personal injury services and helping prospective clients get in touch.",
    website: "https://robertaustrian.com/",
  },
  {
    title: "CFL Custom Carpentry",
    clientType: "Home · Custom carpentry",
    summary:
      "A polished showcase for custom interior woodwork, with project-focused messaging and consultation calls to action.",
    website: "https://cflcustomcarpentry.com/",
  },
  {
    title: "PickPack Fulfilment",
    clientType: "E-commerce · Fulfilment",
    summary:
      "A fulfilment services website introducing flexible pick-and-pack support for growing e-commerce businesses.",
    website: "https://pickpackfulfilment.co.uk/",
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