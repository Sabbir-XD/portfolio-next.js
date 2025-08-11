"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/sabbir-xd", color: "from-blue-500 to-blue-700", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/Sabbir-XD", color: "from-gray-700 to-gray-900", label: "GitHub" },
    { icon: <FaTwitter />, url: "https://twitter.com/", color: "from-sky-400 to-sky-600", label: "Twitter" },
    { icon: <FaFacebookF />, url: "https://facebook.com/", color: "from-blue-600 to-blue-800", label: "Facebook" },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-cyan-900 via-indigo-900 to-purple-900 text-gray-300 border-t border-white/10 shadow-lg mt-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Sabbir.Dev
          </motion.div>

          {/* Footer Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <motion.div key={link.path} whileHover={{ y: -2 }}>
                <Link
                  href={link.path}
                  className="text-sm font-medium text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${social.color} p-3 rounded-full shadow-md hover:shadow-cyan-400/40 transition-all duration-300`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sabbir Hossain — All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
}
