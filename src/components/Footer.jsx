import portfolioData from '../data/portfolioData.json';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, github, email } = portfolioData.personalInfo;

  // Split name for styled logo
  const logoName = name.split(' ')[0] || name;

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">{logoName}</span>
            <span className="logo-bracket"> /&gt;</span>
          </a>
          
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={`mailto:${email}`} aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
          <p className="footer-meta">
            Designed & Built with <i className="fa-solid fa-heart text-pink"></i> using React & CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
