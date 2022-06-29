import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar  from './src/Navbar'
import About  from './src/About'
import Projects  from './src/Projects'
import Skills from './src/Skills'
import Testimonials  from './src/Testimonials'
import Contact from './src/Contact'


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/rorieArmstrong')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
