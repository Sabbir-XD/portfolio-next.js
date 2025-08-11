"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

const SkillsMarquee = () => {
  const clientSkills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ];

  return (
    <div className="relative overflow-hidden p-8 mb-14 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl mt-8 rounded-2xl">
      {/* Glow effects */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>

      <h2 className="text-4xl text-center font-bold mb-8 text-white">
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Tech Stack
        </span>
      </h2>

      {/* Client Skills */}
      <h3 className="text-xl font-semibold mb-6 text-gray-300">
        Frontend / Client-Side
      </h3>
      <Marquee gradient={false} speed={40} pauseOnHover>
        <div className="flex gap-6 mr-6">
          {clientSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-800/50 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-cyan-400/30"
            >
              <div className="text-5xl mb-5">{skill.icon}</div>
              <span className="text-gray-200 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Backend Skills */}
      <h3 className="text-xl font-semibold mt-12 mb-6 text-gray-300">
        Backend & Deployment
      </h3>
      <Marquee gradient={false} speed={40} pauseOnHover direction="right">
        <div className="flex gap-6 mr-6">
          {backendSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-800/50 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-purple-400/30"
            >
              <div className="text-5xl mb-5">{skill.icon}</div>
              <span className="text-gray-200 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;