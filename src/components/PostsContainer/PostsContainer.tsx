import React from 'react';
import { ScrollView } from 'react-native';
import styles from './PostsContainer.styles';
import Post from '../Post';
import { Post as IPost } from '../../interfaces/post';
import Text from '../Text';

interface Props {
  posts: IPost[];
}

const PostsContainer = ({ posts }: Props) => {
  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <Post.Item style={styles.post} key={post.postId} post={post} />
      ))}
      <Text.H2 style={styles.endScroll}>🦆</Text.H2>
    </ScrollView>
  );
};

export default PostsContainer;
