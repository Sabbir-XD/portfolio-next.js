import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
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
      <Portfolio />
      <Contact />
    </div>
  );
}
