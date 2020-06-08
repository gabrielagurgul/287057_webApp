import uuidv4 from 'uuid/v4';
export default {
    saveCards(name, newCards) {
        localStorage.setItem(name, JSON.stringify({cards: newCards}))
    },
    getCards(name) {
        const defaultCards = [
            {id: uuidv4(), title: 'test', text: 'test'},
            {id: uuidv4(), title: 'test2', text: 'test2.'}
        ]

        const json = localStorage.getItem(name) || JSON.stringify({cards: defaultCards});
        return JSON.parse(json).cards;
    },
    deleteCard(kanbanList, id) {
        const newCards = kanbanList.cards.filter(card => card.id !== id);
        return newCards;
    }
}

