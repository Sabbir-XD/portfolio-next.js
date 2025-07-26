"use client";
import Link from "next/link";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="Portfolio" className="py-16 bg-base-100 text-base-content">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="text-base-content">My</span>{" "}
          <span className="text-primary">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-base-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform"
            >
              {/* Project Image */}
              <div className="relative w-full h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description.slice(0, 70)}...
                </p>

                {/* View Details Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
