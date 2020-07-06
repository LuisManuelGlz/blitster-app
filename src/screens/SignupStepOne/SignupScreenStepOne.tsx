import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from '../../components';
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
      <Text>Create your account</Text>

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

      <Button
        style={styles.button}
        title="Next"
        onPress={() => navigation.navigate('SignupStepTwo')}
      />
    </View>
  );
};

export default SignupStepOneScreen;
