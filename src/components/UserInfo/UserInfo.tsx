import React from 'react';
import { View, Image, StyleProp, ViewStyle } from 'react-native';
import Text from '../Text';
import styles from './UserInfo.styles';
import { User } from '../../interfaces/post';

interface Props {
  style?: StyleProp<ViewStyle>;
  user: User;
}

const UserInfo = ({ style, user }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.avatar} source={{ uri: user.avatar }} />
      <View style={styles.userInfo}>
        <Text.H3 style={styles.fullName}>{user.fullName}</Text.H3>
        <Text.H3>{user.username}</Text.H3>
      </View>
    </View>
  );
};

export default UserInfo;
