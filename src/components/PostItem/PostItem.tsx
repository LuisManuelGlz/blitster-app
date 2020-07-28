import React from 'react';
import { View } from 'react-native';
import Moment from 'react-moment';
import moment from 'moment';
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
      <Text.H3>{user.userId}</Text.H3>
      <Text.H3>{user.avatar}</Text.H3>
      <Text.H3>{user.fullName}</Text.H3>
      <Text.H3>{user.username}</Text.H3>
      <Text.H3>{content}</Text.H3>
      <Text.H3>Likes: {likes}</Text.H3>
      <Text.H3>Comments: {comments}</Text.H3>
      <Moment element={Text.H3} fromNow>
        {moment.utc(createdAt)}
      </Moment>
    </View>
  );
};

export default PostItem;
