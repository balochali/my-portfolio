import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/data/projectData";
type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return { title: project?.title || "Project not found", description: project?.description };
}
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const live = /^https:\/\//.test(project.demoUrl);
  return <><Header /><main id="main-content" className="wrap case-page">
    <Link className="case-back" href="/#projects">← Back to all projects</Link>
    <div className="case-header"><p className="eyebrow">{project.category} / {project.status}</p><h1>{project.title}</h1><p>{project.description}</p></div>
    <dl className="case-facts"><div><dt>My role</dt><dd>{project.role}</dd></div><div><dt>Timeline</dt><dd>{project.duration}</dd></div><div><dt>Built with</dt><dd>{(project.techStack || project.tags).slice(0, 4).join(" · ")}</dd></div></dl>
    <ProjectGallery title={project.title} images={project.gallery?.length ? project.gallery : [project.image]} />
    <div className="case-content"><div><h2>Behind the project</h2><p>{project.longDescription?.trim() || project.description}</p>{project.challenge && <><h2>The challenge</h2><p>{project.challenge}</p></>}{project.solution && <><h2>The approach</h2><p>{project.solution}</p></>}</div><aside><h2>What it does</h2><ul>{project.features?.map(feature => <li key={feature}>{feature}</li>)}</ul><h2>The toolkit</h2><div className="tags">{(project.techStack || project.tags).map(tech => <span key={tech}>{tech}</span>)}</div><div className="case-links">{live && <a className="button blue" href={project.demoUrl} target="_blank" rel="noreferrer">Visit project ↗</a>}{/^https:\/\//.test(project.codeUrl) && <a className="button outline" href={project.codeUrl} target="_blank" rel="noreferrer">View code ↗</a>}</div></aside></div>
    <Link className="next-project" href={`/projects/${next.slug}`}><span><small>UP NEXT</small>{next.title}</span><span aria-hidden="true">↗</span></Link>
  </main></>;
}
