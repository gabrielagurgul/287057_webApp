import React from 'react';
import styled from 'styled-components';
import {Paper} from '@material-ui/core';

const StyledPaper = styled(Paper)`
  margin-bottom: 16px;
  height: 700px;
`;

export const Dashboard = () => {
  return (
    <StyledPaper>
      <p>Dashboard</p>
    </StyledPaper>
  );
};
