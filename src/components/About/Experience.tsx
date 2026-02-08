import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/aboutData";

const DescriptionTooltip = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const maxLength = 30;
  const isLong = text.length > maxLength;
  const truncatedText = isLong ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div
      className="relative mb-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // Handle mobile tap
    >
      <p
        className={`text-gray-300 text-sm cursor-help ${isLong ? "border-b border-dotted border-gray-500" : ""}`}
      >
        {truncatedText}
      </p>

      <AnimatePresence>
        {isHovered && isLong && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 left-0 right-0 bottom-full mb-2 bg-gray-900 border border-green-400/30 p-3 rounded shadow-xl text-sm text-gray-200 w-full sm:w-[300px]"
          >
            {text}
            <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 border-r border-b border-green-400/30"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
          <DescriptionTooltip text={exp.description} />
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
