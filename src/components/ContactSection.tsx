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
            <ul className="contact-rows">
              <li><a href={emailLink()}><span className="ci"><Icon name="mail" /></span><span><small>Email</small><strong>{site.email}</strong></span><Icon name="arrow-up-right" className="icon go" /></a></li>
              <li><a href={whatsappLink("Hi Ali, I found your portfolio. Here's what I'm working on: ")} target="_blank" rel="noreferrer"><span className="ci"><Icon name="whatsapp" /></span><span><small>WhatsApp</small><strong>Message me directly</strong></span><Icon name="arrow-up-right" className="icon go" /></a></li>
              <li><a href={site.linkedin} target="_blank" rel="noreferrer"><span className="ci"><Icon name="linkedin" /></span><span><small>LinkedIn</small><strong>Connect with me</strong></span><Icon name="arrow-up-right" className="icon go" /></a></li>
            </ul>
            <p className="contact-meta"><i aria-hidden="true" />{site.location}. {site.hours}</p>
          </div>
          <div className="contact-form-wrap" data-reveal="right" style={stagger(2)}><ContactForm /></div>
        </div>
      </div>
    </section>
  );
}
