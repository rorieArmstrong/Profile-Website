import React from 'react';
import Layout from '../../components/Layout';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';

const Me = ({ user }) => {
  return (
    <div>
      <AnimatedBackground />
      <Layout user={user} transparent />
    </div>
  );
};

export default Me;