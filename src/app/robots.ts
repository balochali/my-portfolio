import type { MetadataRoute } from "next";
import { site } from "@/data/offerData";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
