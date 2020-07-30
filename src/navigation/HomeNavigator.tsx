import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AddPostScreen from '../screens/AddPost';
import PostDetailScreen from '../screens/PostDetail';

const HomeStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
      },
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{ title: 'Add post' }}
    />
    <HomeStack.Screen
      name="PostDetail"
      component={PostDetailScreen}
      options={{ title: 'Post detail xd' }}
    />
  </HomeStack.Navigator>
);

export default HomeNavigator;
