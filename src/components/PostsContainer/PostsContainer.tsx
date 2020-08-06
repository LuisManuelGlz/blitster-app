import React from 'react';
import { View } from 'react-native';
import styles from './PostsContainer.styles';
import Post from '../Post';
import { Post as IPost } from '../../interfaces/post';
import Text from '../Text';

interface Props {
  posts: IPost[] | null;
}

const PostsContainer = (props: Props) => {
  const posts =
    props.posts && props.posts.length > 0 ? (
      props.posts.map((post) => (
        <Post.Item style={styles.post} key={post._id} post={post} />
      ))
    ) : (
      <Text.H2 style={styles.noPostsMessage}>No posts yet.</Text.H2>
    );

  return (
    <View>
      {posts}
      <Text.H2 style={styles.endScroll}>🦆</Text.H2>
    </View>
  );
};

export default PostsContainer;
