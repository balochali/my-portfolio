"use client";

import React, { useState, useMemo } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projectData";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import Portal from "../Portal";
import { Project } from "@/components/types/project";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    "All",
    "React",
    "Full Stack",
    "MERN",
    "Next.js",
    "Python",
    "AI",
    "Android",
    "Blockchain",
  ];

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category
              .toLowerCase()
              .includes(activeFilter.toLowerCase()) ||
            project.tags.some((tag) =>
              tag.toLowerCase().includes(activeFilter.toLowerCase()),
            ),
        );
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section
      id="projects"
      data-section="projects"
      className="min-h-screen bg-background-primary text-text-secondary font-mono py-24 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(var(--accent-rgb)/0.1_1px,transparent_1px),linear-gradient(90deg,var(--accent-rgb)/0.1_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-scanline" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Workspace Header */}
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-background-secondary border border-border-primary flex items-center justify-center text-lg shadow-inner">
                📁
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-tighter uppercase">
                  Project_Workspace
                </h2>
                <div className="text-[9px] md:text-[10px] text-text-secondary font-bold tracking-widest uppercase">
                  Repository_Explorer.exe
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm text-text-secondary max-w-xl font-mono leading-relaxed">
              Indexing available repositories... <br />
              <span className="text-green-500/50 hidden sm:inline">{`$ git branch -a --list "featured/*"`}</span>
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto gap-2 pb-2 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(6);
                }}
                className={`px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase border transition-all duration-300 flex-shrink-0 ${
                  activeFilter === filter
                    ? "bg-accent/10 text-accent border-accent/30 shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]"
                    : "bg-background-secondary text-text-secondary border-border-primary hover:border-gray-600 hover:text-text-primary"
                }`}
              >
                <span className="mr-1.5 md:mr-2 opacity-50">
                  {activeFilter === filter ? "●" : "○"}
                </span>
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount(filteredProjects.length)}
              className="px-8 py-3 bg-background-secondary border border-border-primary text-text-secondary font-bold rounded-xl hover:text-text-primary hover:border-accent/50 transition-all text-xs tracking-[0.2em] uppercase group"
            >
              Load_Additional_Repositories
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">
                →
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Project Modal - Portaled to root for global priority */}
      <Portal>
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 w-full h-full z-[9999] flex items-center justify-center p-4 md:p-8 overflow-hidden pointer-events-none">
              {/* Backdrop Layer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-background-primary/95 backdrop-blur-xl cursor-pointer pointer-events-auto"
              />

              {/* Content Layer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative w-full max-w-6xl z-50 pointer-events-auto shadow-[0_0_100px_rgba(0,0,0,0.8)]"
              >
                <ProjectDetails
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Portal>
    </section>
  );
};

export default ProjectsSection;
