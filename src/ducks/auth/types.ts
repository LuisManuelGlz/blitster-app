import { Auth, DecodedToken } from '../../interfaces/auth';

export const SET_AUTH = 'Blitster/auth/SET_AUTH';
export const SET_DECODED_TOKEN = 'Blitster/auth/SET_DECODED_TOKEN';
// export const SIGNUP_SUCCESS = 'Blitster/auth/SIGNUP_SUCCESS';
// export const LOGIN_SUCCESS = 'Blitster/auth/LOGIN_SUCCESS';
// export const USER_LOADED = 'Blitster/auth/USER_LOADED';
export const SET_IS_REFRESHING_TOKEN = 'Blitster/auth/SET_IS_REFRESHING_TOKEN';
export const SET_REFRESH_TOKEN = 'Blitster/auth/SET_REFRESH_TOKEN';
export const LOGOUT = 'Blitster/auth/LOGOUT';
export const AUTH_ERROR = 'Blitster/auth/AUTH_ERROR';

interface SetAuth {
  type: typeof SET_AUTH;
  auth: Auth;
}

interface SetDecodedToken {
  type: typeof SET_DECODED_TOKEN;
  decodedToken: DecodedToken;
}

interface SetIsRefreshingToken {
  type: typeof SET_IS_REFRESHING_TOKEN;
  isRefreshingToken: boolean;
}

interface SetRefreshToken {
  type: typeof SET_REFRESH_TOKEN;
  refreshToken: string;
}

interface Logout {
  type: typeof LOGOUT;
}

interface AuthError {
  type: typeof AUTH_ERROR;
}

export type AuthActionTypes =
  | SetAuth
  | SetDecodedToken
  | SetRefreshToken
  | SetIsRefreshingToken
  | Logout
  | AuthError;
