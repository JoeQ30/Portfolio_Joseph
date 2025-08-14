import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comercio electrónico con React, Node.js y MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades avanzadas',
      tech: ['React', 'TypeScript', 'Firebase'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard interactivo del clima con mapas y gráficos',
      tech: ['React', 'D3.js', 'Weather API'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Mis <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Proyectos</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group">
    <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-4xl">
      🚀
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-md text-xs">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a href={project.github} className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
          <Github size={16} />
          <span>Código</span>
        </a>
        <a href={project.demo} className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
          <ExternalLink size={16} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectsSection;