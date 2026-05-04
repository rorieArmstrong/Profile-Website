import React from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, NavLink, NavList } from './styles';

const items = [
  { name: 'About Me', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Me', path: '/contactMe' },
];

const TopNav = () => {
  const location = useLocation();

  const isMe = location.pathname === '/';

  return (
    <Nav $transparent={isMe}>
      <NavList>
        {items.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              $active={location.pathname === item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </NavList>
    </Nav>
  );
};

export default TopNav;
