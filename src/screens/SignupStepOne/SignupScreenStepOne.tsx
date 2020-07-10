import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepOneScreen.styles';

const SignupStepOneScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, fullName: text });
  };

  const handleEmailChange = (text: string) => {
    setFormData({ ...formData, email: text });
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Create your account</Text.H1>

      <Input
        placeholder="Full name"
        onChangeText={(text) => handleUsernameChange(text)}
        value={formData.fullName}
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
