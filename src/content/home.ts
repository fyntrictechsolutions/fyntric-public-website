import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Boxes,
  BrainCircuit,
  Building2,
  Car,
  Contact,
  Gift,
  GraduationCap,
  HeartPulse,
  Hotel,
  Layers,
  LifeBuoy,
  MonitorSmartphone,
  Plane,
  Rocket,
  ShoppingBasket,
  Sparkles,
  Target,
  Truck,
  Workflow,
} from "lucide-react";
import type { Faq } from "@/content/services";

type IconItem = { title: string; description?: string; icon: LucideIcon };

export const homeSeo = {
  title: "Fyntric Tech | Software Development, AI & Digital Solutions",
  description:
    "Fyntric Tech IT Solutions provides custom software, web and mobile app development, CRM, SaaS, AI automation, blockchain and digital solutions for businesses.",
};

export const homeHero = {
  eyebrow: "Software · AI · SaaS · Blockchain",
  heading: "Custom Software, AI & Digital Solutions for Growing Businesses",
  intro:
    "Fyntric Tech IT Solutions helps businesses turn ideas, processes and operational challenges into scalable digital products. We build websites, mobile apps, CRM platforms, SaaS products, AI automation systems and blockchain solutions.",
  /** Words cycled in the animated hero line. */
  rotatingWords: ["Websites", "Mobile Apps", "CRM Platforms", "SaaS Products", "AI Agents", "Web3 Apps"],
};

export const businessSolutions: IconItem[] = [
  { title: "Custom CRM", description: "Leads, customers, pipelines, automation and analytics in one place.", icon: Contact },
  { title: "Loyalty & Rewards", description: "Loyalty programs for supermarkets, retail and customer-focused brands.", icon: Gift },
  { title: "Order Management", description: "Orders, products, fulfilment and operations under control.", icon: Boxes },
  { title: "Distribution / Van Sales", description: "Digitize field sales, order collection and distribution workflows.", icon: Truck },
  { title: "Business Analytics", description: "Turn business data into dashboards, KPIs and actionable insight.", icon: BarChart3 },
  { title: "AI Business Automation", description: "AI agents, workflows and intelligent reporting for repetitive work.", icon: BrainCircuit },
];

export const whyChooseUs: IconItem[] = [
  { title: "Business-focused custom development", description: "We start from your goals and workflows, not from a template.", icon: Target },
  { title: "Scalable and maintainable architecture", description: "Clean foundations that grow with your users and data.", icon: Layers },
  { title: "Modern technology stack", description: "Proven frameworks chosen to fit each product.", icon: Rocket },
  { title: "AI and automation integration", description: "Practical AI built into the systems you already use.", icon: Sparkles },
  { title: "Responsive and user-focused experiences", description: "Interfaces that work beautifully on every screen.", icon: MonitorSmartphone },
  { title: "Post-launch support and improvements", description: "We stay on after launch to support and optimize.", icon: LifeBuoy },
];

export const developmentProcess: Array<{ title: string; description: string }> = [
  { title: "Discovery and requirements", description: "We learn your business, users and goals, and capture what the product must do." },
  { title: "Product and technical strategy", description: "We choose the right product scope, architecture and technology approach." },
  { title: "UI/UX design", description: "We design clear, engaging interfaces and validate the flows with you." },
  { title: "Development", description: "We build in focused iterations so you see progress early and often." },
  { title: "Testing and quality assurance", description: "Every release is tested for function, performance and reliability." },
  { title: "Deployment", description: "We launch to production with a smooth, well-planned release." },
  { title: "Support and optimization", description: "We monitor, support and keep improving the product after launch." },
];

/** Logos live in /public/logos/tech (see the README there for sources). */
export const technologies: Array<{ name: string; logo: string }> = [
  { name: "Next.js", logo: "/logos/tech/nextjs.svg" },
  { name: "React", logo: "/logos/tech/react.svg" },
  { name: "Flutter", logo: "/logos/tech/flutter.svg" },
  { name: "Node.js", logo: "/logos/tech/nodejs.svg" },
  { name: "Python", logo: "/logos/tech/python.svg" },
  { name: "PHP", logo: "/logos/tech/php.svg" },
  { name: "PostgreSQL", logo: "/logos/tech/postgresql.svg" },
  { name: "MySQL", logo: "/logos/tech/mysql.svg" },
  { name: "MongoDB", logo: "/logos/tech/mongodb.svg" },
  { name: "AWS", logo: "/logos/tech/amazonwebservices.svg" },
  { name: "Shopify", logo: "/logos/tech/shopify.svg" },
  { name: "WooCommerce", logo: "/logos/tech/woocommerce.svg" },
];

export const industries: IconItem[] = [
  { title: "Retail and supermarkets", icon: ShoppingBasket },
  { title: "Education", icon: GraduationCap },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Real estate", icon: Building2 },
  { title: "Automotive", icon: Car },
  { title: "Logistics and distribution", icon: Truck },
  { title: "Hospitality", icon: Hotel },
  { title: "Travel and tourism", icon: Plane },
  { title: "Startups and growing businesses", icon: Workflow },
];

export const homeFaqs: Faq[] = [
  {
    question: "What does Fyntric Tech develop?",
    answer:
      "We develop websites, web applications, mobile apps, CRM platforms, SaaS products, AI automation systems, blockchain applications and e-commerce solutions.",
  },
  {
    question: "Can you build a custom solution?",
    answer:
      "Yes. We can design and develop software around specific workflows, integrations, users and business requirements.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We work with businesses in India, the GCC and selected international markets.",
  },
];

export const finalCta = {
  heading: "Have an idea or business process that needs a digital solution?",
  text: "Tell us what you need and our team can recommend an appropriate technology approach.",
  button: "Get Free Consultation",
};
