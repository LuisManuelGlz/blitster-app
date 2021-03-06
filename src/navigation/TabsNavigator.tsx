import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigation';
import { Colors } from '../styles';

const Tab = createBottomTabNavigator();

const TabsNavigatior = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName!: string;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.grayLighten,
        tabStyle: {
          backgroundColor: Colors.backgroundColor,
        },
      }}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Search" component={SearchNavigator} />
    </Tab.Navigator>
  );
};

export default TabsNavigatior;
