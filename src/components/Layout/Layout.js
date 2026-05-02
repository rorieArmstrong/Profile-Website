import React from 'react';
import TopNav from '../TopNav';
import UserHeader from '../UserHeader';

import { StyledContent } from './styles';

const Layout = ({ user, children, transparent }) => {
  return (
    <>
      <TopNav />
      <StyledContent transparent={transparent}>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;