import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async () => {
      try {
        const value = await AsyncStorage.getItem('@token');
        value !== null && setToken(value);
      } catch (e) {
        console.log(e.message);
      }
    };
    setToken('hola');
  }, [token]);

  return token ? (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
