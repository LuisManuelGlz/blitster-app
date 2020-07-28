import { SET_IS_FETCHING_POSTS, PostActionTypes } from './types';

interface ValidationState {
  isFetchingPosts: boolean | null;
}

const initialState: ValidationState = {
  isFetchingPosts: null,
};

export default (state = initialState, action: PostActionTypes) => {
  switch (action.type) {
    case SET_IS_FETCHING_POSTS:
      return {
        ...state,
        isFetchingPosts: action.isFetchingPosts,
      };
    default:
      return state;
  }
};
