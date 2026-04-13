"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Selected works that showcase my skills in frontend development and
            problem solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group bg-slate-900/70 border border-slate-700 hover:border-indigo-500/40 rounded-3xl overflow-hidden shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Live Badge */}
                {project.liveLink && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    LIVE
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 line-clamp-3 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 text-center py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
                  >
                    View Details
                  </Link>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3.5 rounded-2xl border border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      Live Demo <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
