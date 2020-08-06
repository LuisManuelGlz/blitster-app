import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from '../Text';
import styles from './UserInfo.styles';
import { User } from '../../interfaces/user';

interface Props {
  style?: StyleProp<ViewStyle>;
  user: User;
}

const UserInfo = ({ style, user }: Props) => {
  const navigation = useNavigation();

  const handleUserInfoPress = () =>
    navigation.navigate('Profile', { profile: user });

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => handleUserInfoPress()}>
      <Image style={styles.avatar} source={{ uri: user.avatar }} />
      <View style={styles.userInfo}>
        <Text.H3 style={styles.fullName}>{user.fullName}</Text.H3>
        <Text.H3>{user.username}</Text.H3>
      </View>
    </TouchableOpacity>
  );
};

export default UserInfo;
