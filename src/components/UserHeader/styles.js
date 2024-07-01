import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  min-height: 100vh;
  margin: auto;
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
  marginRight: 72px;
  display: block;
  min-width: 200px;
  min-hieght: 200px;
  margin-right: 1rem;
  border-radius: 50%;
  max-width:400px;
  max-height:400px;
  width: auto;
  height: auto;
`;
