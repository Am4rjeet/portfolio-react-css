import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData.json';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { name, github, email } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Split name for styled logo (e.g. "Amarjeet Kumar" -> "Amarjeet")
  const logoName = name.split(' ')[0] || name;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" id="nav-logo" onClick={closeMobileMenu}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">{logoName}</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} id="nav-link-home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} id="nav-link-about">About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} id="nav-link-skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} id="nav-link-projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} id="nav-link-contact">Contact</a>
          </li>
        </ul>

        {/* Social Link Action */}
        <div className="nav-actions">
          <a href={github} target="_blank" rel="noopener noreferrer" className="nav-icon-link" id="nav-github-link" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={`mailto:${email}`} className="nav-icon-link" id="nav-mail-link" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="#contact" className="btn btn-primary btn-nav" id="nav-cta-btn">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu" id="nav-mobile-toggle">
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-menu">
          <li className="mobile-nav-item">
            <a href="#home" className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#about" className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#skills" className={`mobile-nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={closeMobileMenu}>Skills</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#projects" className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={closeMobileMenu}>Projects</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#contact" className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</a>
          </li>
        </ul>
        <div className="mobile-menu-footer">
          <a href={github} target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={`mailto:${email}`} className="nav-icon-link" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
