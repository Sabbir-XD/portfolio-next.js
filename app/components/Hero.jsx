"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import developer1 from "@/public/sabir-01.jpg";
import developer2 from "@/public/sabir-02.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl">
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 min-h-screen">
        {/* Right side - Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center h-[500px]">
          {/* Top floating image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: [0, 50, 0],
              transition: {
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8 }
              }
            }}
            className="absolute top-0 right-10"
          >
            <Image
              src={developer1}
              alt="Developer working"
              width={280}
              height={350}
              className="object-cover rounded-tr-[50px] rounded-bl-[50px] border-l-4 border-b-4 border-cyan-400 shadow-2xl"
              priority
            />
          </motion.div>

          {/* Bottom floating image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: [0, 30, 0],
              transition: {
                x: { duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8, delay: 0.4 }
              }
            }}
            className="absolute bottom-0 left-10"
          >
            <Image
              src={developer2}
              alt="Developer coding"
              width={280}
              height={350}
              className="object-cover rounded-tl-[50px] rounded-br-[50px] border-r-4 border-t-4 border-purple-400 shadow-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Sabbir
              </span>
            </h1>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
              animate={{
                color: ["#38bdf8", "#a78bfa", "#38bdf8"],
                transition: { duration: 8, repeat: Infinity }
              }}
            >
              Frontend Developer
            </motion.h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Building full-stack applications with MongoDB, Express, React & Node.js.
              Passionate about creating efficient, scalable web solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/16fhuykShX0KLvEiYTlDYKWP8pDGKbnpX/view?usp=sharing"
                target="_blank"
                download
                className="px-8 py-3 rounded-full border-2 border-gray-600 text-white font-medium flex items-center gap-2 hover:bg-gray-800/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
