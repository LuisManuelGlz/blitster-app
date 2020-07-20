import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, Button, Text } from '../../components';
import styles from './Login.styles';
import { ErrorMessage } from '../../interfaces/errorMessage';
import { useTypedSelector } from '../../redux/reducers';
import { login } from '../../redux/actions/auth';
import { clearErrorMessages } from '../../redux/actions/validation';

const LogInScreen = () => {
  const errorMessages = useTypedSelector(
    (store) => store.validation.errorMessages,
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, username: text });
  };

  const handlePasswordChange = (text: string) => {
    setFormData({ ...formData, password: text });
  };

  const handleLoginPress = () => {
    dispatch(login(formData));
  };

  useEffect(() => {
    return (): void => {
      dispatch(clearErrorMessages());
    };
  }, [dispatch]);

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
        iconRight={
          <TouchableOpacity
            onPress={() => setIsPasswordHidden((value) => !value)}>
            <Ionicons
              name={isPasswordHidden ? 'eye' : 'eye-off'}
              size={24}
              color={'gray'}
            />
          </TouchableOpacity>
        }
        errorMessages={errorMessages.filter(
          (err: ErrorMessage) => err.param === 'password',
        )}
        secureTextEntry={isPasswordHidden}
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
