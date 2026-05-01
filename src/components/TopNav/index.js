import React from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, NavLink } from './styles';

const items = [
  { name: 'About Me', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Education', path: '/education' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Me', path: '/contactMe' },
];

const TopNav = () => {
  const location = useLocation();

  return (
    <Nav>
      {items.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          $active={location.pathname === item.path}
        >
          {item.name}
        </NavLink>
      ))}
    </Nav>
  );
};

export default TopNav;
