"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaArrowDown } from "react-icons/fa";
import profileImage from "@/public/professional-pic.jpg"; // ← Use your best professional photo

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#4f46e510_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#7e22ce10_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-cyan-400 font-medium tracking-[3px] text-sm mb-2">
                WELCOME TO MY PORTFOLIO
              </p>

              <h1 className="text-6xl md:text-7xl lg:text-[5.2rem] font-bold leading-tight tracking-tighter text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Sabbir
                </span>
              </h1>

              <motion.h2
                className="text-4xl md:text-5xl font-semibold text-slate-300 mt-3"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                MERN Stack Developer
              </motion.h2>

              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mt-6 leading-relaxed">
                I craft exceptional digital experiences using modern web
                technologies. Turning ideas into clean, responsive, and
                high-performance applications.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 flex items-center gap-3 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
                <FaArrowDown className="text-sm" />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/119biCNnT7rgf48yrFTKtqFqhWhl8oQb8/view?usp=sharing?usp=sharing"
                target="_blank"
                className="px-8 py-4 rounded-2xl border-2 border-slate-600 hover:border-slate-400 text-white font-semibold text-lg flex items-center gap-3 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
            </motion.div>

            {/* Trust Line */}
            <div className="pt-6 flex items-center gap-8 text-sm text-slate-500">
              <div>✦ Available for Freelance</div>
              <div>✦ Based in Bangladesh</div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-[3rem] opacity-20 blur-2xl" />

              <Image
                src={profileImage}
                alt="Sabbir Hossain"
                width={520}
                height={620}
                priority
                className="rounded-3xl shadow-2xl border border-white/10 relative z-10 object-cover"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-slate-300">
                    Open to Opportunities
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest text-slate-500">SCROLL</span>
        <FaArrowDown className="text-slate-400" />
      </motion.div>
    </section>
  );
}
