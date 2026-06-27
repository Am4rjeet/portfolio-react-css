import { useEffect, useState } from 'react';
import portfolioData from '../data/portfolioData.json';
import './Hero.css';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  
  const { name, role, location, github, email } = portfolioData.personalInfo;
  const { greetingBadge, description, typedText: fullText } = portfolioData.hero;

  // Extract a few main skills to display in the IDE mockup dynamically
  const mainSkills = portfolioData.skills
    .flatMap(category => category.skills.slice(0, 2))
    .map(skill => skill.name)
    .slice(0, 6);

  useEffect(() => {
    let index = 0;
    setTypedText(''); // reset
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting-badge">
            <span className="badge-dot"></span>
            {greetingBadge}
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient-accent">{name}</span>
          </h1>
          
          <h2 className="hero-subtitle">
            <span>{typedText}</span>
            <span className="cursor">|</span>
          </h2>
          
          <p className="hero-description">
            {description}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" id="hero-cta-work">
              Explore Projects <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-secondary" id="hero-cta-contact">
              Get In Touch
            </a>
          </div>

          <div className="hero-socials">
            <span className="social-label">Follow Me:</span>
            <div className="social-icons">
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={`mailto:${email}`} aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Visual Element: Dynamic Premium IDE Mockup */}
        <div className="hero-visual">
          <div className="ide-card glass-panel">
            <div className="ide-header">
              <div className="ide-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="ide-tab">profile.js</div>
            </div>
            <div className="ide-body">
              <pre>
                <code>
<span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;
  <span className="code-property">name</span>: <span className="code-string">'{name}'</span>,
  <span className="code-property">role</span>: <span className="code-string">'{role}'</span>,
  <span className="code-property">location</span>: <span className="code-string">'{location}'</span>,
  <span className="code-property">techStack</span>: [
    {mainSkills.map((skill, idx) => (
      <span key={idx}>
        <span className="code-string">'{skill}'</span>
        {idx < mainSkills.length - 1 ? ', ' : ''}
        {idx === 2 ? '\n    ' : ''}
      </span>
    ))}
  ],
  <span className="code-property">focus</span>: <span className="code-string">'Scalable Architectures & Fluid UIs'</span>
&#125;;

<span className="code-comment">// Ready to solve complex problems</span>
<span className="code-variable">developer</span>.<span className="code-method">status</span> = <span className="code-string">'Actively Coding'</span>;
                </code>
              </pre>
            </div>
          </div>
          <div className="hero-visual-glow"></div>
        </div>
      </div>
    </section>
  );
}
