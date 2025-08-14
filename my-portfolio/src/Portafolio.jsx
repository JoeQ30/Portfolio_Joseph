import React from 'react';
import { useState, useEffect } from 'react';
import { useActiveSection } from './hooks/useActivation';

import Navigation from "./Components/common/Navigation";
import HeroSection from "./Components/sections/HeroSection";
import AboutSection from "./Components/sections/AboutSection";
import SkillsSection from "./Components/sections/SkillsSection";
import ProjectsSection from "./Components/sections/ProjectsSection";
import ContactSection from "./Components/sections/ContactSection";
import Footer from "./Components/common/Footer";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navigation activeSection={activeSection} />
      <HeroSection isVisible={isVisible} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
