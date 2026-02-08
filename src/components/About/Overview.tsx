import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const Overview = () => {
  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="text-green-300">{`const aboutMe = {`}</div>
        <div className="pl-4 space-y-2 text-gray-300">
          <div>
            <span className="text-green-400">name:</span>{" "}
            <span className="text-yellow-300">{`"${portfolioData.name}"`}</span>
            ,
          </div>
          <div>
            <span className="text-green-400">role:</span>{" "}
            <span className="text-yellow-300">{`"${portfolioData.roles[0]}"`}</span>
            ,
          </div>
          <div>
            <span className="text-green-400">location:</span>{" "}
            <span className="text-yellow-300">{`"Karachi, Pakistan"`}</span>,
          </div>
          <div>
            <span className="text-green-400">passion:</span>{" "}
            <span className="text-yellow-300">{`"Building digital solutions"`}</span>
            ,
          </div>
        </div>
        <div className="text-green-300">{`};`}</div>
      </div>

      <div className="bg-gray-900/30 p-4 rounded border border-green-400/20">
        <div className="text-green-300 mb-2">{`// About Me`}</div>
        <p className="text-gray-300 leading-relaxed">
          I&apos;m a passionate full-stack developer with expertise in modern
          web technologies. I love creating efficient, scalable solutions and
          turning complex problems into simple, elegant code. When I&apos;m not
          coding, you&apos;ll find me exploring new technologies, contributing
          to open source, or sharing knowledge with the developer community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900/30 p-4 rounded border border-green-400/20 h-full">
          <div className="text-green-300 mb-2">Frontend</div>
          <div className="text-sm text-gray-300 space-y-1">
            <div>→ React, Next.js, TypeScript</div>
            <div>→ HTML5, CSS3, Tailwind CSS</div>
            <div>→ Redux, Context API</div>
          </div>
        </div>
        <div className="bg-gray-900/30 p-4 rounded border border-green-400/20 h-full">
          <div className="text-green-300 mb-2">Backend</div>
          <div className="text-sm text-gray-300 space-y-1">
            <div>→ Node.js, Express.js</div>
            <div>→ MongoDB, PostgreSQL</div>
            <div>→ REST APIs, GraphQL</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
