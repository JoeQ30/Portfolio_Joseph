
const SkillBar = ({ skill }) => (
  <div className="skill-card">
    <div className="skill-header">
      <div className="skill-info">
        <span className="skill-icon">{skill.icon}</span>
        <h3 className="skill-name">{skill.name}</h3>
      </div>
      <span className="skill-level">{skill.level}%</span>
    </div>
    <div className="skill-bar">
      <div
        className="skill-progress"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

const SkillsSection = () => {
  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'TypeScript', level: 85, icon: '🔷' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'CSS/SCSS', level: 90, icon: '🎨' },
    { name: 'Python', level: 75, icon: '🐍' },
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">
          Mis <span className="section-title-accent">Habilidades</span>
        </h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;