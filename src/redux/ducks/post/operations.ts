import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NavigationProp } from '@react-navigation/native';
import { loggedInClient } from '../../../api';
import {
  setIsFetchingPosts,
  setPosts,
  setCurrentUserPosts,
  setIsAddingPost,
  likePostSuccess,
} from './actions';
import { setAlert } from '../alert/actions';
import { setErrorMessage, clearErrorMessages } from '../validation/actions';
import { ErrorMessage } from '../../../interfaces/validation';
import { PostForCreate } from '../../../interfaces/post';

export const fetchPosts = async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsFetchingPosts(true));

  try {
    const { data } = await loggedInClient.get('posts');
    dispatch(setPosts(data));
  } catch (error) {
    const { status, data } = error.response;
    if (status === 404 || status === 500) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    }
  } finally {
    dispatch(setIsFetchingPosts(false));
  }
};

export const fetchCurrentUserPosts = async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
  userId: string,
) => {
  dispatch(setIsFetchingPosts(true));

  try {
    const { data } = await loggedInClient.get(`posts/of/${userId}`);
    dispatch(setCurrentUserPosts(data));
  } catch (error) {
    const { status, data } = error.response;
    if (status === 404 || status === 500) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    }
  } finally {
    dispatch(setIsFetchingPosts(false));
  }
};

export const addPost = (
  post: PostForCreate,
  navigation: NavigationProp<any>,
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch(setIsAddingPost(true));
  dispatch(clearErrorMessages());

  try {
    const formData = new FormData();
    formData.append('content', post.content);
    await loggedInClient.post('posts', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    fetchPosts(dispatch);
    navigation.goBack();
  } catch (error) {
    const { status, data } = error.response;
    if (status === 404 || status === 500) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    } else {
      data.errors?.map((err: ErrorMessage) => {
        dispatch(setErrorMessage(err));
      });
    }
  } finally {
    dispatch(setIsAddingPost(false));
  }
};

export const likePost = (postId: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  try {
    const { data } = await loggedInClient.post(`posts/like/${postId}`);
    dispatch(likePostSuccess(data));
  } catch (error) {
    const { status, data } = error.response;
    if (status === 404 || status === 500) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    } else {
      data.errors?.map((err: ErrorMessage) => {
        dispatch(setErrorMessage(err));
      });
    }
  }
};
