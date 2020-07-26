import axios from 'axios';
import config from '../config';

const loggedInClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    Accept: 'application/json',
  },
});

export default loggedInClient;
