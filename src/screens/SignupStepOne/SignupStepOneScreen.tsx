import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepOneScreen.styles';
import { auth, validation } from '../../redux/ducks';
import { useTypedSelector } from '../../redux';
import { ErrorMessage } from '../../interfaces/errorMessage';

const SignupStepOneScreen = () => {
  const navigation = useNavigation();
  const errorMessages = useTypedSelector(
    (store) => store.validation.errorMessages,
  );
  const isEmailValid = useTypedSelector(
    (store) => store.validation.isEmailValid,
  );
  const isEmailInputLoading = useTypedSelector(
    (store) => store.validation.isEmailInputLoading,
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  useEffect(() => {
    return (): void => {
      dispatch(validation.actions.clearErrorMessages());
    };
  }, [dispatch]);

  const handleFullNameChange = (text: string) => {
    setFormData({ ...formData, fullName: text });
  };

  const handleEmailChange = async (text: string) => {
    setFormData({ ...formData, email: text });
    dispatch(auth.operations.checkEmail(formData.email));
  };

  const handleNextPress = () => {
    navigation.navigate('SignupStepTwo', { userDetails: formData });
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Create your account</Text.H1>

      <Input
        style={styles.input}
        placeholder="Full name"
        onChangeText={(text) => handleFullNameChange(text)}
        value={formData.fullName}
      />
      <Input
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleEmailChange(text)}
        value={formData.email}
        iconRight={
          isEmailInputLoading ? <ActivityIndicator color={'purple'} /> : null
        }
        errorMessages={errorMessages.filter(
          (err: ErrorMessage) => err.param === 'email',
        )}
      />

      {isEmailValid && formData.fullName !== '' && formData.email !== '' && (
        <Button.Simple
          style={styles.button}
          title="Next"
          onPress={() => handleNextPress()}
        />
      )}
    </View>
  );
};

export default SignupStepOneScreen;
