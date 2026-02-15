"use client";

import { projects } from "@/data/projectData";
import { useParams } from "next/navigation";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import Header from "@/components/Header";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project Not Found</div>;

  return (
    <main className="min-h-screen bg-background-primary pt-24 pb-12 px-4 md:px-8 flex flex-col items-center justify-center">
      <Header />
      <div className="w-full max-w-7xl">
        <ProjectDetails project={project} />
      </div>
    </main>
  );
}
