import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepTwoScreen.styles';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { ErrorMessage } from '../../interfaces/errorMessage';
import { RootState } from '../../redux/reducers';
import { checkUsername, signup } from '../../redux/actions/auth';

interface Props {
  route: RouteProp<AuthStackParamList, 'SignupStepTwo'>;
}

const SignupStepTwoScreen = ({ route }: Props) => {
  const errorMessages: ErrorMessage[] = useSelector(
    (store: RootState) => store.errorMessage.errorMessages,
  );
  const isUsernameInputLoading: boolean = useSelector(
    (store: RootState) => store.errorMessage.isUsernameInputLoading,
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password1: '',
    password2: '',
  });

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, username: text });
    dispatch(checkUsername(formData.username));
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
      signup({
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
