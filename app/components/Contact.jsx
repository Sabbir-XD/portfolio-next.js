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
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      desc: "Dhaka, Bangladesh",
      bg: "bg-blue-100",
      iconColor: "text-primary",
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Phone",
      desc: "+8801605-667743",
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      desc: "workhardproperly@gmail.com",
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <FaGlobeAmericas className="text-2xl" />,
      title: "Timezone",
      desc: "PST (UTC-8)",
      bg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "#",
      color: "bg-primary",
      label: "LinkedIn",
    },
    { icon: <FaTwitter />, url: "#", color: "bg-sky-400", label: "Twitter" },
    {
      icon: <FaFacebookF />,
      url: "#",
      color: "bg-blue-800",
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
      data-aos="fade-up"
      data-aos-duration="3000"
      id="contact"
      className="relative min-h-screen bg-base-100 text-base-content py-12 px-1 transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-center max-w-2xl mx-auto mb-12 text-base-content/70">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-2/5 space-y-8">
            <motion.div variants={fadeIn} className="grid grid-cols-1 gap-6">
              {contactCards.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className={`${item.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition-all`}
                >
                  <div className={`${item.iconColor} mb-4`}>{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Availability
              </h3>
              <div className="flex items-center space-x-4 mb-3">
                <FaClock className="text-primary text-xl" />
                <div>
                  <p className="text-gray-600">Sunday - Thursday</p>
                  <p className="font-medium text-gray-800">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-green-600 text-xl" />
                <div>
                  <p className="text-gray-600">Freelance Available</p>
                  <p className="font-medium text-gray-800">For your projects</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex space-x-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-all`}
                  aria-label={`${social.label} profile`} // ✅ Static label instead of function.toString()
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-4/5">
            <motion.div
              variants={fadeIn}
              className="bg-base-200 text-base-content rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-2 lg:p-8">
                <h3 className="text-2xl font-bold text-base-content mb-2">
                  Send Me a Message
                </h3>
                <p className="text-base-content mb-6">
                  Fill out the form below and I'll get back to you within 24
                  hours.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-base-content mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-primary focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-base-content mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-primary focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-base-content mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-primary focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-base-content mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-primary focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
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
              className="mt-8 rounded-xl overflow-hidden shadow-lg"
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
