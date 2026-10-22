"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./SkillsMatrix.css";

const categories = [
  { name: "Full Stack & MERN", detail: "Connected interfaces, APIs, and data", icon: "◇", color: "#8242ca", skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "REST APIs"] },
  { name: "Front-End", detail: "Responsive interfaces and state management", icon: "⌘", color: "#2366d1", skills: ["React", "Next.js", "TypeScript", "JavaScript", "CSS", "Tailwind CSS", "Redux", "Zustand"] },
  { name: "Back-End", detail: "Application logic and API development", icon: "{ }", color: "#26834b", skills: ["Node.js", "Express", "Python", "Flask", "REST APIs", "Prisma"] },
  { name: "Databases", detail: "Storage and data modeling", icon: "▤", color: "#b36b17", skills: ["PostgreSQL", "MongoDB", "SQLite", "Prisma", "Firebase"] },
  { name: "AI & Data", detail: "Language models and interactive visualization", icon: "✳", color: "#9a47c1", skills: ["Python", "Hugging Face", "Transformers", "D3.js", "Mapbox"] },
  { name: "Mobile & Desktop", detail: "Applications beyond the browser", icon: "▣", color: "#137f89", skills: ["React Native", "Tauri", "PyQt6", "SQLite", "Vite"] },
  { name: "Web3 & Cloud", detail: "Integrations and infrastructure", icon: "↗", color: "#5854bd", skills: ["Web3", "Firebase", "AWS"] },
];
const skillCount = new Set(categories.flatMap(category => category.skills)).size;
const marks: Record<string, string> = { React: "⚛", "React Native": "⚛", TypeScript: "TS", JavaScript: "JS", "Next.js": "N", "Node.js": "JS", Python: "Py", PostgreSQL: "PG", MongoDB: "M", SQLite: "SQL", CSS: "#", "Tailwind CSS": "≈", "Hugging Face": "HF", "D3.js": "D3", "REST APIs": "API", "PyQt6": "Qt", AWS: "aws" };

export default function SkillsMatrix() {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState("All Stack");
  const visible = categories.filter(category => selected === "All Stack" || selected === category.name);
  return <section className="section wrap skills-matrix-section" id="skills" aria-labelledby="skills-heading">
    <div className="skills-matrix-intro">
      <p className="eyebrow">TECHNICAL EXPERTISE</p>
      <h2 id="skills-heading">Skills &amp; Technologies</h2>
      <p>Built around <strong>full-stack development, the MERN stack, and frontend and backend engineering</strong>, with hands-on work in AI tools, data visualization, and desktop applications.</p>
    </div>
    <div className="skills-matrix">
      <h3 className="skills-matrix-title"><span aria-hidden="true">●</span> TECH STACK <span className="skills-matrix-total">({skillCount} SKILLS ACROSS {categories.length} CATEGORIES)</span></h3>
      <div className="skills-category-filters" role="group" aria-label="Filter skills by category">
        {["All Stack", ...categories.map(category => category.name)].map(name => <button key={name} type="button" aria-pressed={selected === name} aria-controls="skills-results" onClick={() => setSelected(name)}>{name}</button>)}
      </div>
      <motion.div key={selected} id="skills-results" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .3 }}>
        <p className="skills-filter-status" role="status">{selected === "All Stack" ? "Showing all skill categories" : `Showing ${selected} skills`}</p>
        {visible.map(category => <article className="skill-category" key={category.name}>
          <div className="skill-category-heading">
            <span className="skill-category-icon" style={{ color: category.color }} aria-hidden="true">{category.icon}</span>
            <h3>{category.name}</h3><p>{category.detail}</p><span className="skill-category-rule" aria-hidden="true" /><span className="skill-category-count" aria-label={`${category.skills.length} skills`}>{category.skills.length}</span>
          </div>
          <ul className="skill-tiles">{category.skills.map(skill => <li key={skill}><span className="skill-mark" style={{ color: category.color }} aria-hidden="true">{marks[skill] || skill.slice(0, 2)}</span><span>{skill}</span></li>)}</ul>
        </article>)}
      </motion.div>
    </div>
  </section>;
}

