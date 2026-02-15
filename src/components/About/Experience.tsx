import React from "react";
import { experiences } from "@/data/aboutData";

export const ExperienceSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center p-6 bg-accent/5 border border-accent/10 rounded-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-16 h-16 bg-background-primary rounded-full border border-border-primary flex items-center justify-center text-2xl mb-4 relative z-10 shadow-lg">
          🚀
        </div>
        <div className="text-[10px] text-accent font-bold uppercase tracking-[0.2em] relative z-10">
          Branch: master
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest pl-2">
          Repository_Metrics
        </div>
        <div className="space-y-2">
          <div className="bg-background-secondary/50 p-3 rounded-lg border border-border-primary">
            <div className="text-[10px] text-text-secondary">
              Milestone_Count
            </div>
            <div className="text-xs text-text-primary font-mono">
              {experiences.length} Major_Commits
            </div>
          </div>
          <div className="bg-background-secondary/50 p-3 rounded-lg border border-border-primary">
            <div className="text-[10px] text-text-secondary">Sync_Status</div>
            <div className="text-xs text-green-500 font-mono">LATEST_READY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="relative pl-6 sm:pl-12 py-2 md:py-4">
      {/* Human Readable Heading */}
      <div className="flex items-center gap-4 mb-6 md:mb-10 -ml-6 sm:-ml-12">
        <h2 className="text-xl md:text-2xl font-black text-text-primary tracking-tight uppercase">
          02_EXPERIENCE
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border-primary to-transparent" />
      </div>

      {/* Immersive Branch Line */}
      <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-green-500 opacity-20" />

      <div className="space-y-8 md:space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* The Commit Node */}
            <div className="absolute -left-[23px] sm:-left-[36px] top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background-primary border-2 border-accent flex items-center justify-center z-10 shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)] group-hover:scale-110 group-hover:border-accent transition-all">
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent group-hover:animate-ping" />
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <span className="text-[9px] md:text-[10px] font-mono text-text-secondary bg-background-secondary px-1.5 md:px-2 py-0.5 rounded border border-border-primary shadow-inner">
                  hash_{((index + 7) * 4321).toString(16).slice(0, 6)}
                </span>
                <span className="text-[9px] md:text-[10px] font-mono text-accent font-bold uppercase tracking-tighter bg-accent/5 px-2 rounded">
                  {exp.duration}
                </span>
              </div>

              <div className="bg-background-secondary/40 rounded-xl md:rounded-2xl border border-border-primary p-4 md:p-6 group-hover:border-accent/30 transition-all duration-500 shadow-xl group-hover:shadow-accent/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent/10" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-3 md:mb-4">
                  <div>
                    <h3 className="text-base md:text-lg font-black text-text-primary tracking-tight uppercase group-hover:text-accent transition-colors leading-tight">
                      {exp.position}
                    </h3>
                    <div className="text-[10px] md:text-xs text-text-secondary font-mono mt-1 md:mt-2">
                      @ <span className="text-yellow-500">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex -space-x-1.5 md:-space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-background-primary bg-background-secondary flex items-center justify-center text-[7px] md:text-[8px] text-text-secondary font-bold"
                      >
                        U{i}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs md:text-sm text-text-secondary leading-relaxed font-mono relative pl-3 md:pl-4 border-l border-border-primary group-hover:border-accent/20 transition-colors">
                  {exp.description}
                </div>

                <div className="mt-4 md:mt-6 flex flex-wrap gap-1.5 md:gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest px-2 md:px-3 py-1 bg-accent/5 text-accent/70 border border-accent/10 rounded-full group-hover:border-accent/30 transition-all"
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
      <div className="mt-8 md:mt-12 flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] font-mono text-text-secondary pl-3 md:pl-4 border-l-2 border-dashed border-border-primary">
        <span className="animate-pulse text-accent">●</span>
        <span className="truncate">
          {" "}
          (HEAD -&gt; master, origin/master) // build:stable
        </span>
      </div>
    </div>
  );
};

export default Experience;
