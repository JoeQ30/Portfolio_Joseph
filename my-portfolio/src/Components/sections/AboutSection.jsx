import { Code, Palette, Smartphone, Server } from 'lucide-react';
import ServiceItem from '../common/ServiceItem';

const AboutSection = () => {
  const services = [
    { icon: Code, title: "Frontend Development", color: "blue" },
    { icon: Server, title: "Backend Development", color: "purple" },
    { icon: Smartphone, title: "Mobile Development", color: "green" },
    { icon: Palette, title: "UI/UX Design", color: "pink" }
  ];

  const profileImageUrl = "/avatar_joseph.jpg";

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          Sobre <span className="section-title-accent">Mí</span>
        </h2>
        <div className="about-grid">
          <div>
            <div className="about-avatar">
              <div className="avatar-inner">
                {profileImageUrl ? (
                  <img 
                    src={profileImageUrl} 
                    alt="Perfil" 
                    className="avatar-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div className="avatar-placeholder" style={{ display: profileImageUrl ? 'none' : 'block' }}>
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
          <div className="about-content">
            <p className="about-text">
              Hola, soy Joseph Quirós, estudiante de Ingeniería en Computación en el Instituto Tecnológico de 
              Costa Rica. Me apasiona crear aplicaciones web modernas, eficientes y visualmente atractivas, 
              siempre buscando unir funcionalidad con una excelente experiencia de usuario.
            </p>
            <p className="about-text">
              Disfruto aprender y adaptarme rápidamente a nuevas tecnologías, y me involucro de lleno en cada 
              proyecto para asegurar que no solo cumpla su objetivo, sino que supere las expectativas.
            </p>
            <div className="services-grid">
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
