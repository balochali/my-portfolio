import React from "react";
import { portfolioData } from "@/data/portfolioData";

export const OverviewSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-background-secondary border border-border-primary rounded-lg shadow-inner">
        <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest mb-2">
          System_Identity
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-background-primary border border-border-primary flex items-center justify-center text-xl">
            👤
          </div>
          <div>
            <div className="text-xs font-bold text-text-primary uppercase tracking-tighter">
              {portfolioData.name.toUpperCase().replace(/\s+/g, "_")}
            </div>
            <div className="text-[10px] text-text-secondary font-mono">
              ID: 0x7E2...4A2
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest px-2">
          Hardware_Resources
        </div>
        <div className="space-y-3">
          {[
            { label: "Mental_Capacity", val: "94%", color: "bg-accent" },
            {
              label: "Network_Latency",
              val: "12ms",
              color: "bg-accent-secondary",
            },
            { label: "System_Uptime", val: "99.9%", color: "bg-green-500" },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono px-2">
                <span className="text-text-secondary">{item.label}</span>
                <span className="text-text-primary">{item.val}</span>
              </div>
              <div className="h-1 bg-background-secondary rounded-full overflow-hidden mx-2">
                <div
                  className={`h-full ${item.color} opacity-40`}
                  style={{ width: item.val === "12ms" ? "20%" : item.val }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="space-y-8">
      {/* Human Readable Heading */}
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-2xl font-black text-text-primary tracking-tight uppercase">
          01_OVERVIEW
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border-primary to-transparent" />
      </div>

      {/* System Banner */}
      <div className="bg-background-secondary border-y border-border-primary p-4 -mx-6 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest">
          <span className="text-accent underline underline-offset-8 decoration-2 px-2">
            BASE_DASHBOARD
          </span>
          <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer capitalize">
            active_processes
          </span>
          <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer capitalize">
            perf_monitoring
          </span>
        </div>
        <div className="hidden sm:block text-[10px] text-text-secondary font-mono">
          AVG_LOAD: 0.42 / 0.15 / 0.05
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 font-mono">
        <div className="space-y-4 md:space-y-5">
          <div className="text-accent text-[10px] md:text-xs font-bold tracking-widest flex items-center gap-2">
            <span className="p-1 px-1.5 md:px-2 bg-accent/10 rounded-md border border-accent/20 shadow-[0_0_10px_rgba(var(--accent-rgb),0.1)]">
              &gt;_
            </span>
            BIO_INIT_REPORT
          </div>
          <div className="text-text-secondary text-xs md:text-sm leading-relaxed bg-background-secondary/30 p-4 md:p-5 rounded-xl border border-border-primary relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 text-[7px] md:text-[8px] text-text-secondary font-bold italic">
              BUILD_V2.0.42
            </div>
            <p className="space-y-1">
              <span className="text-green-500">Initializing profile...</span>{" "}
              <br />
              <span className="text-accent font-bold">[OK]</span> Full-stack
              architecture loaded <br />
              <span className="text-accent font-bold">[OK]</span> Backend
              specialization active <br />
              <span className="text-accent font-bold">[OK]</span> Strategic
              optimization module active <br />
              <span className="block mt-4 text-text-primary">
                {`I am a developer who bridges the gap between complex logic and seamless user experiences. Specializing in high-performance architectures and scalable digital solutions.`}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-background-secondary/50 rounded-xl border border-border-primary p-4 md:p-6 space-y-4 md:space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-accent/5 rounded-full blur-3xl -mr-12 md:-mr-16 -mt-12 md:-mt-16 group-hover:bg-accent/10 transition-colors" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] md:text-xs font-bold text-text-secondary uppercase tracking-[0.2em]">
              Primary_Directives.sh
            </span>
            <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[8px] md:text-[9px] text-green-500 font-bold uppercase">
                Active
              </span>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4 relative z-10">
            {[
              "Building Robust Backend APIs",
              "Optimizing Database Queries",
              "Designing Intuitive UIs",
              "Leveraging Modern Frameworks",
            ].map((directive, i) => (
              <div
                key={i}
                className="flex items-start gap-3 md:gap-4 text-[10px] md:text-xs text-text-secondary hover:text-text-primary transition-colors cursor-default group/item"
              >
                <span className="text-accent/30 font-bold group-hover/item:text-accent transition-colors flex-shrink-0">
                  [{i.toString().padStart(2, "0")}]
                </span>
                <span className="tracking-tighter break-words">
                  {directive}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Grid Style */}
      <div className="pt-6 md:pt-8 border-t border-border-primary/50 relative">
        <div className="text-[9px] md:text-[10px] text-text-secondary font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] mb-4 md:mb-6 text-center">
          CORE_INFRASTRUCTURE_MANIFEST
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {[
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Tailwind",
            "TypeScript",
            "Prisma",
          ].map((tech) => (
            <div
              key={tech}
              className="px-3 md:px-4 py-1.5 md:py-2 bg-background-secondary/80 border border-border-primary rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-bold font-mono text-text-secondary flex items-center gap-2 md:gap-3 transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)] group cursor-default"
            >
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-sm bg-border-primary group-hover:bg-accent rotate-45 transition-colors flex-shrink-0" />
              {tech.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
