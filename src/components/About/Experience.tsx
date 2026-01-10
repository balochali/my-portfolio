import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/aboutData";

const Experience = () => {
  return (
    <motion.div
      key="experience"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-green-300">{`// Professional Experience`}</div>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-900/30 p-4 rounded border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-white font-semibold">{exp.position}</h3>
            <span className="text-green-400 text-sm">{exp.duration}</span>
          </div>
          <div className="text-green-300 text-sm mb-2">{exp.company}</div>
          <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs bg-gray-800/50 px-2 py-1 rounded border border-green-400/20 text-green-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;
