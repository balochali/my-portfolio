"use client";

import { projects } from "@/components/data/projectData";
import { useParams } from "next/navigation";
import ProjectDetails from "@/components/Projects/ProjectDetails";
// import Header from "@/components/Header";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  console.log(slug);
  if (!project) return <div>Project Not Found</div>;

  return (
    <>
      <ProjectDetails project={project} />;
    </>
  );
}
