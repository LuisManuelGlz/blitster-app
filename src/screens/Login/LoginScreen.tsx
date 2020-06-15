import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogInScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This is my Login screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default LogInScreen;
