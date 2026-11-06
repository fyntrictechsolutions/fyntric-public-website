/**
 * Photography used on the home page.
 *
 * Each entry points at a file in /public. Leave `src` empty until the image exists:
 * the page then shows its built-in illustration instead, so nothing ever looks broken.
 * Image briefs (prompts, sizes) for every slot are in docs/image-prompts.md.
 */
export type MediaImage = {
  /** Path under /public, e.g. "/images/home/hero.jpg". */
  src?: string;
  alt: string;
};

export const heroImage: MediaImage = {
  src: "/images/home/hero.webp",
  alt: "Fyntric Tech team planning a software product on a large screen",
};

/** Keyed by business solution title in src/content/home.ts. */
export const solutionImages: Record<string, MediaImage> = {
  // An entry without `src` shows its illustration until a photo is added to public/images/home.
  "Custom CRM": { src: "/images/home/crm.webp", alt: "Sales team reviewing a CRM pipeline on a large screen" },
  "Loyalty & Rewards": {
    src: "/images/home/loyalty.webp",
    alt: "Shopper scanning a loyalty reward on her phone at a supermarket checkout",
  },
  "Order Management": { src: "/images/home/orders.webp", alt: "Warehouse staff checking orders on a tablet" },
  "Distribution / Van Sales": { alt: "Field sales representative taking an order on a phone beside a delivery van" },
  "Business Analytics": { src: "/images/home/analytics.webp", alt: "Business owner reading KPI dashboards on two screens" },
  "AI Business Automation": {
    src: "/images/home/ai-automation.webp",
    alt: "Hand interacting with an AI workflow interface above a laptop",
  },
};
