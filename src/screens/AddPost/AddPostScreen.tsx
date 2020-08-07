import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Button, Textarea, Text } from '../../components';
import { validation, post } from '../../redux/ducks';
import styles from './AddPostScreen.styles';
import { useTypedSelector } from '../../redux';
import { ErrorMessage } from '../../interfaces/validation';
import { PostForCreate } from 'src/interfaces/post';

const AddPostScreen = () => {
  const isAddingPost = useTypedSelector((state) => state.post.isAddingPost);
  const errorMessages = useTypedSelector(
    (state) => state.validation.errorMessages,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  // const [formData, setFormData] = useState({ content: '' });

  // const handleContentChange = (text: string) => {
  //   setFormData({ ...formData, content: text });
  // };

  // const handleAddPostPress = () => {
  //   dispatch(post.operations.addPost(formData, navigation));
  // };

  useEffect(() => {
    return () => {
      dispatch(validation.actions.clearErrorMessages());
    };
  }, []);

  const onSubmit = (data: PostForCreate) => {
    dispatch(post.operations.addPost(data, navigation));
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Textarea
            style={styles.textarea}
            onChangeText={(text) => onChange(text)}
            placeholder="Content"
            value={value}
          />
        )}
        name="content"
        rules={{ required: true }}
        defaultValue=""
      />

      {errors.content && (
        <Text.H3>Ooops! Don't forget to write something...</Text.H3>
      )}

      {console.log(errors)}

      {isAddingPost ? (
        <ActivityIndicator color={'purple'} size={'large'} />
      ) : (
        <Button.Primary title="Submit" onPress={handleSubmit(onSubmit)} />
      )}

      {/* <Textarea
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
      )} */}
    </View>
  );
};

export default AddPostScreen;
