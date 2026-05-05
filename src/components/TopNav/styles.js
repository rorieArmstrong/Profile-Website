import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 48px;
  box-sizing: border-box;
  padding: 0 24px;
  background: ${({ $transparent }) => $transparent ? 'transparent' : '#111214'};
  border-bottom: ${({ $transparent }) => $transparent ? 'none' : '1px solid rgba(255,255,255,0.06)'};
`;

export const NavList = styled.ol`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  counter-reset: nav-counter;

  li {
    list-style: none;
    counter-increment: nav-counter;
    display: flex;
    align-items: center;

    &::before {
      content: "0" counter(nav-counter) " ";
      font-family: 'Fira Code', monospace;
      font-size: 13px;
      color: #5a6270;
      margin-right: 4px;
    }
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ $active }) => ($active ? '#ffffff' : '#c6c6c6')};
  text-decoration: none;
  padding: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-family: 'Fira Code', monospace;
  font-size: 15px;
  transition: color 150ms ease;

  &:hover {
    color: #ffffff;
  }
`;

export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background: #c6c6c6;
    border-radius: 2px;
    transition: transform 220ms ease, opacity 220ms ease;
    transform-origin: center;
  }

  ${({ $open }) => $open && `
    span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  `}

  @media (max-width: 640px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 48px;
  left: 0;
  width: 100%;
  background: #111214;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex;
  flex-direction: column;
  padding: 8px 0 16px;
  z-index: 99;
`;

export const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 13px 24px;
  color: ${({ $active }) => ($active ? '#ffffff' : '#c6c6c6')};
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  font-size: 15px;
  transition: color 150ms ease, background 150ms ease;

  .num {
    color: #5a6270;
    font-size: 12px;
    min-width: 20px;
  }

  ${({ $active }) => $active && `
    background: rgba(255,255,255,0.04);
  `}

  &:hover {
    color: #ffffff;
    background: rgba(255,255,255,0.06);
  }
`;
