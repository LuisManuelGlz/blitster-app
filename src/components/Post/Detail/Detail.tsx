import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Moment from 'react-moment';
import moment from 'moment';
import Text from '../../Text';
import UserInfo from '../../UserInfo';
import Footer from '../Footer';
import { Post } from '../../../interfaces/post';
import styles from './Detail.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  post: Post;
}

const Detail = ({ style, post }: Props) => {
  const { user, content, images, createdAt } = post;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.postHeader}>
        <UserInfo user={user} />
        <Moment style={styles.creationDate} element={Text.H3} fromNow>
          {moment.utc(createdAt)}
        </Moment>
      </View>

      <View style={styles.body}>
        <Text.H3 style={styles.content}>{content}</Text.H3>
      </View>

      <Footer post={post} />
    </View>
  );
};

export default Detail;
