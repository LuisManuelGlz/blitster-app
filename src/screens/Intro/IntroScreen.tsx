import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './IntroScreen.styles';
import { Button, Text } from '../../components';
import ImagesAssets from '../../constants/ImagesAssets';

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={ImagesAssets.logos.react} />
      <Text.H1 style={styles.title}>Welcome to Blitster</Text.H1>
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
        onPress={() => navigation.navigate('SignupStepOne')}
      />
    </View>
  );
};

export default IntroScreen;
