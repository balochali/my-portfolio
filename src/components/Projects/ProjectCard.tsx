"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/components/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const imagesToDisplay =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  useEffect(() => {
    if (imagesToDisplay.length <= 1) return;

    // Use a staggered delay based on project index to avoid all sliders changing simultaneously
    const startDelay = index * 500;

    const timeout = setTimeout(() => {
      const autoplayInterval = setInterval(() => {
        setDirection(1);
        setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
      }, 4000); // 4 seconds interval

      return () => clearInterval(autoplayInterval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [imagesToDisplay.length, index]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (imagesToDisplay.length > 1) {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (imagesToDisplay.length > 1) {
      setDirection(-1);
      setCurrentImageIndex((prev) =>
        prev === 0 ? imagesToDisplay.length - 1 : prev - 1,
      );
    }
  };

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -10, scale: 1.02 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full"
      >
        <div className="bg-gray-900/50 rounded-lg border border-green-400/30 overflow-hidden hover:border-green-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/10">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-green-400/20">
            <span className="text-xs text-gray-400">
              {project.title.toLowerCase().replace(/\s+/g, "-")}.app
            </span>
            <div className="flex items-center gap-2">
              {project.featured && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                />
              )}
              <span
                className={`text-xs px-2 py-1 rounded ${
                  project.status === "Completed"
                    ? "bg-green-600/20 text-green-400"
                    : "bg-yellow-600/20 text-yellow-400"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative h-48 overflow-hidden bg-gray-900">
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
                  }),
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1,
                  },
                  exit: (direction: number) => ({
                    zIndex: 0,
                    x: direction < 0 ? "100%" : "-100%",
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={imagesToDisplay[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            {imagesToDisplay.length > 1 && (
              <>
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={prevImage}
                    className="w-8 h-8 bg-black/50 hover:bg-green-500 hover:text-black border border-green-400/30 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                  >
                    <span>←</span>
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={nextImage}
                    className="w-8 h-8 bg-black/50 hover:bg-green-500 hover:text-black border border-green-400/30 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                  >
                    <span>→</span>
                  </button>
                </div>

                {/* Dots / Pagination */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                  {imagesToDisplay.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 rounded-full transition-all ${
                        currentImageIndex === idx
                          ? "w-4 bg-green-500"
                          : "w-1 bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Project Info */}
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-green-300 font-mono">
                $ cat stack.json
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-gray-800/50 px-2 py-0.5 rounded border border-green-400/20 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[10px] text-gray-500">
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>
            </div>

            <div className="text-xs text-gray-500 space-y-1 border-t border-green-400/10 pt-3 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-green-400">→</span>
                <span>View Details</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
