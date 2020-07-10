import axios from 'axios';
import config from '../config';

const authClient = axios.create({
  baseURL: `${config.baseUrl}auth/`,
  headers: {
    Accept: 'application/json',
  },
});

export default authClient;

authClient.interceptors.response.use(
  (response) => {
    // console.log(JSON.stringify(response.data));
    return response;
  },
  (error) => {
    // console.log(error.response.data);
    return Promise.reject(error);
  },
);
