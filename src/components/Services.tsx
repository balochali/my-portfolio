import Link from "next/link";
import { services } from "@/data/offerData";
import { projects } from "@/data/projectData";
import "./Services.css";

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="services-title">What you can hire me for</h2>
          <p>Pick one, or bring something bigger and we’ll split it into steps.</p>
        </div>
        <ul>
          {services.map(service => {
            const proof = service.proof ? projects.find(p => p.slug === service.proof) : undefined;
            return (
              <li className="service" key={service.title}>
                <h3>{service.title}</h3>
                <div>
                  <p>{service.description}</p>
                  <p className="service-tools">{service.tools.join(", ")}</p>
                  {proof && <Link className="service-proof" href={`/projects/${proof.slug}`}>See it in practice: {proof.title}</Link>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
