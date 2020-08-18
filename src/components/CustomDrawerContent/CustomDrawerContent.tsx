import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CustomDrawerContent.styles';
import { auth } from '../../redux/ducks';
import { useTypedSelector } from '../../redux';
import UserInfo from '../UserInfo';
import { Colors } from '../../styles';

const CustomDrawerContent = (props: any) => {
  const refreshToken = useTypedSelector((store) => store.auth.refreshToken);
  const profile = useTypedSelector((store) => store.user.profile);
  const dispatch = useDispatch();

  const handleLogoutPress = () => {
    dispatch(auth.operations.logout(refreshToken));
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.userInfo}>
          {profile && <UserInfo user={profile.user} />}
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          labelStyle={{ color: Colors.grayLighten }}
          inactiveTintColor={Colors.grayLighten}
          label="Logout"
          icon={({ color, size }) => (
            <Ionicons name="exit" size={size} color={color} />
          )}
          onPress={() => handleLogoutPress()}
        />
      </View>
    </View>
  );
};

export default CustomDrawerContent;
