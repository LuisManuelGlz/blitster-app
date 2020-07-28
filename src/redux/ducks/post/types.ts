export const SET_IS_FETCHING_POSTS = 'Blitster/post/SET_IS_FETCHING_POSTS';

interface SetIsFetchingPosts {
  type: typeof SET_IS_FETCHING_POSTS;
  isFetchingPosts: boolean;
}

export type PostActionTypes = SetIsFetchingPosts;
