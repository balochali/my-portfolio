import "./Education.css";

const certificates = [
  { title: "Programming for Everybody", subtitle: "Getting Started with Python", issuer: "University of Michigan", date: "March 7, 2020", code: "SU93XHEQQB7J", tag: "PYTHON", icon: "Py" },
  { title: "Advanced Relational Database and SQL", subtitle: "Guided project", issuer: "Coursera Project Network", date: "July 20, 2020", code: "R7NW9SSA2D9T", tag: "DATABASES", icon: "SQL" },
  { title: "Organisational behaviour: Know your people", subtitle: "Online course", issuer: "Macquarie University", date: "August 12, 2020", code: "B92CUVYB94FU", tag: "PEOPLE & TEAMS", icon: "◎" },
];
export default function Education() {
  return <section id="education" className="section wrap education-section" aria-labelledby="education-title">
    <div className="education-intro"><p className="eyebrow">ACADEMIC BACKGROUND & CONTINUOUS LEARNING</p><h2 id="education-title">Education &amp; Certifications</h2><p>A foundation in computer science, complemented by courses in programming, databases, and working with people.</p></div>
    <div className="credential-strip"><strong>✦ KEY CREDENTIALS</strong><span>BS Computer Science</span><span>Sukkur IBA University</span><span>3 Coursera certificates</span></div>
    <article className="degree-card"><div className="degree-heading"><div className="degree-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m3 11 13-6 13 6-13 6-13-6Zm6 4v8c4 4 10 4 14 0v-8M28 12v11" /></svg></div><div><div className="degree-badges"><span>BSCS</span><span>GRADUATED</span></div><h3>Bachelor of Science in Computer Science</h3><p>Sukkur IBA University</p></div><span className="degree-year">Class of 2022</span></div><p className="degree-note">A computer science foundation behind my work across full-stack web development, data-driven applications, and desktop software.</p></article>
    <div className="certificate-heading"><h3>Professional Certifications</h3><span>Learning beyond the degree</span></div>
    <div className="certificate-grid">{certificates.map(certificate => <article className="certificate-card" key={certificate.code}><div className="certificate-top"><span className="certificate-icon" aria-hidden="true">{certificate.icon}</span><span>{certificate.tag}</span></div><p className="certificate-issuer">{certificate.issuer}</p><h4>{certificate.title}</h4><p className="certificate-subtitle">{certificate.subtitle}</p><p className="certificate-date">Completed {certificate.date} · Coursera</p><a className="certificate-link" href={`https://coursera.org/verify/${certificate.code}`} target="_blank" rel="noreferrer" aria-label={`Verify ${certificate.title} on Coursera`}>Verify credential <span aria-hidden="true">↗</span></a></article>)}</div>
  </section>;
}
