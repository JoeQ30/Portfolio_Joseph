import { Github, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">
            ¡Trabajemos <span className="section-title-accent">Juntos!</span>
          </h2>
          <p className="contact-subtitle">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </p>
          <div className="contact-methods">
            <a href="mailto:jquirscalvo@email.com" className="contact-method">
              <Mail style={{ color: '#3b82f6' }} size={24} />
              <span>jquirscalvo@email.com</span>
            </a>
            <a href="https://github.com/JoeQ30" className="contact-method">
              <Github style={{ color: '#8b5cf6' }} size={24} />
              <span>GitHub</span>
            </a>
          </div>
          <button className="cta-button">
            Contáctame
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;