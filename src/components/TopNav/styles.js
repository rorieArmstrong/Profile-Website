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
  gap: 8px;
  padding: 0 32px;
  height: 48px;
  background-color: #161616;
  border-bottom: 1px solid #393939;
  box-sizing: border-box;
`;

export const NavLink = styled(Link)`
  color: ${({ $active }) => ($active ? '#ffffff' : '#c6c6c6')};
  text-decoration: none;
  font-size: 14px;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ $active }) => ($active ? '#ffffff' : 'transparent')};
  transition: color 150ms ease, border-color 150ms ease;

  &:hover {
    color: #ffffff;
    background-color: #2a2a2a;
  }
`;
