import { SET_IS_FETCHING_POSTS, SET_POSTS, PostActionTypes } from './types';
import { Post } from '../../../interfaces/post';

interface ValidationState {
  isFetchingPosts: boolean | null;
  posts: Post[] | null;
}

const initialState: ValidationState = {
  isFetchingPosts: null,
  posts: null,
};

export default (state = initialState, action: PostActionTypes) => {
  switch (action.type) {
    case SET_IS_FETCHING_POSTS:
      return {
        ...state,
        isFetchingPosts: action.isFetchingPosts,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};
