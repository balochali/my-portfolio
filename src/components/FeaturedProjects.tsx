import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { featuredSlugs } from "@/data/offerData";
import { projects } from "@/data/projectData";
import { stagger } from "./motion";
import "./ProjectsShowcase.css";

const isHttps = (url: string) => /^https:\/\//.test(url);

export default function FeaturedProjects() {
  const featured = featuredSlugs.map(slug => projects.find(p => p.slug === slug)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const more = projects.filter(p => !featuredSlugs.includes(p.slug));

  return (
    <section className="section soft projects" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="section-head" data-reveal="down">
          <h2 className="section-title" id="projects-title">Projects that solved a real problem<sup>[{String(featured.length).padStart(2, "0")}]</sup></h2>
          <p>Four pieces of work: what each one was for, and what it was built with.</p>
        </div>

        <div className="project-list">
          {featured.map((project, index) => (
            <article className="project" key={project.slug} data-reveal="pop">
              <Link className="project-shot spot" href={`/projects/${project.slug}`} aria-label={`Open the ${project.title} case study`} data-reveal={index % 2 ? "right" : "left"} style={stagger(1)}>
                <div className="window">
                  <div className="win-bar" aria-hidden="true"><i /><i /><i /></div>
                  <Image
                    src={`/project-images/covers/${project.slug}.webp`}
                    alt={`${project.title} screenshot`}
                    width={1280}
                    height={800}
                    sizes="(max-width: 860px) 92vw, 640px"
                  />
                </div>
              </Link>
              <div className="project-body">
                <h3 data-reveal={index % 2 ? "left" : "right"} style={stagger(1)}>{project.title}</h3>
                <p className="project-kind" data-reveal="rise" style={stagger(2)}>{project.category}</p>
                <dl data-reveal="rise" style={stagger(3)}>
                  <div><dt>Problem</dt><dd>{project.problem ?? project.description}</dd></div>
                  <div>
                    <dt>Stack</dt>
                    <dd><ul className="chips">{(project.techStack ?? project.tags).slice(0, 6).map(tool => <li key={tool}>{tool}</li>)}</ul></dd>
                  </div>
                </dl>
                <div className="project-links" data-reveal="rise" style={stagger(4)}>
                  <Link className="button primary small" href={`/projects/${project.slug}`}>View case study <Icon name="arrow-up-right" className="icon icon-arrow" /></Link>
                  {isHttps(project.demoUrl) && <a className="button small" href={project.demoUrl} target="_blank" rel="noreferrer">Live link</a>}
                  {isHttps(project.codeUrl) && <a className="button small" href={project.codeUrl} target="_blank" rel="noreferrer">Code</a>}
                </div>
              </div>
            </article>
          ))}
        </div>

        {more.length > 0 && (
          <div className="more-work" data-reveal="rise">
            <h3>More work</h3>
            <ul>
              {more.map(project => (
                <li key={project.slug}>
                  <Link href={`/projects/${project.slug}`}>
                    <span>{project.title}</span>
                    <small>{project.category}</small>
                    <Icon name="arrow-up-right" className="icon icon-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
