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
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { scrollY } = useScroll();

  const imagesToDisplay =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

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

  useEffect(() => {
    if (isPaused || (project.gallery && project.gallery.length <= 1)) return;

    const autoplayInterval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [isPaused, project.gallery, imagesToDisplay.length]);

  const nextImage = () => {
    if (imagesToDisplay.length > 1) {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
    }
  };

  const prevImage = () => {
    if (imagesToDisplay.length > 1) {
      setDirection(-1);
      setCurrentImageIndex((prev) =>
        prev === 0 ? imagesToDisplay.length - 1 : prev - 1,
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

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
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
            <div
              className="relative group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative rounded-2xl overflow-hidden border border-green-400/20 bg-gray-900/50 aspect-[3/2] shadow-2xl shadow-green-500/5">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={currentImageIndex}
                    custom={direction}
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? "100%" : "-100%",
                        opacity: 0,
                        scale: 1.1,
                      }),
                      center: {
                        zIndex: 1,
                        x: 0,
                        opacity: 1,
                        scale: 1,
                      },
                      exit: (direction: number) => ({
                        zIndex: 0,
                        x: direction < 0 ? "100%" : "-100%",
                        opacity: 0,
                        scale: 0.9,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={imagesToDisplay[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    {/* Modern Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Bar (Autoplay Indicator) */}
                {imagesToDisplay.length > 1 && !isPaused && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-400/10 z-20">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="h-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    />
                  </div>
                )}

                {/* Slider Controls */}
                {imagesToDisplay.length > 1 && (
                  <>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={prevImage}
                        className="w-12 h-12 bg-black/40 hover:bg-green-500 hover:text-black border border-green-400/30 rounded-full flex items-center justify-center transition-all backdrop-blur-md hover:scale-110 active:scale-95"
                      >
                        <span className="text-xl">←</span>
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={nextImage}
                        className="w-12 h-12 bg-black/40 hover:bg-green-500 hover:text-black border border-green-400/30 rounded-full flex items-center justify-center transition-all backdrop-blur-md hover:scale-110 active:scale-95"
                      >
                        <span className="text-xl">→</span>
                      </button>
                    </div>

                    {/* Pagination Indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-green-400/10">
                      {imagesToDisplay.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setDirection(idx > currentImageIndex ? 1 : -1);
                            setCurrentImageIndex(idx);
                          }}
                          className="relative h-1.5 transition-all group/dot"
                          style={{
                            width: currentImageIndex === idx ? "24px" : "8px",
                          }}
                        >
                          <div
                            className={`absolute inset-0 rounded-full transition-all duration-300 ${
                              currentImageIndex === idx
                                ? "bg-green-500"
                                : "bg-gray-600 group-hover/dot:bg-gray-400"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Status Indicator */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <div className="px-2 py-1 bg-black/40 backdrop-blur-md border border-green-400/20 rounded text-[10px] text-green-400 font-mono">
                    LIVE_FEED::0{currentImageIndex + 1}
                  </div>
                </div>
              </div>

              {/* Decorative Terminal Elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t border-r border-green-500/40 rounded-tr-2xl pointer-events-none"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b border-l border-green-500/40 rounded-bl-2xl pointer-events-none"></div>
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
