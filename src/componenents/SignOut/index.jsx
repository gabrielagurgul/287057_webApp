import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {withFirebase} from '../../Firebase';
import {ExitToApp} from '@material-ui/icons';

const StyledButton = styled(Button)`
  color: inherit;
  text-decoration: none;
  text-transform: none;
`;

const SignOutButton = ({ firebase }) => (
  <StyledButton type="button" onClick={firebase.doSignOut}>
      Sign Out
    <ExitToApp />
  </StyledButton>
);

export default withFirebase(SignOutButton);
