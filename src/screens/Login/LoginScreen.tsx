import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { login } from '../../redux/actions/auth';
import { UserForLogin } from '../../interfaces/user';
import { Input, Button, Text } from '../../components';
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
      <Text.H1 style={styles.title}>Welcome Back!</Text.H1>

      <Input
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={(text) => handleUsernameChange(text)}
        iconLeft={<Ionicons name="person" size={24} color={'gray'} />}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => handlePasswordChange(text)}
        iconLeft={<Ionicons name="lock-closed" size={24} color={'gray'} />}
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

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(LogInScreen);
