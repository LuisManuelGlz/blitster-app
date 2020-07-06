import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import authClient from '../../api/authClient';
import Input from '../../components/Input';
import styles from './SignupScreen.styles';

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, username: text });
  };

  const handleEmailChange = (text: string) => {
    setFormData({ ...formData, email: text });
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
      <Text>Create your account</Text>

      <Input
        placeholder="Username"
        onChangeText={(text) => handleUsernameChange(text)}
        value={formData.username}
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => handleEmailChange(text)}
        value={formData.email}
      />
      <Input
        placeholder="Password"
        onChangeText={(text) => handlePassword1Change(text)}
        value={formData.password1}
      />
      <Input
        placeholder="Confirm password"
        onChangeText={(text) => handlePassword2Change(text)}
        value={formData.password2}
      />

      <Button title="Sign up" onPress={() => handleSignupPress()} />
    </View>
  );
};

export default SignUpScreen;
