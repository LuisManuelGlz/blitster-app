import { Post } from '../../../interfaces/post';

export const SET_IS_FETCHING_POSTS = 'Blitster/post/SET_IS_FETCHING_POSTS';
export const SET_POSTS = 'Blitster/post/SET_POSTS';
export const SET_CURRENT_USER_POSTS = 'Blitster/post/SET_CURRENT_USER_POSTS';
export const SET_IS_ADDING_POST = 'Blitster/post/SET_IS_ADDING_POST';
export const LIKE_POST_SUCCESS = 'Blitster/post/LIKE_POST_SUCCESS';
export const CLEAR_POSTS = 'Blitster/post/CLEAR_POSTS';

interface SetIsFetchingPosts {
  type: typeof SET_IS_FETCHING_POSTS;
  isFetchingPosts: boolean;
}

interface SetPosts {
  type: typeof SET_POSTS;
  posts: Post[];
}

interface SetCurrentUserPosts {
  type: typeof SET_CURRENT_USER_POSTS;
  posts: Post[];
}

interface SetIsAddingPost {
  type: typeof SET_IS_ADDING_POST;
  isAddingPost: boolean;
}

interface LikePostSuccess {
  type: typeof LIKE_POST_SUCCESS;
  post: Post;
}

interface ClearPosts {
  type: typeof CLEAR_POSTS;
}

export type PostActionTypes =
  | SetIsFetchingPosts
  | SetCurrentUserPosts
  | SetPosts
  | SetIsAddingPost
  | LikePostSuccess
  | ClearPosts;
