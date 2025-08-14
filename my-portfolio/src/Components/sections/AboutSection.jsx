import { Code, Palette, Smartphone, Server } from 'lucide-react';
import ServiceItem from '../common/ServiceItem';

const AboutSection = () => {
  const services = [
    { icon: Code, title: "Frontend Development", color: "blue" },
    { icon: Server, title: "Backend Development", color: "purple" },
    { icon: Smartphone, title: "Mobile Development", color: "green" },
    { icon: Palette, title: "UI/UX Design", color: "pink" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Sobre <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Mí</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Soy un desarrollador web con más de 3 años de experiencia creando aplicaciones modernas y escalables. 
              Me especializo en tecnologías como React, Node.js y el ecosistema JavaScript.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mi pasión por el código va más allá del trabajo - disfruto explorando nuevas tecnologías, 
              contribuyendo a proyectos open source y creando soluciones innovadoras.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
