import axios, { AxiosResponse } from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
import config from '../config';

const authClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    Accept: 'application/json',
  },
});

export default authClient;

authClient.interceptors.response.use((response: AxiosResponse<any>) => {
  if (response.status === 200 || response.status === 201) {
    // AsyncStorage.setItem('@token', response.data);
    console.log(response.data);
  }
  return response;
});
