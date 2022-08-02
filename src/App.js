import React, { useState, useEffect } from 'react';
import './App.css';
import Pages from './pages/index'

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/roriearmstrong')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);
  return !user? <div/>: <Pages user={user} />;
}

export default App;
