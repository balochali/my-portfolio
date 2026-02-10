import React from "react";
import { portfolioData } from "@/data/portfolioData";

export const OverviewSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-[#161b22] border border-gray-800 rounded-lg shadow-inner">
        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">
          System_Identity
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-[#0d1117] border border-gray-800 flex items-center justify-center text-xl">
            👤
          </div>
          <div>
            <div className="text-xs font-bold text-gray-200 uppercase tracking-tighter">
              {portfolioData.name.toUpperCase().replace(/\s+/g, "_")}
            </div>
            <div className="text-[10px] text-gray-600 font-mono">
              ID: 0x7E2...4A2
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest px-2">
          Hardware_Resources
        </div>
        <div className="space-y-3">
          {[
            { label: "Mental_Capacity", val: "94%", color: "bg-[#61afef]" },
            { label: "Network_Latency", val: "12ms", color: "bg-[#c678dd]" },
            { label: "System_Uptime", val: "99.9%", color: "bg-[#98c379]" },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono px-2">
                <span className="text-gray-500">{item.label}</span>
                <span className="text-gray-300">{item.val}</span>
              </div>
              <div className="h-1 bg-gray-900 rounded-full overflow-hidden mx-2">
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
        <h2 className="text-2xl font-black text-white tracking-tight uppercase">
          01_OVERVIEW
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
      </div>

      {/* System Banner */}
      <div className="bg-[#161b22] border-y border-gray-800 p-4 -mx-6 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest">
          <span className="text-[#61afef] underline underline-offset-8 decoration-2 px-2">
            BASE_DASHBOARD
          </span>
          <span className="text-gray-600 hover:text-gray-400 transition-colors cursor-pointer capitalize">
            active_processes
          </span>
          <span className="text-gray-600 hover:text-gray-400 transition-colors cursor-pointer capitalize">
            perf_monitoring
          </span>
        </div>
        <div className="hidden sm:block text-[10px] text-gray-500 font-mono">
          AVG_LOAD: 0.42 / 0.15 / 0.05
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono">
        <div className="space-y-5">
          <div className="text-[#61afef] text-xs font-bold tracking-widest flex items-center gap-2">
            <span className="p-1 px-2 bg-[#61afef]/10 rounded-md border border-[#61afef]/20 shadow-[0_0_10px_rgba(97,175,239,0.1)]">
              &gt;_
            </span>
            BIO_INIT_REPORT
          </div>
          <div className="text-gray-400 text-sm leading-relaxed bg-[#161b22]/30 p-5 rounded-xl border border-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 text-[8px] text-gray-700 font-bold italic">
              BUILD_V2.0.42
            </div>
            <p className="space-y-1">
              <span className="text-[#98c379]">Initializing profile...</span>{" "}
              <br />
              <span className="text-[#61afef] font-bold">[OK]</span> Full-stack
              architecture loaded <br />
              <span className="text-[#61afef] font-bold">[OK]</span> Backend
              specialization active <br />
              <span className="text-[#61afef] font-bold">[OK]</span> Strategic
              optimization module active <br />
              <span className="block mt-4 text-gray-300">
                {`I am a developer who bridges the gap between complex logic and seamless user experiences. Specializing in high-performance architectures and scalable digital solutions.`}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-[#161b22]/50 rounded-xl border border-gray-800 p-6 space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#61afef]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#61afef]/10 transition-colors" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
              Primary_Directives.sh
            </span>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#98c379]/10 border border-[#98c379]/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#98c379] rounded-full animate-pulse"></span>
              <span className="text-[9px] text-[#98c379] font-bold uppercase">
                Active
              </span>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            {[
              "Building Robust Backend APIs",
              "Optimizing Database Queries",
              "Designing Intuitive UIs",
              "Leveraging Modern Frameworks",
            ].map((directive, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-xs text-gray-400 hover:text-gray-200 transition-colors cursor-default group/item"
              >
                <span className="text-[#61afef]/30 font-bold group-hover/item:text-[#61afef] transition-colors truncate">
                  [{i.toString().padStart(2, "0")}]
                </span>
                <span className="tracking-tighter">{directive}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Grid Style */}
      <div className="pt-8 border-t border-gray-800/50 relative">
        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.4em] mb-6 text-center">
          CORE_INFRASTRUCTURE_MANIFEST
        </div>
        <div className="flex flex-wrap justify-center gap-4">
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
              className="px-4 py-2 bg-[#161b22]/80 border border-gray-800 rounded-xl text-[10px] font-bold font-mono text-gray-500 flex items-center gap-3 transition-all duration-300 hover:border-[#61afef]/40 hover:text-[#61afef] hover:shadow-[0_0_20px_rgba(97,175,239,0.1)] group cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-sm bg-gray-700 group-hover:bg-[#61afef] rotate-45 transition-colors" />
              {tech.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
