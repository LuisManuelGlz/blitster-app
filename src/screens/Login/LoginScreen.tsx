import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, Button, Text } from '../../components';
import styles from './Login.styles';
import { ErrorMessage } from '../../interfaces/errorMessage';
import { RootState } from '../../redux/reducers';
import { login } from '../../redux/actions/auth';

const LogInScreen = () => {
  const errorMessages: ErrorMessage[] = useSelector(
    (store: RootState) => store.errorMessage.errorMessages,
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, username: text });
  };

  const handlePasswordChange = (text: string) => {
    setFormData({ ...formData, password: text });
  };

  const handleLoginPress = () => {
    dispatch(login(formData));
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
        errorMessages={errorMessages.filter(
          (err: ErrorMessage) => err.param === 'username',
        )}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => handlePasswordChange(text)}
        iconLeft={<Ionicons name="lock-closed" size={24} color={'gray'} />}
        errorMessages={errorMessages.filter(
          (err: ErrorMessage) => err.param === 'password',
        )}
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
