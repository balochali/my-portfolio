"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/hero";
import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import ContactSection from "@/components/Contact";

export default function LandingAnimation() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false); // hydration check
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    setIsHydrated(true); // client-side only
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    // Check if already visited in this tab
    const hasVisited = sessionStorage.getItem("hasVisitedPortfolio");

    if (hasVisited) {
      // Skip animation for in-app navigation
      setShowAnimation(false);
      setShowContent(true);
      return;
    }

    // First visit: show animation
    sessionStorage.setItem("hasVisitedPortfolio", "true");
    setShowAnimation(true);

    const bootSequence = [
      "$ Initializing portfolio system...",
      "$ Loading developer profile...",
      "$ name: 'Ali Baloch'",
      "$ role: 'Full Stack Developer'",
      "$ skills: ['React', 'Node.js', 'MongoDB']",
      "$ status: 'Ready to collaborate'",
      "$ Launching interface...",
      "$ Welcome to Ali's Portfolio!",
    ];

    // Typewriter effect
    let lineIndex = 0;
    const typewriterTimer = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        setTerminalLines((prev) => [...prev, bootSequence[lineIndex]]);
        lineIndex++;
      }
    }, 200);

    // Update phases for progress bars / success section
    const phaseTimers = [
      setTimeout(() => setCurrentPhase(1), 1200),
      setTimeout(() => setCurrentPhase(2), 2200),
      setTimeout(() => setCurrentPhase(3), 2800),
    ];

    // Complete animation after all steps
    const completeTimer = setTimeout(() => {
      setShowAnimation(false);
      setShowContent(true);
    }, 3500);

    return () => {
      clearInterval(typewriterTimer);
      phaseTimers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [isHydrated]);

  // Prevent flash during SSR
  if (!isHydrated) return null;

  return (
    <>
      {/* ===== Portfolio Content ===== */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Header />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </motion.div>
      )}

      {/* ===== Boot Animation ===== */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-green-400 font-mono overflow-hidden z-50"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-radial from-green-500/5 via-transparent to-transparent"></div>

            <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
              <div className="max-w-4xl w-full">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="bg-gray-900/50 rounded-lg border border-green-400/30 overflow-hidden backdrop-blur-sm"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-green-400/20">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-sm text-gray-400">
                        portfolio-boot.sh
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                      <span className="text-xs text-green-400">ONLINE</span>
                    </div>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-6 space-y-2 min-h-[400px]">
                    <div className="text-gray-400 text-sm mb-4 pb-2 border-b border-green-400/10">
                      Portfolio System v2.0.1 | Node: v18.x | React: v18.x
                    </div>

                    {/* Boot Messages */}
                    <div className="space-y-1">
                      {terminalLines.map((line, index) => {
                        if (!line) return null;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`text-sm ${
                              line.includes("name:") || line.includes("role:")
                                ? "text-white"
                                : line.includes("skills:") ||
                                  line.includes("status:")
                                ? "text-blue-400"
                                : line.includes("Welcome")
                                ? "text-green-300 font-semibold"
                                : "text-gray-300"
                            }`}
                          >
                            {line}
                            {index === terminalLines.length - 1 &&
                              index < 7 && ( // show cursor until last line
                                <motion.span
                                  animate={{ opacity: [1, 0, 1] }}
                                  transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                  }}
                                  className="text-green-400 ml-1"
                                >
                                  |
                                </motion.span>
                              )}
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Success Section */}
                    {currentPhase >= 2 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 pt-4 border-t border-green-400/20"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm text-gray-400">
                            Loading:
                          </span>
                          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-green-400 to-blue-400"
                            />
                          </div>
                          <span className="text-sm text-green-400">100%</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs">
                          {[
                            "Server: Ready",
                            "Database: Connected",
                            "UI: Initialized",
                            "Portfolio: Online",
                          ].map((status, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                              <span className="text-gray-300">{status}</span>
                            </div>
                          ))}
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="mt-4 p-3 bg-green-400/10 border border-green-400/30 rounded text-center"
                        >
                          <div className="text-green-300 font-semibold">
                            ✓ System Ready
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            Redirecting to portfolio...
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
