import portfolioData from '../data/portfolioData.json';
import './Projects.css';

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A collection of full-stack systems and user interfaces built to solve real-world problems.</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel" id={`project-${index}`}>
              <div className="project-header">
                <span className="project-badge">Full-Stack</span>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo" title="View Source Code">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a 
                    href={project.demoLink} 
                    className={project.demoLink === '#' ? 'disabled' : ''} 
                    onClick={(e) => project.demoLink === '#' && e.preventDefault()}
                    aria-label="Live Demo" 
                    title={project.demoLink === '#' ? 'Live Demo coming soon' : 'View Live Demo'}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
