"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Business Studies in Accounting",
      institution: "Mohammadpur Central University College, Dhaka",
      year: "2019 - 2025",
      description:
        "Specialized in Accounting under the BBS program. Coursework included Financial Accounting, Cost & Management Accounting, Auditing, Taxation, Corporate Finance, Accounting Theory and Financial Reporting. Completed projects on financial statement analysis and auditing fundamentals. Gained practical skills in Excel (pivot tables & advanced formulas), basic Tally / QuickBooks usage, report preparation, and understanding of regulatory & ethical accounting practices.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "BCIC College, Dhaka",
      year: "2017 - 2019",
      description:
        "Concentrated on Business Studies with emphasis on Accounting fundamentals, Business Organization, Economics and Statistics. Built a strong foundation in bookkeeping and basic financial concepts, and participated in commerce seminars and college-level accounting activities that prepared me for BBS studies.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Govt. Progati High School, Dhaka",
      year: "2015 - 2017",
      description:
        "Completed secondary education with solid fundamentals in Mathematics and English. Developed early interest in numeracy, logical problem solving and basic computer literacy — skills that supported later studies in accounting and finance.",
    },
  ];
  

  return (
    <section
      id="education"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden mt-8 rounded-2xl"
    >
      {/* Glow Effects */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          <span className="text-gray-300">My</span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="relative border-l-2 border-gray-700">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-6 relative"
            >
              {/* Icon */}
              <span className="absolute -left-[29px] flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg">
                <FaGraduationCap />
              </span>

              {/* Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 border border-gray-700 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-cyan-400 text-sm">{edu.institution}</p>
                <span className="text-gray-400 text-xs">{edu.year}</span>
                <p className="mt-3 text-gray-300 text-sm">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
