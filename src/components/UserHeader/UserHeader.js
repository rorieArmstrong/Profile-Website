import React from 'react';
import { useLocation } from 'react-router-dom';
import { Pill } from '../../styles';

import { HeaderContainer, Header, Image } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} alt="Profile-Picture" width="400" height="400"/>
        <div>
          <h2>{user.basics.name}</h2>
          <p>{user.basics.label}</p>
          <p>{user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>
          <div style={{"padding-top": "40px"}}>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
        </div>
      </Header>
    </HeaderContainer>
  );
};

export default UserHeader;