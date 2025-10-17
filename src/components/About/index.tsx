"use client";

import React, { useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const tabs = [
    { id: "overview", label: "overview.js", icon: "📋" },
    { id: "experience", label: "experience.json", icon: "💼" },
    { id: "education", label: "education.md", icon: "🎓" },
    { id: "achievements", label: "achievements.txt", icon: "🏆" },
  ];

  // --- UPDATED EXPERIENCE ---
  const experiences = [
    {
      company: "TechThree",
      position: "Software Engineer",
      duration: "Apr 2024 – Present",
      description:
        "Developing scalable backend services and APIs using Node.js and PostgreSQL. Contributed to optimizing database queries and improving application performance for large-scale clients.",
      technologies: ["Node.js", "PostgreSQL", "Express.js", "AWS"],
    },
    {
      company: "TechThree",
      position: "Backend Developer",
      duration: "Jan 2024 – Jul 2024",
      description:
        "Worked on server-side logic, database modeling, and API development for high-traffic web apps. Collaborated closely with frontend teams for seamless integration.",
      technologies: ["Node.js", "Prisma", "MongoDB"],
    },
    {
      company: "TechThree",
      position: "Frontend Developer",
      duration: "Jun 2023 – Jan 2024",
      description:
        "Built responsive, dynamic UIs using React and Next.js. Ensured pixel-perfect implementation of designs and optimized performance for mobile and desktop platforms.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      company: "LaunchBox Pakistan",
      position: "MERN Stack Developer",
      duration: "May 2023 – Jul 2023",
      description:
        "Developed full-stack web solutions for startups, focusing on rapid prototyping and scalable architectures.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      company: "QF Network",
      position: "MERN Stack Developer",
      duration: "Nov 2022 – May 2023",
      description:
        "Created and maintained e-commerce and community platforms, improving performance and user experience.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
  ];

  // --- UPDATED EDUCATION ---
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Sukkur IBA University",
      year: "2024",
      grade: "CGPA: 3.5+",
    },
    {
      degree: "Full Stack Web Development",
      institution: "FreeCodeCamp (Self-Learning)",
      year: "2022",
      grade: "Certified",
    },
  ];

  // --- UPDATED ACHIEVEMENTS ---
  const achievements = [
    "🚀 Successfully delivered 20+ production-grade MERN projects.",
    "💡 Designed scalable backend architectures reducing API latency by 40%.",
    "🏆 Recognized as top performer at TechThree for rapid project delivery.",
    "📈 Contributed to open-source projects in the Node.js community.",
    "👨‍🏫 Mentored junior developers in MERN stack and clean code practices.",
    "🎯 Built and deployed blockchain-integrated features for Telegram bots.",
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

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="text-green-300">{`const aboutMe = {`}</div>
              <div className="pl-4 space-y-2 text-gray-300">
                <div>
                  <span className="text-green-400">name:</span>{" "}
                  <span className="text-yellow-300">{`"Ali Baloch"`}</span>,
                </div>
                <div>
                  <span className="text-green-400">role:</span>{" "}
                  <span className="text-yellow-300">{`"Full Stack Developer"`}</span>
                  ,
                </div>
                <div>
                  <span className="text-green-400">location:</span>{" "}
                  <span className="text-yellow-300">{`"Karachi, Pakistan"`}</span>
                  ,
                </div>
                <div>
                  <span className="text-green-400">passion:</span>{" "}
                  <span className="text-yellow-300">{`"Building digital solutions"`}</span>
                  ,
                </div>
              </div>
              <div className="text-green-300">{`};`}</div>
            </div>

            <div className="bg-gray-900/30 p-4 rounded border border-green-400/20">
              <div className="text-green-300 mb-2">{`// About Me`}</div>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a passionate full-stack developer with expertise in
                modern web technologies. I love creating efficient, scalable
                solutions and turning complex problems into simple, elegant
                code. When I&apos;m not coding, you&apos;ll find me exploring
                new technologies, contributing to open source, or sharing
                knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900/30 p-4 rounded border border-green-400/20">
                <div className="text-green-300 mb-2">Frontend</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>→ React, Next.js, TypeScript</div>
                  <div>→ HTML5, CSS3, Tailwind CSS</div>
                  <div>→ Redux, Context API</div>
                </div>
              </div>
              <div className="bg-gray-900/30 p-4 rounded border border-green-400/20">
                <div className="text-green-300 mb-2">Backend</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>→ Node.js, Express.js</div>
                  <div>→ MongoDB, PostgreSQL</div>
                  <div>→ REST APIs, GraphQL</div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "experience":
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-green-300">{`// Professional Experience`}</div>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/30 p-4 rounded border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-white font-semibold">{exp.position}</h3>
                  <span className="text-green-400 text-sm">{exp.duration}</span>
                </div>
                <div className="text-green-300 text-sm mb-2">{exp.company}</div>
                <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-800/50 px-2 py-1 rounded border border-green-400/20 text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case "education":
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-green-300"># Education & Certifications</div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/30 p-4 rounded border border-green-400/20"
              >
                <h3 className="text-white font-semibold mb-1">{edu.degree}</h3>
                <div className="text-green-300 text-sm mb-1">
                  {edu.institution}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{edu.year}</span>
                  <span className="text-green-400 text-sm">{edu.grade}</span>
                </div>
              </motion.div>
            ))}

            <div className="bg-gray-900/30 p-4 rounded border border-green-400/20">
              <div className="text-green-300 mb-2">## Continuous Learning</div>
              <div className="text-gray-300 text-sm space-y-1">
                <div>→ Always exploring new technologies</div>
                <div>→ Regular participation in tech conferences</div>
                <div>→ Active in developer communities</div>
                <div>→ Contributing to open source projects</div>
              </div>
            </div>
          </motion.div>
        );

      case "achievements":
        return (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-green-300">{`// Key Achievements`}</div>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-gray-900/30 p-3 rounded border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-900/30 p-4 rounded border border-green-400/20">
              <div className="text-green-300 mb-2">$ stats --summary</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-gray-300">
                  <div className="text-green-400">Projects:</div>
                  <div>20+ completed</div>
                </div>
                <div className="text-gray-300">
                  <div className="text-green-400">Experience:</div>
                  <div>3+ years</div>
                </div>
                <div className="text-gray-300">
                  <div className="text-green-400">Languages:</div>
                  <div>5+ mastered</div>
                </div>
                <div className="text-gray-300">
                  <div className="text-green-400">Coffee:</div>
                  <div>∞ cups consumed</div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section data-section="about" className="min-h-screen bg-black text-green-400 font-mono relative py-20">
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
              {`console.log("Getting to know the developer behind the code");`}
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
            <div className="flex flex-wrap border-b border-green-400/20">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ backgroundColor: "rgba(0,255,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 text-sm font-medium border-r border-green-400/20 transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-green-400/10 text-green-400 border-b-2 border-b-green-400"
                      : "text-gray-400 hover:text-green-300"
                  }`}
                >
                  <span className="text-xs">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 min-h-[500px]">{renderTabContent()}</div>

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
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Code Commits", value: "1,000+", icon: "📝" },
              { label: "Coffee Cups", value: "∞", icon: "☕" },
              { label: "Bug Fixes", value: "500+", icon: "🐛" },
              { label: "Happy Clients", value: "50+", icon: "😊" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,0,0.2)",
                }}
                className="bg-gray-900/30 p-4 rounded border border-green-400/20 text-center hover:border-green-400/40 transition-all duration-300"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-green-400 font-bold text-lg">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
