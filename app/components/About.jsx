"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaHeart,
  FaClock,
  FaAward,
} from "react-icons/fa";
import Image from "next/image";
import myImage2 from "@/public/sabbir-image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const tiltRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    AOS.init({ duration: 1000, once: true });
    if (tiltRef.current) {
      import("vanilla-tilt").then(({ default: VanillaTilt }) => {
        VanillaTilt.init(tiltRef.current, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      });
    }
  }, []);

  const stats = [
    { icon: <FaHeart className="text-pink-500" />, value: 120, label: "Happy Clients" },
    { icon: <FaClock className="text-cyan-400" />, value: 4500, label: "Hours Worked" },
    { icon: <FaAward className="text-yellow-400" />, value: 16, label: "Projects Completed" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-10 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 mt-8 rounded-2xl"
    >
      {/* Glow effects */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          className="text-4xl text-center font-bold mb-14 text-white" 
          data-aos="fade-up"
        >
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* Profile Section */}
        <div
          className="rounded-3xl p-8 mb-14 bg-gray-800/50 backdrop-blur-md border border-gray-700 shadow-2xl"
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={tiltRef} className="tilt-element">
              <Image
                src={myImage2}
                alt="Profile"
                className="rounded-2xl shadow-lg border-2 border-gray-700"
                width={500}
                height={500}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Hi, I'm <span className="text-cyan-400">Sabbir Hossain</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A passionate Front-End Developer from Bangladesh with 1+ years
                of experience crafting interactive, responsive, and
                user-friendly web applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My core stack includes React, Next.js, Firebase, and Tailwind
                CSS. I love transforming ideas into elegant digital experiences
                and continuously learning new technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outside of coding, I enjoy cricket, traveling, reading, and
                connecting with people who share creative visions.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/sabbir-xd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-700 hover:bg-cyan-500/20 text-white hover:text-cyan-400 border border-gray-600 hover:border-cyan-400/30 transition-all hover:-translate-y-1"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
                <a
                  href="https://github.com/Sabbir-XD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-700 hover:bg-purple-500/20 text-white hover:text-purple-400 border border-gray-600 hover:border-purple-400/30 transition-all hover:-translate-y-1"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-700 hover:bg-blue-500/20 text-white hover:text-blue-400 border border-gray-600 hover:border-blue-400/30 transition-all hover:-translate-y-1"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="rounded-3xl p-8 bg-gray-800/50 backdrop-blur-md border border-gray-700 shadow-2xl"
          data-aos="zoom-in"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-cyan-400/30 transition-all hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2 text-white">
                  {isMounted && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                  {index === 2 && "+"}
                </div>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}