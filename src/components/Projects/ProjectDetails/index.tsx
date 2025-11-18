"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { Project } from "@/components/types/project";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const [currentTime, setCurrentTime] = useState("");
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
        })
      );
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="min-h-screen -mb-20 bg-black text-green-400 font-mono overflow-hidden relative pb-20">
      {/* Simple grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-green-500/5 via-transparent to-transparent"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6 sm:p-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Main Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Terminal Header */}
            <div className="space-y-6">
              {/* Back Navigation */}
              <motion.button
                onClick={() => window.history.back()}
                variants={itemVariants}
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm cursor-pointer"
              >
                <span>←</span>
                <span>cd ../projects</span>
              </motion.button>

              {/* Project Title */}
              <motion.div variants={itemVariants}>
                <div className="text-sm text-gray-400 mb-1">
                  $ cat project-details.json
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  <span className="text-green-400">{project.title}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-gray-300">Production</span>
                  </div>
                  <div className="text-gray-500">•</div>
                  <div className="text-gray-400">{currentTime}</div>
                </div>
              </motion.div>

              {/* Description Section */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="text-green-300">{"// Description"}</div>
                <div className="text-gray-300 leading-relaxed pl-4 border-l-2 border-green-400/30">
                  {project.longDescription || project.description}
                </div>
              </motion.div>

              {/* Features Section */}
              {project.features && project.features.length > 0 && (
                <motion.div variants={itemVariants} className="space-y-3">
                  <div className="text-green-300">{"// Key Features"}</div>
                  <div className="bg-gray-900/30 border border-green-400/20 rounded-lg p-4 space-y-2">
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-green-400 text-xs mt-1">▹</span>
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tech Stack Section */}
              {project.techStack && project.techStack.length > 0 && (
                <motion.div variants={itemVariants} className="space-y-3">
                  <div className="text-green-300">{"// Tech Stack"}</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-4">
                    {project.techStack.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + idx * 0.1 }}
                        className="text-sm cursor-pointer bg-gray-900/50 px-3 py-1 rounded border border-green-400/20 text-gray-300 hover:text-green-400 hover:border-green-400/50 transition-all duration-300"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Metadata */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-900/30 border border-green-400/20 rounded-lg p-4 space-y-2 text-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400">Ready for Production</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Type:</span>
                  <span className="text-gray-300">Full Stack Application</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Deployment:</span>
                  <span className="text-gray-300">Live & Active</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                {project.codeUrl && (
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(0,255,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-transparent border border-green-400 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Source
                    <span className="text-sm">&lt;/&gt;</span>
                  </motion.a>
                )}
              </motion.div>

              {/* Terminal Command */}
              <motion.div
                variants={itemVariants}
                className="text-xs text-gray-500 pt-4"
              >
                <span className="text-green-400">$</span> git clone{" "}
                {project.codeUrl || "repository-url"}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Project Image */}
          <motion.div
            variants={itemVariants}
            style={{ y }}
            className="relative"
          >
            {/* Terminal Window for Image */}
            <div className="bg-gray-900/50 rounded-lg border border-green-400/30 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-3 border-b border-green-400/20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">
                    {project.title}.preview
                  </span>
                </div>
                <span className="text-xs text-green-400">●</span>
              </div>

              {/* Image Container */}
              <div className="relative p-4">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                  {/* Main image */}
                  <div className="relative rounded-lg overflow-hidden border border-green-400/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={500}
                      className="w-full h-[400px] object-contain filter grayscale transition-transform duration-700 group-hover:scale-105 hover:grayscale-0"
                      priority
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Bottom info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-semibold text-sm">
                        {project.title}
                      </div>
                      <div className="text-green-400 text-xs">
                        {project.techStack &&
                          project.techStack.slice(0, 2).join(" • ")}
                      </div>
                    </div>

                    {/* Blinking cursor */}
                    <motion.div
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute bottom-4 right-4 w-2 h-4 bg-green-400"
                    />
                  </div>
                </div>

                {/* Simple terminal text */}
                <div className="mt-4 space-y-1 text-xs text-gray-400">
                  <div className="flex items-center justify-between">
                    <span>Build Status:</span>
                    <span className="text-green-400">Success ✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Last Deploy:</span>
                    <span className="text-gray-300">Recently</span>
                  </div>
                  <div className="text-green-400 mt-2">
                    $ npm run build && npm start
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gray-900/80 border border-green-400/30 rounded-lg flex items-center justify-center text-green-400 text-xl"
            >
              &lt;/&gt;
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-900/80 border border-green-400/30 rounded-lg flex items-center justify-center text-green-400 text-lg"
            >
              {}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Simple scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-400 text-sm"
          >
            ↓ Explore Details
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
