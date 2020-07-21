import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CustomDrawerContent.styles';
import { logout } from '../../redux/actions/auth';
import { RootState } from '../../redux/reducers';

const CustomDrawerContent = (props: any) => {
  const refreshToken = useSelector(
    (store: RootState) => store.auth.refreshToken,
  );
  const dispatch = useDispatch();

  const handleLogoutPress = async () => {
    dispatch(logout(refreshToken));
  };

  return (
    <View style={styles.conainer}>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <DrawerItem
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
