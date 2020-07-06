import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

interface Props {
  isAuthenticated: string;
}

const RootNavigator = ({ isAuthenticated }: Props) => {
  return !isAuthenticated ? (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(RootNavigator);
