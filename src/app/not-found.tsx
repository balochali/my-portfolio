import Link from "next/link";
import Header from "@/components/Header";
import { pageMetadata } from "@/data/seo";
export const metadata = { ...pageMetadata("Page not found | Ali Baloch", "Return to Ali Baloch’s business software portfolio.", "/404"), robots: { index: false, follow: true } };
export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="not-found wrap">
        <p className="eyebrow">404 — A LITTLE OFF TRACK</p>
        <h1>
          This page took
          <br />a different path.
        </h1>
        <p>Let’s get you back to the work.</p>
        <Link className="button ink" href="/">
          Back to home ↗
        </Link>
      </main>
    </>
  );
}
