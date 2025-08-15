import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-image">
      🚀
    </div>
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.github} className="project-link">
          <Github size={16} />
          <span>Código</span>
        </a>
        <a href={project.demo} className="project-link">
          <ExternalLink size={16} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </div>
);

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
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Mis <span className="section-title-accent">Proyectos</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;