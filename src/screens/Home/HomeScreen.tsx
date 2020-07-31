import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, PostContainer } from '../../components';
import styles from './HomeScreen.styles';
import { useTypedSelector } from '../../redux';
import { post } from '../../redux/ducks';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFetchingPosts = useTypedSelector(
    (state) => state.post.isFetchingPosts,
  );
  const posts = useTypedSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(post.operations.fetchPosts());
  }, []);

  if (isFetchingPosts) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator color={'purple'} size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PostContainer posts={posts} />
      <Button.Primary
        style={styles.button}
        icon={<Ionicons name="add" size={24} color={'white'} />}
        onPress={() => navigation.navigate('AddPost')}
      />
    </View>
  );
};

export default HomeScreen;
