import { skillGroups } from "@/data/offerData";
import "./Marquee.css";

const tools = Array.from(new Set(skillGroups.flatMap(group => group.items)));

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Tools I build with">
      <div className="track">
        {[0, 1].map(copy => (
          <ul key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
            {tools.map(tool => <li key={tool}>{tool}</li>)}
          </ul>
        ))}
      </div>
    </div>
  );
}
