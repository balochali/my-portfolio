import type { MetadataRoute } from "next";
import { site } from "@/data/offerData";
import { projects } from "@/data/projectData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...projects.map(project => ({ url: `${site.url}/projects/${project.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
