import { useState, useEffect } from 'react';
import Navigation from './Layout/Navigation';
import Footer from './Layout/Footer';
import AnimatedBackground from './UI/AnimatedBackground';
import Hero from './Sections/Hero';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import Education from './Sections/Education';
import Contact from './Sections/Contact';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/animation.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isScrolled, activeSection, setActiveSection } = useScrollAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden relative">
      <AnimatedBackground mousePosition={mousePosition} />
      
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />

      <Footer />
    </div>
  );
};

export default Portfolio;