import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen" id="app">
      <Navbar />

      {/* Importante: Hero ya tiene su propio <Section id="hero" /> */}
      <Hero />

      <About />
      <Experience />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Héctor Alejandro Ayala. Hecho con React + Tailwind.
      </footer>
    </div>
  );
}