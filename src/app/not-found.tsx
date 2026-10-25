import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="not-found wrap">
        <h1>This page doesn’t exist.</h1>
        <p>The link may be old. The projects and contact details are on the home page.</p>
        <Link className="button primary" href="/">Back to home</Link>
      </main>
      <Footer />
    </>
  );
}
