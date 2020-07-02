import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
import config from '../config';
// import { ServerData } from '../interfaces/axios';
// import AsyncStorage from '@react-native-community/async-storage';

const authClient = axios.create({
  baseURL: `${config.baseUrl}auth/`,
  headers: {
    Accept: 'application/json',
  },
});

export default authClient;

// authClient.interceptors.response.use(
//   (response: AxiosResponse<ServerData>) => {
//     const {
//       status,
//       data: { tokenType, accessToken, refreshToken },
//     } = response;

//     if (status === 200 || status === 201) {
//       setToken(`${tokenType} ${accessToken}`);
//       refreshToken && setRefreshToken(refreshToken); // if token, then save it
//     }

//     return response;
//   },
//   (error) => {
//     console.log(error);
//   },
// );

// const setToken = async (token: string): Promise<void> => {
//   await AsyncStorage.setItem('@token', token);
// };

// const setRefreshToken = async (refreshToken: string): Promise<void> => {
//   await AsyncStorage.setItem('@refreshToken', refreshToken);
// };
