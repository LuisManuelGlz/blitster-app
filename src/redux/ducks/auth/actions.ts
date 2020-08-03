import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ThunkDispatch } from 'redux-thunk';
import {
  SET_DECODED_TOKEN,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  AuthActionTypes,
} from './types';
import { setAlert } from '../alert/actions';
import { clearPosts } from '../post/actions';
import authClient from '../../../api/authClient';
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

export const logout = (refreshToken: string | null) => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  try {
    await authClient.post('auth/revoke', { refreshToken });
    dispatch({ type: LOGOUT });
  } catch (error) {
    const { status, data } = error.response;
    dispatch(authError());

    if (status === 500 || status === 401) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    }
  } finally {
    dispatch(clearPosts());
  }
};

export const authError = () => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: AUTH_ERROR });
};
