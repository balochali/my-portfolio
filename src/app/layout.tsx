import type { Metadata } from "next";
import { siteUrl } from "@/data/seo";
import "./globals.css";
export const metadata: Metadata = { metadataBase: siteUrl() || null };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
