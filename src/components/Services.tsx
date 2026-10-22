import Link from "next/link";
import { projects } from "@/data/projectData";
import "./Services.css";

const services = [
  { title: "Full-stack web applications", icon: "web", description: "Connected storefronts and admin dashboards, from responsive interfaces to product management, orders, and database-backed APIs.", projectId: 4, tools: ["React", "Node.js", "PostgreSQL", "Prisma"] },
  { title: "AI tools & integrations", icon: "ai", description: "Conversational tools that bring language models into applications through APIs, with a focus on contextual responses and practical integration.", projectId: 2, tools: ["Python", "Flask", "Hugging Face", "Transformers"] },
  { title: "Desktop business software", icon: "desktop", description: "Offline workspaces for everyday operations: property records, partner contributions, expenses, and payments stored locally on the desktop.", projectId: 10, tools: ["Tauri", "React", "TypeScript", "SQLite"] },
  { title: "Interactive data dashboards", icon: "chart", description: "Maps, charts, and filters that make complex data easier to explore, connecting geographic insights with clear, responsive interfaces.", projectId: 1, tools: ["Next.js", "D3.js", "Mapbox", "REST API"] },
  { title: "Mobile applications", icon: "mobile", description: "Mobile experiences that connect users with useful services, including route discovery, live tracking, and booking workflows.", projectId: 8, tools: ["Java", "Android Studio", "Firebase", "Google Maps API"] },
  { title: "Backend & Web3 APIs", icon: "api", description: "Backend services for wallet authentication and application access, using signature verification, token-based sessions, and database integrations.", projectId: 7, tools: ["Node.js", "Express", "JWT", "Prisma", "Web3"] },
];

function ServiceIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    web: "M8 8 4 12l4 4m8-8 4 4-4 4m-3-11-2 14",
    ai: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z",
    desktop: "M3 4h18v13H3V4Zm5 17h8m-4-4v4",
    chart: "M4 3v17h17M8 15v-4m5 4V7m5 8v-6",
    mobile: "M7 2h10v20H7V2Zm3 3h4m-3 14h2",
    api: "M8 5H5v14h3m8-14h3v14h-3m-6-7h4m-2-2v4",
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}

export default function Services() {
  return <section id="services" className="section wrap services-section" aria-labelledby="services-heading">
    <div className="services-intro"><p className="eyebrow">ENGINEERING SERVICES</p><h2 id="services-heading">What I can build<br />for your next idea.</h2><p>From web interfaces to offline business tools—capabilities shaped by the projects I’ve built.</p></div>
    <div className="services-grid">{services.map((service, index) => {
      const project = projects.find(item => item.id === service.projectId)!;
      return <article className="service-card" key={service.title}>
        <div className="service-card-top"><span className="service-icon"><ServiceIcon name={service.icon} /></span><span className="service-number">0{index + 1}</span></div>
        <h3>{service.title}</h3><p>{service.description}</p>
        <div className="service-evidence"><ul aria-label="Technologies">{service.tools.map(tool => <li key={tool}>{tool}</li>)}</ul><Link href={`/projects/${project.slug}`}><span><small>SEE IT IN PRACTICE</small>{project.title}</span><span aria-hidden="true">↗</span></Link></div>
      </article>;
    })}</div>
  </section>;
}
