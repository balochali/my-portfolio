"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

const HeroSection = () => {
  const [bootSequence, setBootSequence] = useState(0);
  const [isBooted, setIsBooted] = useState(false);

  const bootMessages = [
    "[    0.000000] Initializing portfolio_kernel_v4.2...",
    "[    0.420815] Loading system_modules: { Next.js, React, Tailwind }",
    "[    1.124502] Checking profile_integrity... OK",
    "[    1.890211] Mounting user_identity: ALI_BALOCH",
    "[    2.501932] Starting interactive_session...",
  ];

  useEffect(() => {
    if (bootSequence < bootMessages.length) {
      const timer = setTimeout(
        () => {
          setBootSequence((prev) => prev + 1);
        },
        400 + Math.random() * 600,
      );
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsBooted(true), 500);
      return () => clearTimeout(timer);
    }
  }, [bootSequence]);

  return (
    <section
      id="home"
      data-section="hero"
      className="min-h-screen bg-[#0d1117] text-gray-300 font-mono overflow-hidden relative flex items-center justify-center p-6"
    >
      {/* Dynamic Background: Scanning Lines & Code Rain */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(97,175,239,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(97,175,239,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#61afef]/5 to-transparent animate-scanline" />
      </div>

      {/* Boot Sequence Overlay */}
      <AnimatePresence>
        {!isBooted && (
          <motion.div
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            className="absolute z-50 inset-0 bg-[#0d1117] flex flex-col justify-center px-10 md:px-20"
          >
            <div className="max-w-4xl space-y-2">
              {bootMessages.slice(0, bootSequence).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs md:text-sm text-[#98c379] font-mono leading-relaxed"
                >
                  <span className="text-gray-600 mr-2">root@baloch:~$</span>
                  {msg}
                </motion.div>
              ))}
              {bootSequence < bootMessages.length && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2 h-4 bg-[#61afef] inline-block ml-1"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Content (IDE Splash Style) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-20">
        {/* Left: Branding & Status */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isBooted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 space-y-10 order-2 lg:order-1"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#282c34] border border-gray-700 rounded-md text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                Kernel: v4.2.0-LTS
              </span>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-green-500 font-bold uppercase">
                  Online
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              <span className="text-[#61afef]">const</span> developer = <br />
              <span className="text-[#e5c07b] drop-shadow-[0_0_15px_rgba(229,192,123,0.3)]">
                "{portfolioData.name}"
              </span>
              _
            </h1>

            <div className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl">
              Building <span className="text-[#c678dd] italic">Scalable</span>{" "}
              architectures and <br />
              <span className="text-[#98c379] italic">
                High-Performance
              </span>{" "}
              digital solutions.
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-4 bg-[#61afef] text-[#0d1117] font-black rounded-lg text-sm tracking-widest uppercase overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(97,175,239,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              Initialize_Explorer
            </button>

            <a
              href="/resume/ali_baloch.pdf"
              className="px-8 py-4 border-2 border-gray-700 hover:border-[#61afef] text-gray-400 hover:text-[#61afef] font-bold rounded-lg text-sm tracking-widest uppercase transition-all flex items-center gap-3"
            >
              <span>Download_Resume</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800/50">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                className="group flex flex-col gap-1"
              >
                <span className="text-[10px] text-gray-600 font-bold tracking-widest uppercase group-hover:text-[#61afef] transition-colors">
                  {social.name}
                </span>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                  /{social.name.toLowerCase()}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Immersive Profile Card (IDE Preview style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={isBooted ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 relative order-1 lg:order-2"
        >
          <div className="relative group perspective-1000">
            {/* Orbital Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#61afef]/30 via-[#c678dd]/20 to-transparent rounded-[2rem] blur-[80px] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            {/* File Frame */}
            <div className="relative bg-[#161b22] border border-gray-800 rounded-[2rem] p-4 shadow-2xl overflow-hidden group-hover:border-[#61afef]/40 transition-colors duration-500">
              {/* Visual Header */}
              <div className="flex items-center justify-between mb-4 px-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <span>PREVIEW: profile.png</span>
              </div>

              <div className="relative rounded-[1.5rem] overflow-hidden border border-gray-800 group-hover:border-[#61afef]/20 transition-colors">
                {/* Scanline Effect Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-scanline opacity-10 group-hover:opacity-20 transition-opacity" />

                <Image
                  src="/hero-section/alibaloch.png"
                  alt="Ali Baloch"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  priority
                />

                {/* Digital Metadata Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent">
                  <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-[10px] text-[#61afef] font-bold tracking-[0.4em] uppercase">
                      Authenticated_User
                    </div>
                    <h2 className="text-3xl font-black text-white">
                      {portfolioData.name}
                    </h2>
                    <div className="flex gap-2 text-[10px] items-center">
                      <span className="text-gray-500">TAGS:</span>
                      <span className="px-2 py-0.5 bg-gray-800/80 rounded text-gray-400">
                        #FullStack
                      </span>
                      <span className="px-2 py-0.5 bg-gray-800/80 rounded text-gray-400">
                        #SysArch
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Footfooter */}
              <div className="mt-6 flex items-center justify-between px-4 text-[10px] font-mono">
                <div className="text-gray-600">RESOLUTION: 1080x1350</div>
                <div className="text-[#98c379] animate-pulse">
                  STATUS: ACTIVE
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decor: Fixed Vertical Text */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[10px] text-gray-800 font-bold tracking-[1em] uppercase hidden xl:block">
        Portfolio_System_Operating_Nominal
      </div>
    </section>
  );
};

export default HeroSection;
