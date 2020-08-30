import React, { useEffect } from 'react';
import { ScrollView, View, Image, ActivityIndicator } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Text, PostContainer } from '../../components';
import { HomeStackParamList } from '../../navigation/HomeNavigator';
import styles from './ProfileScreen.styles';
import { useTypedSelector } from '../../redux';
import { post } from '../../redux/ducks';
import { Colors } from '../../styles';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const isFetchingPosts = useTypedSelector(
    (state) => state.post.isFetchingPosts,
  );
  const currentUserPosts = useTypedSelector(
    (state) => state.post.currentUserPosts,
  );
  const { params } = useRoute<RouteProp<HomeStackParamList, 'Profile'>>();

  useEffect(() => {
    post.operations.fetchCurrentUserPosts(dispatch, params.user._id);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.profileContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: params.user.avatar }} />
          </View>
          <View style={styles.userInfo}>
            <Text.H2 style={styles.fullName}>{params.user.fullName}</Text.H2>
            <Text.H3 style={styles.username}>{params.user.username}</Text.H3>
            <Text.H3 style={styles.about}>Hi there</Text.H3>
          </View>
        </View>
        {isFetchingPosts ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator color={Colors.primary} size={'large'} />
          </View>
        ) : (
          <PostContainer posts={currentUserPosts} />
        )}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
