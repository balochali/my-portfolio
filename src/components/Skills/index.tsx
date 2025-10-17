"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [terminalText, setTerminalText] = useState("");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -30]);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Other",
  ];

  const skillsData = [
    // Frontend
    {
      name: "JavaScript",
      category: "Frontend",
      level: 95,
      experience: "3+ years",
      description: "ES6+, Async/Await, DOM Manipulation, SPA development",
      icon: "JS",
      projects: 18,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "ReactJS",
      category: "Frontend",
      level: 92,
      experience: "2+ years",
      description: "Hooks, Context API, Redux, Component Optimization",
      icon: "React",
      projects: 15,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "NextJS",
      category: "Frontend",
      level: 90,
      experience: "2+ years",
      description: "SSR, SSG, API Routes, App Router",
      icon: "Next",
      projects: 8,
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: 90,
      experience: "2+ years",
      description: "Utility-first styling, custom configs, responsive UI",
      icon: "TW",
      projects: 10,
      color: "from-cyan-400 to-cyan-600",
    },
    {
      name: "MUI / Ant Design",
      category: "Frontend",
      level: 85,
      experience: "2+ years",
      description: "Pre-built components, theme customization",
      icon: "UI",
      projects: 7,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "HTML5 & CSS3",
      category: "Frontend",
      level: 90,
      experience: "3+ years",
      description: "Semantic HTML, Flexbox, Grid, Responsive Design",
      icon: "HTML",
      projects: 15,
      color: "from-pink-400 to-pink-600",
    },

    // Backend
    {
      name: "NodeJS",
      category: "Backend",
      level: 90,
      experience: "2+ years",
      description: "Express, REST APIs, middleware, server-side logic",
      icon: "Node",
      projects: 10,
      color: "from-green-500 to-green-700",
    },
    {
      name: "ExpressJS",
      category: "Backend",
      level: 88,
      experience: "2+ years",
      description: "Routing, Middleware, Authentication",
      icon: "Exp",
      projects: 9,
      color: "from-gray-500 to-gray-700",
    },
    {
      name: "REST APIs",
      category: "Backend",
      level: 92,
      experience: "2+ years",
      description: "API design, integration, documentation",
      icon: "API",
      projects: 12,
      color: "from-green-400 to-green-600",
    },

    // Database
    {
      name: "MongoDB",
      category: "Database",
      level: 91,
      experience: "2+ years",
      description: "Aggregation, Indexing, Mongoose ODM",
      icon: "Mongo",
      projects: 8,
      color: "from-green-400 to-green-600",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      level: 85,
      experience: "1+ years",
      description: "Joins, transactions, Prisma ORM",
      icon: "PG",
      projects: 5,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "MySQL",
      category: "Database",
      level: 83,
      experience: "1+ years",
      description: "Database design, Stored procedures",
      icon: "SQL",
      projects: 5,
      color: "from-orange-500 to-orange-700",
    },

    // Tools
    {
      name: "Git / GitHub",
      category: "Tools",
      level: 92,
      experience: "3+ years",
      description: "Version control, branching, merging, CI/CD basics",
      icon: "Git",
      projects: 20,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Docker",
      category: "Tools",
      level: 75,
      experience: "1 year",
      description: "Containerization, Docker Compose",
      icon: "Docker",
      projects: 3,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Firebase",
      category: "Tools",
      level: 80,
      experience: "1+ years",
      description: "Authentication, Firestore, Hosting",
      icon: "FB",
      projects: 4,
      color: "from-yellow-500 to-orange-500",
    },

    // Other
    {
      name: "Socket.io",
      category: "Other",
      level: 80,
      experience: "1+ years",
      description: "Real-time communication, WebSockets",
      icon: "IO",
      projects: 3,
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "GraphQL",
      category: "Other",
      level: 70,
      experience: "1 year",
      description: "Apollo, queries, mutations (basic)",
      icon: "GQL",
      projects: 2,
      color: "from-pink-500 to-pink-700",
    },
    {
      name: "AWS (Basic)",
      category: "Other",
      level: 65,
      experience: "1 year",
      description: "EC2, S3, Lambda basics",
      icon: "AWS",
      projects: 2,
      color: "from-yellow-600 to-orange-600",
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  // Terminal typing effect (same as original)
  useEffect(() => {
    const commands = [
      "Initializing skill scanner...",
      "Scanning repositories...",
      "Analyzing code patterns...",
      "Calculating proficiency levels...",
      "Skills loaded successfully!",
    ];

    let currentCommand = 0;
    let currentChar = 0;

    const typeCommand = () => {
      if (currentCommand < commands.length) {
        if (currentChar < commands[currentCommand].length) {
          setTerminalText(
            (prev) => prev + commands[currentCommand][currentChar]
          );
          currentChar++;
          setTimeout(typeCommand, 50);
        } else {
          setTimeout(() => {
            setTerminalText((prev) => prev + "\n");
            currentCommand++;
            currentChar = 0;
            if (currentCommand < commands.length) {
              setTimeout(typeCommand, 300);
            }
          }, 800);
        }
      }
    };

    setTimeout(typeCommand, 1000);
  }, []);

  // Variants (same as original)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      data-section="skills"
      className="min-h-screen bg-black text-green-400 font-mono py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-radial from-green-500/5 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          {/* Terminal Header */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="bg-gray-900/50 rounded-t-lg border border-green-400/30 border-b-0 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">
                    ~/skills-analyzer
                  </span>
                </div>
                <span className="text-xs text-green-400">●</span>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-green-400/30 rounded-b-lg p-6">
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold text-white mb-4"
              >
                Technical <span className="text-green-400">Skills</span>
              </motion.h2>

              {/* Terminal Output */}
              <div className="bg-black/40 rounded-lg p-4 mb-4 text-left">
                <div className="text-green-400 text-xs mb-2">
                  $ ./analyze-skills.sh
                </div>
                <pre className="text-xs text-gray-300 whitespace-pre-wrap min-h-[100px]">
                  {terminalText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="bg-green-400 text-black"
                  >
                    _
                  </motion.span>
                </pre>
              </div>

              <motion.div
                variants={itemVariants}
                className="text-sm text-gray-400"
              >
                <span className="text-green-400">Total Skills:</span>{" "}
                {skillsData.length} |
                <span className="text-green-400"> Avg Proficiency:</span>{" "}
                {Math.round(
                  skillsData.reduce((acc, skill) => acc + skill.level, 0) /
                    skillsData.length
                )}
                %
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-semibold ${
                activeCategory === category
                  ? "bg-green-600 text-black border-green-400 shadow-lg shadow-green-400/25"
                  : "bg-gray-900/50 text-gray-300 border-green-400/30 hover:border-green-400/60 hover:text-green-400"
              }`}
            >
              {category}{" "}
              {category === "All"
                ? `(${skillsData.length})`
                : `(${
                    skillsData.filter((s) => s.category === category).length
                  })`}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              variants={skillVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                rotateY: 5,
              }}
              className="group relative"
            >
              {/* Skill Card */}
              <div className="bg-gray-900/50 rounded-lg border border-green-400/30 overflow-hidden hover:border-green-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/10">
                {/* Card Header */}
                <div className="flex items-center justify-between p-3 border-b border-green-400/20">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400">
                      {skill.name.toLowerCase()}.dev
                    </span>
                  </div>
                  <div className="text-xs text-green-400">{skill.level}%</div>
                </div>

                {/* Skill Icon */}
                <div className="relative p-4 text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                    {skill.name}
                  </h3>

                  <div className="text-xs text-gray-400 mb-3">
                    {skill.experience} • {skill.projects} projects
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>

                    {/* Proficiency Level */}
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>

                {/* Skill Details */}
                <div className="p-4 pt-0 space-y-3">
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Terminal Command */}
                  <div className="bg-black/40 rounded p-2 text-xs font-mono">
                    <div className="text-green-400">
                      $ which {skill.name.toLowerCase()}
                    </div>
                    <div className="text-gray-400">
                      /usr/local/bin/{skill.name.toLowerCase()}
                    </div>
                    <div className="text-green-400">
                      $ {skill.name.toLowerCase()} --version
                    </div>
                    <div className="text-gray-300">
                      Proficiency: {skill.level}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating skill level indicator */}
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{ duration: 3 + index * 0.2, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900/90 border border-green-400/40 rounded-full flex items-center justify-center text-green-400 text-xs font-bold z-10"
              >
                {Math.round(skill.level / 10)}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Years of Experience */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/30 border border-green-400/30 rounded-lg p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-bold text-green-400 mb-2"
            >
              4+
            </motion.div>
            <div className="text-gray-300">Years Experience</div>
          </motion.div>

          {/* Total Projects */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/30 border border-green-400/30 rounded-lg p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl font-bold text-green-400 mb-2"
            >
              {skillsData.reduce((acc, skill) => acc + skill.projects, 0)}+
            </motion.div>
            <div className="text-gray-300">Projects Completed</div>
          </motion.div>

          {/* Technologies Mastered */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/30 border border-green-400/30 rounded-lg p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl font-bold text-green-400 mb-2"
            >
              {skillsData.length}+
            </motion.div>
            <div className="text-gray-300">Technologies</div>
          </motion.div>
        </motion.div>

        {/* Terminal Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-900/30 border border-green-400/30 rounded-lg p-6">
            <div className="text-green-400 mb-2">$ skill-level --summary</div>
            <div className="text-gray-300 text-sm">
              {filteredSkills.length} skills displayed | Average proficiency:{" "}
              {Math.round(
                filteredSkills.reduce((acc, skill) => acc + skill.level, 0) /
                  filteredSkills.length
              )}
              %
            </div>
            <div className="text-gray-400 text-xs mt-2">
              Ready for new challenges! 🚀
            </div>

            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-green-400 ml-1"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        style={{ y }}
        animate={{
          x: [-15, 15, -15],
          rotate: [0, 8, 0, -8, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-32 right-8 w-24 h-24 bg-gray-900/10 border border-green-400/10 rounded-lg flex items-center justify-center text-green-400/30 text-3xl"
      >
        &lt;/&gt;
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollY, [0, 1000], [0, 25]) }}
        animate={{
          x: [15, -15, 15],
          rotate: [0, -6, 0, 6, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 3 }}
        className="absolute bottom-32 left-8 w-20 h-20 bg-gray-900/10 border border-green-400/10 rounded-lg flex items-center justify-center text-green-400/30 text-2xl"
      >
        {}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
