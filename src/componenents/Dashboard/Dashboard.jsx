import React, {useState} from 'react';
import styled from 'styled-components';
import {Paper,Grid} from '@material-ui/core';
import uuidv4 from 'uuid/v4';
import KanbanList from '../Kanban/KanbanList';
import kanbanApi from '../../api/kanbanApi';
import { AuthUserContext } from '../Session';
import { withAuthorization } from '../Session';

const StyledPaper = styled(Paper)`
  margin-top: 40px;
  margin-bottom: 16px;
  height: 800px;
  width: 1300px;
`;

const Dashboard = () => {
 
  const loadCards = (name) => {
    const defaultCards = [
        {id: uuidv4(), title: 'test', text: 'test'},
        {id: uuidv4(), title: 'test2', text: 'test2.'}
    ]

    const json = localStorage.getItem(name) || JSON.stringify({cards: defaultCards})
    return JSON.parse(json).cards
}

const useCards = listName => {
    const [cards, setCardsPlain] = useState(loadCards(listName))
    const setCards = newCards => {
        setCardsPlain(newCards)
        kanbanApi.saveCards(listName, newCards)
    }
    return [cards, setCards]
}

const useKanbanList = (name, titleBackgroundColor) => {
    const [cards, setCards] = useCards(name)

    return {
        name,
        titleBackgroundColor,
        cards,
        setCards
    }
}

const kanbanLists = [
  useKanbanList('Todo', '#8e6e95'),
  useKanbanList('Doing', "#39a59c"),
  useKanbanList('Reviewing', "#344759"),
  useKanbanList('Done', "#e8741e")
]

const kanbanListsJsx = kanbanLists.map((kanbanList, i) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
      <KanbanList
          kanbanList={kanbanList}
          leftKanbanList={i >= 1 ? kanbanLists[i - 1] : undefined}
          rightKanbanList={i < kanbanLists.length - 1 ? kanbanLists[i + 1] : undefined}
      />
  </Grid>
))


  return (
    <StyledPaper>
          <Grid container spacing={3}>
              {kanbanListsJsx}
          </Grid>
    </StyledPaper>
  );
};
const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(Dashboard);
