import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Grid, CssBaseline, Container} from '@material-ui/core';
import styled from 'styled-components';
import {Menu} from './componenents/Menu/Menu';
import {TopBar} from './componenents/TopBar/TopBar';
import {Dashboard} from './componenents/Dashboard/Dashboard';

const StyledRoot = styled.div`
  display: flex;
`;
const Main = styled.main`
  flex-grow: 1;
  height: 100vh;
`;

const StyledContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`; 

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <StyledRoot>
          <CssBaseline />
          <Menu />
          <Main>
            <TopBar />
            <StyledContainer maxWidth="lg">
              <Grid container spacing={3} />
              <Switch>
                <Route path="/" exact component={Dashboard} />
              </Switch>
            </StyledContainer>
          </Main>
        </StyledRoot>
      </BrowserRouter>
    </>
  );
};

export default App;
