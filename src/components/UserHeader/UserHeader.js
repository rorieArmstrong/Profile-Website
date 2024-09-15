import React from 'react';
import { useLocation } from 'react-router-dom';
import { Pill } from '../../styles';

import { HeaderContainer, Header, Image, ImageBlur, ImageBackground, VerticalText } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <HeaderContainer IsHome={isHome}>
      <Header>
        <ImageBackground style={{"background-image":`user.basics.picture`}}>
          <ImageBlur IsHome={isHome} src={user.basics.picture} alt="Profile-Picture" width="400" height="400"/>
          <Image IsHome={isHome} src={user.basics.picture} alt="Profile-Picture" width="400" height="400"/>
        </ImageBackground>
        <VerticalText>
          <h2>{user.basics.name}</h2>
          <p>{user.basics.label}</p>
          <p>{user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>
          <div style={{"padding-top": "40px"}}>
          {user.skills.map(skill => (
            <Pill IsHome={isHome} key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
        </VerticalText>
      </Header>
    </HeaderContainer>
  );
};

export default UserHeader;