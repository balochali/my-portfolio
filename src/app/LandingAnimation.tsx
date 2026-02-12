"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/hero";
import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import ContactSection from "@/components/Contact";
import { portfolioData } from "@/data/portfolioData";

export default function LandingAnimation() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const hasVisited = sessionStorage.getItem("hasVisitedPortfolio");
    if (hasVisited) {
      setShowAnimation(false);
      setShowContent(true);
      return;
    }

    sessionStorage.setItem("hasVisitedPortfolio", "true");
    setShowAnimation(true);

    const bootSequence = [
      "[    0.000000] Portfolio_Linux version 5.15.0-71-generic",
      "[    0.124502] Initializing CPU_ID: ALI_BALOCH",
      "[    0.481293] Memory: 16GB LPDDR5 [COMPLEX_UI_DETECTED]",
      "[    1.021034] Mounting root_filesystem... OK",
      "[    1.492021] Loading drivers: { Experience.ko, Projects.so, Skills.lib }",
      "[    2.103942] Establishing secure_shell... Success",
      "[    2.812390] Starting graphical_interface...",
      `$ Welcome to the ${portfolioData.name} High-Fidelity Workspace!`,
    ];

    let lineIndex = 0;
    const typewriterTimer = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        setTerminalLines((prev) => [...prev, bootSequence[lineIndex]]);
        lineIndex++;
      }
    }, 180);

    const phaseTimers = [
      setTimeout(() => setCurrentPhase(1), 1000),
      setTimeout(() => setCurrentPhase(2), 2000),
      setTimeout(() => setCurrentPhase(3), 3000),
    ];

    const completeTimer = setTimeout(() => {
      setShowAnimation(false);
      setShowContent(true);
    }, 4500);

    return () => {
      clearInterval(typewriterTimer);
      phaseTimers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [isHydrated]);

  if (!isHydrated) return null;

  return (
    <>
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            exit={{
              opacity: 0,
              scale: 1.2,
              filter: "blur(40px)",
              transition: { duration: 1.5, ease: "circIn" },
            }}
            className="fixed inset-0 bg-[#0d1117] text-gray-300 font-mono overflow-hidden z-[100] flex items-center justify-center"
          >
            {/* Immersive Background */}
            <div className="absolute inset-0 bg-scanline opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#61afef]/5 via-transparent to-transparent" />

            <div className="max-w-3xl w-full p-8 relative">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-800" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-800" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-800" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-800" />

              <div className="space-y-6">
                {/* System Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                      Kernel_Loader_v4.2
                    </span>
                  </div>
                  <div className="text-[10px] text-[#61afef] font-bold">
                    MODE: SUPERUSER
                  </div>
                </div>

                {/* Terminal Log */}
                <div className="min-h-[200px] space-y-1.5">
                  {terminalLines.map((line, i) => {
                    if (!line) return null;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-xs md:text-sm font-mono leading-relaxed ${
                          line.includes("Welcome")
                            ? "text-[#98c379] font-black pt-4"
                            : line.startsWith("[")
                              ? "text-gray-500"
                              : "text-gray-300"
                        }`}
                      >
                        {line}
                      </motion.div>
                    );
                  })}
                  {terminalLines.length < 8 && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-[#61afef] ml-1 align-middle"
                    />
                  )}
                </div>

                {/* Visual Progress Phase */}
                {currentPhase >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 pt-8"
                  >
                    <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                      <span>Interface_Initialization</span>
                      <span>{Math.min(100, currentPhase * 33 + 34)}%</span>
                    </div>
                    <div className="h-1 bg-gray-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentPhase * 33 + 34}%` }}
                        className="h-full bg-gradient-to-r from-[#61afef] to-[#c678dd]"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      {[
                        { label: "DOM_SYNC", status: "OK" },
                        {
                          label: "SHADER_INIT",
                          status: currentPhase >= 2 ? "OK" : "...",
                        },
                        {
                          label: "NET_HANDSHAKE",
                          status: currentPhase >= 3 ? "OK" : "...",
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                          <span className="text-[8px] text-gray-600 font-bold uppercase">
                            {item.label}
                          </span>
                          <span
                            className={`text-[10px] font-bold ${item.status === "OK" ? "text-[#98c379]" : "text-gray-700 animate-pulse"}`}
                          >
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <>
          <Header />
          <motion.div
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
            <footer className="bg-[#0d1117] py-12 border-t border-gray-800/50">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="text-[10px] text-gray-600 font-bold tracking-[0.4em] uppercase mb-4">
                  System_Status: Operational // Build_0x2AF
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  © {new Date().getFullYear()} {portfolioData.name}. Handcrafted
                  with [NEXT.JS + FRAMER_MOTION]
                </div>
              </div>
            </footer>
          </motion.div>
        </>
      )}
    </>
  );
}
