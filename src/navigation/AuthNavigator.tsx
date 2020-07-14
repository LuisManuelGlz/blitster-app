import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/Intro';
import LoginScreen from '../screens/Login';
import SignupStepOneScreen from '../screens/SignupStepOne';
import SignupStepTwoScreen from '../screens/SignupStepTwo';

export type AuthStackParamList = {
  Intro: undefined;
  Login: undefined;
  SignupStepOne: undefined;
  SignupStepTwo: { userDetails: { fullName: string; email: string } };
};

const Stack = createStackNavigator<AuthStackParamList>();

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
      name="SignupStepOne"
      component={SignupStepOneScreen}
      options={{ headerTitle: '' }}
    />
    <Stack.Screen
      name="SignupStepTwo"
      component={SignupStepTwoScreen}
      options={{ headerTitle: '' }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
