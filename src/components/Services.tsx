import Link from "next/link";
import { services } from "@/data/offerData";
import { projects } from "@/data/projectData";
import { stagger } from "./motion";
import "./Services.css";

const icons: Record<string, React.ReactNode> = {
  "MERN web apps": <><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
  "Dashboards and admin panels": <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  "POS and inventory systems": <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="M9 8h6M9 12h6" /></>,
  "Bug fixing and deployment": <><path d="m7 8-4 4 4 4M17 8l4 4-4 4M14 5l-4 14" /></>,
};

export default function Services() {
  return (
    <section className="section services dark" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-head" data-reveal="rise">
          <h2 className="section-title" id="services-title">What you can hire me for</h2>
          <p>Pick one, or bring something bigger and we’ll split it into steps.</p>
        </div>
        <ul className="service-grid">
          {services.map((service, index) => {
            const proof = service.proof ? projects.find(p => p.slug === service.proof) : undefined;
            return (
              <li className="service spot" key={service.title} data-reveal="rise" style={stagger(index % 2)}>
                <span className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[service.title]}</svg>
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-tools">{service.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
                {proof && <Link className="service-proof link-arrow" href={`/projects/${proof.slug}`}>See it in practice: {proof.title} <span className="arrow" aria-hidden="true">→</span></Link>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
