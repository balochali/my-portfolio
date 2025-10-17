'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/hero";
import AboutSection from '@/components/About';
import ProjectsSection from '@/components/Projects';
import SkillsSection from '@/components/Skills';
import ContactSection from '@/components/Contact';

interface LandingAnimationProps {
  onComplete?: () => void;
}

const LandingAnimation = ({ onComplete }: LandingAnimationProps) => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const bootSequence = [
    "$ Initializing portfolio system...",
    "$ Loading developer profile...",
    "$ name: 'Ali Baloch'",
    "$ role: 'Full Stack Developer'",
    "$ skills: ['React', 'Node.js', 'MongoDB']",
    "$ status: 'Ready to collaborate'",
    "$ Launching interface...",
    "$ Welcome to Ali's Portfolio!"
  ];

  useEffect(() => {
    const sequence = [
      { delay: 0, phase: 0 },      // Terminal boot
      { delay: 1200, phase: 1 },   // Profile loading
      { delay: 2200, phase: 2 },   // Success message
      { delay: 2800, phase: 3 },   // Fade out
    ];

    const timers = sequence.map(({ delay, phase }) =>
      setTimeout(() => setCurrentPhase(phase), delay)
    );

    // Typewriter effect for terminal
    let lineIndex = 0;
    const typewriterTimer = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        setTerminalLines(prev => [...prev, bootSequence[lineIndex]]);
        lineIndex++;
      }
    }, 200);

    // Complete animation
    const completeTimer = setTimeout(() => {
      setShowAnimation(false);
      setShowContent(true);
      onComplete?.();
    }, 3500);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(typewriterTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <>
      {/* Main Content */}
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

      {/* Terminal Loading Animation */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.02,
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="fixed inset-0 bg-black text-green-400 font-mono overflow-hidden z-50"
          >
            {/* Grid background - same as hero */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-green-500/5 via-transparent to-transparent"></div>

            <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
              <div className="max-w-4xl w-full">
                {/* Terminal Window */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="bg-gray-900/50 rounded-lg border border-green-400/30 overflow-hidden backdrop-blur-sm"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between p-4 border-b border-green-400/20">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="w-3 h-3 bg-red-500 rounded-full"
                        />
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className="w-3 h-3 bg-yellow-500 rounded-full"
                        />
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 }}
                          className="w-3 h-3 bg-green-500 rounded-full"
                        />
                      </div>
                      <span className="text-sm text-gray-400">portfolio-boot.sh</span>
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

                  {/* Terminal Content */}
                  <div className="p-6 space-y-2 min-h-[400px]">
                    {/* System info header */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-400 text-sm mb-4 pb-2 border-b border-green-400/10"
                    >
                      Portfolio System v2.0.1 | Node: v18.x | React: v18.x
                    </motion.div>

                    {/* Boot sequence */}
                    <div className="space-y-1">
                      {terminalLines.filter(line => line).map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`text-sm ${
                            line.includes('name:') || line.includes('role:') 
                              ? 'text-white' 
                              : line.includes('skills:') || line.includes('status:')
                              ? 'text-blue-400'
                              : line.includes('Welcome')
                              ? 'text-green-300 font-semibold'
                              : 'text-gray-300'
                          }`}
                        >
                          {line}
                          {index === terminalLines.length - 1 && index < bootSequence.length - 1 && (
                            <motion.span
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                              className="text-green-400 ml-1"
                            >
                              |
                            </motion.span>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Success animation */}
                    <AnimatePresence>
                      {currentPhase >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="mt-6 pt-4 border-t border-green-400/20"
                        >
                          {/* Progress bar */}
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm text-gray-400">Loading:</span>
                            <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-green-400 to-blue-400"
                              />
                            </div>
                            <span className="text-sm text-green-400">100%</span>
                          </div>

                          {/* Status indicators */}
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              <span className="text-gray-300">Server: Ready</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              <span className="text-gray-300">Database: Connected</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              <span className="text-gray-300">UI: Initialized</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              <span className="text-gray-300">Portfolio: Online</span>
                            </div>
                          </div>

                          {/* Final message */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-4 p-3 bg-green-400/10 border border-green-400/30 rounded text-center"
                          >
                            <div className="text-green-300 font-semibold">✓ System Ready</div>
                            <div className="text-xs text-gray-400 mt-1">Redirecting to portfolio...</div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Floating terminal elements */}
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gray-900/80 border border-green-400/30 rounded-lg flex items-center justify-center text-green-400 text-xl opacity-50"
                >
                  &lt;/&gt;
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [5, -5, 5],
                    rotate: [0, -2, 0, 2, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-8 -left-8 w-12 h-12 bg-gray-900/80 border border-green-400/30 rounded-lg flex items-center justify-center text-green-400 text-lg opacity-50"
                >
                  $
                </motion.div>

                {/* Corner brackets */}
                {[
                  { corner: 'top-left', content: '[', pos: 'top-4 left-4' },
                  { corner: 'top-right', content: ']', pos: 'top-4 right-4' },
                  { corner: 'bottom-left', content: '{', pos: 'bottom-4 left-4' },
                  { corner: 'bottom-right', content: '}', pos: 'bottom-4 right-4' }
                ].map(({ corner, content, pos }) => (
                  <motion.div
                    key={corner}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ delay: 0.5 + Math.random() * 0.5, duration: 0.5 }}
                    className={`absolute ${pos} text-green-400/50 text-2xl font-bold`}
                  >
                    {content}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingAnimation;