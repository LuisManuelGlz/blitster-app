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
import authClient from '../../api/authClient';
import { LOGOUT } from '../../redux/actions/actionTypes';
import { setAlert } from '../../redux/actions/alert';
import { RootState } from '../../redux/reducers';
import { BadRequestError } from '../../interfaces/axios';

const CustomDrawerContent = (props: any) => {
  const refreshToken = useSelector(
    (store: RootState) => store.auth.refreshToken,
  );
  const dispatch = useDispatch();

  const handleLogoutPress = async () => {
    try {
      await authClient.post('revoke', { refreshToken });
      dispatch({ type: LOGOUT });
    } catch (error) {
      const { status, data } = error.response;

      if (status === 401) {
        dispatch(setAlert(data.message, 'error'));
      } else {
        data.errors?.map((err: BadRequestError) => {
          dispatch(setAlert(err.msg, 'error'));
        });
      }
    }
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
