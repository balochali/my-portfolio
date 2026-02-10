import React from "react";
import { education } from "@/data/aboutData";

export const EducationSidebar = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-[#161b22] rounded-2xl border border-gray-800 flex items-center justify-center mb-4 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-[#61afef]/5 group-hover:bg-[#61afef]/10 transition-colors" />
          <svg
            className="w-12 h-12 text-gray-500 group-hover:text-[#61afef] transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#61afef] rounded-full flex items-center justify-center border-2 border-[#0d1117] text-[10px] font-bold text-[#0d1117]">
            SI
          </div>
        </div>
        <div className="px-3 py-1 bg-[#0d1117] border border-gray-800 rounded text-[10px] text-gray-500 font-bold tracking-widest uppercase shadow-sm">
          ACADEMIC_DEGREE.v1
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="text-[10px] text-gray-600 font-bold flex items-center gap-2 uppercase tracking-wider px-2">
            <span>&gt; metadata</span>
          </div>
          <div className="pl-2 space-y-3">
            <div className="bg-[#161b22]/50 border border-gray-800 rounded-xl p-4 shadow-inner">
              <div className="text-[10px] text-gray-600 mb-2 flex items-center gap-2 font-bold uppercase">
                duration_range
              </div>
              <div className="text-xs text-gray-300 font-bold tracking-tight">
                2020 - 2024
              </div>
            </div>

            <div className="bg-[#161b22]/50 border border-gray-800 rounded-xl p-4 shadow-inner">
              <div className="text-[10px] text-gray-600 mb-2 flex items-center gap-2 font-bold uppercase">
                geo_location
              </div>
              <div className="text-xs text-gray-300 font-bold tracking-tight">
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
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[#c678dd] font-black italic">
          <span>interface</span>
          <span className="text-[#e5c07b]">DegreeSpecification</span>
          <span className="text-gray-500">{`{`}</span>
        </div>

        <div className="pl-6 space-y-4">
          <div className="relative p-6 bg-[#161b22]/30 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#61afef]/5 rounded-full blur-3xl" />
            <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight uppercase relative z-10">
              {primaryEdu.degree}
            </h2>
            <div className="flex items-center gap-2 mt-3 relative z-10">
              <span className="text-[#98c379] font-bold">institution:</span>
              <span className="text-[#d19a66] font-mono">
                "{primaryEdu.institution}"
              </span>
            </div>
          </div>
        </div>

        <div className="text-gray-500 font-black ml-2">{`}`}</div>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800/50" />
        <div className="space-y-10 pl-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#c678dd] text-[10px] font-bold uppercase tracking-widest italic">
              <span>const</span>
              <span className="text-[#61afef]">academic_highlights</span>
              <span className="text-gray-500 font-normal">= [</span>
            </div>

            <div className="ml-4 p-8 bg-[#161b22]/30 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#61afef]/20" />
              <ul className="space-y-6">
                {[
                  "Specializing in Software Engineering & Modern Architectures",
                  "Expertise in full-stack development and distributed systems",
                  "Focus on building robust digital solutions with high performance",
                ].map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-sm text-gray-400 group"
                  >
                    <span className="text-[#61afef] font-black mt-0.5 group-hover:scale-125 transition-transform">
                      ▹
                    </span>
                    <span className="leading-relaxed group-hover:text-gray-200 transition-colors">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-gray-500 font-normal italic ml-2">{`];`}</div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#c678dd] text-[10px] font-bold uppercase tracking-widest italic">
              <span>export</span>
              <span className="text-[#c678dd]">const</span>
              <span className="text-[#61afef]">recognition_stack</span>
              <span className="text-gray-500 font-normal">= {`{`}</span>
            </div>

            <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-4 uppercase font-bold text-[10px] tracking-widest">
              <div className="p-5 bg-[#0d1117] rounded-xl border border-gray-800 flex items-center gap-4 group hover:border-[#61afef]/30 transition-all shadow-inner">
                <div className="w-8 h-8 rounded-lg bg-[#161b22] border border-gray-800 flex items-center justify-center text-[#98c379] group-hover:text-[#61afef]">
                  ✓
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  High_Grade_Achieved
                </div>
              </div>
              <div className="p-5 bg-[#0d1117] rounded-xl border border-gray-800 flex items-center gap-4 group hover:border-[#61afef]/30 transition-all shadow-inner">
                <div className="w-8 h-8 rounded-lg bg-[#161b22] border border-gray-800 flex items-center justify-center text-[#98c379] group-hover:text-[#61afef]">
                  ✓
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  Thesis_Excellent_Rating
                </div>
              </div>
            </div>
            <div className="text-gray-500 font-normal italic ml-2">{`};`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
