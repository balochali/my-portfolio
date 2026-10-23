import Portfolio from "@/components/Portfolio";
import { pageMetadata, structuredData } from "@/data/seo";
export const metadata = pageMetadata(
  "Ali Baloch | Custom E-commerce & POS Developer in Karachi",
  "Custom e-commerce stores, POS and inventory software, and business web applications for small businesses in Pakistan and the Gulf. Discuss your project with Ali Baloch.",
  "/",
);
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData()).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio />
    </>
  );
}
