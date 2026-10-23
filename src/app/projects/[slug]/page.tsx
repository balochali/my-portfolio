import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import ProjectGallery from "@/components/ProjectGallery";
import { Footer } from "@/components/SiteElements";
import { projects } from "@/data/projectData";
import { business, isReady } from "@/data/business";
import { pageMetadata } from "@/data/seo";
type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? pageMetadata(
        `${p.title} | Ali Baloch`,
        p.description,
        `/projects/${p.slug}`,
        p.image,
      )
    : { title: "Project not found", robots: { index: false } };
}
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const proof = business.projectProof[slug];
  return (
    <>
      <Header />
      <main id="main-content" className="wrap case-page">
        <Link className="text-link" href="/projects">
          ← All projects
        </Link>
        <header className="case-header">
          <p className="eyebrow">
            {p.category} · {p.status}
          </p>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </header>
        <dl className="case-facts">
          <div>
            <dt>My role</dt>
            <dd>{p.role}</dd>
          </div>
          <div>
            <dt>Project timeline</dt>
            <dd>{p.duration}</dd>
          </div>
        </dl>
        <ProjectGallery
          title={p.title}
          images={p.gallery?.length ? p.gallery : [p.image]}
        />
        <div className="case-content">
          <div>
            <section>
              <h2>Overview</h2>
              <p>{p.longDescription?.trim() || p.description}</p>
            </section>
            {p.challenge && (
              <section>
                <h2>The problem</h2>
                <p>{p.challenge}</p>
              </section>
            )}
            <section>
              <h2>What I built</h2>
              <p>{p.solution}</p>
              <ul>
                {p.features?.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
            {proof && isReady(proof.results) && (
              <section>
                <h2>Results</h2>
                <p>{proof.results}</p>
              </section>
            )}
            {proof && isReady(proof.testimonial) && (
              <section>
                <h2>Client feedback</h2>
                <blockquote>{proof.testimonial}</blockquote>
              </section>
            )}
          </div>
          <aside>
            <h2>Tech stack</h2>
            <div className="tags">
              {(p.techStack || p.tags).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="case-links">
              {/^https:\/\//.test(p.demoUrl) && (
                <a className="button primary" href={p.demoUrl}>
                  Live site / demo ↗
                </a>
              )}
              {/^https:\/\//.test(p.codeUrl) && (
                <a className="button secondary" href={p.codeUrl}>
                  View code ↗
                </a>
              )}
            </div>
          </aside>
        </div>
        <section className="closing">
          <h2>Want something like this?</h2>
          <Link className="button secondary" href="/#contact">
            Let’s talk ↗
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
