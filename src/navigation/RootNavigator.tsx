import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';

const RootStack = createStackNavigator();

interface Props {
  isAuthenticated: string;
}

const RootNavigator = ({ isAuthenticated }: Props) => {
  return isAuthenticated ? (
    <RootStack.Navigator>
      <RootStack.Screen
        name="App"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  ) : (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(RootNavigator);
