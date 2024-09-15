import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  min-height: 80vh;
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

export const ImageBackground = styled.div`
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius:50%;
`

export const Image = styled.img`
  object-fit: cover;
  filter: blur(0px);
  marginRight: 72px;
  display: block;
  min-width: 200px;
  min-hieght: 200px;
  margin-right: 1rem;
  border-radius: 50%;
  max-width: 400px;
  max-height:400px;
  width: auto;
  height: auto;
`;

export const ImageBlur = styled.img`
  position: absolute;
  z-index: -2;
  object-fit: cover;
  filter: blur(8px);
  -webkit-filter: blur(8px);
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

export const VerticalText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`