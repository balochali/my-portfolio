import React from "react";
import { education } from "@/data/aboutData";

export const EducationSidebar = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-background-secondary rounded-2xl border border-border-primary flex items-center justify-center mb-4 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
          <svg
            className="w-12 h-12 text-text-secondary group-hover:text-accent transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center border-2 border-background-primary text-[10px] font-bold text-background-primary">
            SI
          </div>
        </div>
        <div className="px-3 py-1 bg-background-primary border border-border-primary rounded text-[10px] text-text-secondary font-bold tracking-widest uppercase shadow-sm">
          ACADEMIC_DEGREE.v1
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="text-[10px] text-text-secondary font-bold flex items-center gap-2 uppercase tracking-wider px-2">
            <span>&gt; metadata</span>
          </div>
          <div className="pl-2 space-y-3">
            <div className="bg-background-secondary/50 border border-border-primary rounded-xl p-4 shadow-inner">
              <div className="text-[10px] text-text-secondary mb-2 flex items-center gap-2 font-bold uppercase">
                duration_range
              </div>
              <div className="text-xs text-text-primary font-bold tracking-tight">
                2020 - 2024
              </div>
            </div>

            <div className="bg-background-secondary/50 border border-border-primary rounded-xl p-4 shadow-inner">
              <div className="text-[10px] text-text-secondary mb-2 flex items-center gap-2 font-bold uppercase">
                geo_location
              </div>
              <div className="text-xs text-text-primary font-bold tracking-tight">
                Sukkur, Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const primaryEdu = education[0];

  return (
    <div className="space-y-6 md:space-y-10">
      {/* Human Readable Heading */}
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-xl md:text-2xl font-black text-text-primary tracking-tight uppercase">
          03_EDUCATION
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border-primary to-transparent" />
      </div>

      <div className="space-y-3 md:space-y-4">
        <div className="flex items-center gap-2 text-accent-secondary font-black italic text-xs md:text-sm">
          <span>interface</span>
          <span className="text-yellow-500">DegreeSpecification</span>
          <span className="text-text-secondary">{`{`}</span>
        </div>

        <div className="pl-4 md:pl-6 space-y-4">
          <div className="relative p-4 md:p-6 bg-background-secondary/30 rounded-xl md:rounded-2xl border border-border-primary overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-3xl" />
            <h2 className="text-lg md:text-2xl font-black text-text-primary tracking-tight leading-tight uppercase relative z-10 break-words">
              {primaryEdu.degree}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:gap-2 mt-2 md:mt-3 relative z-10">
              <span className="text-green-500 font-bold text-[10px] md:text-xs">
                institution:
              </span>
              <span className="text-orange-400 font-mono text-[10px] md:text-xs break-all">
                "{primaryEdu.institution}"
              </span>
            </div>
          </div>
        </div>

        <div className="text-text-secondary font-black ml-2 text-xs md:text-sm">{`}`}</div>
      </div>

      <div className="relative">
        <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-border-primary/50" />
        <div className="space-y-8 md:space-y-10 pl-3 md:pl-4">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 text-accent-secondary text-[9px] md:text-[10px] font-bold uppercase tracking-widest italic">
              <span>const</span>
              <span className="text-accent">academic_highlights</span>
              <span className="text-text-secondary font-normal">= [</span>
            </div>

            <div className="ml-2 md:ml-4 p-5 md:p-8 bg-background-secondary/30 rounded-2xl md:rounded-3xl border border-border-primary shadow-xl relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20" />
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Specializing in Software Engineering & Modern Architectures",
                  "Expertise in full-stack development and distributed systems",
                  "Focus on building robust digital solutions with high performance",
                ].map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-3 md:gap-4 text-xs md:text-sm text-text-secondary group"
                  >
                    <span className="text-accent font-black mt-0.5 group-hover:scale-125 transition-transform flex-shrink-0">
                      ▹
                    </span>
                    <span className="leading-relaxed group-hover:text-text-primary transition-colors">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-text-secondary font-normal italic ml-2 text-[10px] md:text-xs">{`];`}</div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 text-accent-secondary text-[9px] md:text-[10px] font-bold uppercase tracking-widest italic">
              <span>export</span>
              <span className="text-accent-secondary">const</span>
              <span className="text-accent">recognition_stack</span>
              <span className="text-text-secondary font-normal">= {`{`}</span>
            </div>

            <div className="ml-2 md:ml-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 uppercase font-bold text-[9px] md:text-[10px] tracking-widest">
              <div className="p-4 md:p-5 bg-background-primary rounded-xl border border-border-primary flex items-center gap-3 md:gap-4 group hover:border-accent/30 transition-all shadow-inner">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-background-secondary border border-border-primary flex items-center justify-center text-green-500 group-hover:text-accent flex-shrink-0">
                  ✓
                </div>
                <div className="text-text-secondary group-hover:text-text-primary transition-colors">
                  High_Grade_Achieved
                </div>
              </div>
              <div className="p-4 md:p-5 bg-background-primary rounded-xl border border-border-primary flex items-center gap-3 md:gap-4 group hover:border-accent/30 transition-all shadow-inner">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-background-secondary border border-border-primary flex items-center justify-center text-green-500 group-hover:text-accent flex-shrink-0">
                  ✓
                </div>
                <div className="text-text-secondary group-hover:text-text-primary transition-colors">
                  Thesis_Excellent_Rating
                </div>
              </div>
            </div>
            <div className="text-text-secondary font-normal italic ml-2 text-[10px] md:text-xs">{`};`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
