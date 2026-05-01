import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../lotties/loading.json';
import { Pill } from '../../styles';
import { ProfileLink, Links, HeaderContainer, Header, Image, ImageBlur, ImageBackground, VerticalText  } from './styles';

const UserHeader = ({ user }) => {
  const [enter, setEnter] = useState(0);
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

  const handleMouseEnter = () => {
    setEnter(8);
  }

  const handleMouseExit = () => {
    setEnter(0);
  }

  if (!user) return null;

  if (!isHome) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0" }}>
        <Image
          src={user.basics.picture}
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
      <HeaderContainer>
        <Header>
          <ImageBackground onMouseEnter={handleMouseEnter} onMouseLeave={e => handleMouseExit(e)} style={{"backgroundImage":`${user.basics.picture}`}}>
            <ImageBlur src={user.basics.picture} style={{"WebkitFilter": `blur(${(8 + enter)}px)`}} alt="Profile-Picture" width="400" height="400"/>
            <Image src={user.basics.picture} alt="Profile-Picture" width="400" height="400"/>
          </ImageBackground>
          <VerticalText>
            <Lottie
              options={defaultOptions}
              height={76}
              width={468}
              style={{"marginLeft":"0"}}
            />
            <div style={{"paddingBottom": "40px"}}>
              <p>{user.basics.label}</p>
              <p>{user.basics.region}</p>
              <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
            </div>
            <div style={{"display":"flex","alignItems":"flex-start","gap":"12px"}}>
            {user.skills.map(skill => (
              <Pill key={skill.name}>{skill.name}</Pill>
            ))}
          </div>
          </VerticalText>
        </Header>
      </HeaderContainer>
      <Links>
          {user.basics.profiles.slice(1).map((profile, i) => (
            <ProfileLink key={profile.network}>
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                <img src={`/images/${profile.network}.png`} alt={profile.network}></img>
              </a>
            </ProfileLink>
          ))}
      </Links>
    </div>
  );
};

export default UserHeader;