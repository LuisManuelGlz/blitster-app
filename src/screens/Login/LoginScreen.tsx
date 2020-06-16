import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogInScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, username: text });
  };

  const handlePasswordChange = (text: string) => {
    setFormData({ ...formData, password: text });
  };

  const handleLoginPress = () => {
    console.log(formData);
  };

  return (
    <View>
      <Text>This is my Login screen</Text>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => handleUsernameChange(text)}
        defaultValue={formData.username}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => handlePasswordChange(text)}
        defaultValue={formData.password}
      />
      <Button title="Log in" onPress={() => handleLoginPress()} />
      <Button
        title="I need an accound"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default LogInScreen;
