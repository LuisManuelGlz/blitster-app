import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AddPostScreen from '../screens/AddPost';
import PostDetailScreen from '../screens/PostDetail';
import { Post } from '../interfaces/post';

export type HomeStackParamList = {
  Home: undefined;
  AddPost: undefined;
  PostDetail: { post: Post };
};

const HomeStack = createStackNavigator<HomeStackParamList>();

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
      options={{ title: 'Post' }}
    />
  </HomeStack.Navigator>
);

export default HomeNavigator;
