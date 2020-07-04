import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Post detail"
        onPress={() => navigation.navigate('PostDetail')}
      />
    </View>
  );
};

export default HomeScreen;
