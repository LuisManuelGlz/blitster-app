import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import { loggedInClient } from './src/api';
import { auth } from './src/redux/ducks';
import AppNavigator from './src/navigation/AppNavigator';
import { store, persistor } from './src/redux/store';

declare const global: { HermesInternal: null | {} };

const App = () => {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

loggedInClient.interceptors.request.use(
  (config) => {
    let { tokenType, accessToken } = store.getState().auth;

    if (accessToken) {
      loggedInClient.defaults.headers.common.Authorization = `${tokenType} ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

loggedInClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response;
    const originalRequest = error.config;

    if (status === 401 && !originalRequest._retry) {
      const { dispatch, getState } = store;
      await auth.operations.refreshToken(dispatch, getState());

      originalRequest._retry = true;
      originalRequest.headers.Authorization = `${getState().auth.tokenType} ${
        getState().auth.accessToken
      }`;

      return loggedInClient(originalRequest);
    }

    return Promise.reject(error);
  },
);
