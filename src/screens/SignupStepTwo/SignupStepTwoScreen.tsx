import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Input, Button, Text, Form } from '../../components';
import styles from './SignupStepTwoScreen.styles';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { useTypedSelector } from '../../redux';
import { validation, auth } from '../../redux/ducks';
import { signupStepTwoValidation } from './validations';
import { Colors } from '../../styles';

type FormData = {
  username: string;
  password1: string;
  password2: string;
};

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
  const { control, handleSubmit, setValue, errors } = useForm<FormData>();

  useEffect(() => {
    return () => {
      dispatch(validation.actions.clearErrorMessages());
    };
  }, []);

  const handleUsernameChange = () => {
    errorMessages?.map(
      (errorMessage) =>
        errorMessage.param === 'username' &&
        dispatch(validation.actions.removeErrorMessages('username')),
    );
  };

  const handlePasswordsChange = () => {
    errorMessages?.map(
      (errorMessage) =>
        errorMessage.param === 'password2' &&
        dispatch(validation.actions.removeErrorMessages('password2')),
    );
  };

  const onSubmit = (data: {
    username: string;
    password1: string;
    password2: string;
  }) => {
    const { userDetails } = route.params;

    dispatch(auth.operations.checkUsername(data.username));

    dispatch(
      auth.operations.signup({
        ...data,
        ...userDetails,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Create your account</Text.H1>

      <Form
        {...{ control, setValue, errors, validation: signupStepTwoValidation }}>
        <Input
          style={styles.input}
          name="username"
          placeholder="Username"
          onChangeText={handleUsernameChange}
          iconRight={
            isUsernameInputLoading ? (
              <ActivityIndicator color={Colors.purple} />
            ) : null
          }
        />
        <Input
          style={styles.input}
          name="password1"
          placeholder="Password"
          onChangeText={handlePasswordsChange}
          secureTextEntry={true}
        />
        <Input
          style={styles.input}
          name="password2"
          placeholder="Confirm password"
          onChangeText={handlePasswordsChange}
          secureTextEntry={true}
        />

        {isSigningUp ? (
          <ActivityIndicator color={Colors.purple} size={'large'} />
        ) : (
          <Button.Primary
            style={styles.button}
            block
            title="Sign up"
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </Form>
    </View>
  );
};

export default SignupStepTwoScreen;
