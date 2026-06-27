import portfolioData from '../data/portfolioData.json';
import './Skills.css';

export default function Skills() {
  const skillCategories = portfolioData.skills;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">A comprehensive toolkit of technologies I utilize to build modern, production-grade applications.</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="skills-category-card glass-panel">
              <div className="category-header">
                <div className="category-icon-box">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="category-skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div 
                        className="skill-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
