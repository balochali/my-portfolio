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
      className="min-h-screen bg-[#0d1117] text-gray-300 font-mono py-24 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#61afef]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c678dd]/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#161b22] border border-gray-800 flex items-center justify-center text-xl shadow-inner">
              ⚙️
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
                Tech_Manifest
              </h2>
              <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                Dependency_Management.v2
              </div>
            </div>
          </div>
        </div>

        {/* IDE Editor Shell */}
        <div className="bg-[#161b22] border border-gray-800 rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden group">
          {/* Editor Header */}
          <div className="flex items-center justify-between bg-[#0d1117] border-b border-gray-800 px-4 h-12">
            <div className="flex items-center h-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 h-full text-[11px] font-bold tracking-tight border-r border-gray-800 transition-colors relative ${
                    activeTab === tab
                      ? "text-gray-200 bg-[#161b22]"
                      : "text-gray-500 hover:bg-[#161b22]/30"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="skillTab"
                      className="absolute top-0 left-0 right-0 h-0.5 bg-[#61afef]"
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[10px] text-gray-600 font-bold uppercase hidden sm:flex pr-4">
              <span>LF</span>
              <span>UTF-8</span>
              <span>JSON_SPEC</span>
            </div>
          </div>

          <div className="p-8 md:p-12 min-h-[600px] bg-[#0d1117] relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#161b22]/30 border-r border-gray-800 flex flex-col items-center pt-8 text-[10px] text-gray-800 font-bold select-none opacity-50">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="leading-[1.5rem]">
                  {(i + 1).toString().padStart(2, "0")}
                </div>
              ))}
            </div>

            <div className="pl-16 font-mono text-sm leading-relaxed">
              <span className="text-gray-600">{`{`}</span>
              <div className="pl-6 space-y-12 mt-6">
                {/* Core Dependencies Section */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[#c678dd]">"core_architecture"</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-gray-600 text-[10px] italic">
                      [{`/* primary technology suite */`}]
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-6">
                    {skillsData.coreDependencies.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-5 bg-[#161b22]/50 border border-gray-800 rounded-2xl hover:border-[#61afef]/30 group/item transition-all hover:shadow-[0_0_30px_rgba(97,175,239,0.05)]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#0d1117] border border-gray-800 flex items-center justify-center text-lg group-hover/item:border-[#61afef]/20 transition-colors shadow-inner">
                            {skill.icon}
                          </div>
                          <div>
                            <div className="text-gray-200 font-black group-hover/item:text-[#61afef] transition-colors tracking-tight">
                              {skill.name}
                            </div>
                            <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                              RELEASE: v{skill.version}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${skill.level === "latest" ? "text-[#98c379] bg-[#98c379]/10" : "text-[#61afef] bg-[#61afef]/10"}`}
                        >
                          {skill.level}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Dev Dependencies Section */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[#c678dd]">
                      "tooling_infrastructure"
                    </span>
                    <span className="text-gray-500">:</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pl-6">
                    {skillsData.devDependencies.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col gap-3 p-5 rounded-2xl bg-[#161b22]/20 border border-transparent hover:border-gray-800 transition-all hover:bg-[#161b22]/40"
                      >
                        <div className="text-[#61afef] font-bold text-lg">
                          {skill.icon}
                        </div>
                        <div>
                          <div className="text-xs text-gray-300 font-black uppercase tracking-tight">
                            {skill.name}
                          </div>
                          <div className="text-[9px] text-gray-600 font-mono mt-1">
                            {skill.level}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Extended Section */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#c678dd]">
                      "extended_capabilities"
                    </span>
                    <span className="text-gray-500">:</span>
                  </div>
                  <div className="flex flex-wrap gap-3 pl-6">
                    {skillsData.peerDependencies.map((skill, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 bg-[#161b22] border border-gray-800 rounded-xl text-[10px] text-gray-500 font-bold hover:text-[#61afef] hover:border-[#61afef]/30 transition-all cursor-default flex items-center gap-3 shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#61afef] transition-colors" />
                        {skill.name.toUpperCase()}{" "}
                        <span className="text-gray-700">@ {skill.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-12 text-gray-600">{`}`}</div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-[#161b22] border-t border-gray-800 h-10 flex items-center px-6 text-[10px] text-gray-600 font-bold justify-between">
            <div className="flex items-center gap-6">
              <span className="text-[#61afef]">branch: master*</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#98c379] shadow-[0_0_10px_rgba(152,195,121,0.3)]" />
                NODES_ACCESSIBLE
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden sm:inline">UTF-8 // JSON_SPEC</span>
              <span className="text-gray-500">INDEX_TIME: 0.12ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
