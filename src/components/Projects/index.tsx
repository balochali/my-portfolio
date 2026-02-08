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
              <Link href={`/projects/${project.slug}`} key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
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

                    {/* Image + Overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={100}
                        height={100}
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <motion.button
                          onClick={(e) => {
                            e.preventDefault(); // Prevent Link navigation
                            window.open(project.codeUrl, "_blank");
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-4 py-2 bg-transparent border border-green-400 text-green-400 rounded-lg font-semibold text-sm hover:bg-green-400/10 transition-colors"
                        >
                          View Code
                        </motion.button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-4 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs text-green-300">
                          Tech Stack:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: index * 0.1 + tagIndex * 0.05,
                              }}
                              className="text-xs bg-gray-800/50 px-2 py-1 rounded border border-green-400/20 text-gray-300 hover:text-green-400 hover:border-green-400/50 transition-all duration-300"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 space-y-1 border-t border-green-400/10 pt-3">
                        <div>$ python app.py</div>
                        <div className="text-green-400">
                          → Flask API running on localhost:5000
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
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
