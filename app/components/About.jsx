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
import ProgressBar from "@ramonak/react-progress-bar";
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

  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "MongoDB", level: 70 },
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 50 },
    { name: "GitHub", level: 80 },
  ];

  const stats = [
    { icon: <FaHeart />, value: 120, label: "Happy Clients" },
    { icon: <FaClock />, value: 4500, label: "Hours Worked" },
    { icon: <FaAward />, value: 16, label: "Projects Completed" },
  ];

  const clients = [
    { name: "TechCorp", logo: "🖥️" },
    { name: "DesignHub", logo: "🎨" },
    { name: "WebCraft", logo: "🛠️" },
    { name: "AppVenture", logo: "📱" },
    { name: "TechSolutions", logo: "💻" },
    { name: "WebWonders", logo: "🌐" },
    { name: "PixelLabs", logo: "🧪" },
    { name: "NovaSoft", logo: "🚀" },
    { name: "CreativeNest", logo: "🎯" },
    { name: "DigitalEase", logo: "📊" },
  ];

  return (
    <section
      id="about"
      className="bg-base-100 text-base-content py-16 px-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl text-center font-bold mb-14"
          data-aos="fade-up"
        >
          About <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>

        {/* Profile Section */}
        <div
          className="bg-base-200 rounded-2xl p-6 lg:p-10 mb-14 shadow-lg backdrop-blur-md border border-white/10"
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={tiltRef} className="tilt-element">
              <Image
                src={myImage2}
                alt="Profile"
                className="rounded-2xl shadow-lg"
                width={500}
                height={500}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Hi! I’m <span className="font-bold text-primary">Sabbir Hossain</span>, a passionate Front-End Developer from Bangladesh with 1+ years of experience crafting interactive, responsive, and user-friendly web applications.
              </p>
              <p className="text-lg leading-relaxed">
                My core stack includes React, Next.js, Firebase, and Tailwind CSS. I love transforming ideas into elegant digital experiences and continuously learning new technologies.
              </p>
              <p className="text-lg leading-relaxed">
                Outside of coding, I enjoy cricket, traveling, reading, and connecting with people who share creative visions.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/sabbir-xd/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline btn-primary rounded-full hover:-translate-y-1 transition-transform">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/Sabbir-XD" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline btn-primary rounded-full hover:-translate-y-1 transition-transform">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline btn-primary rounded-full hover:-translate-y-1 transition-transform">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div
          className="bg-base-200 rounded-2xl p-6 lg:p-10 mb-14 shadow-lg backdrop-blur-md border border-white/10"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold mb-8">
            My <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <ProgressBar
                  completed={skill.level}
                  bgColor="linear-gradient(90deg, #ec4899, #8b5cf6)"
                  baseBgColor="#E5E7EB"
                  height="14px"
                  borderRadius="10px"
                  isLabelVisible={false}
                  animateOnRender={true}
                  transitionDuration="1s"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className="bg-base-200 rounded-2xl p-6 lg:p-10 mb-14 shadow-lg backdrop-blur-md border border-white/10"
          data-aos="zoom-in"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-base-100 rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="text-5xl text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2">
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
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div
          className="bg-base-200 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-white/10"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span>Trusted By </span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Clients</span>
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="inline-flex flex-col items-center justify-center w-28 h-28 mx-6 p-4 bg-base-100 rounded-xl shadow hover:scale-105 transition-transform"
                >
                  <span className="text-4xl mb-1">{client.logo}</span>
                  <p className="text-xs font-semibold text-center">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
