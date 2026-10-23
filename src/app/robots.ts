import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/seo";
export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(base ? { sitemap: new URL("/sitemap.xml", base).href } : {}),
  };
}
