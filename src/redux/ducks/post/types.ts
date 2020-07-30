import { Post } from '../../../interfaces/post';

export const SET_IS_FETCHING_POSTS = 'Blitster/post/SET_IS_FETCHING_POSTS';
export const SET_POSTS = 'Blitster/post/SET_POSTS';
export const SET_IS_ADDING_POST = 'Blitster/post/SET_IS_ADDING_POST';

interface SetIsFetchingPosts {
  type: typeof SET_IS_FETCHING_POSTS;
  isFetchingPosts: boolean;
}

interface SetPosts {
  type: typeof SET_POSTS;
  posts: Post[];
}

interface SetIsAddingPost {
  type: typeof SET_IS_ADDING_POST;
  isAddingPost: boolean;
}

export type PostActionTypes = SetIsFetchingPosts | SetPosts | SetIsAddingPost;
