import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  AUTH_ERROR,
  REFRESHING_TOKEN,
} from './actionTypes';
import { setAlert } from './alert';
import {
  setErrorMessage,
  removeErrorMessages,
  clearErrorMessages,
  setIsEmailValid,
  setIsEmailInputLoading,
  setIsUsernameInputLoading,
  setIsLoggingIn,
  setIsSigningUp,
} from './validation';
import authClient from '../../api/authClient';
import { UserForLogin, UserForSignup } from '../../interfaces/user';
import { Decoded } from '../../interfaces/auth';
import { ErrorMessage } from '../../interfaces/errorMessage';

export const checkEmail = (email: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsEmailValid(false));
  dispatch(setIsEmailInputLoading(true));

  try {
    await authClient.post('check-email', {
      email,
    });

    dispatch(setIsEmailValid(true));
    dispatch(removeErrorMessages('email'));
  } catch (error) {
    const { errors } = error.response.data;

    dispatch(setIsEmailValid(false));
    dispatch(removeErrorMessages('email'));

    errors?.map((err: ErrorMessage) => {
      dispatch(setErrorMessage(err));
    });
  } finally {
    dispatch(setIsEmailInputLoading(false));
  }
};

export const checkUsername = (username: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsUsernameInputLoading(true));

  try {
    await authClient.post('check-username', { username });
    dispatch(removeErrorMessages('username'));
  } catch (error) {
    const { errors } = error.response.data;

    dispatch(removeErrorMessages('username'));

    errors?.map((err: ErrorMessage) => {
      dispatch(setErrorMessage(err));
    });
  } finally {
    dispatch(setIsUsernameInputLoading(false));
  }
};

export const login = (user: UserForLogin) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsLoggingIn(true));
  dispatch(clearErrorMessages());

  try {
    const res = await authClient.post('login', user);
    const decoded = jwtDecode<Decoded>(res.data.accessToken);

    const decodedToken = {
      userId: decoded._id,
      username: decoded.username,
      role: decoded.role,
      isVerified: decoded.isVerified,
    };

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { ...res.data, ...decodedToken },
    });
  } catch (error) {
    const { status, data } = error.response;
    if (status === 404 || status === 500) {
      dispatch(setAlert(data.message, 'error'));
    } else {
      data.errors?.map((err: ErrorMessage) => {
        dispatch(setErrorMessage(err));
      });
      dispatch({ type: LOGIN_FAIL });
    }
  } finally {
    dispatch(setIsLoggingIn(false));
  }
};

export const signup = (user: UserForSignup) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsSigningUp(true));
  dispatch(clearErrorMessages());

  try {
    const res = await authClient.post('signup', user);
    const decoded = jwtDecode<Decoded>(res.data.accessToken);

    const decodedToken = {
      userId: decoded._id,
      username: decoded.username,
      role: decoded.role,
      isVerified: decoded.isVerified,
    };

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: { ...res.data, ...decodedToken },
    });
  } catch (error) {
    const { status, data } = error.response;

    if (status === 500) {
      dispatch(setAlert(data.message, 'error'));
    } else {
      data.errors?.map((err: ErrorMessage) => {
        dispatch(setErrorMessage(err));
      });
      dispatch({ type: SIGNUP_FAIL });
    }
  } finally {
    dispatch(setIsSigningUp(false));
  }
};

export const logout = (refreshToken: string | null) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  try {
    await authClient.post('revoke', { refreshToken });
    dispatch({ type: LOGOUT });
  } catch (error) {
    const { status, data } = error.response;
    dispatch({ type: AUTH_ERROR });

    if (status === 500 || status === 401) {
      dispatch(setAlert(data.message, 'error'));
    }
  }
};

export const authRefreshToken = ({
  userId,
  refreshToken,
}: {
  userId: string;
  refreshToken: string;
}) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: REFRESHING_TOKEN, payload: true });

  try {
    const res = await authClient.post('refreshToken', {
      userId,
      refreshToken,
    });
    dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: res.data });
  } catch (error) {
    const { data } = error.response;
    dispatch({ type: REFRESH_TOKEN_FAIL });
    dispatch(setAlert(data.message, 'error'));
  } finally {
    dispatch({ type: REFRESHING_TOKEN, payload: false });
  }
};
