import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import authClient from '../../api/authClient';
import { setAlert } from '../../redux/actions/alert';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../redux/actions/actionTypes';
import { Input, Button, Text } from '../../components';
import styles from './Login.styles';
import { BadRequestError } from '../../interfaces/axios';

const LogInScreen = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [usernameErrorMessages, setUsernameErrorMessages] = useState<
    BadRequestError[]
  >([]);
  const [passwordErrorMessages, setPasswordErrorMessages] = useState<
    BadRequestError[]
  >([]);

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, username: text });
  };

  const handlePasswordChange = (text: string) => {
    setFormData({ ...formData, password: text });
  };

  const handleLoginPress = async () => {
    setUsernameErrorMessages([]);
    setPasswordErrorMessages([]);

    try {
      const res = await authClient.post('login', formData);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
      const { status, data } = error.response;

      if (status === 404) {
        dispatch(setAlert(data.message, 'Error'));
      } else {
        data.errors?.map((err: BadRequestError) => {
          if (err.param === 'username') {
            setUsernameErrorMessages((oldErrorMessages) => [
              ...oldErrorMessages,
              err,
            ]);
          } else if (err.param === 'password') {
            setPasswordErrorMessages((oldErrorMessages) => [
              ...oldErrorMessages,
              err,
            ]);
          }
        });
        dispatch({ type: LOGIN_FAIL });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Welcome Back!</Text.H1>

      <Input
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={(text) => handleUsernameChange(text)}
        iconLeft={<Ionicons name="person" size={24} color={'gray'} />}
        errorMessages={usernameErrorMessages}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => handlePasswordChange(text)}
        iconLeft={<Ionicons name="lock-closed" size={24} color={'gray'} />}
        errorMessages={passwordErrorMessages}
        secureTextEntry={true}
      />

      <Button.Primary
        style={styles.button}
        block
        title="Log in"
        onPress={() => handleLoginPress()}
      />
    </View>
  );
};

export default LogInScreen;
