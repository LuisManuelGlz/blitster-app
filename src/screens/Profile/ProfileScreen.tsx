import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Text } from '../../components';
import { HomeStackParamList } from '../../navigation/HomeNavigator';
import styles from './ProfileScreen.styles';

const ProfileScreen = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList, 'Profile'>>();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.profileContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{ uri: params.profile.avatar }}
            />
          </View>
          <View style={styles.userInfo}>
            <Text.H2 style={styles.fullName}>{params.profile.fullName}</Text.H2>
            <Text.H3>{params.profile.username}</Text.H3>
            <Text.H3 style={styles.about}>Hi there</Text.H3>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
