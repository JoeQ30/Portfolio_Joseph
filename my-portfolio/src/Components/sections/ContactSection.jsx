import { Github, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          ¡Trabajemos <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Juntos!</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
        </p>
        <div className="flex justify-center space-x-8 mb-12">
          <a href="mailto:tu@email.com" className="flex items-center space-x-3 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            <Mail className="text-blue-400" size={24} />
            <span>tu@email.com</span>
          </a>
          <a href="https://github.com/tuusuario" className="flex items-center space-x-3 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            <Github className="text-purple-400" size={24} />
            <span>GitHub</span>
          </a>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Contáctame
        </button>
      </div>
    </section>
  );
};

export default ContactSection;