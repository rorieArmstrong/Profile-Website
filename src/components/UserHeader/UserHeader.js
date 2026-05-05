import React from 'react';
import { useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../lotties/loading.json';
import {Summary, Header, Label, ProfileLink, Links, HeaderContainer, Image, VerticalText} from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (!user) return null;

  if (!isHome) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0" }}>
        <Image
          src={user.basics.image}
          alt="Profile-Picture"
          width="60"
          height="60"
          style={{ minWidth: "60px", maxWidth: "60px", maxHeight: "60px" }}
        />
        <div>
          <p style={{ margin: 0, fontWeight: "bold" }}>{user.basics.name}</p>
          <p style={{ margin: 0 }}>{user.basics.label}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeaderContainer isHome={true}>
        <Header>
          <VerticalText>
            
            <div style={{"paddingBottom": "8px"}}>
              <Label>{user.basics.label}</Label>
            </div>
            <Lottie
              options={defaultOptions}
              height={76}
              width={468}
            />
            {/* <div style={{"paddingBottom": "8px"}}>
              <Header>{user.basics.name}</Header>
            </div> */}
            <div style={{"paddingBottom": "8px"}}>
              <Summary>{user.basics.summary}</Summary>
            </div>
            {/* <div style={{"display":"flex","alignItems":"flex-start","gap":"12px"}}>
            {user.skills.map(skill => (
              <Pill key={skill.name}>{skill.name}</Pill>
            ))}
          </div> */}
          </VerticalText>
        </Header>
      </HeaderContainer>
      <Links>
          {user.basics.profiles.slice(1).map((profile, i) => (
            <ProfileLink key={profile.network}>
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                <img src={`/images/${profile.network}.png`} alt={profile.network} style={{"height":"2rem","width":"2rem"}}></img>
              </a>
            </ProfileLink>
          ))}
      </Links>
    </div>
  );
};

export default UserHeader;