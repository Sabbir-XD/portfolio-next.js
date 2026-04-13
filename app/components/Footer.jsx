"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#portfolio" },
    { name: "Education", path: "#education" },
    { name: "Contact", path: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/sabbir-xd/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Sabbir-XD",
      label: "GitHub",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/",
      label: "Twitter",
    },
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com/",
      label: "Facebook",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 pt-16 pb-10 overflow-hidden mt-10">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left - Brand & Bio */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Sabbir.
              </span>
              <span className="text-3xl font-light text-slate-400">dev</span>
            </div>

            <p className="text-slate-400 max-w-md leading-relaxed">
              Frontend Developer crafting exceptional digital experiences with
              modern web technologies. Passionate about clean code and beautiful
              interfaces.
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <FaHeart className="text-pink-500" />
              <span>Made with passion in Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-5 text-lg">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-[15px]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-5 text-lg">
              Connect With Me
            </h3>

            <div className="flex gap-4 mb-10">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-2xl text-2xl text-slate-300 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="text-sm text-slate-400">
              <p>
                Email:{" "}
                <span className="text-slate-300">
                  hossain.sabbir.dev@gmail.com
                </span>
              </p>
              <p className="mt-1">
                Phone: <span className="text-slate-300">+880 1605-667743</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Sabbir Hossain. All Rights Reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            Back to Top
            <div className="p-2 bg-slate-900 rounded-full group-hover:bg-indigo-500/10 transition-colors">
              <FaArrowUp className="text-lg" />
            </div>
          </motion.button>

          <p className="text-slate-600 text-xs">
            Built with Next.js + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
