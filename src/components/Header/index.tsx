import Link from "next/link";
import type { CSSProperties } from "react";
import Icon from "@/components/Icon";
import MobileMenu from "./MobileMenu";
import { emailLink, hero, services, site, whatsappLink } from "@/data/offerData";
import { projects } from "@/data/projectData";
import "./Header.css";

const nav = [
  { label: "Work", href: "/#projects", icon: "work", count: String(projects.length) },
  { label: "Services", href: "/#services", icon: "services", count: String(services.length) },
  { label: "Experience", href: "/#experience", icon: "clock", count: "3y+" },
  { label: "Contact", href: "/#contact", icon: "send", count: "" },
] as const;

export default function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="bar">
          <Link className="avail land from-left" style={{ "--base": 100 } as CSSProperties} href="/#contact" aria-label={`${hero.status}. Contact me`}>
            <i aria-hidden="true" /><span className="avail-long">{hero.status}</span><span className="avail-short">Available</span>
          </Link>

          <nav className="nav-pills" aria-label="Sections">
            {nav.map((item, index) => (
              <Link key={item.label} href={item.href} className="land from-top" style={{ "--base": 220, "--i": index } as CSSProperties}>
                <Icon name={item.icon} />
                {item.label}
                {item.count && <span className="count">[{item.count}]</span>}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <div className="quick land from-right" style={{ "--base": 360 } as CSSProperties}>
              <a className="icon-btn" href={emailLink()} aria-label="Email Ali"><Icon name="mail" /></a>
              <a className="icon-btn" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="Ali on LinkedIn"><Icon name="linkedin" /></a>
              <a className="icon-btn" href={whatsappLink("Hi Ali, I found your portfolio.")} target="_blank" rel="noreferrer" aria-label="Message Ali on WhatsApp"><Icon name="whatsapp" /></a>
            </div>
            <Link className="button primary small cta land from-right" style={{ "--base": 440 } as CSSProperties} href="/#contact">
              Let’s talk <Icon name="arrow-up-right" className="icon icon-arrow" />
            </Link>
            <MobileMenu items={nav.map(({ label, href, icon }) => ({ label, href, icon }))} email={emailLink()} linkedin={site.linkedin} whatsapp={whatsappLink("Hi Ali, I found your portfolio.")} github={site.github} />
          </div>
        </div>
      </header>
    </>
  );
}
