import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepTwoScreen.styles';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { ErrorMessage } from '../../interfaces/errorMessage';
import { useTypedSelector } from '../../redux';
import { validation, auth } from '../../redux/ducks';

interface Props {
  route: RouteProp<AuthStackParamList, 'SignupStepTwo'>;
}

const SignupStepTwoScreen = ({ route }: Props) => {
  const errorMessages = useTypedSelector(
    (store) => store.validation.errorMessages,
  );
  const isUsernameInputLoading = useTypedSelector(
    (store) => store.validation.isUsernameInputLoading,
  );
  const isSigningUp = useTypedSelector((store) => store.validation.isSigningUp);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password1: '',
    password2: '',
  });

  useEffect(() => {
    return (): void => {
      dispatch(validation.actions.clearErrorMessages());
    };
  }, [dispatch]);

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, username: text });
    dispatch(auth.operations.checkUsername(formData.username));
  };

  const handlePassword1Change = (text: string) => {
    setFormData({ ...formData, password1: text });
  };

  const handlePassword2Change = (text: string) => {
    setFormData({ ...formData, password2: text });
  };

  const handleSignupPress = () => {
    const { userDetails } = route.params;

    dispatch(
      auth.operations.signup({
        ...formData,
        ...userDetails,
      }),
    );
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
        errorMessages={errorMessages.filter(
          (err: ErrorMessage) => err.param === 'username',
        )}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handlePassword1Change(text)}
        value={formData.password1}
        errorMessages={errorMessages.filter(
          (err: ErrorMessage) => err.param === 'password1',
        )}
        secureTextEntry={true}
      />
      <Input
        style={styles.input}
        placeholder="Confirm password"
        onChangeText={(text) => handlePassword2Change(text)}
        value={formData.password2}
        errorMessages={errorMessages.filter(
          (err: ErrorMessage) => err.param === 'password2',
        )}
        secureTextEntry={true}
      />

      {isSigningUp ? (
        <ActivityIndicator color={'purple'} size={'large'} />
      ) : (
        <Button.Primary
          style={styles.button}
          block
          title="Sign up"
          onPress={() => handleSignupPress()}
        />
      )}
    </View>
  );
};

export default SignupStepTwoScreen;
