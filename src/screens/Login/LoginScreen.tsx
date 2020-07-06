import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';
import { UserForLogin } from '../../interfaces/user';
import { Input, Button } from '../../components';
import styles from './Login.styles';

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
    <View style={styles.container}>
      <Text>Welcome Back!</Text>

      <Input
        placeholder="Username"
        value={formData.username}
        onChangeText={(text) => handleUsernameChange(text)}
        iconName="person"
      />
      <Input
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => handlePasswordChange(text)}
        iconName="lock-closed"
        secureTextEntry={true}
      />

      <Button.Primary
        style={styles.button}
        block
        title="Log in"
        onPress={() => handleLoginPress()}
      />
    </View>
  );
};

export default connect(null, { login })(LogInScreen);
