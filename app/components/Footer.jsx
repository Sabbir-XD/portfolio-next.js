"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/sabbir-xd", color: "bg-blue-600", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/Sabbir-XD", color: "bg-gray-800", label: "GitHub" },
    { icon: <FaTwitter />, url: "https://twitter.com/", color: "bg-sky-500", label: "Twitter" },
    { icon: <FaFacebookF />, url: "https://facebook.com/", color: "bg-blue-800", label: "Facebook" },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Portfolio", path: "#Portfolio" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-gray-300 border-t border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
            Sabbir.Dev
          </motion.div>

          {/* Footer Nav Links */}
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <motion.div key={link.path} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.path}
                  className="text-sm font-medium text-gray-400 hover:text-pink-400 transition-colors"
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
                className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-all`}
                whileHover={{ scale: 1.1 }}
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
          © {new Date().getFullYear()} Sabbir Hossain. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
