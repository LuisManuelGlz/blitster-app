import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ThunkDispatch } from 'redux-thunk';
import {
  SET_AUTH,
  SET_DECODED_TOKEN,
  SET_REFRESH_TOKEN,
  LOGOUT,
  AUTH_ERROR,
  AuthActionTypes,
} from './types';
import { setAlert } from '../alert/actions';
import authClient from '../../../api/authClient';
import { Auth, DecodedToken } from '../../../interfaces/auth';

export const setAuth = (auth: Auth) => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: SET_AUTH, auth });
};

export const setDecodedToken = (decodedToken: DecodedToken) => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: SET_DECODED_TOKEN, decodedToken });
};

export const setRefreshToken = (refreshToken: string) => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: SET_REFRESH_TOKEN, refreshToken });
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
  }
};

export const authError = () => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch({ type: AUTH_ERROR });
};
