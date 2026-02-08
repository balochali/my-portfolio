"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { Project } from "@/components/types/project";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const nextImage = () => {
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery!.length);
    }
  };

  const prevImage = () => {
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.gallery!.length - 1 : prev - 1,
      );
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imagesToDisplay =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  return (
    <section className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative pb-20 pt-28">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-green-500/5 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Top Bar Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center border-b border-green-400/20 pb-4"
          >
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              <span>cd ../projects</span>
            </button>
            <div className="text-xs text-gray-500 hidden sm:block">
              User: visitor@portfolio ~ {currentTime}
            </div>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-300">
                    {project.category}
                  </span>
                  {project.status === "Completed" && (
                    <span className="text-xs px-2 py-1 bg-blue-400/10 border border-blue-400/30 rounded text-blue-300">
                      Completed
                    </span>
                  )}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Roles & Duration Grid */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-green-400/10">
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Role
                  </div>
                  <div className="text-gray-200">
                    {project.role || "Developer"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Duration
                  </div>
                  <div className="text-gray-200">
                    {project.duration || "N/A"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Team
                  </div>
                  <div className="text-gray-200">Solo Project</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Year
                  </div>
                  <div className="text-gray-200">2024</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.demoUrl !== "#" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors shadow-[0_0_15px_rgba(74,222,128,0.3)] flex items-center gap-2"
                  >
                    <span>Live Demo</span>
                    <span className="text-sm">↗</span>
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-green-400/50 text-green-400 rounded hover:bg-green-400/10 transition-colors flex items-center gap-2"
                  >
                    <span>View Code</span>
                    <span className="text-sm">&lt;/&gt;</span>
                  </a>
                )}
              </div>
            </div>

            {/* Image Slider Section */}
            <div className="relative group">
              <div className="relative rounded-xl overflow-hidden border border-green-400/20 bg-gray-900/50 aspect-video">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={imagesToDisplay[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                {imagesToDisplay.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-green-500 hover:text-black border border-green-400/30 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-green-500 hover:text-black border border-green-400/30 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      →
                    </button>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {imagesToDisplay.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? "bg-green-400 w-6" : "bg-gray-600 hover:bg-gray-400"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Decorative Terminal Elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t border-r border-green-400/30 rounded-tr-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b border-l border-green-400/30 rounded-bl-xl"></div>
            </div>
          </motion.div>

          {/* Context Section (Challenge & Solution) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-green-400/10"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-green-400">01.</span> The Challenge
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.challenge ||
                  "No challenge description provided. This section would typically describe the problem statement and the user needs identified at the start of the project."}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-green-400">02.</span> The Solution
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.solution ||
                  "No solution description provided. This section would typically outline the technical approach, architectural decisions, and the final implementation details."}
              </p>
            </div>
          </motion.div>

          {/* Tech Stack & Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8"
          >
            {/* Tech Stack */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-bold text-white border-l-4 border-green-400 pl-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 border border-green-400/20 rounded text-sm text-gray-300 hover:border-green-400/50 transition-colors select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xl font-bold text-white border-l-4 border-green-400 pl-3">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features?.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded bg-gray-900/30 border border-white/5 hover:border-green-400/20 transition-colors"
                  >
                    <span className="text-green-400 mt-1">▹</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Detailed Description */}
          {project.longDescription && (
            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                Project Overview
              </h3>
              <div className="prose prose-invert prose-green max-w-none text-gray-300">
                <p className="whitespace-pre-line">{project.longDescription}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
