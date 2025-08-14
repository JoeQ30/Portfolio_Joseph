
const SkillsSection = () => {
  const skills = [
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'Angular', level: 75, icon: '🅰️' },
    { name: 'JavaScript', level: 80, icon: '🟨' },
    { name: 'TypeScript', level: 75, icon: '🔷' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'CSS/SCSS', level: 85, icon: '🎨' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Java', level: 90, icon: '☕' },
    { name: 'C++', level: 80, icon: '💻' },
    { name: 'PostgreSQL', level: 85, icon: '🟣' },
    { name: 'Firebase', level: 80, icon: '🔥' }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Mis <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Habilidades</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill }) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{skill.icon}</span>
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
      <span className="text-blue-400 font-bold">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

export default SkillsSection;