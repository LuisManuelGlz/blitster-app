import { Auth, DecodedToken } from '../../../interfaces/auth';

export const SIGNUP_SUCCESS = 'Blitster/auth/SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'Blitster/auth/SIGNUP_FAIL';
export const LOGIN_SUCCESS = 'Blitster/auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'Blitster/auth/LOGIN_FAIL';
export const SET_DECODED_TOKEN = 'Blitster/auth/SET_DECODED_TOKEN';
// export const USER_LOADED = 'Blitster/auth/USER_LOADED';
export const REFRESH_TOKEN_SUCCESS = 'Blitster/auth/REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAIL = 'Blitster/auth/REFRESH_TOKEN_FAIL';
export const LOGOUT_SUCCESS = 'Blitster/auth/LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'Blitster/auth/LOGOUT_FAIL';
export const AUTH_ERROR = 'Blitster/auth/AUTH_ERROR';

interface SetDecodedToken {
  type: typeof SET_DECODED_TOKEN;
  decodedToken: DecodedToken;
}

interface SignupSuccess {
  type: typeof SIGNUP_SUCCESS;
  auth: Auth;
}

interface SignupFail {
  type: typeof SIGNUP_FAIL;
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  auth: Auth;
}

interface LoginFail {
  type: typeof LOGIN_FAIL;
}

interface RefreshTokenSuccess {
  type: typeof REFRESH_TOKEN_SUCCESS;
  refreshToken: string;
}

interface RefreshTokenFail {
  type: typeof REFRESH_TOKEN_FAIL;
}

interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}

interface LogoutFail {
  type: typeof LOGOUT_FAIL;
}

interface AuthError {
  type: typeof AUTH_ERROR;
}

export type AuthActionTypes =
  | SetDecodedToken
  | SignupSuccess
  | SignupFail
  | LoginSuccess
  | LoginFail
  | RefreshTokenSuccess
  | RefreshTokenFail
  | LogoutSuccess
  | LogoutFail
  | AuthError;
