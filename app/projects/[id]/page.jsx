"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/app/data/projects";

export default function ProjectDetails({ params }) {
  const { id } = params;

  const project = projects.find((p) => p.id == id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
          <Link
            href="/"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-slate-950 py-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(at_top,#4f46e520_0%,transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-10 transition-colors"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[520px] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl mb-12"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

          <div className="absolute bottom-10 left-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-5">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 bg-slate-900 border border-slate-700 text-slate-300 rounded-2xl text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-5">
                Challenges Faced
              </h3>
              <ul className="space-y-4">
                {project.challenges?.map((challenge, idx) => (
                  <li key={idx} className="flex gap-4 text-slate-300">
                    <span className="text-red-400 mt-1">⚠</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-5">
                Future Improvements
              </h3>
              <ul className="space-y-4">
                {project.improvements?.map((improve, idx) => (
                  <li key={idx} className="flex gap-4 text-slate-300">
                    <span className="text-emerald-400 mt-1">↗</span>
                    <span>{improve}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Links */}
              <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Project Links
                </h3>
                <div className="space-y-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-4 rounded-2xl text-white font-medium hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
                    >
                      <FaExternalLinkAlt /> View Live Demo
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center justify-center gap-3 w-full border border-slate-600 hover:bg-slate-800 py-4 rounded-2xl text-white font-medium transition-all"
                    >
                      <FaGithub /> View Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="text-emerald-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
