import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
