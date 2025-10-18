"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState("");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const roles = [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "React Specialist",
    "Problem Solver",
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Next.js",
    "Express",
    "CSS",
  ];

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

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/balochali",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/balochali/",
    },
    {
      name: "Email",
      url: "mailto:alibaloshi018@gmail.com",
    },
  ];

  return (
    <section
      data-section="hero"
      className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative"
    >
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
            {/* Main Terminal Content */}
            <div className="space-y-6">
              {/* Welcome Message */}
              <motion.div variants={itemVariants}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Hello, I&apos;m{" "}
                  <span className="text-green-400">Ali Baloch</span>
                </div>
                <div className="text-lg text-gray-300">
                  <TypeAnimation
                    sequence={roles.flatMap((role) => [role, 2000])}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={70}
                    repeat={Infinity}
                  />
                </div>
              </motion.div>

              {/* About Section */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="text-green-300">About:</div>
                <div className="text-gray-300 leading-relaxed pl-4 border-l-2 border-green-400/30">
                  I build modern web applications with clean code and great user
                  experiences. Passionate about solving problems through
                  technology.
                </div>
              </motion.div>

              {/* Skills Section */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="text-green-300">Skills:</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                      className="text-sm cursor-pointer bg-gray-900/50 px-3 py-1 rounded border border-green-400/20 text-gray-300 hover:text-green-400 hover:border-green-400/50 transition-all duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Status */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-sm"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-gray-300">
                  Available for new projects
                </span>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(0,255,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.querySelector(
                      '[data-section="contact"]'
                    );
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-6 py-3 cursor-pointer bg-green-600 hover:bg-green-500 text-black font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <span className="text-sm">→</span>
                </motion.button>

                <motion.a
                  href="/resume/ali_baloch.pdf"
                  download="Ali_Baloch_Resume.pdf"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(0,255,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-transparent border border-green-400 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Download Resume
                  <span className="text-sm">↓</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      color: "#00ff00",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 + index * 0.1 }}
                    className="w-10 h-10 border border-green-400/30 rounded-lg flex items-center justify-center text-gray-400 hover:border-green-400 transition-all duration-300 text-sm font-bold"
                  >
                    {social.name[0]}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
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
                  <span className="text-xs text-gray-400">{`Ali Baloch.jpg`}</span>
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
                      src="/hero-section/my-picture.jpeg"
                      alt="Ali Baloch - Full Stack Developer"
                      width={400}
                      height={500}
                      className="w-full h-[400px] object-contain filter grayscale transition-transform duration-700 group-hover:scale-105  hover:grayscale-0"
                      priority
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Bottom info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-semibold">Ali Baloch</div>
                      <div className="text-green-400 text-sm">
                        Full Stack Developer
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
                  <div>Size: 400x500 pixels</div>
                  <div>Status: Ready to collaborate</div>
                  <div className="text-green-400">
                    $ echo &quot;Let&apos;s build something amazing!&quot;
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
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-400 text-sm"
          >
            ↓ Scroll Down
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
