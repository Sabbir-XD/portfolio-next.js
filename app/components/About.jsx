"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaHeart,
  FaClock,
  FaAward,
} from "react-icons/fa";

import myImage2 from "@/public/Sabbir-pic.jpg";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stats = [
    {
      icon: <FaHeart className="text-pink-500" />,
      value: 120,
      label: "Happy Clients",
    },
    {
      icon: <FaClock className="text-cyan-400" />,
      value: 4500,
      label: "Hours Coded",
    },
    {
      icon: <FaAward className="text-yellow-400" />,
      value: 16,
      label: "Projects Delivered",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-slate-400 mt-3 text-lg">
            Passionate developer turning ideas into reality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-[2.5rem] opacity-20 blur-xl" />
              <Image
                src={myImage2}
                alt="Sabbir Hossain"
                width={480}
                height={480}
                className="rounded-3xl shadow-2xl border border-white/10 relative z-10 object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h3 className="text-4xl font-semibold text-white mb-2">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  Sabbir Hossain
                </span>
              </h3>
              <p className="text-xl text-slate-400">
                Front-End Developer • Bangladesh
              </p>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed text-[17px]">
              <p>
                A passionate Front-End Developer with over 2 years of experience
                creating beautiful, responsive, and high-performance web
                applications.
              </p>
              <p>
                I specialize in React, Next.js, Tailwind CSS, and modern web
                technologies. I enjoy turning complex problems into simple,
                elegant solutions.
              </p>
              <p>
                When I'm not coding, you'll find me playing cricket, traveling,
                or reading books that expand my perspective.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://www.linkedin.com/in/sabbir-xd/"
                target="_blank"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-slate-100 hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 rounded-2xl text-2xl transition-all"
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a
                href="https://github.com/Sabbir-XD"
                target="_blank"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-slate-100 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 rounded-2xl text-2xl transition-all"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://twitter.com/"
                target="_blank"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-slate-100 hover:bg-cyan-600 border border-slate-700 hover:border-cyan-500 rounded-2xl text-2xl transition-all"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
