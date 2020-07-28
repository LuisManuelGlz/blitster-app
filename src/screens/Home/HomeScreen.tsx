import React from 'react';
import { View } from 'react-native';
import PostContainer from '../../components/PostContainer';
import { Post } from '../../interfaces/post';

const HomeScreen = () => {
  const posts: Post[] = [
    {
      postId: '1230',
      user: 'Luis',
      content: 'hola',
      likes: 3,
      comments: 1,
      createdAt: new Date(),
    },
    {
      postId: '1231',
      user: 'Pepe',
      content: 'adios',
      likes: 4,
      comments: 2,
      createdAt: new Date(),
    },
    {
      postId: '1233',
      user: 'Juan',
      content: ':)',
      likes: 5,
      comments: 3,
      createdAt: new Date(),
    },
  ];

  return (
    <View>
      <PostContainer posts={posts} />
    </View>
  );
};

export default HomeScreen;
