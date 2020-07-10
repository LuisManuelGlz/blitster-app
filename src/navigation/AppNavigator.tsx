import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootNavigator from '../navigation/RootNavigator';
import { AlertContainer } from '../components';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AppStack"
            component={RootNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <AlertContainer />
    </Fragment>
  );
};

export default AppNavigator;
