import { scrollToSection } from "../../hooks/useActivation";

const Navigation = ({ activeSection }) => {
  const sections = [
    { id: 'hero', label: 'inicio' },
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'skills' },
    { id: 'projects', label: 'projects' },
    { id: 'contact', label: 'contact' }
  ];

  return (
    <nav className="nav-fixed">
      <div className="nav-container">
        <div className="nav-logo">
          &lt;DevPortfolio/&gt;
        </div>
        <div className="nav-links">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;