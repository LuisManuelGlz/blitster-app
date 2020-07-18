import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from './actionTypes';
import { setAlert } from './alert';
import {
  setErrorMessage,
  removeErrorMessages,
  clearErrorMessages,
} from './errorMessage';
import authClient from '../../api/authClient';
import { UserForLogin, UserForSignup } from '../../interfaces/user';
import { ErrorMessage } from '../../interfaces/errorMessage';

export const checkEmail = (email: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(removeErrorMessages('email'));
  try {
    await authClient.post('check-email', { email });
  } catch (error) {
    const { errors } = error.response.data;
    errors?.map((err: ErrorMessage) => {
      dispatch(setErrorMessage(err));
    });
  }
};

export const checkUsername = (username: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(removeErrorMessages('username'));
  try {
    await authClient.post('check-username', { username });
  } catch (error) {
    const { errors } = error.response.data;
    errors?.map((err: ErrorMessage) => {
      dispatch(setErrorMessage(err));
    });
  }
};

export const login = (user: UserForLogin) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(clearErrorMessages());

  try {
    const res = await authClient.post('login', user);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
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
  }
};

export const signup = (user: UserForSignup) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(clearErrorMessages());

  try {
    const res = await authClient.post('signup', user);
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
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
  }
};
