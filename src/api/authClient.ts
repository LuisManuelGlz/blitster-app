import axios from 'axios';
import apiConfig from '../config';
// import { store } from '../redux/store';
// import { auth } from '../redux/ducks';

const authClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Accept: 'application/json',
  },
});

export default authClient;

// authClient.interceptors.request.use(
//   (config) => {
//     let { tokenType, accessToken } = store.getState().auth;

//     if (accessToken) {
//       axios.defaults.headers.common.Authorization = `${tokenType} ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   },
// );

// authClient.interceptors.response.use(
//   (response) => {
//     // console.log(JSON.stringify(response.data));
//     return response;
//   },
//   async (error) => {
//     const { status } = error.response;
//     const originalRequest = error.config;

//     if (status === 401 && !originalRequest._retry) {
//       // const { dispatch, getState } = store;
//       // const hola = store;

//       // await auth.operations.authRefreshToken(dispatch, getState());

//       // originalRequest.headers.Authorization = `${getState().auth.tokenType} ${
//       //   getState().auth.accessToken
//       // }`;
//       originalRequest._retry = true;

//       return axios(originalRequest);
//     }

//     return Promise.reject(error);
//   },
// );
