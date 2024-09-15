import styled from 'styled-components'

export const ProfileLink = styled.li`
  margin-right: 2.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`

export const ViewResumeLink = styled.a`
  max-width: 200px;
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;

export const Links = styled.ul`
  text-align: right;
`;

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
  justify-content: space-evenly;
  padding-left: 72px;
`