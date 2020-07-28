import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import { Post } from '../../interfaces/post';
import styles from './PostItem.styles';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  const { postId, user, content, images, likes, comments, createdAt } = post;

  return (
    <View style={styles.container}>
      <Text.H3>{postId}</Text.H3>
      <Text.H3>{user}</Text.H3>
      <Text.H3>{content}</Text.H3>
      <Text.H3>Likes: {likes}</Text.H3>
      <Text.H3>Comments: {comments}</Text.H3>
      {/* <Text.H3>{createdAt}</Text.H3> */}
    </View>
  );
};

export default PostItem;
