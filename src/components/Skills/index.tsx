"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("package.json");

  const skillsData = {
    coreDependencies: [
      { name: "ReactJS", version: "18.2.0", level: "latest", icon: "⚛️" },
      { name: "NextJS", version: "14.1.0", level: "latest", icon: "▲" },
      { name: "NodeJS", version: "20.10.0", level: "^3.2.0", icon: "⬢" },
      { name: "TypeScript", version: "5.3.3", level: "latest", icon: "TS" },
      { name: "PostgreSQL", version: "16.1.0", level: "^2.8.0", icon: "🐘" },
    ],
    devDependencies: [
      { name: "TailwindCSS", version: "3.4.1", level: "latest", icon: "🌊" },
      { name: "Prisma", version: "5.8.1", level: "^2.1.0", icon: "◭" },
      { name: "Docker", version: "24.0.7", level: "^1.5.0", icon: "🐋" },
      { name: "Git", version: "2.43.0", level: "latest", icon: "GIT" },
    ],
    peerDependencies: [
      { name: "Socket.io", version: "4.7.4", level: "^1.2.0", icon: "🔌" },
      { name: "GraphQL", version: "16.8.1", level: "^1.0.0", icon: "⎔" },
      { name: "Firebase", version: "10.7.2", level: "^2.0.0", icon: "🔥" },
    ],
  };

  const tabs = ["package.json", "requirements.txt", "lock.file"];

  return (
    <section
      id="skills"
      data-section="skills"
      className="min-h-screen bg-background-primary text-text-secondary font-mono py-24 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-10 md:mb-16 space-y-3 md:space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-background-secondary border border-border-primary flex items-center justify-center text-lg shadow-inner">
              ⚙️
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-tighter uppercase">
                Tech_Manifest
              </h2>
              <div className="text-[9px] md:text-[10px] text-text-secondary font-bold tracking-widest uppercase">
                Dependency_Management.v2
              </div>
            </div>
          </div>
        </div>

        {/* IDE Editor Shell */}
        <div className="bg-background-secondary border border-border-primary rounded-2xl md:rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden group">
          {/* Editor Header */}
          <div className="flex items-center justify-between bg-background-primary border-b border-border-primary px-3 md:px-4 h-10 md:h-12">
            <div className="flex items-center h-full overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-6 h-full text-[10px] md:text-[11px] font-bold tracking-tight border-r border-border-primary transition-colors relative flex-shrink-0 ${
                    activeTab === tab
                      ? "text-text-primary bg-background-secondary"
                      : "text-text-secondary hover:bg-background-secondary/30"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="skillTab"
                      className="absolute top-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[9px] md:text-[10px] text-text-secondary font-bold uppercase hidden lg:flex pr-4">
              <span>LF</span>
              <span>UTF-8</span>
              <span>JSON_SPEC</span>
            </div>
          </div>

          <div className="p-4 md:p-8 lg:p-12 min-h-[500px] md:min-h-[600px] bg-background-primary relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-background-secondary/30 border-r border-border-primary flex flex-col items-center pt-8 text-[9px] md:text-[10px] text-text-secondary font-bold select-none opacity-50">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="leading-[1.4rem] md:leading-[1.5rem]">
                  {(i + 1).toString().padStart(2, "0")}
                </div>
              ))}
            </div>

            <div className="pl-10 md:pl-16 font-mono text-xs md:text-sm leading-relaxed overflow-x-hidden">
              <span className="text-text-secondary">{`{`}</span>
              <div className="pl-4 md:pl-6 space-y-8 md:space-y-12 mt-4 md:mt-6">
                {/* Core Dependencies Section */}
                <div>
                  <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                    <span className="text-accent-secondary text-[11px] md:text-sm">
                      "core_architecture"
                    </span>
                    <span className="text-text-secondary">:</span>
                    <span className="text-text-secondary text-[8px] md:text-[10px] italic hidden sm:inline">
                      [{`/* primary technology suite */`}]
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:pl-6">
                    {skillsData.coreDependencies.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-4 md:p-5 bg-background-secondary/50 border border-border-primary rounded-xl md:rounded-2xl hover:border-accent/30 group/item transition-all hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.05)]"
                      >
                        <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-background-primary border border-border-primary flex items-center justify-center text-base md:text-lg group-hover/item:border-accent/20 transition-colors shadow-inner flex-shrink-0">
                            {skill.icon}
                          </div>
                          <div className="min-w-0">
                            <div className="text-text-primary font-black group-hover/item:text-accent transition-colors tracking-tight truncate">
                              {skill.name}
                            </div>
                            <div className="text-[8px] md:text-[9px] text-text-secondary font-bold uppercase tracking-widest mt-0.5 truncate">
                              RELEASE: v{skill.version}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-tighter flex-shrink-0 ${skill.level === "latest" ? "text-green-500 bg-green-500/10" : "text-accent bg-accent/10"}`}
                        >
                          {skill.level}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Dev Dependencies Section */}
                <div>
                  <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                    <span className="text-accent-secondary text-[11px] md:text-sm">
                      "tooling_infrastructure"
                    </span>
                    <span className="text-text-secondary">:</span>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 md:pl-6">
                    {skillsData.devDependencies.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col gap-2 md:gap-3 p-4 md:p-5 rounded-xl md:rounded-2xl bg-background-secondary/20 border border-transparent hover:border-border-primary transition-all hover:bg-background-secondary/40"
                      >
                        <div className="text-accent font-bold text-base md:text-lg">
                          {skill.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] md:text-xs text-text-secondary font-black uppercase tracking-tight truncate">
                            {skill.name}
                          </div>
                          <div className="text-[8px] md:text-[9px] text-text-secondary font-mono mt-0.5 truncate">
                            {skill.level}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Extended Section */}
                <div>
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <span className="text-accent-secondary text-[11px] md:text-sm">
                      "extended_capabilities"
                    </span>
                    <span className="text-text-secondary">:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3 md:pl-6">
                    {skillsData.peerDependencies.map((skill, i) => (
                      <div
                        key={i}
                        className="px-3 md:px-4 py-1.5 md:py-2 bg-background-secondary border border-border-primary rounded-lg md:rounded-xl text-[8px] md:text-[10px] text-text-secondary font-bold hover:text-accent hover:border-accent/30 transition-all cursor-default flex items-center gap-2 md:gap-3 shadow-sm"
                      >
                        <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-border-primary group-hover:bg-accent transition-colors flex-shrink-0" />
                        <span className="truncate">
                          {skill.name.toUpperCase()}
                        </span>
                        <span className="text-text-secondary hidden sm:inline">
                          @ {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-12 text-text-secondary">{`}`}</div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-background-secondary border-t border-border-primary h-8 md:h-10 flex items-center px-4 md:px-6 text-[8px] md:text-[10px] text-text-secondary font-bold justify-between">
            <div className="flex items-center gap-3 md:gap-6">
              <span className="text-accent truncate max-w-[100px] md:max-w-none">
                branch: master*
              </span>
              <span className="flex items-center gap-1.5 md:gap-2">
                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(152,195,121,0.3)]" />
                <span className="hidden xs:inline">NODES_ACCESSIBLE</span>
                <span className="xs:hidden">NODES_OK</span>
              </span>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <span className="hidden sm:inline">UTF-8 // JSON_SPEC</span>
              <span className="text-text-secondary">
                RES: {activeTab.split(".")[1]?.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
