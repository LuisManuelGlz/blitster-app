import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepOneScreen.styles';
import { checkEmail } from '../../redux/actions/auth';
import { RootState } from '../../redux/reducers';
import { ErrorMessage } from '../../interfaces/errorMessage';

const SignupStepOneScreen = () => {
  const navigation = useNavigation();
  const errorMessages: ErrorMessage[] = useSelector(
    (store: RootState) => store.errorMessage,
  );
  const dispatch = useDispatch();

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailInputLoading, setIsEmailInputLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const handleFullNameChange = (text: string) => {
    setFormData({ ...formData, fullName: text });
  };

  const handleEmailChange = async (text: string) => {
    setFormData({ ...formData, email: text });
    setIsEmailInputLoading(true);
    setIsEmailValid(false);
    dispatch(checkEmail(formData.email));
    if (errorMessages.length === 0) {
      setIsEmailValid(true);
    }
    setIsEmailInputLoading(false);
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
