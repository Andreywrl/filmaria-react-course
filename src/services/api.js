import axios from 'axios';

//Base URL >    
const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;