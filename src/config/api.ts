
import axios from 'axios';

const baseURL = 'https://riderpro.io/'; 

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;