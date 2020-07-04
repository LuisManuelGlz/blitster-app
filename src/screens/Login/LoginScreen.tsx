import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';
import { UserForLogin } from '../../interfaces/user';

interface Props {
  login: (user: UserForLogin) => void;
}

const LogInScreen = ({ login }: Props) => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleUsernameChange = (text: string) => {
    setFormData({ ...formData, username: text });
  };

  const handlePasswordChange = (text: string) => {
    setFormData({ ...formData, password: text });
  };

  const handleLoginPress = () => {
    login(formData);
  };

  return (
    <View>
      <Text>Welcome Back!</Text>

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
    </View>
  );
};

export default connect(null, { login })(LogInScreen);
