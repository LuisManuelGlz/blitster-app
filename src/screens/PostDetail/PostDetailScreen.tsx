import React from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Post } from '../../components';
import { HomeStackParamList } from '../../navigation/HomeNavigator';
import styles from './PostDetailScreen.styles';

interface Props {
  route: RouteProp<HomeStackParamList, 'PostDetail'>;
}

const PostDetailScreen = ({ route }: Props) => {
  return (
    <View style={styles.container}>
      <Post.Detail post={route.params.post} />
    </View>
  );
};

export default PostDetailScreen;
