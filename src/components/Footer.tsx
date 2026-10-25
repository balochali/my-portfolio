import { emailLink, site, whatsappLink } from "@/data/offerData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span className="mark">{site.name}</span>
        <a href={emailLink()}>Email</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={whatsappLink("Hi Ali, I found your portfolio.")} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={site.resume} download>Résumé</a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
