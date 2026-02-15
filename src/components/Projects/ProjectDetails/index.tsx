"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/components/types/project";

interface ProjectDetailsProps {
  project: Project;
  onClose?: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const imagesToDisplay =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  useEffect(() => {
    if (imagesToDisplay.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesToDisplay.length]);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) =>
      prev === 0 ? imagesToDisplay.length - 1 : prev - 1,
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-background-primary border border-border-primary rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row min-h-[600px] max-h-[90vh]">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--accent-rgb),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent-rgb),0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Left: Immersive Media Section */}
      <div className="w-full md:w-3/5 relative bg-background-secondary flex flex-col border-b md:border-b-0 md:border-r border-border-primary self-stretch overflow-hidden">
        {/* Section Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-background-secondary/50 border-b border-border-primary z-20">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>
            <div className="px-3 py-1 bg-background-primary border border-border-primary rounded-md text-[10px] text-text-secondary font-bold font-mono tracking-tight flex items-center gap-2">
              <span className="text-accent">~/</span>
              <span>assets/preview_{currentImageIndex + 1}.webp</span>
            </div>
          </div>
          <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest hidden sm:block">
            Buffer::Stream_Input_v1
          </div>
        </div>

        {/* Media Content */}
        <div className="relative flex-1 p-4 md:p-8 flex items-center justify-center min-h-[40vh] md:min-h-0">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border-primary shadow-2xl bg-black group">
            <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none z-10" />

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={imagesToDisplay[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation */}
            {imagesToDisplay.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-background-primary/80 backdrop-blur-md border border-border-primary text-text-primary flex items-center justify-center hover:bg-accent hover:text-background-primary transition-all z-20 group-hover:opacity-100 opacity-0 md:opacity-0"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-background-primary/80 backdrop-blur-md border border-border-primary text-text-primary flex items-center justify-center hover:bg-accent hover:text-background-primary transition-all z-20 group-hover:opacity-100 opacity-0 md:opacity-0"
                >
                  →
                </button>
              </>
            )}

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 px-4 py-2 bg-background-primary/60 backdrop-blur-md rounded-full border border-border-primary/50">
              {imagesToDisplay.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentImageIndex ? 1 : -1);
                    setCurrentImageIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${currentImageIndex === i ? "bg-accent w-6" : "bg-text-secondary/30 w-1.5 hover:bg-text-secondary/50"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Stats Overlay */}
        <div className="absolute bottom-4 left-8 right-8 flex items-center justify-between text-[10px] text-text-secondary font-mono hidden lg:flex">
          <div className="flex gap-6">
            <span>RES: 1920x1080</span>
            <span>FORMAT: WEBP/RGB_A</span>
          </div>
          <div className="flex gap-6">
            <span className="text-accent underline">ENCODING: LOSSLESS</span>
            <span className="animate-pulse">STREAMING...</span>
          </div>
        </div>
      </div>

      {/* Right: Technical Metadata Section */}
      <div className="flex-1 bg-background-primary flex flex-col overflow-y-auto custom-scrollbar relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] pointer-events-none" />

        {/* Meta Header */}
        <div className="p-6 md:p-8 border-b border-border-primary flex items-center justify-between sticky top-0 bg-background-primary/80 backdrop-blur-xl z-30">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-background-secondary border border-border-primary flex items-center justify-center text-2xl shadow-inner group">
              <span className="group-hover:scale-110 transition-transform">
                📂
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-black text-text-primary tracking-tighter uppercase truncate leading-none mb-1">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[8px] text-accent font-bold tracking-widest uppercase">
                  BRANCH: MASTER
                </span>
                <span className="w-1 h-1 rounded-full bg-border-primary" />
                <span className="text-[8px] text-text-secondary font-bold tracking-widest uppercase">
                  v2.0.4-STABLE
                </span>
              </div>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl border border-border-primary flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/50 hover:bg-accent/5 transition-all text-xl"
            >
              ×
            </button>
          )}
        </div>

        {/* Meta Body */}
        <div className="p-6 md:p-8 space-y-10 flex-1">
          {/* Summary Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] text-text-secondary font-bold tracking-widest uppercase">
                <span className="text-accent">#</span> project_manifest.json
              </div>
              <div className="text-[8px] text-text-secondary font-bold uppercase">
                7.2KB
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-accent-secondary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-background-secondary p-6 rounded-2xl border border-border-primary font-mono text-sm leading-relaxed overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-10 border-r border-border-primary/50 bg-background-secondary/30 flex flex-col items-center pt-6 text-[8px] text-text-secondary font-bold select-none">
                  <div>01</div>
                  <div>02</div>
                  <div>03</div>
                  <div>04</div>
                  <div>05</div>
                </div>
                <div className="pl-8 space-y-1">
                  <div>
                    <span className="text-accent-secondary">
                      export default
                    </span>{" "}
                    <span className="text-accent">function</span>{" "}
                    <span className="text-accent">ProjectData</span>() {`{`}
                  </div>
                  <div className="pl-4">
                    <span className="text-accent-secondary">return</span> (
                  </div>
                  <div className="pl-8">
                    <span className="text-text-secondary italic">
                      // {project.description}
                    </span>
                  </div>
                  <div className="pl-4">);</div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-background-secondary/30 border border-border-primary rounded-2xl hover:border-accent/30 transition-colors group">
              <div className="text-[9px] text-text-secondary font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 group-hover:bg-red-500 group-hover:shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-all" />
                Problem_Statement
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>
            <div className="p-5 bg-background-secondary/30 border border-border-primary rounded-2xl hover:border-accent/30 transition-colors group">
              <div className="text-[9px] text-text-secondary font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 group-hover:bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.5)] transition-all" />
                Resolution_Strategy
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Dependencies */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] text-text-secondary font-bold tracking-widest uppercase">
              <span className="text-accent">▶</span> system_dependencies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 bg-background-secondary border border-border-primary rounded-lg text-[10px] text-text-secondary font-bold hover:text-text-primary hover:border-accent/50 transition-all cursor-default flex items-center gap-2 group/tag"
                >
                  <span className="w-1 h-1 rounded-full bg-border-primary group-hover/tag:bg-accent transition-colors" />
                  {tag.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Action Bar */}
        <div className="p-6 md:p-8 border-t border-border-primary bg-background-primary/80 backdrop-blur-xl sticky bottom-0 z-30 flex flex-col sm:flex-row gap-4">
          {project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              className="flex-1 px-8 py-4 bg-accent text-background-primary font-black rounded-xl text-center text-xs tracking-widest uppercase hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.3)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Initialize_Live_View
              <span className="text-lg">↗</span>
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              className="flex-1 px-8 py-4 bg-background-secondary border border-border-primary text-text-primary font-black rounded-xl text-center text-xs tracking-widest uppercase hover:border-accent/50 hover:bg-accent/5 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Fetch_Source
              <span className="text-lg">&lt;/&gt;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
