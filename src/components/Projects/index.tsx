"use client";

import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projectData";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const { scrollY } = useScroll();

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

  const filteredProjects =
    activeFilter === "All"
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

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      data-section="projects"
      className="min-h-screen bg-black text-green-400 font-mono py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-green-500/3 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            My <span className="text-green-400">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            {`$ ls -la projects/ | grep -E "(real|innovative)"`}
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              variants={itemVariants}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(6); // Reset visible count on filter change
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-semibold ${
                activeFilter === filter
                  ? "bg-green-600 text-black border-green-400 shadow-lg shadow-green-400/25"
                  : "bg-gray-900/50 text-gray-300 border-green-400/30 hover:border-green-400/60 hover:text-green-400"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center cursor-pointer"
          >
            <motion.button
              onClick={() => setVisibleCount(filteredProjects.length)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 cursor-pointer bg-transparent border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300 shadow-[0_0_10px_rgba(74,222,128,0.2)] hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
            >
              View More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
