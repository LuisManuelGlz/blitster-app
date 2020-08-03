import {
  SET_IS_FETCHING_POSTS,
  SET_POSTS,
  SET_IS_ADDING_POST,
  LIKE_POST_SUCCESS,
  PostActionTypes,
} from './types';
import { Post } from '../../../interfaces/post';

interface PostState {
  isFetchingPosts: boolean | null;
  posts: Post[];
  isAddingPost: boolean | null;
}

const initialState: PostState = {
  isFetchingPosts: null,
  posts: [],
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
    case LIKE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.post._id ? action.post : post,
        ),
      };
    default:
      return state;
  }
};
