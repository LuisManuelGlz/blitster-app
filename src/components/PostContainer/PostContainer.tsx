import React from 'react';
import { ScrollView } from 'react-native';
import styles from './PostContainer.styles';
import PostItem from '../PostItem';
import { Post } from '../../interfaces/post';
import Text from '../Text';

interface Props {
  posts: Post[];
}

const PostContainer = ({ posts }: Props) => {
  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <PostItem key={post.postId} post={post} />
      ))}
      <Text.H1 style={styles.endScroll}>🦆</Text.H1>
    </ScrollView>
  );
};

export default PostContainer;
