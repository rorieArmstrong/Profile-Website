import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, Logo, NavList, NavLink, Hamburger, MobileMenu, MobileNavLink } from './styles';

const items = [
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Me', path: '/contactMe' },
];

const TopNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isMe = location.pathname === '/';

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <Nav $transparent={isMe && !open}>
      <Logo to="/">R.</Logo>
      <NavList>
        {items.map((item, i) => (
          <li key={item.path}>
            <NavLink to={item.path} $active={location.pathname === item.path}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </NavList>

      <Hamburger
        onClick={() => setOpen(o => !o)}
        $open={open}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </Hamburger>

      {open && (
        <MobileMenu>
          {items.map((item, i) => (
            <MobileNavLink
              key={item.path}
              to={item.path}
              $active={location.pathname === item.path}
              onClick={() => setOpen(false)}
            >
              <span className="num">0{i + 1}</span>
              {item.name}
            </MobileNavLink>
          ))}
        </MobileMenu>
      )}
    </Nav>
  );
};

export default TopNav;
