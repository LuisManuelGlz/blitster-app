import React from 'react';
import { View } from 'react-native';
import styles from './PostContainer.styles';
import PostItem from '../PostItem';
import { Post } from '../../interfaces/post';

interface Props {
  posts: Post[];
}

const PostContainer = ({ posts }: Props) => {
  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <PostItem key={post.postId} post={post} />
      ))}
    </View>
  );
};

export default PostContainer;
