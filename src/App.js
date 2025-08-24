import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
