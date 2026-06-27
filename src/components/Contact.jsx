import { useState } from 'react';
import portfolioData from '../data/portfolioData.json';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const { email, github, location } = portfolioData.personalInfo;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all required fields.');
      return;
    }
    
    // Simulate sending progress
    setStatus('Sending message...');
    setTimeout(() => {
      setStatus('Message sent successfully! Thank you.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  const displayGithubName = github.replace('https://', '').replace('www.', '');

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project proposal, engineering challenge, or just want to chat? Drop a line below!</p>
        
        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card glass-panel">
            <h3>Contact Information</h3>
            <p className="contact-info-desc">
              I'm currently open to new full-stack opportunities, contract work, and collaborative engineering partnerships. Use the details below or fill out the form.
            </p>
            
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="detail-icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="detail-text">
                  <span className="detail-label">Email Me</span>
                  <a href={`mailto:${email}`} className="detail-value">{email}</a>
                </div>
                <button className="copy-btn" onClick={copyEmail} aria-label="Copy Email" id="copy-email-btn">
                  {copied ? <i className="fa-solid fa-check text-green"></i> : <i className="fa-regular fa-copy"></i>}
                  <span className="tooltip">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon"><i className="fa-brands fa-github"></i></div>
                <div className="detail-text">
                  <span className="detail-label">GitHub</span>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="detail-value">{displayGithubName}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="detail-text">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card glass-panel">
            <form onSubmit={handleSubmit} className="contact-form" id="contact-form-el">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-name">Name *</label>
                  <input 
                    type="text" 
                    id="form-name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-email">Email *</label>
                  <input 
                    type="email" 
                    id="form-email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-subject">Subject</label>
                <input 
                  type="text" 
                  id="form-subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  placeholder="Subject title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-message">Message *</label>
                <textarea 
                  id="form-message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Your message details..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn" id="contact-submit-btn">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>

              {status && <p className="form-status-message" id="form-status-msg">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
