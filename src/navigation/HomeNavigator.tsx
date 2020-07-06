import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import PostDetailScreen from '../screens/PostDetail';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="PostDetail"
      component={PostDetailScreen}
      options={{ title: 'Post detail xd' }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;