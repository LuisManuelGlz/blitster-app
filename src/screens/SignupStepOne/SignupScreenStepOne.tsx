import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepOneScreen.styles';
import authClient from '../../api/authClient';

const SignupStepOneScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [isEmailValid, setIsEmailValid] = useState(false);

  const [isEmailInputLoading, setIsEmailInputLoading] = useState(false);

  const handleFullNameChange = (text: string) => {
    setFormData({ ...formData, fullName: text });
  };

  const handleEmailChange = async (text: string) => {
    setFormData({ ...formData, email: text });
    setIsEmailInputLoading(true);

    try {
      const email = formData.email;
      await authClient.post('check-email', { email });
      setIsEmailValid(true);
    } catch (error) {
      setIsEmailValid(false);
    } finally {
      setIsEmailInputLoading(false);
    }
  };

  const handleNextPress = () => {
    navigation.navigate('SignupStepTwo');
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Create your account</Text.H1>

      <Input
        placeholder="Full name"
        onChangeText={(text) => handleFullNameChange(text)}
        value={formData.fullName}
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => handleEmailChange(text)}
        value={formData.email}
      />
      {isEmailInputLoading && <Text.H3>Loading</Text.H3>}

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
