import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  &.active {
    color: rgb(0, 176, 175);
  }
`;

export default function MenuItems() {
  return (
    <>
      <StyledNavLink exact to="/">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={'Dashboard'} />
        </ListItem>
      </StyledNavLink>
    </>
  );
}
