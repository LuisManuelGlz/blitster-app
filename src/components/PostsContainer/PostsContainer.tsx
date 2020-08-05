import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './PostsContainer.styles';
import Post from '../Post';
import { Post as IPost } from '../../interfaces/post';
import Text from '../Text';

interface Props {
  posts: IPost[] | null;
}

const PostsContainer = (props: Props) => {
  const navigation = useNavigation();

  const handlePostItemPress = (post: IPost) => {
    navigation.navigate('PostDetail', { post });
  };

  const posts =
    props.posts && props.posts.length > 0 ? (
      props.posts.map((post) => (
        <Post.Item
          style={styles.post}
          key={post._id}
          post={post}
          onPress={() => handlePostItemPress(post)}
        />
      ))
    ) : (
      <Text.H2 style={styles.noPostsMessage}>No posts yet.</Text.H2>
    );

  return (
    <ScrollView style={styles.container}>
      {posts}
      <Text.H2 style={styles.endScroll}>🦆</Text.H2>
    </ScrollView>
  );
};

export default PostsContainer;
