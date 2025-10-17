"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  const filters = [
    "All",
    "React",
    "Full Stack",
    "MERN",
    "Next.js",
    "Blockchain",
  ];

  // --- REAL PROJECTS BASED ON YOUR EXPERIENCE ---
  const projects = [
    {
      id: 1,
      title: "Bubsy AI - Telegram Community Bot",
      category: "Full Stack",
      tags: ["Node.js", "Kafka", "PostgreSQL", "Telegram API", "AI"],
      description:
        "AI-powered Telegram bot managing spam, FUD detection, and community engagement with analytics dashboards.",
      image: "/projects/bubsyai.jpg",
      demoUrl: "https://t.me/bubsyAI",
      codeUrl: "#",
      status: "Completed",
      featured: true,
    },
    {
      id: 2,
      title: "Blockchain Wallet Login API",
      category: "MERN",
      tags: ["Node.js", "Express", "JWT", "Prisma", "Web3"],
      description:
        "Secure login API using blockchain wallet authentication, integrated with Prisma and PostgreSQL.",
      image: "/projects/walletapi.jpg",
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Next.js",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      description:
        "Modern portfolio showcasing my projects, expertise, and achievements with smooth animations and responsive design.",
      image: "/projects/portfolio.jpg",
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      featured: true,
    },
    {
      id: 4,
      title: "E-Commerce Platform (REX Official)",
      category: "Full Stack",
      tags: ["React", "Node.js", "PostgreSQL", "Express", "Prisma"],
      description:
        "Custom e-commerce backend and admin dashboard for REX Official, supporting product management and secure checkout.",
      image: "/projects/rex.jpg",
      demoUrl: "#",
      codeUrl: "#",
      status: "In Progress",
      featured: false,
    },
    {
      id: 5,
      title: "Community Analytics Dashboard",
      category: "React",
      tags: ["React", "Chart.js", "Node.js", "PostgreSQL"],
      description:
        "Real-time analytics dashboard for Telegram communities displaying sentiment, spam stats, and engagement insights.",
      image: "/projects/analytics.jpg",
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter ||
            project.tags.includes(activeFilter)
        );

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
      data-section="projects"
      className="min-h-screen bg-black text-green-400 font-mono py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-green-500/3 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          {/* Terminal Window Header */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="bg-gray-900/50 rounded-t-lg border border-green-400/30 border-b-0 p-3 mb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">~/projects</span>
                </div>
                <span className="text-xs text-green-400">●</span>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-green-400/30 rounded-b-lg p-6">
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
              <motion.div
                variants={itemVariants}
                className="mt-4 text-sm text-gray-400"
              >
                <span className="text-green-400">Found:</span> {projects.length}{" "}
                projects ready for deployment
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Filter Tabs */}
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
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-semibold ${
                activeFilter === filter
                  ? "bg-green-600 text-black border-green-400 shadow-lg shadow-green-400/25"
                  : "bg-gray-900/50 text-gray-300 border-green-400/30 hover:border-green-400/60 hover:text-green-400"
              }`}
            >
              {filter === "All" ? `${filter} (${projects.length})` : filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-gray-900/50 rounded-lg border border-green-400/30 overflow-hidden hover:border-green-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/10">
                {/* Terminal Header */}
                <div className="flex items-center justify-between p-3 border-b border-green-400/20">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                    </span>
                  </div>
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

                {/* Project Image Placeholder */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-6xl text-green-400/30">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-green-600 text-black rounded-lg font-semibold text-sm hover:bg-green-500 transition-colors"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-transparent border border-green-400 text-green-400 rounded-lg font-semibold text-sm hover:bg-green-400/10 transition-colors"
                    >
                      View Code
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <div className="text-xs text-green-300">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                          className="text-xs bg-gray-800/50 px-2 py-1 rounded border border-green-400/20 text-gray-300 hover:text-green-400 hover:border-green-400/50 transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 space-y-1 border-t border-green-400/10 pt-3">
                    <div>$ npm install && npm start</div>
                    <div className="text-green-400">
                      → Server running on localhost:3000
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
