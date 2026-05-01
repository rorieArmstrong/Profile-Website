import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Lottie from 'react-lottie';
import animationData from '../../lotties/loading.json';
import { Pill } from '../../styles';
import { ProfileLink, Links, HeaderContainer, Header, Image, ImageBlur, ImageBackground, VerticalText  } from './styles';

const Me = ({ user }) => {
  const [enter, setEnter] = useState(0);

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
  
  return (
    <div>
      <Layout user={user}>
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
      </Layout>
    </div>
  );
};

export default Me;