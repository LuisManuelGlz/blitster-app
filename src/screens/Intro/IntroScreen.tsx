import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Intro.styles';
import Button from '../../components/Button';

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Welcome to Blitster</Text>
      <Button.Primary
        style={styles.button}
        title="Log in"
        block
        onPress={() => navigation.navigate('Login')}
      />
      <Button.Secondary
        style={styles.button}
        title="Sign up"
        block
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default IntroScreen;
