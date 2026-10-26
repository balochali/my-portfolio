import Icon from "@/components/Icon";
import { emailLink, site, whatsappLink } from "@/data/offerData";
import { stagger } from "./motion";
import ContactForm from "./ContactForm";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact-card dark" data-reveal="pop">
          <div className="contact-copy" data-reveal="left" style={stagger(1)}>
            <h2 className="section-title" id="contact-title"><span className="out">Tell me</span> <span>what you need built</span></h2>
            <p className="contact-lede">Send a few lines about your project and I’ll reply with questions or a plan.</p>
            <a className="contact-mail" href={emailLink()}>{site.email}</a>
            <div className="contact-actions">
              <a className="button primary" href={emailLink()}>Email me <Icon name="arrow-up-right" className="icon icon-arrow" /></a>
              <a className="button" href={whatsappLink("Hi Ali, I found your portfolio. Here's what I'm working on: ")} target="_blank" rel="noreferrer"><Icon name="whatsapp" />WhatsApp</a>
              <a className="button" href={site.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" />LinkedIn</a>
            </div>
            <p className="contact-meta">{site.location}. {site.hours}</p>
          </div>
          <div className="contact-form-wrap" data-reveal="right" style={stagger(2)}><ContactForm /></div>
        </div>
      </div>
    </section>
  );
}
