import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://quiz-backend25.herokuapp.com/',
    withCredentials: true
});

export default instance;