import { ThunkDispatch } from 'redux-thunk';
import {
  SET_DECODED_TOKEN,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTH_ERROR,
  AuthActionTypes,
} from './types';
import { Auth, DecodedToken } from '../../../interfaces/auth';

export const setDecodedToken = (decodedToken: DecodedToken) => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: SET_DECODED_TOKEN, decodedToken });
};

export const signupSuccess = (auth: Auth) => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: SIGNUP_SUCCESS, auth });
};

export const signupFail = () => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: SIGNUP_FAIL });
};

export const loginSuccess = (auth: Auth) => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: LOGIN_SUCCESS, auth });
};

export const loginFail = () => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: LOGIN_FAIL });
};

export const refreshTokenSuccess = (refreshToken: string) => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: REFRESH_TOKEN_SUCCESS, refreshToken });
};

export const refreshTokenFail = () => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: REFRESH_TOKEN_FAIL });
};

export const logoutSuccess = () => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const logoutFail = () => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: LOGOUT_FAIL });
};

export const authError = () => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: AUTH_ERROR });
};
