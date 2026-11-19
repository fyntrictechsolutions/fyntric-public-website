import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getServicePath, services } from "@/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/services/", "/about/", "/contact/"];
  const serviceRoutes = services.map((service) => getServicePath(service.slug));

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
