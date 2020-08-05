import React from 'react';
import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Moment from 'react-moment';
import moment from 'moment';
import Text from '../../Text';
import UserInfo from '../../UserInfo';
import Footer from '../Footer';
import { Post } from '../../../interfaces/post';
import styles from './Item.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  post: Post;
}

const Item = ({ style, post }: Props) => {
  const navigation = useNavigation();
  const { user, content, /*images,*/ createdAt } = post;

  const handlePostItemPress = () => navigation.navigate('PostDetail', { post });

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => handlePostItemPress()}>
      <View style={styles.postHeader}>
        <UserInfo user={user} />
        <Moment style={styles.creationDate} element={Text.H3} fromNow>
          {moment.utc(createdAt)}
        </Moment>
      </View>

      <View style={styles.body}>
        <Text.H3>{content}</Text.H3>
      </View>

      <Footer post={post} />
    </TouchableOpacity>
  );
};

export default Item;
