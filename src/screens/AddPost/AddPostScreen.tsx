import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Button, Textarea } from '../../components';
import { validation, post } from '../../redux/ducks';
import styles from './AddPostScreen.styles';
import { useTypedSelector } from '../../redux';
import { ErrorMessage } from '../../interfaces/validation';

const AddPostScreen = () => {
  const isAddingPost = useTypedSelector((state) => state.post.isAddingPost);
  const errorMessages = useTypedSelector(
    (state) => state.validation.errorMessages,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ content: '' });

  const handleContentChange = (text: string) => {
    setFormData({ ...formData, content: text });
  };

  const handleAddPostPress = () => {
    dispatch(post.operations.addPost(formData, navigation));
  };

  useEffect(() => {
    return () => {
      dispatch(validation.actions.clearErrorMessages());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Textarea
        style={styles.textarea}
        onChangeText={(text) => handleContentChange(text)}
        placeholder="Content"
        errorMessages={errorMessages.filter(
          (err: ErrorMessage) => err.param === 'content',
        )}
      />
      {isAddingPost ? (
        <ActivityIndicator color={'purple'} size={'large'} />
      ) : (
        <Button.Primary
          block
          title="Add post"
          onPress={() => handleAddPostPress()}
        />
      )}
    </View>
  );
};

export default AddPostScreen;
