import Link from "next/link";
import { emailLink, site, whatsappLink } from "@/data/offerData";

export default function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="wrap">
          <Link className="wordmark" href="/" aria-label="Ali Baloch, home">Ali Baloch</Link>
          <nav className="site-nav" aria-label="Sections">
            <Link href="/#projects">Projects</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#experience">Experience</Link>
          </nav>
          <nav className="reach" aria-label="Contact">
            <a href={emailLink()}>Email</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={whatsappLink("Hi Ali, I found your portfolio.")} target="_blank" rel="noreferrer">WhatsApp</a>
          </nav>
          <Link className="button primary small" href="/#contact">Hire me</Link>
        </div>
      </header>
    </>
  );
}
