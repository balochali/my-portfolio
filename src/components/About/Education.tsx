import React from "react";
import { motion } from "framer-motion";
import { education } from "@/data/aboutData";

const Education = () => {
  return (
    <motion.div
      key="education"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-green-300"># Education & Certifications</div>
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-900/30 p-4 rounded border border-green-400/20"
        >
          <h3 className="text-white font-semibold mb-1">{edu.degree}</h3>
          <div className="text-green-300 text-sm mb-1">{edu.institution}</div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">{edu.year}</span>
            <span className="text-green-400 text-sm">{edu.grade}</span>
          </div>
        </motion.div>
      ))}

      <div className="bg-gray-900/30 p-4 rounded border border-green-400/20">
        <div className="text-green-300 mb-2">## Continuous Learning</div>
        <div className="text-gray-300 text-sm space-y-1">
          <div>→ Always exploring new technologies</div>
          <div>→ Regular participation in tech conferences</div>
          <div>→ Active in developer communities</div>
          <div>→ Contributing to open source projects</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
