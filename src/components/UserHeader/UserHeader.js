import React from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderContainer, Header, Image } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} alt="Profile-Picture" style={{width: "200px", hieght: "200px"}} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://github.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>
          <p>
            Blog:{' '}
            <a href={user.basics.blog} target="_blank" rel="noreferrer noopener">
              {user.basics.blog}
            </a>
          </p>
        </div>
      </Header>
    </HeaderContainer>
  );
};

export default UserHeader;