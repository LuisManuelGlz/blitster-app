import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootNavigator from '../navigation/RootNavigator';
import { AlertContainer } from '../components';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen
            name="AppStack"
            component={RootNavigator}
            options={{ headerShown: false }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
      <AlertContainer />
    </Fragment>
  );
};

export default AppNavigator;
