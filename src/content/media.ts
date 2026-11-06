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
  src: undefined,
  alt: "Fyntric Tech team planning a software product on a large screen",
};

/** Keyed by business solution title in src/content/home.ts. */
export const solutionImages: Record<string, MediaImage> = {
  // Add `src: "/images/home/crm.jpg"` (etc.) to each entry once its photo is in public/images/home.
  "Custom CRM": { alt: "Sales team reviewing a CRM pipeline dashboard" },
  "Loyalty & Rewards": { alt: "Shopper scanning a loyalty card at a supermarket checkout" },
  "Order Management": { alt: "Warehouse staff fulfilling orders with a tablet" },
  "Distribution / Van Sales": { alt: "Field sales representative taking an order on a phone beside a delivery van" },
  "Business Analytics": { alt: "Business owner reading KPI dashboards on a laptop" },
  "AI Business Automation": { alt: "AI assistant automating business workflows on screen" },
};
