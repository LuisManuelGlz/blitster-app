import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import authClient from '../../api/authClient';
import { SIGNUP_SUCCESS } from '../../redux/actions/actionTypes';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepTwoScreen.styles';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { BadRequestError } from '../../interfaces/axios';

interface Props {
  route: RouteProp<AuthStackParamList, 'SignupStepTwo'>;
}

const SignupStepTwoScreen = ({ route }: Props) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password1: '',
    password2: '',
  });

  const [isUsernameInputLoading, setIsUsernameInputLoading] = useState(false);
  const [usernameErrorMessages, setUsernameErrorMessages] = useState<
    BadRequestError[]
  >([]);
  const [password1ErrorMessages, setPassword1ErrorMessages] = useState<
    BadRequestError[]
  >([]);
  const [password2ErrorMessages, setPassword2ErrorMessages] = useState<
    BadRequestError[]
  >([]);

  const handleUsernameChange = async (text: string) => {
    setFormData({ ...formData, username: text });
    setIsUsernameInputLoading(true);

    const { username } = formData;

    try {
      await authClient.post('check-username', { username });

      setUsernameErrorMessages([]);
    } catch (error) {
      setUsernameErrorMessages(error.response.data.errors);
    } finally {
      setIsUsernameInputLoading(false);
    }
  };

  const handlePassword1Change = (text: string) => {
    setFormData({ ...formData, password1: text });
  };

  const handlePassword2Change = (text: string) => {
    setFormData({ ...formData, password2: text });
  };

  const handleSignupPress = async () => {
    const { userDetails } = route.params;

    setUsernameErrorMessages([]);
    setPassword1ErrorMessages([]);
    setPassword2ErrorMessages([]);

    try {
      const res = await authClient.post('signup', {
        ...formData,
        ...userDetails,
      });

      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    } catch (error) {
      const { data } = error.response;

      data.errors?.map((err: BadRequestError) => {
        if (err.param === 'username') {
          setUsernameErrorMessages((oldErrorMessages) => [
            ...oldErrorMessages,
            err,
          ]);
        } else if (err.param === 'password1') {
          setPassword1ErrorMessages((oldErrorMessages) => [
            ...oldErrorMessages,
            err,
          ]);
        } else if (err.param === 'password2') {
          setPassword2ErrorMessages((oldErrorMessages) => [
            ...oldErrorMessages,
            err,
          ]);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Create your account</Text.H1>

      <Input
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => handleUsernameChange(text)}
        value={formData.username}
        iconRight={
          isUsernameInputLoading ? <ActivityIndicator color={'purple'} /> : null
        }
        errorMessages={usernameErrorMessages}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handlePassword1Change(text)}
        value={formData.password1}
        errorMessages={password1ErrorMessages}
        secureTextEntry={true}
      />
      <Input
        style={styles.input}
        placeholder="Confirm password"
        onChangeText={(text) => handlePassword2Change(text)}
        value={formData.password2}
        errorMessages={password2ErrorMessages}
        secureTextEntry={true}
      />

      <Button.Primary
        style={styles.button}
        block
        title="Sign up"
        onPress={() => handleSignupPress()}
      />
    </View>
  );
};

export default SignupStepTwoScreen;
