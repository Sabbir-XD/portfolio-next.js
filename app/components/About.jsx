"use client";
import dynamic from "next/dynamic";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });
import { useEffect, useRef, useState } from "react";
// import CountUp from "react-countup";
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

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const tiltRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
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

  if (!isMounted) {
    return (
      <section className="bg-base-100 text-base-content py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-16 bg-base-200 rounded-xl mb-10"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="h-[400px] bg-base-200 rounded-2xl"></div>
            <div className="space-y-4">
              <div className="h-6 bg-base-200 rounded"></div>
              <div className="h-6 bg-base-200 rounded w-3/4"></div>
              <div className="h-6 bg-base-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="bg-base-100 text-base-content py-12 px-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-bold mb-10">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Profile Section */}
        <div className="bg-base-200 rounded-2xl p-5 lg:p-10 mb-14 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={tiltRef} className="tilt-element">
              <Image
                src={myImage2}
                alt="Profile"
                className="rounded-2xl shadow-lg"
                width={500}
                height={350}
                priority
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                Hello! I'm Sabbir Hossain, a dedicated front-end developer from
                Bangladesh with 1+ years of experience. My journey began in 2024
                when I created my first HTML page and was fascinated by how code
                shapes the web.
              </p>
              <p className="text-lg">
                Now I build modern apps using React, Firebase, and Tailwind. I
                love solving real-world problems and sharing what I learn.
              </p>
              <p className="text-lg">
                Beyond coding, I enjoy cricket, reading, traveling, and quality
                time with friends.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/sabbir-xd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline btn-primary rounded-full hover:-translate-y-1 transition-transform"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/Sabbir-XD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline btn-primary rounded-full hover:-translate-y-1 transition-transform"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline btn-primary rounded-full hover:-translate-y-1 transition-transform"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-base-200 rounded-2xl p-5 lg:p-10 mb-14 shadow-lg">
          <h2 className="text-3xl font-bold mb-8">
            My <span className="text-primary">Skills</span>
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
                  bgColor="#3B82F6"
                  baseBgColor="#E5E7EB"
                  height="12px"
                  borderRadius="8px"
                  isLabelVisible={false}
                  animateOnRender={true}
                  transitionDuration="1s"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-base-200 rounded-2xl p-5 lg:p-10 mb-14 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 hover:bg-base-300 rounded-xl transition-colors"
              >
                <div className="text-4xl text-primary mb-3 flex justify-center">
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
        <div className="bg-base-200 rounded-2xl p-8 shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span>Trusted By </span>
            <span className="text-primary">Clients</span>
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="inline-flex flex-col items-center justify-center w-28 h-28 mx-6 p-4 bg-base-100 rounded-xl shadow hover:scale-105 transition-transform"
                >
                  <span className="text-4xl mb-1">{client.logo}</span>
                  <p className="text-xs font-semibold text-center">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
