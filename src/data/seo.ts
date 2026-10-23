import type { Metadata } from "next";
import { business, isReady } from "@/data/business";
export function siteUrl() {
  return isReady(business.siteUrl) ? new URL(business.siteUrl) : undefined;
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/opengraph-image",
): Metadata {
  const base = siteUrl();
  return {
    title,
    description,
    alternates: base ? { canonical: new URL(path, base).href } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: business.name,
      ...(base ? { url: new URL(path, base).href } : {}),
      images: [{ url: base ? new URL(image, base).href : image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [base ? new URL(image, base).href : image],
    },
  };
}
export function structuredData() {
  const base = siteUrl();
  const shared = {
    name: business.name,
    ...(base ? { url: base.href } : {}),
    description: business.tagline,
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        ...shared,
        jobTitle: "Full-stack developer",
        sameAs: Object.values(business.socials),
        homeLocation: { "@type": "Place", name: business.location },
      },
      {
        "@type": "ProfessionalService",
        ...shared,
        areaServed: business.serviceAreas,
        address: {
          "@type": "PostalAddress",
          addressLocality: business.city,
          addressCountry: business.countryCode,
        },
        ...(isReady(business.contact.email)
          ? { email: business.contact.email }
          : {}),
        ...(isReady(business.contact.whatsapp)
          ? { telephone: `+${business.contact.whatsapp}` }
          : {}),
      },
    ],
  };
}
