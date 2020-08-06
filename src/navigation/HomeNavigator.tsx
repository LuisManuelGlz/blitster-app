import React from 'react';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AddPostScreen from '../screens/AddPost';
import PostDetailScreen from '../screens/PostDetail';
import { Post } from '../interfaces/post';
import ProfileScreen from '../screens/Profile';
import { User } from '../interfaces/user';
import { Colors } from '../styles';

export type HomeStackParamList = {
  Home: undefined;
  Profile: { profile: User };
  AddPost: undefined;
  PostDetail: { post: Post };
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  const navigation = useNavigation();
  const routes = useNavigationState((state) => state.routes);
  const index = useNavigationState((state) => state.index);

  navigation.setOptions({
    tabBarVisible: routes[index].state?.index ? false : true,
  });

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.transparent,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params?.profile.fullName })}
      />
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
};

export default HomeNavigator;
