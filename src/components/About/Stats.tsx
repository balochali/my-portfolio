import React from "react";
import { motion } from "framer-motion";
import { stats } from "@/data/aboutData";

const Stats = () => {
  return (
    <div className="mt-16 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-1 bg-gray-800" />
        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] px-4 whitespace-nowrap">
          SYSTEM_STATISTICS
        </div>
        <div className="h-px flex-1 bg-gray-800" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-[#0d1117] p-5 rounded-xl border border-gray-800 hover:border-[#61afef]/30 transition-all duration-300 overflow-hidden shadow-lg"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#61afef]/5 to-transparent -mr-8 -mt-8 rounded-full blur-xl group-hover:from-[#61afef]/10 transition-colors" />

            <div className="relative z-10 flex flex-col items-center">
              <div
                className="text-2xl mb-3 transform group-hover:scale-110 transition-transform duration-300"
                role="img"
                aria-label={stat.label}
              >
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
