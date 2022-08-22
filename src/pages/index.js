import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import ContactMe from './ContactMe';

const Pages = ({ user }) => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Me user={user} />} />
        <Route path="/projects" element={<Projects user={user} />} />
        <Route path="/work" element={<Work user={user} />} />
        <Route path="/education" element={<Education user={user} />} />
        <Route path="/contactMe" element={<ContactMe user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;