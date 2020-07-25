import React from 'react';
import { useDispatch } from 'react-redux';
import { authClient } from '../../api';
import { View, Button } from 'react-native';
import { clearAlerts } from '../../redux/ducks/alert/actions';
import { invalidToken } from '../../redux/ducks/auth/actions';

const PostDetailScreen = () => {
  const dispatch = useDispatch();

  const handlePress = async () => {
    try {
      const posts = await authClient.get('posts');
      console.log(`\n\n\n POSTS: ${JSON.stringify(posts.data)} \n\n\n`);
    } catch (error) {
      console.log(`\n\n\n ERROR: ${error} \n\n\n`);
    }
  };

  const handlePress2 = async () => {
    dispatch(clearAlerts());
    dispatch(invalidToken());
  };

  return (
    <View>
      <Button title="Test" onPress={() => handlePress()} />
      <Button title="Test 2" onPress={() => handlePress2()} />
    </View>
  );
};

export default PostDetailScreen;
