"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/components/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const imagesToDisplay =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  useEffect(() => {
    if (imagesToDisplay.length <= 1) return;

    let autoplayInterval: NodeJS.Timeout;
    const startDelay = index * 800;

    const timeout = setTimeout(() => {
      autoplayInterval = setInterval(() => {
        setDirection(1);
        setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
      }, 5000);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  }, [imagesToDisplay.length, index]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={() => onClick(project)}
      className="group relative flex flex-col bg-background-secondary border border-border-primary rounded-2xl overflow-hidden cursor-pointer hover:border-accent/40 transition-all duration-500 shadow-2xl hover:shadow-accent/5 will-change-transform"
    >
      {/* Repository Header */}
      <div className="flex items-center justify-between p-3 md:p-4 bg-background-primary border-b border-border-primary">
        <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
          <div className="text-lg md:text-xl flex-shrink-0">📁</div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] md:text-xs font-black text-text-primary tracking-tight group-hover:text-accent transition-colors uppercase truncate">
              {project.title.toLowerCase().replace(/\s+/g, "_")}
            </span>
            <span className="text-[8px] md:text-[9px] text-text-secondary font-bold tracking-widest uppercase">
              main_branch
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className={`text-[7px] md:text-[8px] font-black uppercase px-1.5 md:px-2 py-0.5 rounded ${project.status === "Completed" ? "bg-green-500/10 text-green-500" : "text-yellow-500 bg-yellow-500/10"}`}
          >
            {project.status === "Completed" ? "stable" : "dev"}
          </span>
        </div>
      </div>

      {/* Content Area (As a Code Block) */}
      <div className="relative flex-1 bg-background-primary p-4 md:p-5 font-mono text-sm group-hover:bg-background-primary transition-colors">
        {/* Line Numbers Decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-6 md:w-8 border-r border-border-primary bg-background-secondary/30 flex flex-col items-center pt-5 text-[7px] md:text-[8px] text-text-secondary font-bold select-none opacity-50">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>

        <div className="pl-4 md:pl-6 space-y-3 md:space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] md:text-xs overflow-hidden">
              <span className="text-accent-secondary flex-shrink-0">const</span>
              <span className="text-accent flex-shrink-0">description</span>
              <span className="text-text-secondary flex-shrink-0">=</span>
              <span className="text-green-500 truncate">
                "{project.description}"
              </span>
            </div>
          </div>

          {/* Preview Image Container */}
          <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden border border-border-primary group-hover:border-accent/20 transition-all shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={imagesToDisplay[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-background-primary/60 to-transparent" />
            <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 flex gap-1 items-center">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <span className="text-[8px] md:text-[10px] text-white font-bold tracking-widest drop-shadow-md uppercase">
                Live_Preview
              </span>
            </div>
          </div>

          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center gap-1.5 md:gap-2 text-[8px] md:text-[10px] text-text-secondary font-bold uppercase tracking-widest">
              <span className="text-yellow-500">&gt;</span> tech_stack:
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-[8px] md:text-[9px] px-1.5 md:px-2 py-0.5 bg-background-secondary border border-border-primary text-text-secondary font-bold rounded group-hover:border-accent/20 transition-colors uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-[8px] md:text-[9px] text-text-secondary font-bold">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info (Repository Stats) */}
      <div className="p-3 md:p-4 bg-background-secondary border-t border-border-primary flex items-center justify-between text-[8px] md:text-[9px] font-mono text-text-secondary font-bold uppercase tracking-widest group-hover:text-text-secondary transition-colors">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500/30 group-hover:text-yellow-500/50 transition-colors">
              ★
            </span>{" "}
            12
          </div>
          <div className="flex items-center gap-1">
            <span className="text-text-secondary group-hover:text-text-secondary transition-colors">
              ⌥
            </span>{" "}
            4
          </div>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <span className="hidden xs:inline">Last_push:</span>
          <span className="text-green-500/70 group-hover:text-green-500 transition-colors">
            3d ago
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
