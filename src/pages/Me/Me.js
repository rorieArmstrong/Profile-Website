import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ArrowRight32 } from '@carbon/icons-react';
import { ProfileLink, ViewResumeLink  } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <ul>
          {user.basics.profiles.slice(1).map((profile, i) => (
            <ProfileLink key={profile.network}>
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                <img src={`/images/${profile.network}.png`} alt={profile.network}></img>
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
      <div>
      </div>
    </Layout>
  );
};

export default Me;