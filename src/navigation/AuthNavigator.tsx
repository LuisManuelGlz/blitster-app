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

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
      },
    }}>
    <AuthStack.Screen
      name="Intro"
      component={IntroScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerTitle: '' }}
    />
    <AuthStack.Screen
      name="SignupStepOne"
      component={SignupStepOneScreen}
      options={{ headerTitle: '' }}
    />
    <AuthStack.Screen
      name="SignupStepTwo"
      component={SignupStepTwoScreen}
      options={{ headerTitle: '' }}
    />
  </AuthStack.Navigator>
);

export default AuthNavigator;
