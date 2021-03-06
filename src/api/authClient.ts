import axios from 'axios';
import config from '../config';

const authClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    Accept: 'application/json',
  },
});

export default authClient;
