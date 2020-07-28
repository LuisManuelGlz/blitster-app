import { ThunkDispatch } from 'redux-thunk';
import { SET_IS_FETCHING_POSTS, PostActionTypes } from './types';

export const setIsFetchingPosts = (isFetchingPosts: boolean) => (
  dispatch: ThunkDispatch<{}, {}, PostActionTypes>,
) => {
  dispatch({
    type: SET_IS_FETCHING_POSTS,
    isFetchingPosts,
  });
};
