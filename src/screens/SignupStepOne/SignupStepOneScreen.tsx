import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepOneScreen.styles';
import { checkEmail } from '../../redux/actions/auth';
import { RootState } from '../../redux/reducers';
import { ErrorMessage } from '../../interfaces/errorMessage';
import { clearErrorMessages } from '../../redux/actions/validation';

const SignupStepOneScreen = () => {
  const navigation = useNavigation();
  const errorMessages: ErrorMessage[] = useSelector(
    (store: RootState) => store.validation.errorMessages,
  );
  const isEmailValid: boolean = useSelector(
    (store: RootState) => store.validation.isEmailValid,
  );
  const isEmailInputLoading: boolean = useSelector(
    (store: RootState) => store.validation.isEmailInputLoading,
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  useEffect(() => {
    return (): void => {
      dispatch(clearErrorMessages());
    };
  }, [dispatch]);

  const handleFullNameChange = (text: string) => {
    setFormData({ ...formData, fullName: text });
  };

  const handleEmailChange = async (text: string) => {
    setFormData({ ...formData, email: text });
    dispatch(checkEmail(formData.email));
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
