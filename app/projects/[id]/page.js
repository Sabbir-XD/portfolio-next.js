"use client";
import { projects } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectDetails({ params }) {
  const { id } = params;
  const project = projects.find((p) => p.id == id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Link 
            href="/" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-full text-white font-medium mt-4 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            ← Back to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-[500px] mb-10 rounded-2xl overflow-hidden border border-gray-700 shadow-xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-lg leading-relaxed mb-8">{project.description}</p>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-white mb-4">Challenges</h4>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-white mb-4">Future Improvements</h4>
                <ul className="space-y-3">
                  {project.improvements.map((improve, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{improve}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Project Links</h3>
                <div className="space-y-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    <FaExternalLinkAlt className="mr-3" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gray-700/50 text-white px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-700/80 transition-colors"
                  >
                    <FaGithub className="mr-3" /> View Code
                  </a>
                </div>
              </div>

              {project.features && (
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}