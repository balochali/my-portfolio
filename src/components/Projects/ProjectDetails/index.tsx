"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/components/types/project";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
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

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-[#161b22] border-2 border-gray-800/80 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row min-h-[500px] max-h-[90vh]">
      {/* Left: Immersive Media Section */}
      <div className="w-full md:w-3/5 relative bg-black flex items-center justify-center p-4 md:p-8 overflow-hidden border-b md:border-b-0 md:border-r border-gray-800 min-h-[40vh] md:min-h-0 self-stretch">
        <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />

        <div className="relative w-full aspect-video md:h-full rounded-2xl overflow-hidden border border-gray-800 group shadow-inner">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5, ease: "circOut" }}
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

          {/* Slider Controls */}
          {imagesToDisplay.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20 px-4 py-2 bg-[#0d1117]/80 backdrop-blur-md rounded-full border border-gray-800">
              <button
                onClick={prevImage}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← PREV
              </button>
              <div className="flex gap-1.5">
                {imagesToDisplay.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${currentImageIndex === i ? "bg-[#61afef] w-4" : "bg-gray-700"}`}
                  />
                ))}
              </div>
              <button
                onClick={nextImage}
                className="text-gray-400 hover:text-white transition-colors"
              >
                NEXT →
              </button>
            </div>
          )}
        </div>

        {/* Technical Decoration */}
        <div className="absolute top-8 left-8 text-[10px] text-gray-700 font-bold uppercase tracking-[0.5em] hidden lg:block">
          Buffer::Stream_Input_01
        </div>
      </div>

      {/* Right: Technical Metadata Section */}
      <div className="flex-1 bg-[#161b22] flex flex-col overflow-y-auto custom-scrollbar">
        {/* Meta Header */}
        <div className="p-8 border-b border-gray-800 flex items-center justify-between sticky top-0 bg-[#161b22] z-30">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0d1117] border border-gray-800 flex items-center justify-center text-xl">
              📄
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-tighter uppercase">
                {project.title}
              </h3>
              <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                Metadata_View.v2
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-600 transition-all font-bold"
          >
            ×
          </button>
        </div>

        {/* Meta Body */}
        <div className="p-8 space-y-10 flex-1">
          {/* Summary Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] text-gray-600 font-bold tracking-widest uppercase">
              <span className="text-[#61afef]">→</span> object_declaration
            </div>
            <div className="bg-[#0d1117] p-6 rounded-2xl border border-gray-800 font-mono text-sm leading-relaxed text-gray-400">
              <span className="text-[#c678dd]">const</span>{" "}
              <span className="text-[#e5c07b]">overview</span> = {`{`} <br />
              <div className="pl-6 py-2">
                <span className="text-[#61afef]">category</span>:{" "}
                <span className="text-[#98c379]">"{project.category}"</span>,{" "}
                <br />
                <span className="text-[#61afef]">status</span>:{" "}
                <span className="text-[#98c379]">"{project.status}"</span>,{" "}
                <br />
                <span className="text-[#61afef]">description</span>:{" "}
                <span className="text-[#98c379]">"{project.description}"</span>
              </div>
              {`}`};
            </div>
          </div>

          {/* Context Blocks */}
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-[#0d1117]/30 border border-gray-800 rounded-2xl">
              <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />{" "}
                Challenge
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-6 bg-[#0d1117]/30 border border-gray-800 rounded-2xl">
              <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />{" "}
                Solution
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack List */}
          <div className="space-y-4 pt-4">
            <div className="text-[10px] text-gray-600 font-bold tracking-widest uppercase">
              Dependencies Manifest
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 bg-[#0d1117] border border-gray-800 rounded-lg text-xs text-gray-400 font-bold hover:text-[#61afef] hover:border-[#61afef]/30 transition-all cursor-default"
                >
                  {tag.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meta Footer (Actions) */}
        <div className="p-8 border-t border-gray-800 flex gap-4 sticky bottom-0 bg-[#161b22] z-30">
          {project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              className="flex-1 py-4 bg-[#61afef] text-[#0d1117] font-black rounded-xl text-center text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(97,175,239,0.3)] transition-all"
            >
              Connect_Link ↗
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              className="flex-1 py-4 bg-[#161b22] border border-gray-800 text-gray-400 font-bold rounded-xl text-center text-xs tracking-[0.2em] uppercase hover:text-white hover:border-gray-600 transition-all"
            >
              Source_Code &lt;/&gt;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
