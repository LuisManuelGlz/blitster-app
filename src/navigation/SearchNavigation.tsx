import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/Search';
import { Colors } from '../styles';

const SearchStack = createStackNavigator();

const SearchNavigator = () => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.backgroundColor,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: Colors.textLight,
    }}>
    <SearchStack.Screen name="Search" component={SearchScreen} />
  </SearchStack.Navigator>
);

export default SearchNavigator;
