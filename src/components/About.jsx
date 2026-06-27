import portfolioData from '../data/portfolioData.json';
import './About.css';

export default function About() {
  const { headline, paragraphs, stats, ctaText, ctaDesc } = portfolioData.about;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Bridging the gap between engineering, design, and scalability.</p>
        
        <div className="about-grid">
          <div className="about-text-container">
            <h3 className="about-headline">{headline}</h3>
            {paragraphs.map((para, idx) => (
              <p key={idx} className="about-paragraph">
                {para}
              </p>
            ))}
          </div>

          <div className="about-stats-container">
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-panel">
                  <div className="stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="about-cta-card glass-panel">
              <h4>{ctaText}</h4>
              <p>{ctaDesc}</p>
              <a href="#contact" className="btn btn-primary">Let's Connect</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
