import Image from "next/image";
import Link from "next/link";
import { featuredSlugs } from "@/data/offerData";
import { projects } from "@/data/projectData";
import "./ProjectsShowcase.css";

const isHttps = (url: string) => /^https:\/\//.test(url);

export default function FeaturedProjects() {
  const featured = featuredSlugs.map(slug => projects.find(p => p.slug === slug)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const more = projects.filter(p => !featuredSlugs.includes(p.slug));

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="projects-title">Projects that solved a real problem</h2>
          <p>Four pieces of work: what each one was for, and what it was built with.</p>
        </div>

        {featured.map((project, index) => (
          <article className="project" key={project.slug}>
            <Link className="project-shot" href={`/projects/${project.slug}`} aria-label={`Open the ${project.title} case study`}>
              <Image
                src={`/project-images/covers/${project.slug}.webp`}
                alt={`${project.title} screenshot`}
                width={1280}
                height={800}
                sizes="(max-width: 860px) 92vw, 640px"
                priority={index === 0}
              />
            </Link>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="project-kind">{project.category}</p>
              <dl>
                <div><dt>Problem</dt><dd>{project.problem ?? project.description}</dd></div>
                <div><dt>Stack</dt><dd className="project-stack">{(project.techStack ?? project.tags).slice(0, 6).join(", ")}</dd></div>
              </dl>
              <div className="project-links">
                <Link className="project-link" href={`/projects/${project.slug}`}>View case study</Link>
                {isHttps(project.demoUrl) && <a className="project-link" href={project.demoUrl} target="_blank" rel="noreferrer">Live link</a>}
                {isHttps(project.codeUrl) && <a className="project-link quiet" href={project.codeUrl} target="_blank" rel="noreferrer">Code</a>}
              </div>
            </div>
          </article>
        ))}

        {more.length > 0 && (
          <div className="more-work">
            <h3>More work</h3>
            <ul>
              {more.map(project => (
                <li key={project.slug}>
                  <Link href={`/projects/${project.slug}`}>
                    <span>{project.title}</span>
                    <small>{project.category}</small>
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
