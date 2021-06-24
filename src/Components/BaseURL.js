import axios from 'axios';

export const baseURL = 'https://girls-persona-bd.herokuapp.com/';

export default axios.create({
    baseURL: 'https://girls-persona-bd.herokuapp.com/',
});

