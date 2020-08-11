import React, { useState } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, Button, Form, Text } from '../../components';
import styles from './LoginScreen.styles';
import { useTypedSelector } from '../../redux';
import { auth } from '../../redux/ducks';
import { UserForLogin } from '../../interfaces/user';
import { loginValidation } from './validations';
import { Colors } from '../../styles';

type FormData = {
  username: string;
  password: string;
};

const LogInScreen = () => {
  const isLoggingIn = useTypedSelector((store) => store.validation.isLoggingIn);
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue, errors } = useForm<FormData>();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onSubmit = (data: UserForLogin) => {
    dispatch(auth.operations.login(data));
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Welcome Back!</Text.H1>

      <Form {...{ control, setValue, errors, validation: loginValidation }}>
        <Input
          style={styles.input}
          name="username"
          placeholder="Username"
          iconLeft={
            <Ionicons name="person" size={24} color={Colors.grayDarken} />
          }
        />
        <Input
          style={styles.input}
          name="password"
          placeholder="Password"
          iconLeft={
            <Ionicons name="lock-closed" size={24} color={Colors.grayDarken} />
          }
          iconRight={
            <TouchableOpacity
              onPress={() => setIsPasswordHidden((value) => !value)}>
              <Ionicons
                name={isPasswordHidden ? 'eye' : 'eye-off'}
                size={24}
                color={Colors.grayDarken}
              />
            </TouchableOpacity>
          }
          secureTextEntry={isPasswordHidden}
        />

        {isLoggingIn ? (
          <ActivityIndicator color={Colors.primary} size={'large'} />
        ) : (
          <Button.Primary
            style={styles.button}
            block
            title="Log in"
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </Form>
    </View>
  );
};

export default LogInScreen;
