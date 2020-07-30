import {
  SET_IS_FETCHING_POSTS,
  SET_POSTS,
  PostActionTypes,
  SET_IS_ADDING_POST,
} from './types';
import { Post } from '../../../interfaces/post';

interface ValidationState {
  isFetchingPosts: boolean | null;
  posts: Post[] | null;
  isAddingPost: boolean | null;
}

const initialState: ValidationState = {
  isFetchingPosts: null,
  posts: null,
  isAddingPost: null,
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
    case SET_IS_ADDING_POST:
      return {
        ...state,
        isAddingPost: action.isAddingPost,
      };
    default:
      return state;
  }
};
