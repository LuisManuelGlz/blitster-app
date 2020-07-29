import { ThunkDispatch } from 'redux-thunk';
import { SET_IS_FETCHING_POSTS, SET_POSTS, PostActionTypes } from './types';
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
