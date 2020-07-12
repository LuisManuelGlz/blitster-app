import React, { useState } from 'react';
import { View } from 'react-native';
import authClient from '../../api/authClient';
import { Input, Button, Text } from '../../components';
import styles from './SignupStepTwoScreen.styles';

const SignupStepTwoScreen = () => {
  const [formData, setFormData] = useState({
    username: '',
    password1: '',
    password2: '',
  });

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, username: text });
  };

  const handlePassword1Change = (text: string) => {
    setFormData({ ...formData, password1: text });
  };

  const handlePassword2Change = (text: string) => {
    setFormData({ ...formData, password2: text });
  };

  const handleSignupPress = async () => {
    try {
      const res = await authClient.post('signup', formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text.H1 style={styles.title}>Create your account</Text.H1>

      <Input
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => handleUsernameChange(text)}
        value={formData.username}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handlePassword1Change(text)}
        value={formData.password1}
      />
      <Input
        style={styles.input}
        placeholder="Confirm password"
        onChangeText={(text) => handlePassword2Change(text)}
        value={formData.password2}
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
