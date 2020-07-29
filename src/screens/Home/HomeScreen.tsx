import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { PostContainer } from '../../components';
import styles from './Home.styles';
import { useTypedSelector } from '../../redux';
import { post } from '../../redux/ducks';

const HomeScreen = () => {
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
    </View>
  );
};

export default HomeScreen;
