import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Form, Textarea } from '../../components';
import { post } from '../../redux/ducks';
import styles from './AddPostScreen.styles';
import { useTypedSelector } from '../../redux';
import { PostForCreate } from 'src/interfaces/post';
import { addPostValidation } from './validations';

type FormData = {
  content: string;
};

const AddPostScreen = () => {
  const isAddingPost = useTypedSelector((state) => state.post.isAddingPost);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue, errors } = useForm<FormData>();

  const onSubmit = (data: PostForCreate) => {
    dispatch(post.operations.addPost(data, navigation));
  };

  return (
    <View style={styles.container}>
      <Form {...{ control, setValue, errors, validation: addPostValidation }}>
        <Textarea
          style={styles.textarea}
          name="content"
          placeholder="Content"
        />
        {isAddingPost ? (
          <ActivityIndicator color={'purple'} size={'large'} />
        ) : (
          <Button.Primary title="Submit" onPress={handleSubmit(onSubmit)} />
        )}
      </Form>
    </View>
  );
};

export default AddPostScreen;
