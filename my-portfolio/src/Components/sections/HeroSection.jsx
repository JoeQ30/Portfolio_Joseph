import { ChevronDown } from 'lucide-react';
import SocialLinks from '../common/SocialLinks';
import { scrollToSection } from '../../hooks/useActivation';

const HeroSection = ({ isVisible }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.5
      }}></div>
      
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Hola, soy </span>
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
            Tu Nombre
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Desarrollador Full Stack apasionado por crear experiencias web extraordinarias
        </p>
        <SocialLinks className="mb-12" />
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Ver mis proyectos
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;