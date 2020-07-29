import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { PostContainer } from '../../components';
import { Post } from '../../interfaces/post';
import styles from './Home.styles';
import { useTypedSelector } from '../../redux';

const HomeScreen = () => {
  const isFetchingPosts = useTypedSelector(
    (state) => state.post.isFetchingPosts,
  );

  const posts: Post[] = [
    {
      postId: '1230',
      user: {
        userId: 'abc',
        username: 'luis',
        fullName: 'Luis',
        avatar:
          'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
      },
      content: 'hola',
      likes: 3,
      comments: 1,
      createdAt: new Date(),
    },
    {
      postId: '1231',
      user: {
        userId: 'def',
        username: 'pepe',
        fullName: 'Pepe',
        avatar:
          'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
      },
      content: 'adios',
      likes: 4,
      comments: 2,
      createdAt: new Date(),
    },
    {
      postId: '1233',
      user: {
        userId: 'ghi',
        username: 'juan',
        fullName: 'Juan',
        avatar:
          'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
      },
      content: ':)',
      likes: 5,
      comments: 3,
      createdAt: new Date(),
    },
    {
      postId: '1234',
      user: {
        userId: 'jkl',
        username: 'root',
        fullName: 'Root',
        avatar:
          'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
      },
      content: ':D',
      likes: 50,
      comments: 30,
      createdAt: new Date(),
    },
  ];

  if (isFetchingPosts) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator color={'purple'} size={'large'} />
      </View>
    );
  }

  return (
    <View>
      <PostContainer posts={posts} />
    </View>
  );
};

export default HomeScreen;
