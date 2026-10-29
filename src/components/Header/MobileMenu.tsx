"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon, { type IconName } from "@/components/Icon";

type Props = { items: { label: string; href: string; icon: IconName }[]; email: string; linkedin: string; whatsapp: string; github: string };

/** Phone and tablet menu: same icons as the desktop bar, plus the contact links. */
export default function MobileMenu({ items, email, linkedin, whatsapp, github }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="mobile-menu">
      <button type="button" className="icon-btn menu-toggle" aria-expanded={open} aria-controls="mobile-panel" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(value => !value)}>
        <Icon name={open ? "close" : "menu"} />
      </button>
      <div id="mobile-panel" className={open ? "mobile-panel open" : "mobile-panel"} hidden={!open}>
        <nav aria-label="Sections">
          {items.map(item => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}><Icon name={item.icon} />{item.label}</Link>
          ))}
        </nav>
        <div className="mobile-contact">
          <a href={email}><Icon name="mail" />Email</a>
          <a href={linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" />LinkedIn</a>
          <a href={whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" />WhatsApp</a>
          <a href={github} target="_blank" rel="noreferrer"><Icon name="github" />GitHub</a>
        </div>
      </div>
    </div>
  );
}
