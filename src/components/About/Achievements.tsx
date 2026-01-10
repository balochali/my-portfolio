import React from "react";
import { motion } from "framer-motion";
import { achievements } from "@/data/aboutData";

const Achievements = () => {
  return (
    <motion.div
      key="achievements"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-green-300">{`// Key Achievements`}</div>
      <div className="space-y-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 bg-gray-900/30 p-3 rounded border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
            <span className="text-gray-300 text-sm">{achievement}</span>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-900/30 p-4 rounded border border-green-400/20">
        <div className="text-green-300 mb-2">$ stats --summary</div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-gray-300">
            <div className="text-green-400">Projects:</div>
            <div>20+ completed</div>
          </div>
          <div className="text-gray-300">
            <div className="text-green-400">Experience:</div>
            <div>3+ years</div>
          </div>
          <div className="text-gray-300">
            <div className="text-green-400">Languages:</div>
            <div>5+ mastered</div>
          </div>
          <div className="text-gray-300">
            <div className="text-green-400">Coffee:</div>
            <div>∞ cups consumed</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
