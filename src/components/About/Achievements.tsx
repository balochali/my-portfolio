import React from "react";
import { achievements } from "@/data/aboutData";

export const AchievementsSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="p-5 bg-[#61afef]/5 border border-[#61afef]/10 rounded-2xl relative group overflow-hidden shadow-inner">
        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-8 h-8 text-[#61afef]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2Z" />
          </svg>
        </div>
        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">
          QA_VERIFICATION_LOG
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-500 font-mono">
              Assert_Integrity
            </span>
            <span className="text-[10px] text-[#98c379] font-bold">
              PASS: 100%
            </span>
          </div>
          <div className="h-1 bg-gray-900 rounded-full overflow-hidden">
            <div className="h-full bg-[#98c379] w-full shadow-[0_0_10px_rgba(152,195,121,0.2)]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest px-2">
          Terminal_Output
        </div>
        <div className="bg-[#0d1117] p-5 rounded-xl border border-gray-800 font-mono text-[10px] space-y-2 shadow-inner">
          <div className="text-[#61afef] font-bold">
            ● RUNNING validators...
          </div>
          <div className="text-gray-600">→ profile_metadata.xml</div>
          <div className="text-gray-600">→ architecture_integrity.ts</div>
          <div className="pt-2 border-t border-gray-800 text-[#98c379] font-bold">
            ✓ SYSTEM_VALIDATION_COMPLETE
          </div>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="font-mono space-y-8 py-2">
      {/* Header Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
        <div className="space-y-2">
          <div className="text-gray-600 text-[9px] uppercase font-bold tracking-[0.2em]">
            Total_Test_Cases
          </div>
          <div className="text-white font-black text-2xl tracking-tighter">
            {achievements.length} Units
          </div>
        </div>
        <div className="space-y-2 md:border-l border-gray-800 md:pl-6 leading-none">
          <div className="text-gray-600 text-[9px] uppercase font-bold tracking-[0.2em]">
            Verification_Time
          </div>
          <div className="text-[#61afef] font-black text-2xl tracking-tighter">
            0.024s
          </div>
        </div>
        <div className="space-y-2 md:border-l border-gray-800 md:pl-6 hidden md:block">
          <div className="text-gray-600 text-[9px] uppercase font-bold tracking-[0.2em]">
            Environment
          </div>
          <div className="text-[#c678dd] font-black text-2xl tracking-tighter uppercase">
            Production
          </div>
        </div>
      </div>

      {/* Test Results */}
      <div className="space-y-3">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-4 bg-[#161b22]/30 rounded-xl border border-gray-800 hover:border-[#61afef]/30 hover:bg-[#161b22]/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#61afef]/50 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex-shrink-0 flex flex-col items-center gap-1">
              <span className="text-[8px] text-gray-700 font-black group-hover:text-[#61afef] transition-colors">
                PASS
              </span>
              <div className="w-5 h-5 flex items-center justify-center text-[#98c379]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                  ASSERT_EQUALS:
                </span>
                <span className="text-xs text-gray-300 group-hover:text-white transition-colors">
                  "{achievement}"
                </span>
              </div>
              <div className="h-px bg-gray-800 group-hover:bg-[#61afef]/10 transition-colors w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Summary Module */}
      <div className="bg-[#0d1117] p-8 rounded-3xl border border-gray-800 text-center space-y-4 group shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#61afef]/5 rounded-full blur-[60px] pointer-events-none" />
        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.6em] relative z-10">
          FINAL_UNIT_TEST_AGGREGATION
        </div>
        <div className="text-3xl font-black text-white group-hover:text-[#61afef] transition-colors relative z-10 tracking-tight">
          {achievements.length} <span className="text-gray-700">OK</span> / 0{" "}
          <span className="text-gray-700">FAILED</span>
        </div>
        <p className="text-[10px] text-gray-600 max-w-sm mx-auto italic relative z-10 leading-relaxed">
          The subject continues to demonstrate peak performance across all
          architectural validation markers. Deploying to global production
          environment.
        </p>
      </div>
    </div>
  );
};

export default Achievements;
