import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/Intro';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
      },
    }}>
    <Stack.Screen
      name="Intro"
      component={IntroScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerTitle: '' }}
    />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{ headerTitle: '' }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
