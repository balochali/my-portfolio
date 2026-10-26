import { emailLink, site, whatsappLink } from "@/data/offerData";
import { stagger } from "./motion";
import ContactForm from "./ContactForm";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact dark" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-copy" data-reveal="left">
          <h2 className="section-title" id="contact-title">Tell me what you need built.</h2>
          <p className="contact-lede">Send a few lines about your project and I’ll reply with questions or a plan.</p>
          <a className="contact-mail" href={emailLink()}>{site.email}</a>
          <div className="contact-actions">
            <a className="button primary" href={emailLink()}>Email me <span className="arrow" aria-hidden="true">→</span></a>
            <a className="button" href={whatsappLink("Hi Ali, I found your portfolio. Here's what I'm working on: ")} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="button" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p className="contact-meta">{site.location}. {site.hours}</p>
        </div>
        <div className="contact-form-wrap spot" data-reveal="right" style={stagger(2)}><ContactForm /></div>
      </div>
    </section>
  );
}
