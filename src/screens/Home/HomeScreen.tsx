import React, { useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, PostContainer } from '../../components';
import styles from './HomeScreen.styles';
import { useTypedSelector } from '../../redux';
import { post, user } from '../../redux/ducks';
import { Colors } from '../../styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFetchingPosts = useTypedSelector(
    (state) => state.post.isFetchingPosts,
  );
  const posts = useTypedSelector((state) => state.post.posts);

  useEffect(() => {
    (async () => {
      await post.operations.fetchPosts(dispatch);
      dispatch(user.operations.fetchProfile());
    })();
  }, []);

  if (isFetchingPosts) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator color={Colors.purple} size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.postsContainer}>
        <PostContainer posts={posts} />
      </ScrollView>
      <Button.Primary
        style={styles.button}
        icon={<Ionicons name="add" size={24} color={Colors.white} />}
        onPress={() => navigation.navigate('AddPost')}
      />
    </View>
  );
};

export default HomeScreen;
