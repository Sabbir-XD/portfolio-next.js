"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Business Administration (BBA) in Accounting",
      institution: "Mohammadpur Central University College, Dhaka",
      year: "2019 - 2025",
      description:
        "Specialized in Accounting with focus on Financial Accounting, Cost & Management Accounting, Auditing, Taxation, and Corporate Finance. Developed strong skills in financial analysis, Excel (Advanced), and accounting software.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "BCIC College, Dhaka",
      year: "2017 - 2019",
      description:
        "Business Studies group with strong foundation in Accounting, Economics, Business Organization, and Statistics. Actively participated in commerce seminars and academic competitions.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Govt. Progati High School, Dhaka",
      year: "2015 - 2017",
      description:
        "Completed secondary education with excellent performance in Mathematics, English, and Science. Built early foundation in logical thinking and computer basics.",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Academic journey that shaped my analytical and technical mindset
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-6 bottom-6 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-16 last:mb-0 pl-20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-slate-950 bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/50" />

              {/* Education Card */}
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-slate-900/70 border border-slate-700 hover:border-indigo-500/30 rounded-3xl p-8 shadow-xl backdrop-blur-md transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-indigo-400 font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 bg-slate-800 px-4 py-2 rounded-2xl text-sm font-medium whitespace-nowrap">
                    <FaCalendarAlt />
                    {edu.year}
                  </div>
                </div>

                <div className="mt-6 text-slate-300 leading-relaxed">
                  {edu.description}
                </div>

                {/* Decorative Line */}
                <div className="h-px w-16 bg-gradient-to-r from-indigo-500 to-transparent mt-8" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
