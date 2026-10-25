import { skillGroups } from "@/data/offerData";
import "./SkillsMatrix.css";

export default function SkillsMatrix() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="skills-title">What I build with</h2>
          <p>The tools behind the projects above.</p>
        </div>
        <dl>
          {skillGroups.map(group => (
            <div className="skill-row" key={group.name}>
              <dt>{group.name}</dt>
              <dd>{group.items.map(item => <span key={item}>{item}</span>)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
