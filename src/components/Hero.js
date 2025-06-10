import React from 'react';
import '../styles/hero.css';
import personalInfo from '../data/hero.json';

function Hero() {
  const { name, title, tagline, profileImage } = personalInfo;

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profileImage} alt="Profile" className="hero-image" />
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="hero-tagline">{tagline}</p>
        <button className="hero-button" onClick={scrollToContact}>
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Hero;
