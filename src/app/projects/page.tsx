import Header from "@/components/Header";
import { CTA, Footer, ProjectCards } from "@/components/SiteElements";
import { projects } from "@/data/projectData";
import { pageMetadata } from "@/data/seo";
export const metadata = pageMetadata(
  "Projects | Ali Baloch — Business Software & Web Applications",
  "Explore Ali Baloch’s e-commerce, POS, business management, AI and API projects, with implementation details and screenshots.",
  "/projects",
  "/projects/opengraph-image",
);
export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="section wrap" id="main-content">
        <p className="eyebrow">ALL PROJECTS</p>
        <h1>Explore the work.</h1>
        <p className="hero-description">
          Business software first. More experiments and capabilities below.
        </p>
        <div style={{ marginTop: 40 }}>
          <ProjectCards items={projects} />
        </div>
        <CTA text="Have a workflow you’d like to improve?" />
      </main>
      <Footer />
    </>
  );
}
