import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-textMain selection:bg-primary/20 selection:text-primary">
      {/* 1. Animated Background behind everything */}
      <AnimatedBackground />

      {/* 2. Floating Glass Navbar */}
      <Navbar />

      {/* 3. Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default App;
