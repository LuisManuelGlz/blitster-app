import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomDrawerContent } from '../components';
import TabsNavigator from './TabsNavigator';
import ProfileScreen from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="Home"
      component={TabsNavigator}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'person' : 'person-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
