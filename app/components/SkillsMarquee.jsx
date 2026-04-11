"use client";
import { motion } from "framer-motion";
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
  SiGit,
  SiGithub,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

export default function Skills() {
  const frontendSkills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" />, level: 90 },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      level: 92,
    },
    { name: "React", icon: <SiReact className="text-cyan-400" />, level: 88 },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      level: 85,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: 95,
    },
    { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 78 },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-400" />,
      level: 85,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" />,
      level: 82,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300" />,
      level: 80,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      level: 85,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-400" />,
      level: 88,
    },
    { name: "Git", icon: <SiGit className="text-orange-500" />, level: 90 },
    { name: "GitHub", icon: <SiGithub className="text-white" />, level: 92 },
    { name: "Vercel", icon: <SiVercel className="text-white" />, level: 85 },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-teal-400" />,
      level: 80,
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-400">Frontend</span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-slate-900/70 border border-slate-700 hover:border-cyan-500/40 rounded-3xl p-8 transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {skill.name}
                </h4>

                {/* Progress Bar */}
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2 text-right">
                  {skill.level}%
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend & Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="text-purple-400">Backend &amp; Tools</span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-slate-900/70 border border-slate-700 hover:border-purple-500/40 rounded-3xl p-8 transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {skill.name}
                </h4>

                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2 text-right">
                  {skill.level}%
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
