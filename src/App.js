import React, { useEffect, useState } from 'react';
import './App.css';
import Pages from './pages/index'

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/roriearmstrong')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load profile');
        return res.json();
      })
      .then(user => setUser(user))
      .catch(() => setError(true));
  }, []);

  if (error) return <div style={{ padding: '2rem' }}>Failed to load profile. Please try again later.</div>;
  if (!user) return <div />;
  return <Pages user={user} />;
}

export default App;
