import { Auth, DecodedToken } from '../../../interfaces/auth';

export const SET_AUTH = 'Blitster/auth/SET_AUTH';
export const SET_DECODED_TOKEN = 'Blitster/auth/SET_DECODED_TOKEN';
// export const SIGNUP_SUCCESS = 'Blitster/auth/SIGNUP_SUCCESS';
// export const LOGIN_SUCCESS = 'Blitster/auth/LOGIN_SUCCESS';
// export const USER_LOADED = 'Blitster/auth/USER_LOADED';
export const REFRESH_TOKEN_SUCCESS = 'Blitster/auth/REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAIL = 'Blitster/auth/REFRESH_TOKEN_FAIL';
export const SET_REFRESHING_TOKEN = 'Blitster/auth/SET_REFRESHING_TOKEN';
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

interface RefreshTokenSuccess {
  type: typeof REFRESH_TOKEN_SUCCESS;
}

interface RefreshTokenFail {
  type: typeof REFRESH_TOKEN_FAIL;
}

interface SetRefreshingToken {
  type: typeof SET_REFRESHING_TOKEN;
  refreshingToken: Promise<void> | null;
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
  | RefreshTokenSuccess
  | RefreshTokenFail
  | SetRefreshToken
  | SetRefreshingToken
  | Logout
  | AuthError;
