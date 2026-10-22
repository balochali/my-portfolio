import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Ali Baloch — Full-Stack Developer", template: "%s | Ali Baloch" },
  description: "Ali Baloch is a full-stack developer in Karachi building thoughtful web applications with React, Next.js, Node.js, and PostgreSQL. Explore projects and get in touch.",
  openGraph: { title: "Ali Baloch — Full-Stack Developer", description: "Thoughtful code. Meaningful digital experiences. Explore my work in web, AI, and backend engineering.", type: "website" },
  twitter: { card: "summary", title: "Ali Baloch — Full-Stack Developer" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
