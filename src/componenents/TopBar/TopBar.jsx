import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {ExitToApp, AccountBox} from '@material-ui/icons';
import {AppBar, Typography, Toolbar, Button, Divider} from '@material-ui/core';

const StyledTitle = styled(Typography)`
  flex-grow: 1;
`;
const StyledAppBar = styled(AppBar)`
  position: relative;
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1),
    margin 225ms cubic-bezier(0.4, 0, 0.6, 1);
`;
const StyledToolbar = styled(Toolbar)`
  padding-right: 24px;
`;
const StyledButton = styled(Button)`
  color: inherit;
  text-decoration: none;
  text-transform: none;
`;
const StyledLogoutNavlink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  padding-right: 5px;
  font-size: 1rem;
`;

export const TopBar = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Divider />
        <StyledTitle color="inherit" noWrap>
          {'title'}
        </StyledTitle>
        <StyledButton>
          <AccountBox />
        </StyledButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};
