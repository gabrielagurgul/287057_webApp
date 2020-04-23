import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItems from '../MenuItems/MenuItems';
import Drawer from '@material-ui/core/Drawer';

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    position: relative;
    white-space: nowrap;
    height: 100vh;
    width: ${(props) => (props.open ? '240px' : '72px')};
    overflow-x: ${(props) => (props.open ? 'visible' : 'hidden')};
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1);
  }
`;

const StyledToolbarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;

  min-height: 56px;
  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48;
  }
  @media (min-width: 600px) {
    min-height: 64px;
  }
`;

export const Menu = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <StyledDrawer variant="permanent" open={open}>
        <StyledToolbarIcon>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </StyledToolbarIcon>
        <Divider />
        <List>
          <MenuItems />
        </List>
        <Divider />
      </StyledDrawer>
    </>
  );
};
