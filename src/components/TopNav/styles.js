import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

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
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  background: ${({ $transparent }) => $transparent ? 'transparent' : '#111214'};
  border-bottom: ${({ $transparent }) => $transparent ? 'none' : '1px solid rgba(255,255,255,0.06)'};
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 640px) {
    padding: 0 8px;
    gap: 0;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ $active }) => ($active ? '#ffffff' : '#c6c6c6')};
  text-decoration: none;
  font-size: 14px;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex-shrink: 0;
  font-family: 'Fira Code', monospace;
  font-size: 16px;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 640px) {
    padding: 0 10px;
    font-size: 13px;
  }
`;
