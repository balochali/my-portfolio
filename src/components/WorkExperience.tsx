import { experiences } from "@/data/aboutData";
import { stagger } from "./motion";
import "./WorkExperience.css";

type Job = (typeof experiences)[number];

/** Group consecutive roles at the same company; the data file lists newest first. */
const companies = experiences.reduce<{ name: string; roles: Job[] }[]>((list, job) => {
  const last = list[list.length - 1];
  if (last && last.name === job.company) last.roles.push(job);
  else list.push({ name: job.company, roles: [job] });
  return list;
}, []);

const period = (roles: Job[]) => {
  const start = roles[roles.length - 1].duration.split(" – ")[0];
  const end = roles[0].duration.split(" – ")[1];
  return `${start} – ${end}`;
};

export default function WorkExperience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="section-head" data-reveal="rise">
          <h2 className="section-title" id="experience-title">Where I’ve worked</h2>
          <p>Three years of building and shipping for companies, alongside my own projects.</p>
        </div>
        <ol>
          {companies.map((company, index) => (
            <li className="job" key={company.name} data-reveal="rise" style={stagger(index % 2, 70)}>
              <div className="job-who">
                <h3>{company.name}</h3>
                <p>{period(company.roles)}</p>
              </div>
              <div className="job-roles">
                {company.roles.map(role => (
                  <div key={role.position}>
                    <h4>{role.position} <span>{role.duration}</span></h4>
                    <p>{role.description}</p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
