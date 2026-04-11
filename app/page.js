import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import SkillsMarquee from "./components/SkillsMarquee";
// app/page.js
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <SkillsMarquee />
      <Education />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}
