"use client";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Raktch Technology & Software",
      duration: "2025",
      location: "Dhaka, Bangladesh",
      type: "Internship",
      responsibilities: [
        "Developed responsive and user-centric web interfaces using React, Next.js & Tailwind CSS",
        "Collaborated with developers and designers in an agile environment",
        "Improved UI/UX performance and component reusability",
        "Maintained clean, scalable, and maintainable frontend architecture",
      ],
      project: {
        name: "Learning Management System (LMS)",
        contribution:
          "Contributed approximately 70% of the frontend development",
        liveUrl: "https://www.hellowenglish.com/en/",
        details: [
          "Designed and implemented modern UI layouts & responsive components",
          "Built reusable component structures for faster development",
          "Implemented Authentication System with protected routes",
        ],
      },
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Where I turned knowledge into real-world impact
          </p>
        </motion.div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-slate-900/70 border border-slate-700 hover:border-indigo-500/40 rounded-3xl p-10 md:p-12 shadow-2xl backdrop-blur-md transition-all duration-500"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-indigo-500/10 text-indigo-400 rounded-2xl">
                    <FaBriefcase className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-indigo-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 bg-slate-800 px-5 py-3 rounded-2xl text-sm font-medium">
                  <FaCalendarAlt />
                  {exp.duration} • {exp.location}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-slate-300 mb-6">
                  Key Responsibilities
                </h4>
                <ul className="space-y-4">
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 text-slate-300"
                    >
                      <FaArrowRight className="text-indigo-500 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Key Project */}
              <div className="mt-12 pt-8 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-6">
                  Key Project Contribution
                </h4>

                <div className="bg-slate-950/50 border border-slate-700 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h5 className="text-2xl font-semibold text-white">
                        {exp.project.name}
                      </h5>
                      <p className="text-indigo-400 font-medium mt-2">
                        {exp.project.contribution}
                      </p>

                      <ul className="mt-6 space-y-3 text-slate-300">
                        {exp.project.details.map((detail, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-purple-400">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Live Project Button */}
                    <div className="mt-6 md:mt-0">
                      <motion.a
                        href={exp.project.liveUrl}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-indigo-500/30 transition-all"
                      >
                        View Live Project
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-10 flex justify-end">
                <span className="text-xs uppercase tracking-widest bg-slate-800 text-slate-400 px-6 py-2.5 rounded-full border border-slate-600">
                  {exp.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
