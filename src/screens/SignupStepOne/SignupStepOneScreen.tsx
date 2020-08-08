import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Input, Button, Form, Text } from '../../components';
import styles from './SignupStepOneScreen.styles';
import { auth, validation } from '../../redux/ducks';
import { useTypedSelector } from '../../redux';
import { signupStepOneValidation } from './validations';

type FormData = {
  fullName: string;
  email: string;
};

const SignupStepOneScreen = () => {
  const navigation = useNavigation();
  const errorMessages = useTypedSelector(
    (store) => store.validation.errorMessages,
  );
  const isEmailInputLoading = useTypedSelector(
    (store) => store.validation.isEmailInputLoading,
  );
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue, errors } = useForm<FormData>();

  useEffect(() => {
    return () => {
      dispatch(validation.actions.clearErrorMessages());
    };
  }, []);

  const handleEmailChange = () => {
    errorMessages?.map(
      (errorMessage) =>
        errorMessage.param === 'email' &&
        dispatch(validation.actions.removeErrorMessages('email')),
    );
  };

  const onSubmit = (data: { fullName: string; email: string }) => {
    auth.operations.checkEmail(dispatch, data, navigation);
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Create your account</Text.H1>

      <Form
        {...{ control, setValue, errors, validation: signupStepOneValidation }}>
        <Input style={styles.input} name="fullName" placeholder="Full name" />
        <Input
          style={styles.input}
          name="email"
          placeholder="Email"
          onChangeText={handleEmailChange}
          iconRight={
            isEmailInputLoading ? <ActivityIndicator color={'purple'} /> : null
          }
        />
        {!isEmailInputLoading ? (
          <Button.Simple
            style={styles.button}
            title="Next"
            onPress={handleSubmit(onSubmit)}
          />
        ) : (
          <></>
        )}
      </Form>
    </View>
  );
};

export default SignupStepOneScreen;
