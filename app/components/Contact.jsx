"use client";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you! Your message has been sent. (Connect with EmailJS later)",
    );
    // TODO: Integrate EmailJS or Formspree here
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      detail: "Dhaka, Bangladesh",
      color: "text-cyan-400",
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Phone",
      detail: "+880 1605-667743",
      color: "text-purple-400",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      detail: "hossain.sabbir.dev@gmail.com",
      color: "text-pink-400",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/sabbir-xd/",
      color: "hover:bg-cyan-500",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/",
      color: "hover:bg-blue-500",
    },
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com/",
      color: "hover:bg-indigo-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card flex items-start gap-5 p-6 rounded-3xl group"
                >
                  <div
                    className={`${item.color} p-4 bg-slate-900/70 rounded-2xl transition-transform group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 mt-1">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-5 bg-slate-100/70 hover:bg-slate-300 border border-slate-700 hover:border-slate-500 rounded-3xl text-2xl transition-all ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl">
              <h3 className="text-3xl font-semibold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 mb-8">
                I'll respond within 24-48 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-slate-900/70 border border-slate-600 rounded-2xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-slate-900/70 border border-slate-600 rounded-2xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900/70 border border-slate-600 rounded-2xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-white"
                    placeholder="Project Discussion / Job Opportunity"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-slate-900/70 border border-slate-600 rounded-3xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-white resize-y"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
