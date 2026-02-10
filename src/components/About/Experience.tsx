import React from "react";
import { experiences } from "@/data/aboutData";

export const ExperienceSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center p-6 bg-[#61afef]/5 border border-[#61afef]/10 rounded-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#61afef]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-16 h-16 bg-[#0d1117] rounded-full border border-gray-800 flex items-center justify-center text-2xl mb-4 relative z-10 shadow-lg">
          🚀
        </div>
        <div className="text-[10px] text-[#61afef] font-bold uppercase tracking-[0.2em] relative z-10">
          Branch: master
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest pl-2">
          Repository_Metrics
        </div>
        <div className="space-y-2">
          <div className="bg-[#161b22]/50 p-3 rounded-lg border border-gray-800">
            <div className="text-[10px] text-gray-500">Milestone_Count</div>
            <div className="text-xs text-gray-300 font-mono">
              {experiences.length} Major_Commits
            </div>
          </div>
          <div className="bg-[#161b22]/50 p-3 rounded-lg border border-gray-800">
            <div className="text-[10px] text-gray-500">Sync_Status</div>
            <div className="text-xs text-[#98c379] font-mono">LATEST_READY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="relative pl-8 sm:pl-12 py-4">
      {/* Immersive Branch Line */}
      <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#61afef] via-[#c678dd] to-[#98c379] opacity-20" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* The Commit Node */}
            <div className="absolute -left-[28px] sm:-left-[36px] top-1 w-6 h-6 rounded-full bg-[#0d1117] border-2 border-[#61afef] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(97,175,239,0.3)] group-hover:scale-110 group-hover:border-[#61afef] transition-all">
              <div className="w-1.5 h-1.5 rounded-full bg-[#61afef] group-hover:animate-ping" />
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-mono text-gray-600 bg-[#161b22] px-2 py-0.5 rounded border border-gray-800 shadow-inner">
                  hash_{Math.random().toString(16).slice(2, 8)}
                </span>
                <span className="text-[10px] font-mono text-[#61afef] font-bold uppercase tracking-tighter bg-[#61afef]/5 px-2 rounded">
                  {exp.duration}
                </span>
              </div>

              <div className="bg-[#161b22]/40 rounded-2xl border border-gray-800 p-6 group-hover:border-[#61afef]/30 transition-all duration-500 shadow-xl group-hover:shadow-[#61afef]/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#61afef]/10" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-black text-white tracking-tight uppercase group-hover:text-[#61afef] transition-colors leading-none">
                      {exp.position}
                    </h3>
                    <div className="text-xs text-gray-500 font-mono mt-2">
                      @ <span className="text-[#e5c07b]">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-[#0d1117] bg-[#161b22] flex items-center justify-center text-[8px] text-gray-600 font-bold"
                      >
                        U{i}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-400 leading-relaxed font-mono relative pl-4 border-l border-gray-800 group-hover:border-[#61afef]/20 transition-colors">
                  {exp.description}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-[#61afef]/5 text-[#61afef]/70 border border-[#61afef]/10 rounded-full group-hover:border-[#61afef]/30 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Head pointer */}
      <div className="mt-12 flex items-center gap-3 text-[10px] font-mono text-gray-600 pl-4 border-l-2 border-dashed border-gray-800">
        <span className="animate-pulse text-[#61afef]">●</span>
        <span>(HEAD -&gt; master, origin/master) // build:stable</span>
      </div>
    </div>
  );
};

export default Experience;
