import { Post } from '../../../interfaces/post';

export const SET_IS_FETCHING_POSTS = 'Blitster/post/SET_IS_FETCHING_POSTS';
export const SET_POSTS = 'Blitster/post/SET_POSTS';

interface SetIsFetchingPosts {
  type: typeof SET_IS_FETCHING_POSTS;
  isFetchingPosts: boolean;
}

interface SetPosts {
  type: typeof SET_POSTS;
  posts: Post[];
}

export type PostActionTypes = SetIsFetchingPosts | SetPosts;
