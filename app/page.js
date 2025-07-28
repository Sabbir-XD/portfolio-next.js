import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
// app/page.js
export default function Home() {
  return (
    <div>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
