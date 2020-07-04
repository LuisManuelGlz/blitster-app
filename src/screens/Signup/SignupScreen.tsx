import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import authClient from '../../api/authClient';

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
    <View>
      <Text>Create your account</Text>

      <TextInput
        placeholder="Username"
        onChangeText={(text) => handleUsernameChange(text)}
        defaultValue={formData.username}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => handleEmailChange(text)}
        defaultValue={formData.email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => handlePassword1Change(text)}
        defaultValue={formData.password1}
      />
      <TextInput
        placeholder="Confirm password"
        onChangeText={(text) => handlePassword2Change(text)}
        defaultValue={formData.password2}
      />

      <Button title="Sign up" onPress={() => handleSignupPress()} />
    </View>
  );
};

export default SignUpScreen;
