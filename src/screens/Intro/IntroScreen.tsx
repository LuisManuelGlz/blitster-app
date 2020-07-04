import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to Blitster</Text>
      <Button title="Log in" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default IntroScreen;
