"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import Overview, { OverviewSidebar } from "./Overview";
import Experience, { ExperienceSidebar } from "./Experience";
import Education, { EducationSidebar } from "./Education";
import Achievements, { AchievementsSidebar } from "./Achievements";
import Stats from "./Stats";

const AboutSection = () => {
  const TerminalWindow = ({
    title,
    children,
    sidebar,
    status,
  }: {
    title: string;
    children: React.ReactNode;
    sidebar?: React.ReactNode;
    status?: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-background-secondary rounded-xl border border-border-primary overflow-hidden mb-8 md:mb-16 last:mb-0 shadow-2xl"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-2 md:p-3 border-b border-border-primary bg-background-secondary/50">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex gap-1.5 md:gap-2 ml-1 md:ml-2">
            <div className="w-2.5 h-2.5 bg-[#ff5f56] rounded-full shadow-inner"></div>
            <div className="w-2.5 h-2.5 bg-[#ffbd2e] rounded-full shadow-inner"></div>
            <div className="w-2.5 h-2.5 bg-[#27c93f] rounded-full shadow-inner"></div>
          </div>
          <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 bg-background-primary rounded-md border border-border-primary max-w-[150px] md:max-w-none">
            <span className="text-[9px] md:text-[10px] text-text-secondary font-mono flex items-center gap-2 truncate">
              <svg
                className="w-3 h-3 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 3L16.29 6.29L17.29 5.29L18.71 6.71L17.71 7.71L21 11V13L17.71 16.29L18.71 17.29L17.29 18.71L16.29 17.71L13 21H11L7.71 17.71L6.71 18.71L5.29 17.29L6.29 16.29L3 13V11L6.29 7.71L5.29 6.71L6.71 5.29L7.71 6.29L11 3H13M12 5L9 8L12 11L15 8L12 5M7 10L4 13L7 16L10 13L7 10M17 10L14 13L17 16L20 13L17 10M12 15L9 18L12 21L15 18L12 15Z" />
              </svg>
              {title}
            </span>
          </div>
        </div>
        {status && (
          <div className="flex items-center gap-2 mr-1 md:mr-2">
            <div className="px-2 md:px-3 py-0.5 md:py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full flex items-center gap-1.5 md:gap-2">
              <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
              <span className="text-[8px] md:text-[10px] text-yellow-500 font-bold uppercase tracking-wider">
                {status}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:min-h-[450px]">
        {/* Sidebar */}
        {sidebar && (
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border-primary bg-background-secondary/50 p-4 md:p-6">
            {sidebar}
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 bg-background-primary relative p-4 md:p-6 font-mono text-sm overflow-x-auto">
          {/* Subtle line numbers or decoration could go here */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500/20"></div>
          {children}
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="border-t border-border-primary p-3 bg-background-secondary/50 font-mono">
        <div className="flex items-center justify-between text-[10px] text-text-secondary uppercase tracking-widest">
          <div className="flex items-center gap-4 ml-2">
            <span className="flex items-center gap-1">
              <span className="text-green-500">master</span>*
            </span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-2 mr-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-50"></span>
            <span>CONNECTED</span>
          </div>
        </div>
      </div>
    </motion.div>
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
      id="about"
      data-section="about"
      className="min-h-screen bg-background-primary text-text-secondary font-mono relative py-24"
    >
      {/* Dynamic Background: Scanning Lines & Code Rain */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(var(--accent-secondary)/0.1_1px,transparent_1px),linear-gradient(90deg,var(--accent-secondary)/0.1_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-scanline" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 px-4"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-background-secondary border border-border-primary flex items-center justify-center text-2xl shadow-2xl">
                👤
              </div>
              <div className="text-left">
                <h2 className="text-4xl sm:text-5xl font-black text-text-primary tracking-tighter uppercase">
                  About_Identity
                </h2>
                <div className="text-[10px] text-text-secondary font-bold tracking-widest uppercase">
                  Biometric_Profile.v4
                </div>
              </div>
            </div>
            <div className="text-text-secondary text-sm max-w-2xl mx-auto leading-relaxed border-l-2 border-accent/30 pl-6">
              {`$ query --target user_profile --identity "ALI BALOCH"`} <br />
              {`Fetching encrypted career nodes and educational records...`}
            </div>
          </motion.div>

          {/* Sequential Content Blocks */}
          <div className="space-y-12">
            <TerminalWindow
              title="System_Status.log"
              sidebar={<OverviewSidebar />}
              status="STABLE"
            >
              <Overview />
            </TerminalWindow>

            <TerminalWindow
              title="git_log.sh"
              sidebar={<ExperienceSidebar />}
              status="SYNCED"
            >
              <Experience />
            </TerminalWindow>

            <TerminalWindow
              title="Education.tsx"
              sidebar={<EducationSidebar />}
              status="PROVED"
            >
              <Education />
            </TerminalWindow>

            <TerminalWindow
              title="Test_Report.xml"
              sidebar={<AchievementsSidebar />}
              status="PASSED"
            >
              <Achievements />
            </TerminalWindow>
          </div>

          {/* Fun Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Stats />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
