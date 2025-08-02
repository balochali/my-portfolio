'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/hero";
import AboutSection from '@/components/About';

interface LandingAnimationProps {
  onComplete?: () => void;
}

const LandingAnimation = ({ onComplete }: LandingAnimationProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [compilingDots, setCompilingDots] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Code snippets that will appear
  const codeSnippets = [
    "const developer = {",
    "  name: 'John Doe',",
    "  skills: ['React', 'Node.js'],",
    "  passion: 'Creating amazing UX'",
    "};",
    "",
    "function buildPortfolio() {",
    "  return developer.create();",
    "}"
  ];

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 500);
    const timer2 = setTimeout(() => setCurrentStep(2), 1500);
    const timer3 = setTimeout(() => setShowCode(true), 2000);
    const timer4 = setTimeout(() => setCurrentStep(3), 4500);
    const timer5 = setTimeout(() => {
      setCurrentStep(4);
      setShowContent(true);
    }, 5500);
    const timer6 = setTimeout(() => {
      console.log('Animation complete, calling onComplete');
      onComplete?.();
    }, 6500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [onComplete]);

  // Compiling dots animation
  useEffect(() => {
    if (currentStep === 3) {
      const interval = setInterval(() => {
        setCompilingDots(prev => {
          if (prev === '...') return '';
          return prev + '.';
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  return (
    <>
      {/* Main Content that appears after animation */}
      {showContent && (
        <>
          <Header />
          <HeroSection />
          <AboutSection />
        </>
      )}

      {/* Animation Overlay */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-black text-green-400 font-mono flex items-center justify-center z-50 overflow-hidden"
          >
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            
            {/* Animated particles - only render on client to avoid hydration mismatch */}
            {isClient && [...Array(20)].map((_, i) => {
              const randomX1 = (i * 17 + 23) % 100;
              const randomX2 = (i * 31 + 47) % 100;
              const randomY1 = (i * 13 + 29) % 100;
              const randomY2 = (i * 37 + 53) % 100;
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-green-400 rounded-full"
                  style={{
                    left: `${randomX1}%`,
                    top: `${randomY1}%`,
                  }}
                  animate={{
                    x: [`0vw`, `${(randomX2 - randomX1) * 0.5}vw`],
                    y: [`0vh`, `${(randomY2 - randomY1) * 0.5}vh`],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    delay: (i % 5) * 0.4,
                  }}
                />
              );
            })}

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
              {/* Step 0 & 1: Opening brackets animation */}
              <AnimatePresence>
                {currentStep >= 0 && currentStep < 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative"
                  >
                    {/* Left bracket */}
                    <motion.div
                      initial={{ x: 50, opacity: 0, rotateY: 90 }}
                      animate={{ 
                        x: currentStep >= 1 ? -100 : 0, 
                        opacity: 1, 
                        rotateY: 0,
                        scale: currentStep >= 1 ? 1.2 : 1
                      }}
                      transition={{ 
                        duration: 1.2, 
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100
                      }}
                      className="inline-block text-9xl md:text-[12rem] font-bold text-green-400"
                      style={{ 
                        textShadow: '0 0 30px rgba(0,255,0,0.5), 0 0 60px rgba(0,255,0,0.3)' 
                      }}
                    >
                      &lt;
                    </motion.div>

                    {/* Right bracket */}
                    <motion.div
                      initial={{ x: -50, opacity: 0, rotateY: -90 }}
                      animate={{ 
                        x: currentStep >= 1 ? 100 : 0, 
                        opacity: 1, 
                        rotateY: 0,
                        scale: currentStep >= 1 ? 1.2 : 1
                      }}
                      transition={{ 
                        duration: 1.2, 
                        ease: "easeOut",
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="inline-block text-9xl md:text-[12rem] font-bold text-green-400"
                      style={{ 
                        textShadow: '0 0 30px rgba(0,255,0,0.5), 0 0 60px rgba(0,255,0,0.3)' 
                      }}
                    >
                      &gt;
                    </motion.div>

                    {/* Slash */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: currentStep >= 2 ? 1 : 0, 
                        scale: currentStep >= 2 ? 1 : 0,
                        rotateZ: currentStep >= 2 ? 0 : 180
                      }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "backOut",
                        delay: currentStep >= 2 ? 0.2 : 0
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-bold text-blue-400"
                      style={{ 
                        textShadow: '0 0 20px rgba(59,130,246,0.5)' 
                      }}
                    >
                      /
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 2: Code snippets */}
              <AnimatePresence>
                {showCode && currentStep < 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-gray-900/90 rounded-lg border border-green-400/30 p-8 max-w-lg w-full mx-4 backdrop-blur-sm">
                      {/* Terminal header */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-green-400/20">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-400">portfolio.js</span>
                      </div>
                      
                      {/* Code lines */}
                      <div className="text-left space-y-1">
                        {codeSnippets.map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className={`text-sm ${
                              line.includes('const') || line.includes('function') 
                                ? 'text-purple-400' 
                                : line.includes(':') 
                                ? 'text-blue-400'
                                : line.includes("'") 
                                ? 'text-green-300'
                                : 'text-gray-300'
                            }`}
                          >
                            <span className="text-gray-500 mr-3">{String(index + 1).padStart(2, '0')}</span>
                            {line || '\u00A0'}
                            {index === codeSnippets.length - 1 && (
                              <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-green-400 ml-1"
                              >
                                |
                              </motion.span>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 3: Compiling */}
              <AnimatePresence>
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-green-400/30 border-t-green-400 rounded-full mx-auto mb-6"
                    />
                    <div className="text-2xl md:text-3xl text-green-400 mb-2">
                      Loading Portfolio{compilingDots}
                    </div>
                    <div className="text-gray-400">
                      Initializing awesome experience...
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mt-6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-green-400 to-blue-400"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Corner decorations */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute top-4 left-4 text-green-400/30 text-4xl"
            >
              {'{}'}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute top-4 right-4 text-green-400/30 text-4xl"
            >
              {'[]'}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="absolute bottom-4 left-4 text-green-400/30 text-4xl"
            >
              {'()'}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="absolute bottom-4 right-4 text-green-400/30 text-4xl"
            >
              {'</>'}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingAnimation;