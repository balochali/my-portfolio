"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/data/aboutData";
import { projects } from "@/data/projectData";
import "./WorkExperience.css";

const companies = Array.from(new Set(experiences.map(job => job.company))).map(name => {
  const roles = experiences.filter(job => job.company === name);
  return { name, roles, current: roles.some(job => job.duration.includes("Present")), period: roles.length > 1 ? `${roles[roles.length - 1].duration.split(" – ")[0]} – ${roles[0].duration.split(" – ")[1]}` : roles[0].duration };
});
type Company = (typeof companies)[number];
function CompanyDetails({ company, timeline = false }: { company: Company; timeline?: boolean }) {
  const reduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const shownRoles = timeline ? company.roles : [company.roles[roleIndex]];
  return <motion.article initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .35 }} className="career-detail company-detail">
    <div className="company-heading"><div><p className="company-kicker">{company.current ? "CURRENT CHAPTER" : "CAREER CHAPTER"}</p><h3>{company.name}</h3><p className="company-period">{company.period}</p></div><span className="company-role-count">{company.roles.length} {company.roles.length === 1 ? "role" : "roles"}</span></div>
    {company.roles.length > 1 && !timeline && <div className="company-progression"><p>My roles at {company.name}</p><div role="group" aria-label={`Select a role at ${company.name}`}>{company.roles.map((job, index) => <button key={job.position} type="button" aria-pressed={roleIndex === index} onClick={() => setRoleIndex(index)}><strong>{job.position}</strong><span>{job.duration}</span></button>)}</div></div>}
    <div className={timeline ? "company-role-timeline" : "company-selected-role"} aria-live={timeline ? "off" : "polite"}>{shownRoles.map(job => <motion.section initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .32 }} className="company-role-detail" key={job.position}><h4>{job.position}</h4><p className="company-role-date">{job.duration}</p><ul className="company-contributions">{job.description.split(/(?<=\.)\s+/).map(sentence => <li key={sentence}>{sentence}</li>)}</ul><div className="career-technologies"><h5>BUILT WITH</h5><div>{job.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div></motion.section>)}</div>
    {company.name === "Rex Official" && <a className="company-project" href="/projects/e-commerce-platform-rex-official">Explore the Rex Official project <span aria-hidden="true">↗</span></a>}
  </motion.article>;
}
export default function WorkExperience() {
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState<"companies" | "timeline">("companies");
  return <section className="section wrap career-section" id="experience" aria-labelledby="career-heading">
    <div className="career-intro"><p className="eyebrow">CAREER EXPERIENCE</p><h2 id="career-heading">The teams. The work. The growth.</h2><p>Four companies, six roles, and experience connecting interfaces, APIs, and data. Explore each chapter of my career.</p></div>
    <div className="career-stats">{[{icon:"↗",value:"3+ Years",label:"DEVELOPMENT EXPERIENCE"},{icon:"▦",value:`${experiences.length} Roles`,label:"ACROSS MY CAREER"},{icon:"◇",value:`${companies.length} Companies`,label:"TEAMS CONTRIBUTED TO"},{icon:"⌘",value:`${projects.length}+ Projects`,label:"IN MY PORTFOLIO"}].map(stat => <div key={stat.label}><span aria-hidden="true">{stat.icon}</span><strong>{stat.value}</strong><small>{stat.label}</small></div>)}</div>
    <div className="career-view" role="group" aria-label="Experience layout"><button type="button" aria-pressed={view === "companies"} onClick={() => setView("companies")}>By company</button><button type="button" aria-pressed={view === "timeline"} onClick={() => setView("timeline")}>Full career</button></div>
    {view === "companies" ? <div className="career-layout"><div className="career-role-list" role="group" aria-label="Select a company">{companies.map((company, index) => <button type="button" key={company.name} className="career-role company-choice" aria-pressed={selected === index} aria-controls="career-active-role" onClick={() => setSelected(index)}><span className="company-number" aria-hidden="true">0{index + 1}</span><span className="career-role-copy"><strong>{company.name}</strong><span>{company.roles.length > 1 ? `${company.roles.length} roles · Frontend to software engineering` : company.roles[0].position}</span><small>{company.period}</small>{company.current && <span className="career-current">● PRESENT</span>}</span><span className="career-role-arrow" aria-hidden="true">↗</span></button>)}</div><div id="career-active-role"><CompanyDetails key={companies[selected].name} company={companies[selected]} /></div></div> : <div className="career-timeline">{companies.map(company => <CompanyDetails key={company.name} company={company} timeline />)}</div>}
  </section>;
}
