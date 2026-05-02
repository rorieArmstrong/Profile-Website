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
  justify-content: right;
  height: 48px;
  background-color: #16161600;
  border-bottom: 1px solid #393939;
  box-sizing: border-box;
  padding: 0 32px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
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
  border-bottom: 2px solid ${({ $active }) => ($active ? '#ffffff' : 'transparent')};
  transition: color 150ms ease, border-color 150ms ease;

  &:hover {
    color: #ffffff;
    background-color: #2a2a2a;
  }

  @media (max-width: 640px) {
    padding: 0 10px;
    font-size: 13px;
  }
`;
