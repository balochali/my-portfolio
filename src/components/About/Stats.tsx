import React from "react";
import { motion } from "framer-motion";
import { stats } from "@/data/aboutData";

const Stats = () => {
  return (
    <motion.div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + index * 0.1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(0,255,0,0.2)",
          }}
          className="bg-gray-900/30 p-4 rounded border border-green-400/20 text-center hover:border-green-400/40 transition-all duration-300"
        >
          <div className="text-2xl mb-1" role="img" aria-label={stat.label}>
            {stat.icon}
          </div>
          <div className="text-green-400 font-bold text-lg">{stat.value}</div>
          <div className="text-gray-300 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;
