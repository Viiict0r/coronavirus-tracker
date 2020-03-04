import axios from 'axios';

const api = axios.create({
  baseURL: 'http://142.44.241.200:8000',
  timeout: 10000,
});

export default api;
