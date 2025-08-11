"use client";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaPaperPlane,
  FaGlobeAmericas,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const contactCards = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      desc: "Dhaka, Bangladesh",
      color: "text-cyan-400",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      desc: "+8801605-667743",
      color: "text-purple-400",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      desc: "hossain.sabbir.dev@gmail.com",
      color: "text-pink-400",
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Timezone",
      desc: "PST (UTC-8)",
      color: "text-yellow-400",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "#",
      color: "bg-cyan-600 hover:bg-cyan-500",
      label: "LinkedIn",
    },
    { 
      icon: <FaTwitter />, 
      url: "#", 
      color: "bg-blue-400 hover:bg-blue-300", 
      label: "Twitter" 
    },
    {
      icon: <FaFacebookF />,
      url: "#",
      color: "bg-indigo-600 hover:bg-indigo-500",
      label: "Facebook",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 overflow-hidden mt-8 rounded-2xl"
    >
      {/* Glow effects */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-400">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-2/5 space-y-8">
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"
            >
              {contactCards.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all"
                >
                  <div className={`${item.color} text-2xl mb-4`}>{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Availability
              </h3>
              <div className="flex items-start space-x-4 mb-4">
                <FaClock className="text-cyan-400 text-xl mt-1" />
                <div>
                  <p className="text-gray-400">Sunday - Thursday</p>
                  <p className="font-medium text-white">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-400 text-xl mt-1" />
                <div>
                  <p className="text-gray-400">Freelance Available</p>
                  <p className="font-medium text-white">For your projects</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex space-x-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${social.color} text-white p-4 rounded-full transition-all`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-3/5">
            <motion.div
              variants={fadeIn}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send Me a Message
                </h3>
                <p className="text-gray-400 mb-6">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 outline-none transition text-white placeholder-gray-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 outline-none transition text-white placeholder-gray-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 outline-none transition text-white placeholder-gray-500"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 outline-none transition text-white placeholder-gray-500"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyan-500/20"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              variants={fadeIn}
              className="mt-8 rounded-xl overflow-hidden border border-gray-700 shadow-lg"
            >
              <iframe
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.171265753135!2d-122.41941508468167!3d37.77492977975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f1f8fd5%3A0xf57e1f4c57b6a12c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1719635198765!5m2!1sen!2sus"
                width="100%"
                height="350"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full h-[350px]"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}