import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 200px;
  margin-right: 1rem;
  border-radius: 50%;
`;
