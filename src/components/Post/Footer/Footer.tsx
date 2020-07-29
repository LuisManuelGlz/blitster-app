import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Text from '../../Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Footer.styles';
import { Post } from '../../../interfaces/post';

interface Props {
  style?: StyleProp<ViewStyle>;
  post: Post;
}

const Footer = ({ style, post: { likes, comments } }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text.H3>
        <AntDesign name="like1" size={24} color={'purple'} /> {likes}
      </Text.H3>
      <Text.H3>
        <Ionicons name="chatbox-outline" size={24} color={'purple'} />{' '}
        {comments}
      </Text.H3>
    </View>
  );
};

export default Footer;
