import Link from "next/link";
import { business } from "@/data/business";
export default function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <Link className="wordmark" href="/">
            ali<span>.</span>
          </Link>
          <div className="desktop-links">
            <Link href="/#services">Services</Link>
            <Link href="/projects">Work</Link>
            <Link href="/#about">About</Link>
          </div>
          <Link className="button primary nav-quote" href="/#contact">
            Get a quote ↗
          </Link>
          <details className="mobile-menu">
            <summary aria-label="Navigation menu">Menu</summary>
            <div>
              <Link href="/#services">Services</Link>
              <Link href="/projects">All projects</Link>
              <Link href="/#about">About</Link>
            </div>
          </details>
        </nav>
      </header>
      <Link className="mobile-quote button primary" href="/#contact">
        Start a project with {business.name} ↗
      </Link>
    </>
  );
}
