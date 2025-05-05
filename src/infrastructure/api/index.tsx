import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.0.104:4000/'
    baseURL: "https://foot-mock-api.vercel.app/"
});

export { api };
