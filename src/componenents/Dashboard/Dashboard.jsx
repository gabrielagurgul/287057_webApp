/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Paper} from '@material-ui/core';
import api from '../../api/api';
import axios from 'axios';

const StyledPaper = styled(Paper)`
  margin-bottom: 16px;
  height: 700px;
`;

export const Dashboard = () => {
  const [data, setData] = useState({data: []});
  let result;
  useEffect(async () => {
    result = await axios('https://ie2020.kisim.eu.org/api/reminders');
    console.log(result);
    setData(result);
  }, []);

  return (
    <StyledPaper>
      <br></br>
      <div>
        <br></br>
        <p>Reminders:</p>
        {data.data.map((item) => (
          <p key={item.id}>
            <br></br>
            <a>id: {item.id}</a>
            <br></br>
            <a>presentationId: {item.presentationId}</a>
            <br></br>
            <a>enabled: {item.enabled}</a>
            <br></br>
            <a>updatedAt: {item.updatedAt}</a>
            <br></br>
          </p>
        ))}
      </div>
    </StyledPaper>
  );
};
