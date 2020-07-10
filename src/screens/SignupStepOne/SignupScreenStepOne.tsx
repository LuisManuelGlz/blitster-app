import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepOneScreen.styles';

const SignupStepOneScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleFirstNameChange = (text: string) => {
    setFormData({ ...formData, firstName: text });
  };

  const handleLastNameChange = (text: string) => {
    setFormData({ ...formData, lastName: text });
  };

  const handleEmailChange = (text: string) => {
    setFormData({ ...formData, email: text });
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Create your account</Text.H1>

      <Input
        placeholder="Fisrt name"
        onChangeText={(text) => handleFirstNameChange(text)}
        value={formData.firstName}
      />
      <Input
        placeholder="Last name"
        onChangeText={(text) => handleLastNameChange(text)}
        value={formData.lastName}
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => handleEmailChange(text)}
        value={formData.email}
      />

      <Button.Simple
        style={styles.button}
        title="Next"
        onPress={() => navigation.navigate('SignupStepTwo')}
      />
    </View>
  );
};

export default SignupStepOneScreen;
