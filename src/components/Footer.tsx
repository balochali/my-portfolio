import Icon from "@/components/Icon";
import { emailLink, hero, site, whatsappLink } from "@/data/offerData";

const links = [
  { label: "Work", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "GitHub", icon: "github", href: site.github, external: true },
  { label: "LinkedIn", icon: "linkedin", href: site.linkedin, external: true },
  { label: "WhatsApp", icon: "whatsapp", href: whatsappLink("Hi Ali, I found your portfolio."), external: true },
  { label: "Email", icon: "mail", href: emailLink(), external: false },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-main">
          <div className="foot-brand">
            <strong>{site.name}</strong>
            <span>{hero.role}</span>
          </div>
          <nav className="foot-links" aria-label="Footer">
            {links.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
            <a href={site.resume} download>Résumé</a>
          </nav>
          <ul className="foot-social">
            {socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} aria-label={item.label} title={item.label} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <Icon name={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="foot-copy">© {new Date().getFullYear()} {site.name}. {site.location}. Built with Next.js and TypeScript.</p>
      </div>
    </footer>
  );
}
