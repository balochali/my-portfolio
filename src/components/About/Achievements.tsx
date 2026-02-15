import React from "react";
import { achievements } from "@/data/aboutData";

export const AchievementsSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="p-5 bg-accent/5 border border-accent/10 rounded-2xl relative group overflow-hidden shadow-inner">
        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-8 h-8 text-accent"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2Z" />
          </svg>
        </div>
        <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest mb-4">
          QA_VERIFICATION_LOG
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-text-secondary font-mono">
              Assert_Integrity
            </span>
            <span className="text-[10px] text-green-500 font-bold">
              PASS: 100%
            </span>
          </div>
          <div className="h-1 bg-background-primary rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-full shadow-[0_0_10px_rgba(152,195,121,0.2)]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest px-2">
          Terminal_Output
        </div>
        <div className="bg-background-primary p-5 rounded-xl border border-border-primary font-mono text-[10px] space-y-2 shadow-inner">
          <div className="text-accent font-bold">● RUNNING validators...</div>
          <div className="text-text-secondary">→ profile_metadata.xml</div>
          <div className="text-text-secondary">→ architecture_integrity.ts</div>
          <div className="pt-2 border-t border-border-primary text-green-500 font-bold">
            ✓ SYSTEM_VALIDATION_COMPLETE
          </div>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="font-mono space-y-6 md:space-y-8 py-2">
      {/* Human Readable Heading */}
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-xl md:text-2xl font-black text-text-primary tracking-tight uppercase">
          04_ACHIEVEMENTS
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border-primary to-transparent" />
      </div>

      {/* Header Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-sm">
        <div className="space-y-1 md:space-y-2">
          <div className="text-text-secondary text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em]">
            Total_Test_Cases
          </div>
          <div className="text-text-primary font-black text-xl md:text-2xl tracking-tighter">
            {achievements.length} Units
          </div>
        </div>
        <div className="space-y-1 md:space-y-2 md:border-l border-border-primary md:pl-6 leading-none">
          <div className="text-text-secondary text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em]">
            Verification_Time
          </div>
          <div className="text-accent font-black text-xl md:text-2xl tracking-tighter">
            0.024s
          </div>
        </div>
        <div className="space-y-1 md:space-y-2 md:border-l border-border-primary md:pl-6 hidden md:block">
          <div className="text-text-secondary text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em]">
            Environment
          </div>
          <div className="text-accent-secondary font-black text-xl md:text-2xl tracking-tighter uppercase">
            Production
          </div>
        </div>
      </div>

      {/* Test Results */}
      <div className="space-y-2 md:space-y-3">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-background-secondary/30 rounded-lg md:rounded-xl border border-border-primary hover:border-accent/30 hover:bg-background-secondary/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex-shrink-0 flex flex-col items-center gap-0.5 md:gap-1">
              <span className="text-[7px] md:text-[8px] text-text-secondary font-black group-hover:text-accent transition-colors">
                PASS
              </span>
              <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-green-500">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-1">
                <span className="text-[9px] md:text-[10px] font-bold text-text-secondary uppercase tracking-tighter flex-shrink-0">
                  ASSERT_EQUALS:
                </span>
                <span className="text-[11px] md:text-xs text-text-secondary group-hover:text-text-primary transition-colors truncate">
                  "{achievement}"
                </span>
              </div>
              <div className="h-px bg-border-primary group-hover:bg-accent/10 transition-colors w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Summary Module */}
      <div className="bg-background-primary p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border-primary text-center space-y-3 md:space-y-4 group shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-48 h-32 md:h-48 bg-accent/5 rounded-full blur-[40px] md:blur-[60px] pointer-events-none" />
        <div className="text-[8px] md:text-[10px] text-text-secondary font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] relative z-10">
          FINAL_UNIT_TEST_AGGREGATION
        </div>
        <div className="text-2xl md:text-3xl font-black text-text-primary group-hover:text-accent transition-colors relative z-10 tracking-tight">
          {achievements.length} <span className="text-text-secondary">OK</span>{" "}
          / 0 <span className="text-text-secondary">FAILED</span>
        </div>
        <p className="text-[9px] md:text-[10px] text-text-secondary max-w-sm mx-auto italic relative z-10 leading-relaxed px-2">
          The subject continues to demonstrate peak performance across all
          architectural validation markers. Deploying to global production
          environment.
        </p>
      </div>
    </div>
  );
};

export default Achievements;
