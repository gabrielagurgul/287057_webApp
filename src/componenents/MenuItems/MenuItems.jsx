import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import Devices from '@material-ui/icons/Devices';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import List from '@material-ui/core/List';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  &.active {
    color: rgb(0, 176, 175);
  }
`;

const StyledNestedListItem = styled(ListItem)`
  padding-left: 32px;
`;

export default function MenuItems() {
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <StyledNavLink exact to="/">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={'dashboard'} />
        </ListItem>
      </StyledNavLink>

      <StyledNavLink to="/2">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={'2'} />
        </ListItem>
      </StyledNavLink>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Devices />
        </ListItemIcon>
        <ListItemText primary={'3'} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <StyledNavLink to="/3">
            <StyledNestedListItem button>
              <ListItemIcon>
                <PhoneIphone />
              </ListItemIcon>
              <ListItemText secondary={'4'} />
            </StyledNestedListItem>
          </StyledNavLink>
        </List>
      </Collapse>
    </>
  );
}
