import { ThunkDispatch } from 'redux-thunk';
import {
  SET_IS_FETCHING_POSTS,
  SET_POSTS,
  SET_CURRENT_USER_POSTS,
  PostActionTypes,
  SET_IS_ADDING_POST,
  LIKE_POST_SUCCESS,
  CLEAR_POSTS,
} from './types';
import { Post } from '../../../interfaces/post';

export const setIsFetchingPosts = (isFetchingPosts: boolean) => (
  dispatch: ThunkDispatch<{}, {}, PostActionTypes>,
) => {
  dispatch({
    type: SET_IS_FETCHING_POSTS,
    isFetchingPosts,
  });
};

export const setPosts = (posts: Post[]) => (
  dispatch: ThunkDispatch<{}, {}, PostActionTypes>,
) => {
  dispatch({
    type: SET_POSTS,
    posts,
  });
};

export const setCurrentUserPosts = (posts: Post[]) => (
  dispatch: ThunkDispatch<{}, {}, PostActionTypes>,
) => {
  dispatch({
    type: SET_CURRENT_USER_POSTS,
    posts,
  });
};

export const setIsAddingPost = (isAddingPost: boolean) => (
  dispatch: ThunkDispatch<{}, {}, PostActionTypes>,
) => {
  dispatch({
    type: SET_IS_ADDING_POST,
    isAddingPost,
  });
};

export const likePostSuccess = (post: Post) => (
  dispatch: ThunkDispatch<{}, {}, PostActionTypes>,
) => {
  dispatch({
    type: LIKE_POST_SUCCESS,
    post,
  });
};

export const clearPosts = () => (
  dispatch: ThunkDispatch<{}, {}, PostActionTypes>,
) => {
  dispatch({
    type: CLEAR_POSTS,
  });
};
