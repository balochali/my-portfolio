import Image from "next/image";
import Link from "next/link";
import { business, isReady } from "@/data/business";
import type { Project } from "./types/project";
export function CTA({ text = "Have a project in mind?" }: { text?: string }) {
  return (
    <div className="section-cta">
      <p>{text}</p>
      <Link className="text-link" href="/#contact">
        Let’s talk ↗
      </Link>
    </div>
  );
}
export function ProjectCards({ items }: { items: Project[] }) {
  return (
    <div className="project-grid">
      {items.map((p) => (
        <article className="card project-card" key={p.slug}>
          <Link href={`/projects/${p.slug}`} tabIndex={-1} aria-hidden="true">
            <Image
              src={p.image}
              alt=""
              width={960}
              height={600}
              sizes="(max-width: 700px) 90vw, 33vw"
              className="project-preview"
            />
          </Link>
          <div className="card-copy">
            <p className="eyebrow">
              {p.category} · {p.status}
            </p>
            <h3>
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            </h3>
            <p>{p.description}</p>
            <Link className="text-link" href={`/projects/${p.slug}`}>
              Read case study ↗
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
export function Footer() {
  return (
    <footer className="wrap footer">
      <Link className="wordmark" href="/">
        ali.
      </Link>
      <p>
        {business.name} · {business.location}
      </p>
      <Link href="/projects">All projects</Link>
      <a href={business.resume}>Résumé</a>
    </footer>
  );
}
export function Testimonials() {
  if (!business.testimonialsEnabled) return null;
  const items = business.testimonials.filter(
    (t) => isReady(t.quote) && isReady(t.name) && isReady(t.context),
  );
  if (!items.length) return null;
  return (
    <section className="section wrap">
      <p className="eyebrow">CLIENT WORDS</p>
      <h2>What it’s like working together</h2>
      <div className="offer-grid">
        {items.map((t) => (
          <figure className="card" key={t.name}>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              {t.name} · {t.context}
            </figcaption>
          </figure>
        ))}
      </div>
      <CTA />
    </section>
  );
}
