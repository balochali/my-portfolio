"use client";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projectData";

import { portfolioData } from "@/data/portfolioData";
import { sendEmail } from "@/app/actions/contact";
import Header from "@/components/Header";
import SkillsMatrix from "@/components/SkillsMatrix";
import Education from "@/components/Education";
import "./ProjectsShowcase.css";
import "./ContactSection.css";
import Services from "./Services";
import ScrollReveals from "./ScrollReveals";
import WorkExperience from "@/components/WorkExperience";

const WavingAvatar = dynamic(() => import("./WavingAvatar"), { ssr: false });
const filters = ["All projects", "Web & full stack", "AI & data", "Mobile & desktop", "Web3"];
const groups: Record<string, number[]> = { "Web & full stack": [1, 4], "AI & data": [1, 2, 6, 9], "Mobile & desktop": [10, 3, 5, 8], Web3: [5, 7, 9] };

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("sending"); setFeedback("");
    try {
      const result = await sendEmail({ name: String(fields.get("name") || ""), email: String(fields.get("email") || ""), subject: String(fields.get("subject") || ""), message: String(fields.get("message") || ""), website: String(fields.get("website") || "") });
      if (result.success) { setStatus("success"); setFeedback("Thanks for reaching out. Your message has been sent."); form.reset(); }
      else { setStatus("error"); setFeedback(result.error || "Your message could not be sent. Please email me directly."); }
    } catch { setStatus("error"); setFeedback("Something went wrong. Please email me directly or try again."); }
  }
  return <form className="contact-form" onSubmit={submit} aria-labelledby="contact-form-heading">
    <div className="contact-form-heading"><h3 id="contact-form-heading">Send a direct message</h3><p>Tell me what you’re building and where I can help.</p></div>
    <div className="form-row"><label>Your name *<input autoComplete="name" name="name" placeholder="Alex Morgan" required maxLength={100} /></label><label>Email address *<input type="email" autoComplete="email" name="email" placeholder="alex@company.com" required maxLength={254} /></label></div>
    <fieldset className="contact-interests"><legend>Project type / interest</legend><div>{["Full-stack web app", "AI integration", "Desktop application", "APIs & dashboards", "Job opportunity", "Just saying hello"].map((topic, index) => <label key={topic}><input type="radio" name="subject" value={topic} defaultChecked={index === 0} required /><span>{topic}</span></label>)}</div></fieldset>
    <label>Project scope & details *<textarea name="message" rows={4} placeholder="A little about your project, timeline, or idea…" required minLength={10} maxLength={5000} /></label>
    <div className="honeypot" aria-hidden="true"><label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button className="button ink" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send direct message"}<span aria-hidden="true">↗</span></button>
    <p className={`form-feedback ${status}`} role="status" aria-live="polite">{feedback}</p>
  </form>;
}

function ContactDetails() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try { await navigator.clipboard.writeText("alibaloshi018@gmail.com"); setCopyStatus("Email copied."); }
    catch { setCopyStatus("Please select the email address to copy it."); }
  }
  return <div className="contact-details">
    <div className="contact-welcome"><p className="contact-available"><i className="status-dot" /> OPEN TO WORK & COLLABORATIONS</p><h3>Let’s build something<br />useful together.</h3><p>From a web application to an offline business tool, I’d love to hear about your next idea.</p></div>
    <div className="contact-email-card"><div><span>DIRECT EMAIL</span><button type="button" onClick={copyEmail}>Copy email</button></div><a href="mailto:alibaloshi018@gmail.com">alibaloshi018@gmail.com</a><p className="copy-feedback" role="status">{copyStatus}</p></div>
    <div className="contact-info-cards"><div><span>BASED IN</span><strong>Karachi, Pakistan</strong><p>UTC+5 · Pakistan Standard Time</p></div><div><span>LET’S TALK ABOUT</span><strong>Ideas & opportunities</strong><p>Projects, roles, and collaborations</p></div></div>
    <div className="contact-networks"><h4>PROFESSIONAL NETWORKS</h4><div className="contact-profile-links"><a href={portfolioData.socials[0].url} target="_blank" rel="noreferrer">GitHub ↗</a><a href={portfolioData.socials[1].url} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://wa.me/923433322698" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div>
  </div>;
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All projects");
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const filtered = projects.filter(p => filter === "All projects" || groups[filter]?.includes(p.id));
  const shown = expanded ? filtered : filtered.slice(0, 4);
  return <>
    <Header />
    <ScrollReveals />
    <main id="main-content">
      <section className="hero wrap" id="home">
        <div className="hero-grid">
          <motion.div initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="hero-copy">
            <p className="intro"><span aria-hidden="true">✳</span> HELLO!</p>
            <h1>I’m Ali Baloch,<br />a <span className="headline-underline">Full-Stack<br />Developer.</span></h1>
            <p className="hero-description">I turn ideas into intuitive web experiences. Building with React, Next.js, Node.js, and a curiosity for what’s possible—from thoughtful interfaces to powerful backend systems.</p>
            <div className="hero-actions"><a className="button ink" href="#projects">See my works <span aria-hidden="true">↗</span></a><a className="text-link" href="/resume/ali_baloch.pdf" download>Download résumé <span aria-hidden="true">↓</span></a></div>
            <div className="hero-availability"><i className="status-dot" /> Open to work & collaborations</div>
          </motion.div>
          <div className="avatar-card"><span className="avatar-badge"><span aria-hidden="true">✦</span><span>LET’S BUILD SOMETHING<strong>Great, together.</strong></span></span><div className="avatar-greeting">Hey, welcome!<svg viewBox="0 0 70 50" aria-hidden="true"><path d="M2 3Q55 0 55 37M43 27L55 40 66 26" /></svg></div><WavingAvatar /><div className="avatar-caption"><strong>Ali Baloch</strong><span>Full-Stack Developer</span><span className="avatar-status"><i className="status-dot" /> Open to work</span></div></div>
        </div>
      </section>

      <section className="section wrap about-overview" id="about" aria-labelledby="about-heading">
        <dl className="about-stat-grid">
          <div><dt>Full-Stack Experience</dt><dd>3+ Yrs</dd></div>
          <div><dt>Projects to Explore</dt><dd>{projects.length}+</dd></div>
          <div><dt>Computer Science · IBA</dt><dd>BSCS</dd></div>
          <div><dt>Sub-100ms API Latency</dt><dd>&lt;100ms</dd></div>
        </dl>
        <div className="about-overview-copy">
          <p className="eyebrow">ABOUT ALI BALOCH</p>
          <h2 id="about-heading">Full-Stack Software Developer</h2>
          <p>I’m Ali Baloch, a developer based in Karachi with <strong>3+ years of experience</strong>. I build responsive interfaces, APIs, and database-backed applications with React, Next.js, Node.js, and TypeScript.</p>
          <p>My work spans e-commerce, data dashboards, AI tools, and desktop software. My latest project, <strong>Baloch Builder</strong>, brings property projects and business records into one offline workspace.</p>
          <div className="about-overview-actions">
            <a className="button about-resume" href="/resume/ali_baloch.pdf" download><span aria-hidden="true">↓</span> Download résumé</a>
            <a className="button outline" href="https://github.com/balochali" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a className="button about-linkedin" href="https://www.linkedin.com/in/balochali/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <SkillsMatrix />
      <Education />
      <WorkExperience />
      <Services />

      <section className="section work-section projects-showcase" id="projects" aria-labelledby="projects-heading"><div className="wrap">
        <div className="projects-intro"><p className="eyebrow">SELECTED PROJECTS ({projects.length})</p><h2 id="projects-heading">Projects built to solve real problems.</h2><p>Explore my work across web applications, AI tools, desktop software, and data visualization. Open a project to see the details.</p></div>
        <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(item => <button key={item} aria-pressed={filter === item} className={filter === item ? "active" : ""} onClick={() => { setFilter(item); setExpanded(false); }}>{item}</button>)}</div>
        <div className="project-grid"><AnimatePresence initial={false} mode="popLayout">{shown.map((project, index) => <motion.article layout={!reduced} exit={{ opacity: 0, scale: reduced ? 1 : .97 }} key={project.id} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: reduced ? 0 : .35, delay: reduced ? 0 : index % 2 * .06 }} className="project-card">
          <Link href={`/projects/${project.slug}`} className={`project-image project-tone-${project.id % 4}`} aria-label={`View ${project.title}`}><div className="project-image-toolbar"><span className="browser-dots" aria-hidden="true"><i /><i /><i /></span><span className="project-window-title">{project.title}</span><span className="project-window-status">{project.status}</span></div><div className="image-frame"><Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 700px) 90vw, 44vw" /></div></Link>
          <div className="project-meta"><span>{project.category}</span><span>{project.duration}</span></div><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.description}</p><div className="tags">{project.tags.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div><Link className="project-case-link" href={`/projects/${project.slug}`}>Explore project <span aria-hidden="true">↗</span></Link>
        </motion.article>)}</AnimatePresence></div>
        {filtered.length > 4 && <div className="load-more"><button className="button outline" onClick={() => setExpanded(!expanded)}>{expanded ? "Show less" : `Explore all ${filtered.length} projects`} <span aria-hidden="true">{expanded ? "−" : "+"}</span></button></div>}
        <p className="project-count" aria-live="polite">Showing {shown.length} of {filtered.length} projects</p>
      </div></section>

      <section className="contact-section contact-redesign section" id="contact" aria-labelledby="contact-heading"><div className="wrap"><div className="contact-intro"><p className="eyebrow">LET’S CONNECT</p><h2 id="contact-heading">Got an idea in mind?<br />Let’s build it together.</h2><p>Open to full-stack development roles, project collaborations, and conversations about what comes next.</p></div><div className="contact-grid"><ContactDetails /><ContactForm /></div></div></section>
    </main>
    <footer className="wrap footer"><a className="wordmark" href="#home">Ali B.</a><span>© {new Date().getFullYear()} Ali Baloch. Built with care.</span><a href="#home">Back to top ↑</a></footer>
  </>;
}
