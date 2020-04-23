import axios from 'axios';

export default {
    getReminders() {
        return axios
            .get('https://ie2020.kisim.eu.org/api/reminders')
            .then((response) => {
                console.log(response);
            });
    },
};