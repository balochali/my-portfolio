import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { emailLink, whatsappLink } from "@/data/offerData";
import { projects } from "@/data/projectData";
import "@/components/CaseStudy.css";

type PageProps = { params: Promise<{ slug: string }> };
const isHttps = (url: string) => /^https:\/\//.test(url);

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return { title: "Project not found" };
  const description = project.problem ?? project.description;
  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { type: "article", title: `${project.title} | Ali Baloch`, description, images: [{ url: project.image, alt: `${project.title} screenshot` }] },
    twitter: { card: "summary_large_image", title: `${project.title} | Ali Baloch`, description, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const stack = project.techStack ?? project.tags;
  const ask = `Hi Ali, I saw your ${project.title} project and I'd like something similar. Here's what I need: `;

  return (
    <>
      <Header />
      <main id="main-content" className="wrap case">
        <Link className="case-back" href="/#projects">← All projects</Link>

        <header className="case-header">
          <p className="case-kind">{project.category} · {project.status}</p>
          <h1>{project.title}</h1>
          <p className="case-lede">{project.problem ?? project.description}</p>
        </header>

        <dl className="case-facts">
          <div><dt>My role</dt><dd>{project.role}</dd></div>
          <div><dt>Timeline</dt><dd>{project.duration}</dd></div>
          <div><dt>Built with</dt><dd>{stack.slice(0, 4).join(", ")}</dd></div>
        </dl>

        <ProjectGallery title={project.title} images={project.gallery?.length ? project.gallery : [project.image]} />

        <div className="case-content">
          <div>
            <h2>About the project</h2>
            <p>{project.longDescription?.trim() || project.description}</p>
            {project.challenge && (<><h2>The challenge</h2><p>{project.challenge}</p></>)}
            {project.solution && (<><h2>How I solved it</h2><p>{project.solution}</p></>)}
          </div>
          <aside>
            <h2>What it does</h2>
            <ul className="case-features">{project.features?.map(feature => <li key={feature}>{feature}</li>)}</ul>
            <h2>Stack</h2>
            <p className="case-stack">{stack.join(", ")}</p>
            <div className="case-links">
              {isHttps(project.demoUrl) && <a className="button primary small" href={project.demoUrl} target="_blank" rel="noreferrer">Live link</a>}
              {isHttps(project.codeUrl) && <a className="button small" href={project.codeUrl} target="_blank" rel="noreferrer">View code</a>}
            </div>
          </aside>
        </div>

        <section className="case-hire" aria-labelledby="case-hire-title">
          <h2 id="case-hire-title">Need something like this?</h2>
          <p>Tell me what you want built and I’ll reply with questions or a plan.</p>
          <div className="case-hire-actions">
            <a className="button primary" href={whatsappLink(ask)} target="_blank" rel="noreferrer">Message me on WhatsApp</a>
            <a className="button" href={emailLink(`Project like ${project.title}`)}>Email me</a>
          </div>
        </section>

        <Link className="case-next" href={`/projects/${next.slug}`}>
          <small>Next project</small>
          <span>{next.title}</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
