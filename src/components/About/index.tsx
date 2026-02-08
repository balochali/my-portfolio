"use client";

import React, { useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import Overview from "./Overview";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import Stats from "./Stats";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const tabs = [
    { id: "overview", label: "overview.js", icon: "📋", aria: "Overview" },
    {
      id: "experience",
      label: "experience.json",
      icon: "💼",
      aria: "Experience",
    },
    { id: "education", label: "education.md", icon: "🎓", aria: "Education" },
    {
      id: "achievements",
      label: "achievements.txt",
      icon: "🏆",
      aria: "Achievements",
    },
  ];

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
      id="about"
      data-section="about"
      className="min-h-screen bg-black text-green-400 font-mono relative py-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-green-500/5 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              About <span className="text-green-400">Me</span>
            </div>
            <div className="text-gray-300 text-lg">
              {`console.log("Getting to know ${
                portfolioData.name.split(" ")[0]
              } behind the code");`}
            </div>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/50 rounded-lg border border-green-400/30 overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-4 border-b border-green-400/20">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400">terminal</span>
              </div>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xs text-green-400"
              >
                ●
              </motion.div>
            </div>

            {/* Tab Navigation */}
            <div className="flex overflow-x-auto border-b border-green-400/20 scrollbar-hide no-scrollbar -mx-px">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ backgroundColor: "rgba(0,255,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 text-sm cursor-pointer font-medium border-r border-green-400/20 transition-all duration-100 flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id
                      ? "bg-green-400/10 text-green-400 border-b-2 border-b-green-400"
                      : "text-gray-400 hover:text-green-300"
                  }`}
                >
                  <span className="text-xs" role="img" aria-label={tab.aria}>
                    {tab.icon}
                  </span>
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 min-h-[500px]">
              {activeTab === "overview" && <Overview />}
              {activeTab === "experience" && <Experience />}
              {activeTab === "education" && <Education />}
              {activeTab === "achievements" && <Achievements />}
            </div>

            {/* Terminal Footer */}
            <div className="border-t border-green-400/20 p-3 bg-gray-900/30">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-4">
                  <span>Lines: 42</span>
                  <span>Characters: 1,337</span>
                  <span>Language: JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Ready</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fun Stats */}
          <motion.div variants={itemVariants}>
            <Stats />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
