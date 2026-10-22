"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SocialIcon({ name }: { name: "github" | "linkedin" | "email" | "resume" }) {
  const paths = {
    github: <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.3A5.7 5.7 0 0 0 19.3 4a5.3 5.3 0 0 0-.1-4S18 0 15 1.5a13.4 13.4 0 0 0-6 0C6 0 4.8 0 4.8 0a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3.5 6.9 6.8 7.3A3.5 3.5 0 0 0 9 18v4" transform="translate(1 1) scale(.9)" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    resume: <><path d="M14 3H5v18h14V8Zm0 0v5h5M8 12h8M8 16h6" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const home = usePathname() === "/";
  const href = (id: string) => `${home ? "" : "/"}#${id}`;
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" href="/" aria-label="Ali Baloch home">Ali B.</Link>
        <div className="header-socials">
          <a href="https://github.com/balochali" target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon name="github" /></a>
          <a href="https://www.linkedin.com/in/balochali/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a>
          <a href="mailto:alibaloshi018@gmail.com" aria-label="Email Ali"><SocialIcon name="email" /></a>
          <a href="/resume/ali_baloch.pdf" download aria-label="Download résumé"><SocialIcon name="resume" /></a>
        </div>
        <button id="menu-toggle" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span className={open ? "hamburger active" : "hamburger"}><i /><i /><i /></span></button>
        <nav id="main-nav" aria-label="Main navigation" className={open ? "nav-links open" : "nav-links"} onKeyDown={event => { if (event.key === "Escape") { setOpen(false); document.getElementById("menu-toggle")?.focus(); } }}>
          {[["About", "about"], ["Skills", "skills"], ["Experience", "experience"], ["Services", "services"], ["Projects", "projects"], ["Contact", "contact"]].map(([label, id], i) => <a key={id} href={href(id)} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}<span aria-hidden="true">↗</span></a>)}
        </nav>
      </div>
    </header>
  </>;
}
