import React, { useEffect } from 'react';
import { View, ActivityIndicator, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { PostContainer } from '../../components';
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
    <View>
      <PostContainer posts={posts} />
      <Button title="Add Post" onPress={() => navigation.navigate('AddPost')} />
    </View>
  );
};

export default HomeScreen;
