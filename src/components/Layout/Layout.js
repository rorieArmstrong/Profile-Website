import React from 'react';
import TopNav from '../TopNav';
import UserHeader from '../UserHeader';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <TopNav />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;