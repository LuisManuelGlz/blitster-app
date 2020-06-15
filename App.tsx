import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';

declare const global: { HermesInternal: null | {} };

const App = () => {
  useEffect(() => SplashScreen.hide(), []);

  return <AppNavigator />;
};

export default App;
