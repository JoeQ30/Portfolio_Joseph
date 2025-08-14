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
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
            &lt;DevPortfolio /&gt;
          </div>
          <div className="hidden md:flex space-x-8">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                  activeSection === section.id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;