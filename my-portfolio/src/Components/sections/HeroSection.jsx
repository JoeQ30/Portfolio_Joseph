import { ChevronDown } from 'lucide-react';
import SocialLinks from '../common/SocialLinks';
import { scrollToSection } from '../../hooks/useActivation';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-pattern"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span style={{ color: 'white' }}>Hola, soy </span>
          <span className="hero-name">Joseph</span>
        </h1>
        <p className="hero-subtitle">
          ¡Bienvenido! Soy un desarrollador Junior y estudiante del Instituto Tecnológico de 
          Costa Rica con muchas ganas de crear soluciones innovadoras y ayudar a los demás a 
          alcanzar sus objetivos digitales.
        </p>
        <SocialLinks />
        <button
          onClick={() => scrollToSection('projects')}
          className="cta-button"
        >
          Ver mis proyectos
        </button>
      </div>
      
      <div className="scroll-indicator">
        <ChevronDown size={32} style={{ color: '#94a3b8' }} />
      </div>
    </section>
  );
};

export default HeroSection;