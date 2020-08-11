import React from 'react';
import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from '../../Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Footer.styles';
import { Post } from '../../../interfaces/post';
import { post } from '../../../redux/ducks';
import { Colors } from '../../../styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  post: Post;
  onPressLike?: () => void;
  onPressComment?: () => void;
}

const Footer = ({
  style,
  post: { _id, likes, comments, liked },
  onPressComment,
}: Props) => {
  const dispatch = useDispatch();

  const likePost = () => {
    dispatch(post.operations.likePost(_id));
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => likePost()}>
        <Text.H3 style={styles.likes}>
          <AntDesign
            name={liked ? 'like1' : 'like2'}
            size={24}
            color={Colors.primary}
          />{' '}
          {likes > 0 && likes}
        </Text.H3>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressComment}>
        <Text.H3 style={styles.comments}>
          <Ionicons name="chatbox-outline" size={24} color={Colors.primary} />{' '}
          {comments > 0 && comments}
        </Text.H3>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
