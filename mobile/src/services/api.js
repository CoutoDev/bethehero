import axios from 'axios';

const api = axios.create({
    baseURL: 'iplocal:port'
});

export default api;