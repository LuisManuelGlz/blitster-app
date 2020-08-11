import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomDrawerContent } from '../components';
import TabsNavigator from './TabsNavigator';
import { Colors } from '../styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props: any) => <CustomDrawerContent {...props} />}
    drawerStyle={{ backgroundColor: Colors.backgroundColor }}
    drawerContentOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.grayLighten,
      labelStyle: { color: Colors.grayLighten },
    }}>
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
    {/* TODO SettingsScreen */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
