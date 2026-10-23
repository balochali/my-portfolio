import type { MetadataRoute } from "next";
import { projects } from "@/data/projectData";
import { siteUrl } from "@/data/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  if (!base) return [];
  return ["/", "/projects", ...projects.map((p) => `/projects/${p.slug}`)].map(
    (path) => ({ url: new URL(path, base).href }),
  );
}
