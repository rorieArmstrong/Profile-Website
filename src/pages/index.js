import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Experience from './Work';
import ContactMe from './ContactMe';

const Pages = ({ user }) => {
  return (
    <Router basename={process.env.PORT}>
      <Routes>
        <Route exact path="/" element={<Me user={user} />} />
        <Route path="/projects" element={<Projects user={user} />} />
        <Route path="/experience" element={<Experience user={user} />} />
        <Route path="/contactMe" element={<ContactMe user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;